package com.ws.mappers;

import com.ws.base.BaseMapper;
import com.ws.entity.PriceMin;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PriceMinMapper extends BaseMapper<PriceMin, Integer> {

    @Select("select c, t, ts, p, l, h, o, buy, lc, zd, sell, v, zdf, crt_time crtTime from price_min a where a.c=#{c} order by id desc limit #{count} ")
    List<PriceMin> getLastPriceLimitBymin(@Param("c")String  c, @Param("count")Integer count);
}
