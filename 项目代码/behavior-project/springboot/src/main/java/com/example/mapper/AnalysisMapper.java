package com.example.mapper;

import com.example.dto.FiveValues;
import com.example.dto.FunnelValues;
import com.example.dto.OneValues;
import com.example.dto.ThreeValues;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AnalysisMapper {

    @Select("SELECT day as name,user_cnt as value1, pv_cnt as value2,fav_cnt as value3, cart_cnt as value4, buy_cnt as value5 FROM day_traffic_trend_analysis ORDER BY day \n")
    List<FiveValues> dayTrafficTrendAnalysis();

    @Select("SELECT hour as name,user_cnt as value1, pv_cnt as value2,fav_cnt as value3, cart_cnt as value4, buy_cnt as value5 FROM hour_traffic_trend_analysis ORDER BY hour \n")
    List<FiveValues> hourTrafficTrendAnalysis();

    @Select("SELECT name, value as real_value, rate as value FROM traffic_funnel_conversion_analysis ORDER BY value desc\n")
    List<FunnelValues> trafficFunnelConversionAnalysis();

    @Select("SELECT user_type as name, user_cnt as value  FROM rfm_customer_analysis order by user_cnt\n")
    List<OneValues> rfmCustomerAnalysis();

    @Select("SELECT day as name, reten_1_rate as value1, reten_3_rate as value2, reten_5_rate as value3  FROM user_retention_analysis ORDER BY day\n")
    List<ThreeValues> userRetentionAnalysis();

    @Select("SELECT category_id as name, cnt as value FROM top10_category ORDER BY cnt DESC\n")
    List<OneValues> top10Category();

    @Select("SELECT item_id as name, cnt as value FROM top10_items ORDER BY cnt DESC\n")
    List<OneValues> top10Items();
}
