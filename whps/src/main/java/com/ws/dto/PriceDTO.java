package com.ws.dto;

import lombok.Data;

import java.io.Serializable;


@Data
public class PriceDTO implements Serializable {
    //品种
    private String C;
    //时间戳  1573559851
    private String T;
    //时间 2019-11-12 19:57:31
    private String TS;
    //现价
    private String P;
    //当天最低价
    private String L;
    //当天最高价
    private String H;
    //开盘价
    private String O;
    //买入价
    private String BUY;
    //昨天收盘价
    private String LC;
    //涨跌
    private String ZD;
    //卖出价
    private String Sell;
    //?
    private String V;
    //涨跌幅
    private String ZDF;
}
