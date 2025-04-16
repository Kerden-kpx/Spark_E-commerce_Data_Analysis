package org.example;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.Function;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;

public class BehaviorDataCleaning {

    private static String in = "/user/hive/warehouse/ods.db/behavior.csv";

    private static String out = "/user/hive/warehouse/dwd.db/behavior";

    public static void main(String[] args) throws IOException {
        System.setProperty("HADOOP_USER_NAME", "root");
        SparkConf conf = new SparkConf().setAppName("BehaviorDataCleaning").setMaster("local[*]");
        JavaSparkContext context = new JavaSparkContext(conf);
//        检查文件如果存在，就删掉
        checkExistsFile(context.hadoopConfiguration(), new Path(out));

        JavaRDD<String> inRDD = context.textFile(in);
//        数据清洗
        JavaRDD<String> mapRDD = inRDD.map(new Function<String, String>() {
            @Override
            public String call(String s) throws Exception {
                String[] fields = s.split(",");
//              过滤掉异常长度的数据
                if (fields.length == 5) {
                    String userId = fields[0];
                    String itemId = fields[1];
                    String categoryId = fields[2];
                    String type = fields[3];
                    String timestamp = fields[4];
//                  清洗时间格式
                    Timestamp tmpTime = new Timestamp(Long.valueOf(timestamp) * 1000L);
                    String times = tmpTime.toString().substring(0, 19);
//                  清洗日期
                    String day = tmpTime.toString().substring(0, 10);
//                    清洗小时
                    String hour = tmpTime.toString().substring(11, 13);
//                    清洗时间范围
                    if (day.compareTo("2017-11-25") >= 0 && day.compareTo("2017-12-03") <= 0) {
                        return userId + "," + itemId + "," + categoryId + "," + type + "," + times + "," + day + "," + hour;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        }).filter(row -> null != row); // 清洗掉null值
        mapRDD.saveAsTextFile(out);
        context.close();
    }

    /*
     * 检查文件是否存在，存在则删除
     * @param conf
     * @param path
     * @throws IOException
     */
    private static void checkExistsFile(Configuration conf, Path path) throws IOException {
        FileSystem fileSystem = FileSystem.get(conf);
        if (fileSystem.exists(path)) {
            fileSystem.delete(path, true);
        }
    }
}