package com.ws.service.impl;

import com.ws.entity.PriceMin;
import com.ws.mappers.PriceMinMapper;
import com.ws.mappers.PriceSecMapper;
import com.ws.service.CacheService;
import com.ws.util.queue.LimitQueue;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class CacheServiceImpl implements CacheService {

    private static String[] cType = new String[]{"XAU","USD","USDCNY","EURUSD","GBPUSD","USDJPY","USDNOK","USDDKK","USDZAR","USDTRY","USDMXN",
            "AUDUSD","USDCNH","USDSEK","NZDUSD","USDSGD","USDHKD","USDCHF","USDCAD"};

    @Autowired
    private PriceSecMapper priceSecMapper;
    @Autowired
    private PriceMinMapper priceMinMapper;

    private volatile static Map<String, LimitQueue<Double>> map5 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map10 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map15 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map20 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map30 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map60 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map120 = new HashMap();
    private volatile static Map<String, LimitQueue<Double>> map240 = new HashMap();

    //从数据库捞出数据存到缓存中
    @Override
    public void initCache() {
        for(String cT : cType){
            initCacheByTypeAndCount(cT, 5);
            initCacheByTypeAndCount(cT, 10);
            initCacheByTypeAndCount(cT, 15);
            initCacheByTypeAndCount(cT, 20);
            initCacheByTypeAndCount(cT, 30);
            initCacheByTypeAndCount(cT, 60);
            initCacheByTypeAndCount(cT, 120);
            initCacheByTypeAndCount(cT, 240);
        }

    }

    private void initCacheByTypeAndCount(String c, int min){
        List<PriceMin> priceMins = priceMinMapper.getLastPriceLimitBymin(c, min);
        Map<String, LimitQueue<Double>> mapTemp = new HashMap<>();
        switch (min){
            case 5:{
                mapTemp = map5;
                break;
            }
            case 10:{
                mapTemp = map10;
                break;
            }
            case 15:{
                mapTemp = map15;
                break;
            }
            case 20:{
                mapTemp = map20;
                break;
            }
            case 30:{
                mapTemp = map30;
                break;
            }
            case 60:{
                mapTemp = map60;
                break;
            }
            case 120:{
                mapTemp = map120;
                break;
            }
            case 240:{
                mapTemp = map240;
                break;
            }
        }
        if(!mapTemp.containsKey(c)){
            LimitQueue<Double> limitQueue = new LimitQueue(min);
            mapTemp.put(c, limitQueue);
        }
        LimitQueue<Double> limitQueue = mapTemp.get(c);
        if(priceMins != null){
            for(int i=priceMins.size();i > 0;i--){
                limitQueue.offer(priceMins.get(i-1).getP());
            }
        }
        log.info("填充 {} 的 {} min数据到缓存:{}",c, min, limitQueue.toString());
    }


    @Override
    public Double getAvgPriceByType(String c, int min) {
        Double d = 0.0;
        switch (min){
            case 5 : {
                if(map5.get(c).size() == min) {
                    d = getAvgPrice(map5.get(c));
                }
                break;
            }
            case 10 : {
                if(map10.get(c).size() == min) {
                    d = getAvgPrice(map10.get(c));
                }
                break;
            }
            case 15 : {
                if(map15.get(c).size() == min) {
                    d = getAvgPrice(map15.get(c));
                }
                break;
            }
            case 20 : {
                if(map20.get(c).size() == min) {
                    d = getAvgPrice(map20.get(c));
                }
                break;
            }
            case 30 : {
                if(map30.get(c).size() == min) {
                    d = getAvgPrice(map30.get(c));
                }
                break;
            }
            case 60 : {
                if(map60.get(c).size() == min) {
                    d = getAvgPrice(map60.get(c));
                }
                break;
            }
            case 120 : {
                if(map120.get(c).size() == min) {
                    d = getAvgPrice(map120.get(c));
                }
                break;
            }
            case 240 : {
                if(map240.get(c).size() == min) {
                    d = getAvgPrice(map240.get(c));
                }
                break;
            }
        }
        return d;
    }


    @Override
    public void pushPriceIntoCache(String c, int min, double p) {
        switch (min){
            case 5 : {
                pushPriceIntoCacheByType(c, min, map5.get(c),p);
                break;
            }
            case 10 : {
                pushPriceIntoCacheByType(c, min, map10.get(c),p);
                break;
            }
            case 15 : {
                pushPriceIntoCacheByType(c, min, map15.get(c),p);
                break;
            }
            case 20 : {
                pushPriceIntoCacheByType(c, min, map20.get(c),p);
                break;
            }
            case 30 : {
                pushPriceIntoCacheByType(c, min, map30.get(c),p);
                break;
            }
            case 60 : {
                pushPriceIntoCacheByType(c, min, map60.get(c),p);
                break;
            }
            case 120 : {
                pushPriceIntoCacheByType(c, min, map120.get(c),p);
                break;
            }
            case 240 : {
                pushPriceIntoCacheByType(c, min, map240.get(c),p);
                break;
            }
        }
    }

    @Override
    public void pushPriceAllIntoCache(String c, double p) {
        pushPriceIntoCache( c, 5,  p);
        pushPriceIntoCache( c, 10,  p);
        pushPriceIntoCache( c, 15,  p);
        pushPriceIntoCache( c, 20,  p);
        pushPriceIntoCache( c, 30,  p);
        pushPriceIntoCache( c, 60,  p);
        pushPriceIntoCache( c, 120,  p);
        pushPriceIntoCache( c, 240,  p);
    }

    private void pushPriceIntoCacheByType(String c, int min, LimitQueue<Double> queue,double p){
        queue.offer(p);
        log.info("stream获取分钟数据插入缓存 {}, p：{}, 分钟：{}, 总数：{}",c, p, min, queue.size());
    }

    private Double getAvgPrice(LimitQueue<Double> queue){
        Double d = 0.0;
        if(queue!=null && queue.size()>0){
            for(Double d1: queue){
                d = d+d1;
            }
            d = d/queue.size();
        }
        return d;
    }

}
