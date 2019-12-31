package com.ws.main.xml.Entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamAsAttribute;
import com.thoughtworks.xstream.annotations.XStreamConverter;
import com.thoughtworks.xstream.annotations.XStreamImplicit;
import com.thoughtworks.xstream.converters.extended.ToAttributedValueConverter;
import lombok.Data;

import java.util.List;

@Data
@XStreamAlias("file")
// 自带的转换器
//@XStreamConverter(value= ToAttributedValueConverter.class, strings={"value"})
public class file {
    @XStreamAsAttribute
    private String name;
    @XStreamImplicit
  private List<violation> violation;
}
