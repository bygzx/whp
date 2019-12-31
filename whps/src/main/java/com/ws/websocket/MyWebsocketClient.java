package com.ws.websocket;

import lombok.extern.slf4j.Slf4j;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;
import com.ws.config.GetSpringBean;
import com.ws.service.StoreDataService;

import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
public class MyWebsocketClient extends WebSocketClient {

    private StoreDataService storeDataService;

    private WebSocketExecutor executor; // 用于保存获取的数据、判定是否需要关闭连接的功能类

    public MyWebsocketClient(String url, WebSocketExecutor executor) throws URISyntaxException {
        super(new URI(url));
        this.executor = executor;
        storeDataService = GetSpringBean.getBean(StoreDataService.class);
    }

    @Override
    public void onOpen(ServerHandshake shake) {
        log.info("握手...");
        /*for(Iterator<String> it = shake.iterateHttpFields(); it.hasNext();) {
            String key = it.next();
            log.info(key+":"+shake.getFieldValue(key));

        }*/
    }

    @Override
    public void onMessage(String s) {
        //log.info("接收到的数据：{}",s);
        //storeDataService.putDataIntoRedisScore(s);
        storeDataService.putDataIntoStream(s);
        if(executor.needClose(s)){
            this.close();
            executor.setClose(true);
        }
    }

    @Override
    public void onClose(int paramInt, String paramString, boolean paramBoolean) {
        if (!executor.isClosed()) {
            executor.setClose(true);
        }
    }

    @Override
    public void onError(Exception e) {
        log.info("websocket连接报错");
    }

}
