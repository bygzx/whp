package com.ws.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PriceMinAvgDTO {
    //品种
    private String c;
    //时间戳
    private Long t;
    //时间
    private String ts;
    //最高价
    private Double h;
    //最低价
    private Double  l;
    //分钟均价
    private Double  avgMin;
    //分钟收盘价
    private Double  cp;
    //入库时间
    private Date crtTime;
}
