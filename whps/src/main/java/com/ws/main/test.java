package com.ws.main;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class test {
    public static void main(String[] args) {
        String a = "XAU,USD,USDCNY,EURUSD,GBPUSD,USDJPY,USDNOK,USDDKK,USDZAR,USDTRY,USDMXN,AUDUSD,USDCNH,USDSEK,NZDUSD,USDSGD,USDHKD,USDCHF,USDCAD";
        String[]  a1 = a.split(",");
        for(String aa : a1){
            //建表语句
            System.out.println("CREATE TABLE price_min_"+aa.toLowerCase()+"   PARTITION OF price_min FOR VALUES in ('"+aa+"');");
            //创建索引语句
            System.out.println("create index idx_price_min_"+aa.toLowerCase()+"_list on price_min_"+aa.toLowerCase()+"(c);");
            //创建bron索引块
            System.out.println("create index idx_tbl_min_"+aa.toLowerCase()+"_t_time on price_min_"+aa.toLowerCase()+" using brin (t) with (pages_per_range=128); ");
        }

    }


}
