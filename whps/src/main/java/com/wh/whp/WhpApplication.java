package com.wh.whp;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import tk.mybatis.spring.annotation.MapperScan;

@ComponentScan(basePackages={"com.ws.main","com.ws.task",
        "com.ws.config",
        "com.ws.redis","com.ws.service","com.ws.controller","com.ws.aop"})
@SpringBootApplication
@MapperScan(basePackages = {"com.ws.mappers"})
public class WhpApplication {

    public static void main(String[] args) {
        SpringApplication.run(WhpApplication.class, args);
    }

}
