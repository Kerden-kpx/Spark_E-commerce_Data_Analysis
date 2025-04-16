package org.example;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class Top10Items {

    public static void main(String[] args) {

        SparkSession spark = SparkSession.builder().appName("Top10Items")
                .master("local[*]")
                .enableHiveSupport()
                .getOrCreate();

        Dataset<Row> ds = spark.sql("SELECT " +
                "  item_id, count(1) as cnt " +
                "FROM  " +
                "  dwd.dwd_behavior_info " +
                "WHERE type='buy' " +
                "GROUP BY item_id " +
                "ORDER BY cnt DESC " +
                "LIMIT 10");

        ds.write()
                .format("jdbc")
                .option("url","jdbc:mysql://hadoop:3306/ana_behavior_db")
                .option("dbtable","top10_items")
                .option("user","root")
                .option("password","123456")
                .option("driver","com.mysql.cj.jdbc.Driver")
                .mode("overwrite")
                .save();

        spark.close();
    }
}
