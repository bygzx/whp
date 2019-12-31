package com.ws.controller;

import com.ws.service.StoreDataService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class TestController {

    @Autowired
    private StoreDataService storeDataService;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public Object saveComment() {
        return storeDataService.getPriceSec();
    }

    @RequestMapping(value = "/testList", method = RequestMethod.GET)
    public Object testList() {
        return storeDataService.getPriceSecList();
    }
}
