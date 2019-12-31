package com.ws.service;

import com.ws.entity.PriceSec;

import java.util.Date;

public interface CountService {
    void pushDataIntoMinTableFromStream(Date date);
    void countMin1(PriceSec priceSec);
    void countMin5(PriceSec priceSec);
    void countMin10(PriceSec priceSec);
    void countMin15(PriceSec priceSec);
    void countMin30(PriceSec priceSec);
    void countMin60(PriceSec priceSec);
    void countMin120(PriceSec priceSec);
    void countMin240(PriceSec priceSec);
}
