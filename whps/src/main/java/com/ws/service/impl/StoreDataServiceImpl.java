package com.ws.service.impl;

import com.alibaba.fastjson.JSON;
import com.ws.entity.PriceSec;
import com.ws.mappers.PriceSecMapper;
import com.ws.util.date.DateUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ws.dto.PriceDTO;
import com.ws.redis.RedisService;
import com.ws.service.StoreDataService;

import java.text.ParseException;
import java.util.List;

@Slf4j
@Service
public class StoreDataServiceImpl implements StoreDataService {

    @Autowired
    RedisService redisService;
    @Autowired
    PriceSecMapper priceSecMapper;

    /**
     * 插入psql stream
     * @param jsonStr
     */
    @Override
    public void putDataIntoStream(String jsonStr) {
        PriceDTO priceDTO = JSON.parseObject(jsonStr,PriceDTO.class);
        try {
            PriceSec priceSec = transData(priceDTO);
            priceSecMapper.pushIntoStreamPriceSec(priceSec);
        }catch (Exception e){
            log.error("putDataIntoStream data error,msg:{}",e.getMessage());
        }
    }

    @Override
    public List<PriceSec> getPriceSecList() {
        return priceSecMapper.getPriceSecList();
    }

    @Override
    public int getPriceSec() {
        int test = priceSecMapper.getCount();
        return test;
    }

    private PriceSec transData(PriceDTO priceDTO) throws ParseException {
        PriceSec priceSec = PriceSec.builder().build();
        priceSec.setBuy(Double.parseDouble(priceDTO.getBUY()));
        priceSec.setC(priceDTO.getC());
        priceSec.setH(Double.parseDouble(priceDTO.getH()));
        priceSec.setL(Double.parseDouble(priceDTO.getL()));
        priceSec.setLc(Double.parseDouble(priceDTO.getLC()));
        priceSec.setO(Double.parseDouble(priceDTO.getO()));
        priceSec.setP(Double.parseDouble(priceDTO.getP()));
        priceSec.setSell(Double.parseDouble(priceDTO.getSell()));
        priceSec.setT(Long.parseLong(priceDTO.getT()));
        priceSec.setTs(priceDTO.getTS());
        priceSec.setZd(priceDTO.getZD());
        priceSec.setZdf(priceDTO.getZDF());
        priceSec.setCrtTime(DateUtils.parseDate(priceDTO.getTS(),"yyyy-MM-dd HH:mm:ss"));
        return priceSec;
    }
}
