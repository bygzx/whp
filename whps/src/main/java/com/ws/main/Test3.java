package com.ws.main;

import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
@Slf4j
public class Test3 {
    private static Map<String, String> map = new HashMap();
    public static void main(String[] args) {
        String path = "./";
        //File file = new File(path);
        read(path);
        for(Map.Entry<String,String>entry : map.entrySet()){
                log.info("name：{}",entry.getKey());
        }
    }

    private static void reaplacelistAll(File file, int level) {
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        if(f!=null) {
            for (File ff : f) {
                if (ff.isDirectory()) {
                    reaplacelistAll(ff, level);
                }
                else {
                    //if(ff.getName().indexOf("java")>=0) {
                    map.put(ff.getName(), ff.getName());
                    //}
                }
            }
        }
    }

    private static void read(String path){
        File file = new File(path);
        if (!file.exists()) {
            log.error("file not exist");
        }else {
            reaplacelistAll(file, 0);
        }
    }

    private static void reada(String path){
        File file = new File(path);
        if (!file.exists()) {
            log.error("file not exist");
        }else {
            reaplacelistAll(file, 0);
        }
    }
}
