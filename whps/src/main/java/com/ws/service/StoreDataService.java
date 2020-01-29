package com.ws.service;

import com.ws.dto.PriceDTO;
import com.ws.dto.PriceMinAvgDTO;
import com.ws.entity.PriceMin;
import com.ws.entity.PriceSec;

import java.util.List;

public interface StoreDataService {
    void putDataIntoStream(String jsonStr);
    List<PriceSec> getPriceSecList();

    int getPriceSec();

    List<PriceMin> cc();
}
