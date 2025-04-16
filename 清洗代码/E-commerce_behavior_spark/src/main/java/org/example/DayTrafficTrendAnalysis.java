package org.example;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class DayTrafficTrendAnalysis {

    public static void main(String[] args) {

        SparkSession spark = SparkSession.builder().appName("DayTrafficTrendAnalysis")
                .master("local[*]")
                .enableHiveSupport()
                .getOrCreate();

        Dataset<Row> ds = spark.sql("SELECT " +
                "  day, " +
                "  count(distinct user_id) as user_cnt, " +
                "  sum(case when type = 'pv' then 1 else 0 end) as pv_cnt, " +
                "  sum(case when type = 'fav' then 1 else 0 end) as fav_cnt, " +
                "  sum(case when type = 'cart' then 1 else 0 end) as cart_cnt, " +
                "  sum(case when type = 'buy' then 1 else 0 end) as buy_cnt " +
                "FROM  " +
                "  dwd.dwd_behavior_info " +
                "GROUP BY day");

//        ds.show();

        ds.write()
                .format("jdbc")
                .option("url","jdbc:mysql://hadoop:3306/ana_behavior_db")
                .option("dbtable","day_traffic_trend_analysis")
                .option("user","root")
                .option("password","123456")
                .option("driver","com.mysql.cj.jdbc.Driver")
                .mode("overwrite")
                .save();

        spark.close();
    }
}
