package com.ws.main;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class test4 {
    private static Map<String, String> map = new HashMap();
    private static Map<String, Map<String,String>> mapFile = new HashMap();
    private static Map<String, String> mapLog = new HashMap();
    private static int count = 0;

    public static void main(String[] args) throws IOException {
        String before = "/Users/huangbinfeng/test/compare/before";
        String after = "/Users/huangbinfeng/test/compare/after";
        File file = new File(before);
        //reaplacelistAll(file, 0);
        //log.info("map.size:{}", map.size());
        readFile(file, 0);
        log.info("mapFile.size:{}", mapFile.size());
        log.info("count:{}", count);
    }

    private static void reaplacelistAll(File file, int level) throws IOException {
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for (File ff : f) {
            if (ff.isDirectory()) {
                reaplacelistAll(ff, level);
            }
            else {
                String filePathBefore = ff.getAbsolutePath();
                String filePathAfter = filePathBefore.replaceFirst("before", "after");
                File file1 = new File(filePathAfter);
                if (file1.exists() && filePathBefore.indexOf(".java") > 0) {
                    log.info("before：{}", filePathBefore);
                    log.info("after：{}", filePathBefore);
                    map.put(ff.getName(), filePathBefore);
                }
                else {
                    ff.delete();
                }

                //ff.delete();
            }

        }
    }

    private static void readFile(File file, int level) {
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for (File ff : f) {
            if (ff.isDirectory()) {
                readFile(ff, level);
            }
            else {
                String filePathBefore = ff.getAbsolutePath();
                String filePathAfter = filePathBefore.replaceFirst("before", "after");
                File file1 = new File(filePathAfter);
                if (file1.exists() && filePathBefore.indexOf(".java") > 0) {
                    /*log.info("before：{}", filePathBefore);
                    log.info("after：{}", filePathBefore);*/
                    //map.put(ff.getName(), filePathBefore);
                    readContant(ff,file1);
                }
            }

        }
    }

    private static void readContant(File before,File after){
        Map<String,String>map = new HashMap<>();
        BufferedReader beforeReader = null;
        BufferedReader afterReader = null;
        log.error("文件名：{}",after.getName());
        try {
                afterReader = new BufferedReader(new FileReader(after));
                String afterStr;
                int line = 0;
                while ((afterStr = afterReader.readLine()) != null) {

                    String afStr = afterStr.replaceAll(" ","");
                    if(!afStr.startsWith("/")&& !afStr.startsWith("import")&&!afStr.startsWith("*")&& afStr.indexOf("printStackTrace")<0) {
                        map.put(afStr.toLowerCase(), afStr);
                        //log.info("afStr:{}",afStr);
                    }
                }
                if(afterReader != null) {
                    afterReader.close();
                }
            mapFile.put(after.getName(),map);
            //log.info("map1.size:{}",map.size());

            //开始比较
            beforeReader = new BufferedReader(new FileReader(before));
            String beforeStr;

            while ((beforeStr = beforeReader.readLine()) != null) {
                line ++;
                String befStr = beforeStr.replaceAll(" ","");
                if(!befStr.startsWith("/") && !befStr.startsWith("import")&&!befStr.startsWith("*")&& befStr.indexOf("printStackTrace")<0 && !map.containsKey(befStr.toLowerCase())){
                    count++;
                    log.info("行数：{}, 代码块:{}",line,beforeStr);
                }
            }
            if(beforeReader != null) {
                beforeReader.close();
            }

            //return sbf.toString();
        } catch (IOException e) {
            log.error(e.getMessage());
        } finally {
            if (beforeReader != null) {
                try {
                    beforeReader.close();
                } catch (IOException e1) {
                    log.error(e1.getMessage());
                }
            }
        }
        //return sbf.toString();
    }

    /**
     * 从map中查询想要的map项，根据key
     */
    public static Map<String, Object> parseMapForFilter(Map<String, Object> map, String filters) {
        if (map == null) {
            return null;
        }
        else {
            map = map.entrySet().stream()
                    .filter((e) -> checkKey(e.getKey(), filters))
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
    private static boolean checkKey(String key, String filters) {
        if (key.indexOf(filters) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
}
