package com.ws.main.xml;

import com.thoughtworks.xstream.XStream;
import com.ws.main.xml.Entity.file;
import com.ws.main.xml.Entity.pmd;
import com.ws.main.xml.Entity.violation;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class XmlTest5 {
    private static int count = 0;
    //private static String oldPath = "/home/ZCIPClient/workpath/9540/code";
    private static String oldPath = "/home/ZCIPClient/workpath/9540/code";
    //private static String newPath = "/Users/huangbinfeng/test/compare/after";
    private static String newPath = "/Users/huangbinfeng/test/changelist";
    private static int errCount = 0;
    private static Map<String,String> map = new HashMap<>();
    private static Map<String,String> mapCount = new HashMap<>();
    public static void main(String[] args) {
        XStream xStream = new XStream();
        xStream.autodetectAnnotations(true);//自动检测注解
        xStream.processAnnotations(pmd.class);//应用Person类的注解

        pmd result = new pmd();
        try {
            String filePath = "/Users/huangbinfeng/test/compare/JavaPMD_Result.xml";
            FileInputStream fis = new FileInputStream(filePath);
            result = (pmd) xStream.fromXML(fis);
            log.info("数据条数：{}",result.getFile().size());
            read(result);
            log.info("error条数：{}",count);
            log.info("命中文件条数：{}",mapCount.size());
            log.info("命中error条数：{}",errCount);
            int i = 0;
            for(Map.Entry<String,String>entry : mapCount.entrySet()){
                log.info("不在范围内：key: {} , value:{}",entry.getKey(),entry.getValue());
            }
        } catch (Exception ex) {
            log.error("读取错误：{}",ex.getMessage());
            ex.printStackTrace();
        }
    }

    public static void read(pmd result){
        for(file files:result.getFile()){
            for(violation violations:files.getViolation()){
                if(violations.getPriority().equals("2")){
                    count++;
                    String path = files.getName().replace(oldPath,newPath);
                    File file = new File(path);
                    if(file.exists()){
                        if(mapCount.containsKey(path)){
                            int c = Integer.parseInt(mapCount.get(path))+1;
                            mapCount.put(path,String.valueOf(c));
                        }else{
                            mapCount.put(path,"1");
                        }

                        errCount++;
                        String value = violations.getValue().replaceAll("\\n","");
                        log.error("name:{}",file.getName());
                        log.info("行数：{}, 规则：{}, 解析：{}",violations.getBeginline(),violations.getRule(),violations.getRuleset());
                        log.info("方法：{},  错误：{}",violations.getMethod(),value);
                    }else {
                        String value = violations.getValue().replaceAll("\\n","");
                        map.put(path+count,value);
                    }
                }
            }
        }
    }
}
