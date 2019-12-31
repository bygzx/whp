package com.ws.aop;

import com.alibaba.fastjson.JSON;
import com.ws.aop.annotation.ReenterSaveDataCollector;
import com.ws.dto.PriceDTO;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class ReenterSaveDataCollectorAdvice {

    @After("@annotation(reenterPageUserCollector)")
    public void collectReenterPageUser(JoinPoint joinPoint, ReenterSaveDataCollector reenterPageUserCollector) {
        log.info("ReenterPageUserCollectorAdvice collectReenterPageUser trigger");
        Object[] args = joinPoint.getArgs();
        if (args != null && args.length > 0) {
            if (args[0] instanceof String){
                PriceDTO priceDTO = JSON.parseObject((String) args[0],PriceDTO.class);
                log.info("ReenterPageUserCollectorAdvice collectReenterPageUser priceDTO:{}", priceDTO.toString());
            }
        }
        log.info("ReenterPageUserCollectorAdvice collectReenterPageUser json:{}", args[0]);
    }
}
