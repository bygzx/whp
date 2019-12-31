package com.ws.main;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;

@Slf4j
public class test1 {
    public static void main(String[] args) throws IOException {
        String rootDir = "/Users/huangbinfeng/work/svn/dev/hotDeploy/cpc/prod-cpc-parent/prod-cpc-service/src/main/resources/mybatis/mapper";
        String oralce = "/Users/huangbinfeng/work/svn/dev/hotDeploy/cpc/prod-cpc-parent/prod-cpc-service/src/main/resources/mybatis/mapper/mysql/product";
        String mysql = rootDir+"/mysql";
        String oracle1 = rootDir+"/oracle1";
        File file = new File(mysql);
        String a = "and upper(a.PRODUCT_OFFERING_NAME) like ('%'||upper(#{productOfferingName})||'%')";
        //a = a.replaceAll("\\|","");
        //System.out.println(a);
        //批量修改oracle目录结构
        //listAll(file,0);
        //删除mysql下的mapper
        //deletelistAll(file,0);
        //从oracle替换mysql下的mapper
        reaplacelistAll(file,0);
    }

    private static void reaplacelistAll(File file,int level) throws IOException {
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for(File ff : f){
            if (ff.getName().equals("ProdVersionMapper.xml")){
                log.error("********************************");
                log.error(file.getName());
            }
            if(ff.isDirectory()){
                reaplacelistAll(ff,level);
            }else {

                String orlce1Temp = ff.getAbsolutePath().replaceAll("oracle1","mysql");
                readFile(ff);
                //break;
            }

        }
    }

    private static void deletelistAll(File file,int level) throws IOException {
        System.out.println(getSapce(level)+file.getName());
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for(File ff : f){
            if(ff.isDirectory()){
                deletelistAll(ff,level);
            }else {
                ff.delete();
            }

        }
    }

    private static String readFile(File file){
        StringBuilder result = new StringBuilder();
        //log.error(file.getName());

        try{
            BufferedReader br = new BufferedReader(new FileReader(file));//构造一个BufferedReader类来读取文件
            String s = null;
            int i=1;
            while((s = br.readLine())!=null){//使用readLine方法，一次读一行
                //log.info(s);
                //result.append(System.lineSeparator()+s);
                if(s.toLowerCase().replaceAll(" ","").indexOf("from(")>=0 ){
                    //if(!s.toLowerCase().replaceAll(" ","").startsWith("<"))
                        log.info("差异：{},行数：{},文件：{},data:{}","from",i, file.getName(),s);
                }else if(s.toLowerCase().replaceAll(" ","").endsWith("from") ){
                    //if(!s.toLowerCase().replaceAll(" ","").startsWith("<"))
                    log.info("差异：{},行数：{},文件：{},data:{}","from",i, file.getName(),s);
                }
                /*if(s.toLowerCase().indexOf("like")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","like",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf(" to_date")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","to_date",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("rownum")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","rownum",i, file.getName(),s);
                }
                /*if(s.toLowerCase().indexOf("concat")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","concat",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("to_char")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","to_char",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("nvl")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","nvl",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("decode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","decode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("|")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","|",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("substr")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","substr",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("instr")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","instr",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("trunc")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","trunc",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("to_number")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","to_number",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sysdate")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sysdate",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("next_day")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","next_day",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("add_months")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","add_months",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sqlcode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlcode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("put_line")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","put_line",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sqlerrm")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlerrm",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("nextval")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","nextval",i, file.getName(),s);
                }if(s.toLowerCase().indexOf("sqlcode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlcode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sqlcode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlcode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sqlcode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlcode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("sqlcode")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","sqlcode",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("coalesce")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","coalesce",i, file.getName(),s);
                }
                if(s.toLowerCase().indexOf("now()")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","now()",i, file.getName(),s);
                }*/
                /*if(s.toLowerCase().indexOf("databaseId")>=0){
                    log.info("差异：{},行数：{},文件：{},data:{}","databaseId",i, file.getName(),s);
                }*/
                i++;
            }
            br.close();
        }catch(Exception e){
            e.printStackTrace();
        }
        //System.out.println(result.toString());
        return result.toString();
    }

    private static void listAll(File file,int level) throws IOException {
        System.out.println(getSapce(level)+file.getName());
        //获取指定目录下，所有的文件对象和文件名
        File[] f = file.listFiles();
        level++;
        for(File ff : f){
            //System.out.println(ff.getParentFile().getName());
            //System.out.println(ff.getAbsolutePath());
            String orlce1Temp = ff.getAbsolutePath().replaceAll("oracle","oracle1");

            //System.out.println(ff.getCanonicalPath());
            if(ff.isDirectory()){
                File fileTemp = new File(orlce1Temp);
                if(!fileTemp.exists() && !"mapper".equals(fileTemp.getName())){
                    fileTemp.mkdir();
                }
                listAll(ff,level);
            }else {
                //copyFileUsingApacheCommonsIO(ff, orlce1Temp);
                System.out.println(getSapce(level) + ff.getName());
                if("mapper".equals(ff.getParentFile().getName())){
                    //orlce1Temp = orlce1Temp.replaceAll("/mapper/","/");
                    //System.out.println(orlce1Temp);
                    String mapperName = "mapper/"+ff.getName();
                    orlce1Temp = orlce1Temp.replaceAll(mapperName, ff.getName());
                    File fileTemp = new File(orlce1Temp);
                    copyFileUsingApacheCommonsIO(ff,fileTemp);
                }else{
                    File fileTemp = new File(orlce1Temp);
                    copyFileUsingApacheCommonsIO(ff,fileTemp);
                }
                //System.out.println(orlce1Temp);
            }

        }
    }

    public static String getSapce(int level){
        StringBuilder sb = new StringBuilder();
        for(int x=0;x<level;x++){
            sb.append("|----");
        }
        return sb.toString();
    }

    private static void copyFileUsingApacheCommonsIO(File source, File dest) throws IOException {
        Files.copy(source.toPath(), dest.toPath());
     }
}
