package com.ws.main;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class test2 {

    private static Map<String, String> map = new HashMap();
    private static Map<String, String> mapLog = new HashMap();

    public static void main(String[] args) throws IOException {
        String changelist = "/Users/huangbinfeng/test/changelist";
        String logs = "/Users/huangbinfeng/work/simian/log/test.log";
        File file = new File(changelist);
        reaplacelistAll(file,0);
        log.info("size1:{}",map.size());
        File file1 = new File(logs);
        readFile(file1);
        log.info("size2:{}",mapLog.size());
        String fileName = "";
        for(Map.Entry<String,String>entry : map.entrySet()){
            fileName = entry.getKey();
            if(mapLog.containsKey(fileName)){
                log.info("重复代码：{}",fileName);
            }
        }
    }

    private static void reaplacelistAll(File file,int level) throws IOException {
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for(File ff : f){
            if(ff.isDirectory()){
                reaplacelistAll(ff,level);
            }else {
                if(ff.getName().indexOf("java")>=0) {
                    map.put(ff.getName(), ff.getName());
                }
            }

        }
    }

    private static void readFile(File file){
        try{
            BufferedReader br = new BufferedReader(new FileReader(file));//构造一个BufferedReader类来读取文件
            String s = null;
            String fileName = "";
            int  i = 0;
            String path = "";
            while((s = br.readLine())!=null){//使用readLine方法，一次读一行
                if(s.indexOf("java")>=0){
                    i++;
                    path = s.substring(s.lastIndexOf(" in ")+4);
                    fileName = s.substring(s.lastIndexOf("/")+1);
                    if(mapLog.containsKey(fileName)){
                        if(mapLog.get(fileName).equals(path)){

                        }else{
                            mapLog.put((fileName+i),path);
                        }

                    }else{

                        mapLog.put((fileName),path);
                    }

                }
            }
            br.close();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    /**
     * 从map中查询想要的map项，根据key
     */
    public static Map<String, Object> parseMapForFilter(Map<String, Object> map,String filters) {
        if (map == null) {
            return null;
        } else {
            map = map.entrySet().stream()
                    .filter((e) -> checkKey(e.getKey(),filters))
                    .collect(Collectors.toMap(
                            (e) -> (String) e.getKey(),
                            (e) -> e.getValue()
                    ));
        }
        return map;
    }

    /**
     * 通过indexof匹配想要查询的字符
     */
    private static boolean checkKey(String key,String filters) {
        if (key.indexOf(filters)>-1){
            return true;
        }else {
            return false;
        }
    }
}
