package org.example;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class TrafficFunnelConversionAnalysis {

    public static void main(String[] args) {

        SparkSession spark = SparkSession.builder().appName("TrafficFunnelConversionAnalysis")
                .master("local[*]")
                .enableHiveSupport()
                .getOrCreate();

        Dataset<Row> ds = spark.sql("WITH t AS ( " +
                "  SELECT " +
                "    SUM(CASE WHEN type = 'pv' THEN 1 ELSE 0 END) AS pv_cnt, " +
                "    SUM(CASE WHEN type = 'cart' THEN 1 ELSE 0 END) AS cart_cnt, " +
                "    SUM(CASE WHEN type = 'buy' THEN 1 ELSE 0 END) AS buy_cnt " +
                "  FROM  " +
                "    dwd.dwd_behavior_info " +
                ") " +
                " " +
                "SELECT  '浏览数' as name,pv_cnt as value,100.00 as rate FROM t " +
                "UNION ALL " +
                "SELECT  '加购数' as name,cart_cnt as value,CAST((cart_cnt/pv_cnt)*100 AS DECIMAL(10,2)) as rate FROM t " +
                "UNION ALL " +
                "SELECT  '购买数' as name,buy_cnt as value,CAST((buy_cnt/pv_cnt)*100 AS DECIMAL(10,2)) as rate FROM t");

        ds.write()
                .format("jdbc")
                .option("url","jdbc:mysql://hadoop:3306/ana_behavior_db")
                .option("dbtable","traffic_funnel_conversion_analysis")
                .option("user","root")
                .option("password","123456")
                .option("driver","com.mysql.cj.jdbc.Driver")
                .mode("overwrite")
                .save();

        spark.close();
    }
}
