package com.ws.service;

import com.ws.util.queue.LimitQueue;

import java.util.Map;

public interface CacheService {

    void initCache();

    Double getAvgPriceByType(String c, int min);

    void pushPriceIntoCache(String c, int min, double p);

    void pushPriceAllIntoCache(String c, double p);
}
