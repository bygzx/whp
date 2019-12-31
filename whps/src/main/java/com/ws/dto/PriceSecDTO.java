package com.ws.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
@Data
public class PriceSecDTO implements Serializable {
    private String c;
    private Long t;
    private String ts;
    private Double p;
    private Double l;
    private Double h;
    private Double o;
    private Double buy;
    private Double lc;
    private String zd;
    private Double sell;
    private Double v;
    private String zdf;
    private Date crtTime;
    private static final long serialVersionUID = 1L;
}
