package com.ws.task;


import com.ws.service.CountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author Lucifer
 * @date 2019-05-18 23:44
 **/
@Slf4j
//@Component
//@EnableScheduling
public class Scheduler {
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    @Autowired
    private CountService countService;


    private static ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5,10, 30, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(50));
    //每隔1分钟执行一次
    //@Scheduled(fixedRate = 500000)
    //每天早上7点到23点每隔5分钟执行一次
    //google服务器时间段
    //@Scheduled(cron="0 */5 3-19 * * ?")
    //中国服务器时间段1
    //@Scheduled(cron="0 */1 * * * ?")
    public void testTasks() {
        threadPoolExecutor.submit(() ->
        {
            try {
                Date date = new Date();
                //log.info("定时任务执行时间：" + dateFormat.format(date));
                countService.pushDataIntoMinTableFromStream(date);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    //每天3：05执行
    /*@Scheduled(cron = "0 05 03 ? * *")
    public void testTasks() {
        System.out.println("定时任务执行时间：" + dateFormat.format(new Date()));
    }*/

    //@Scheduled(cron = "0 */5 * * * ?")
    public void testTasks5() {
        log.error("定时任务执行时间：" + dateFormat.format(new Date()));
    }
}