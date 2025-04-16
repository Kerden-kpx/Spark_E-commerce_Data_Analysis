package com.example.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.dto.OneValues;
import com.example.entity.LogInfo;
import com.example.mapper.LogMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LogService extends ServiceImpl<LogMapper, LogInfo> {

    @Resource
    private LogMapper logMapper;

    public List<LogInfo> selectLoginList(Integer userId) {
        return logMapper.selectLoginList(userId);
    }

    public List<OneValues> selectActiveTrend(Integer userId) {
        return logMapper.selectActiveTrend(userId);
    }
}
