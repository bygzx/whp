package com.ws.main.xml.Entity;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamAsAttribute;
import com.thoughtworks.xstream.annotations.XStreamImplicit;
import lombok.Data;

import java.util.List;
@Data
@XStreamAlias("pmd")
public class pmd {
    @XStreamImplicit
    private List<file> file;
    @XStreamAsAttribute
    @XStreamAlias("version")
    private String version;
    @XStreamAsAttribute
    @XStreamAlias("timestamp")
    private String timestamp;

}
