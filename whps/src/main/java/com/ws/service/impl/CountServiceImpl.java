package com.ws.service.impl;

import com.ws.dto.PriceSecDTO;
import com.ws.entity.PriceMin;
import com.ws.entity.PriceSec;
import com.ws.mappers.PriceMinMapper;
import com.ws.mappers.PriceSecMapper;
import com.ws.service.CacheService;
import com.ws.util.constant.Constants;
import com.ws.util.date.DateUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ws.service.CountService;

import java.util.Date;
import java.util.List;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/*
 * 时间压缩，数据聚合
 * 1~240分钟
 */
@Service
public class CountServiceImpl implements CountService {

    private static ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5,10, 30, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(50));

    @Autowired
    private PriceSecMapper priceSecMapper;
    @Autowired
    private PriceMinMapper priceMinMapper;
    @Autowired
    private CacheService cacheService;

    @Override
    public void pushDataIntoMinTableFromStream(Date date) {
        List<PriceSecDTO> priceMinAvgDTOS = priceSecMapper.getPriceMinAvgList();
        if(priceMinAvgDTOS!=null && !priceMinAvgDTOS.isEmpty()){
            Long timeStamp = date.getTime();
            //Date now = new Date();
            String dateString = DateUtils.format(date, Constants.DATE_FORMAT_YYYY_MM_DD_HH_MM_SS);
            for(PriceSecDTO priceSec : priceMinAvgDTOS){
                PriceMin priceMin = new PriceMin();
                BeanUtils.copyProperties(priceSec, priceMin);
                //各自插库
                priceMin.setCrtTime(date);
                priceMinMapper.insertSelective(priceMin);
                cacheService.pushPriceAllIntoCache(priceMin.getC(),priceMin.getP());
            }
        }
    }

    @Override
    public void countMin1(PriceSec priceSec) {
        //String  pkey = key+ Constants.MIN_1;

    }

    @Override
    public void countMin5(PriceSec priceSec) {

    }

    @Override
    public void countMin10(PriceSec priceSec) {

    }

    @Override
    public void countMin15(PriceSec priceSec) {

    }

    @Override
    public void countMin30(PriceSec priceSec) {

    }

    @Override
    public void countMin60(PriceSec priceSec) {

    }

    @Override
    public void countMin120(PriceSec priceSec) {

    }

    @Override
    public void countMin240(PriceSec priceSec) {

    }
}
