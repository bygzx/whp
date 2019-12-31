package com.ws.main;


import com.ws.config.GetSpringBean;
import com.ws.service.CacheService;
import lombok.extern.slf4j.Slf4j;
import org.java_websocket.WebSocket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.ws.websocket.MyWebSocketExecutor;
import com.ws.websocket.MyWebsocketClient;

import java.net.URISyntaxException;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author eric
 * @date 2019/7/17 14:21
 **/
@Slf4j
@Component("startupRunner")
public class FxMain implements CommandLineRunner {

    private static ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5,10, 30, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(50));

    private CacheService cacheService;

    @Override
    public void run(String... args) throws Exception {

        log.info("init Cache ...");
        cacheService = GetSpringBean.getBean(CacheService.class);
        cacheService.initCache();
        log.info("init Cache ...end");

        log.info("FxMain init");
            String serverUri = "ws://39.97.117.240:9506";

            //黄金
        threadPoolExecutor.submit(() ->
        {
            String  jsonString = "{\"cmd\":\"sub\",\"codes\":[\"XAU\"]}";
            requestData(serverUri, jsonString);
        });
        //外汇
        threadPoolExecutor.submit(() ->
        {
            String jsonStrings = "{\"cmd\":\"sub\",\"codes\":[\"USD\",\"USDCNY\",\"EURUSD\",\"GBPUSD\",\"USDJPY\",\"USDNOK\",\"USDDKK\",\"USDZAR\",\"USDTRY\",\"USDMXN\",\"AUDUSD\",\"USDCNH\",\"USDSEK\",\"NZDUSD\",\"USDSGD\",\"USDHKD\",\"USDCHF\",\"USDCAD\"]}";
            requestData(serverUri, jsonStrings);
        });
        log.info("FxMain init end");
    }

    private void requestData(String serverUri,String jsonString){
        MyWebSocketExecutor executor = new MyWebSocketExecutor();
        MyWebsocketClient myWebsocketClient = null;
        try {
            myWebsocketClient = new MyWebsocketClient(serverUri, executor);
        }
        catch (URISyntaxException e) {
            e.printStackTrace();
        }
        myWebsocketClient.connect();
        //String  jsonString = "{\"cmd\":\"sub\",\"codes\":[\"XAU\"]}";
        log.info("待发送信息：{}",jsonString);
        while (!myWebsocketClient.getReadyState().equals(WebSocket.READYSTATE.OPEN)) {
            log.info("还没有打开,client状态：{}",myWebsocketClient.getReadyState());
            try {
                Thread.sleep( 3 * 1000);
            }
            catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        myWebsocketClient.send(jsonString);
    }
}
