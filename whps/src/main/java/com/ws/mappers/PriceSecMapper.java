package com.ws.mappers;

import com.ws.base.BaseMapper;
import com.ws.dto.PriceMinAvgDTO;
import com.ws.dto.PriceSecDTO;
import com.ws.entity.PriceSec;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PriceSecMapper extends BaseMapper<PriceSec, Integer> {

    @Insert("insert into pipelinedb.stream_price_sec(c, t, ts, p, l" +
            ", h, o, buy, lc, zd, sell, v, zdf, crt_time) values (" +
            "#{priceSec.c}, #{priceSec.t}, #{priceSec.ts}, #{priceSec.p}, #{priceSec.l}" +
            ", #{priceSec.h}, #{priceSec.o}, #{priceSec.buy}, #{priceSec.lc}, #{priceSec.zd}" +
            ", #{priceSec.sell}, #{priceSec.v}, #{priceSec.zdf}, #{priceSec.crtTime})")
    int pushIntoStreamPriceSec(@Param("priceSec")PriceSec priceSec);

    @Select("select sum(count) from pipelinedb.test_view")
    int getCount();

    @Select("select * from pipelinedb.view_price_sec")
    List<PriceSec> getPriceSecList();
    //获取一分钟数据汇总
    @Select("select e.c, e.h, e.l, e.avgs v,i.t, i.ts, i.o, i.buy, i.lc, i.zd, i.sell, i.zdf, i.crt_time crtTime, i.p " +
            "   from ( " +
            "SELECT c, " +
            "MAX ( p ) h, " +
            "MIN ( p ) l, " +
            "AVG ( p ) avgs " +
            "FROM " +
            "( SELECT c, t, ts, p, l, h, o, buy, lc, zd, sell, v, zdf, crt_time FROM pipelinedb.view_price_sec ) f  " +
            "GROUP BY " +
            "C)e, " +
            "    (select d.* from pipelinedb.view_price_sec d,(select c,max(id)id from pipelinedb.view_price_sec b group by c)h  " +
            "where d.id=h.id) i " +
            "where e.c=i.c")
    List<PriceSecDTO> getPriceMinAvgList();

}
