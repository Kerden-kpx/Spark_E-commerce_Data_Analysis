package com.example.service;

import com.example.common.Result;
import com.example.mapper.AnalysisMapper;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

@Service
public class AnalysisService {

    @Resource
    private AnalysisMapper analysisMapper;

    public Result dayTrafficTrendAnalysis(){
        return Result.success(analysisMapper.dayTrafficTrendAnalysis());
    }

    public Result hourTrafficTrendAnalysis(){
        return Result.success(analysisMapper.hourTrafficTrendAnalysis());
    }

    public Result trafficFunnelConversionAnalysis(){
        return Result.success(analysisMapper.trafficFunnelConversionAnalysis());
    }

    public Result rfmCustomerAnalysis(){
        return Result.success(analysisMapper.rfmCustomerAnalysis());
    }

    public Result userRetentionAnalysis(){
        return Result.success(analysisMapper.userRetentionAnalysis());
    }

    public Result top10Category(){
        return Result.success(analysisMapper.top10Category());
    }

    public Result top10Items(){
        return Result.success(analysisMapper.top10Items());
    }

}
