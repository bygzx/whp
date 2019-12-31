package com.ws.main.xml.Entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamAsAttribute;
import com.thoughtworks.xstream.annotations.XStreamConverter;
import com.thoughtworks.xstream.converters.extended.ToAttributedValueConverter;
import lombok.Data;

@Data
@XStreamAlias("violation")
// 自带的转换器
@XStreamConverter(value= ToAttributedValueConverter.class, strings={"value"})
public class violation {
    @XStreamAsAttribute
    private String beginline;
    @XStreamAsAttribute
    private String endline;
    @XStreamAsAttribute
    private String begincolumn;
    @XStreamAsAttribute
    private String endcolumn;
    @XStreamAsAttribute
    private String rule;
    @XStreamAsAttribute
    private String ruleset;
    @XStreamAsAttribute
    private String packages;
    @XStreamAsAttribute
    private String classs;
    @XStreamAsAttribute
    private String method;
    @XStreamAsAttribute
    private String externalInfoUrl;
    @XStreamAsAttribute
    private String priority;
    private String value;
}
