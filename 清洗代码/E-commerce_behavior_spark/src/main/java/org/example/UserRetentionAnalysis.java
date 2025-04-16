package org.example;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class UserRetentionAnalysis {

    public static void main(String[] args) {

        SparkSession spark = SparkSession.builder().appName("UserRetentionAnalysis")
                .master("local[*]")
                .enableHiveSupport()
                .getOrCreate();

        Dataset<Row> ds = spark.sql("SELECT " +
                "    day, " +
                "    CAST((reten_1/reten_0)*100 AS DECIMAL(10,2)) AS reten_1_rate, " +
                "    CAST((reten_3/reten_0)*100 AS DECIMAL(10,2)) AS reten_3_rate, " +
                "    CAST((reten_5/reten_0)*100 AS DECIMAL(10,2)) AS reten_5_rate " +
                "FROM ( " +
                "  SELECT " +
                "    a.day, " +
                "    count(distinct b.user_id) as reten_0, " +
                "    count(distinct if(datediff(b.day,a.day)=1,b.user_id,null)) as reten_1, " +
                "    count(distinct if(datediff(b.day,a.day)=3,b.user_id,null)) as reten_3, " +
                "    count(distinct if(datediff(b.day,a.day)=5,b.user_id,null)) as reten_5 " +
                "  FROM " +
                "    (SELECT user_id,day FROM dwd.dwd_behavior_info GROUP BY user_id,day) a " +
                "  JOIN   (SELECT user_id,day FROM dwd.dwd_behavior_info GROUP BY user_id,day) b " +
                "  ON a.user_id = b.user_id " +
                "  WHERE a.day <= b.day " +
                "  GROUP BY a.day " +
                ") t");

        ds.write()
                .format("jdbc")
                .option("url","jdbc:mysql://hadoop:3306/ana_behavior_db")
                .option("dbtable","user_retention_analysis")
                .option("user","root")
                .option("password","123456")
                .option("driver","com.mysql.cj.jdbc.Driver")
                .mode("overwrite")
                .save();

        spark.close();
    }
}
