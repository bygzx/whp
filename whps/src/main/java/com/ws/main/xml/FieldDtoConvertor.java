package com.ws.main.xml;

import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;
import com.ws.main.xml.Entity.violation;

public class FieldDtoConvertor implements Converter {
    public boolean canConvert(@SuppressWarnings("rawtypes") final Class clazz) {
        return clazz.equals(violation.class);
    }

    public void marshal(Object value, HierarchicalStreamWriter writer,
                        MarshallingContext context) {
        final violation fieldDto = (violation) value;
        writer.addAttribute(fieldDto.getValue(), fieldDto.getValue());
    }

    public Object unmarshal(HierarchicalStreamReader reader,
                            UnmarshallingContext context) {
        violation result = new violation();
        result.setBeginline(reader.getAttribute("beginline"));
        result.setEndline(reader.getAttribute("endline"));
        result.setBegincolumn(reader.getAttribute("begincolumn"));
        result.setEndcolumn(reader.getAttribute("endcolumn"));
        result.setRule(reader.getAttribute("rule"));
        result.setRuleset(reader.getAttribute("ruleset"));
        result.setPackages(reader.getAttribute("packages"));
        result.setClasss(reader.getAttribute("classs"));
        result.setMethod(reader.getAttribute("method"));
        result.setExternalInfoUrl(reader.getAttribute("externalInfoUrl"));
        result.setPriority(reader.getAttribute("priority"));
        result.setValue(reader.getValue());
        return result;
    }
}
