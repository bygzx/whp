package com.ws.service;

import com.ws.entity.PriceSec;

import java.util.List;

public interface StoreDataService {
    void putDataIntoStream(String jsonStr);
    List<PriceSec> getPriceSecList();

    int getPriceSec();
}
