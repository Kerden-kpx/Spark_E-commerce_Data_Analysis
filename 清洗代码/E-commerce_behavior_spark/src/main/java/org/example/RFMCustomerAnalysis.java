package org.example;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class RFMCustomerAnalysis {
    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder().appName("RFMCustomerAnalysis")
                .master("local[*]")
                .enableHiveSupport()
                .getOrCreate();
        Dataset<Row> ds = spark.sql("WITH t1 as(SELECT " +
                "  user_id,if(datediff(max(day),'2017-11-25') <= 5 , 1 , 0) as r_score " +
                "FROM  " +
                "  dwd.dwd_behavior_info " +
                "WHERE type='buy' " +
                "GROUP BY user_id), " +
                "t2 as (SELECT " +
                "  user_id,if(count(1) >= 2 , 1 , 0) as f_score " +
                "FROM  " +
                "  dwd.dwd_behavior_info " +
                "WHERE type='buy' " +
                "GROUP BY user_id) " +
                "SELECT " +
                "  user_type,count(user_id) as user_cnt " +
                "FROM ( " +
                "  SELECT " +
                "    t1.user_id, " +
                "    CASE WHEN t1.r_score=1 AND t2.f_score = 1 THEN '价值客户'  " +
                "       WHEN t1.r_score=0 AND t2.f_score = 1 THEN '保持客户'  " +
                "       WHEN t1.r_score=1 AND t2.f_score = 0 THEN '发展客户'  " +
                "       WHEN t1.r_score=0 AND t2.f_score = 0 THEN '挽留客户'  " +
                "    END AS user_type " +
                "  FROM  " +
                "    t1 JOIN t2 ON t1.user_id = t2.user_id " +
                ") " +
                "GROUP BY user_type");
        ds.write()
                .format("jdbc")
                .option("url","jdbc:mysql://hadoop:3306/ana_behavior_db")
                .option("dbtable","rfm_customer_analysis")
                .option("user","root")
                .option("password","123456")
                .option("driver","com.mysql.cj.jdbc.Driver")
                .mode("overwrite")
                .save();
        spark.close();
    }
}
