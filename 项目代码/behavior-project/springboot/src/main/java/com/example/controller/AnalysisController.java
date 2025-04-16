package com.example.controller;

import com.example.common.Result;
import com.example.service.AnalysisService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/analysis")
public class AnalysisController {

    @Resource
    private AnalysisService analysisService;

    @GetMapping("analyze1")
    public Result dayTrafficTrendAnalysis(){
        return analysisService.dayTrafficTrendAnalysis();
    }

    @GetMapping("analyze2")
    public Result hourTrafficTrendAnalysis(){
        return analysisService.hourTrafficTrendAnalysis();
    }

    @GetMapping("analyze3")
    public Result trafficFunnelConversionAnalysis(){
        return analysisService.trafficFunnelConversionAnalysis();
    }

    @GetMapping("analyze4")
    public Result rfmCustomerAnalysis(){
        return analysisService.rfmCustomerAnalysis();
    }

    @GetMapping("analyze5")
    public Result userRetentionAnalysis(){
        return analysisService.userRetentionAnalysis();
    }

    @GetMapping("analyze6")
    public Result top10Category(){
        return analysisService.top10Category();
    }

    @GetMapping("analyze7")
    public Result top10Items(){
        return analysisService.top10Items();
    }
}
