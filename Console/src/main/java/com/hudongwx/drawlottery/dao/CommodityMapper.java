package com.hudongwx.drawlottery.dao;

import com.hudongwx.drawlottery.common.base.BaseMapper;
import com.hudongwx.drawlottery.pojo.Commodity;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

public interface CommodityMapper extends BaseMapper<Commodity> {
    public List<Commodity> selectCommodities(@Param("key") String key,
                                             @Param("genres") List<Integer> genres,
                                             @Param("types") List<Integer> types,
                                             @Param("statuses") List<Integer> statuses,
                                             @Param("groundTimeFront") Date groundTimeFront,
                                             @Param("groundTimeAfter") Date groundTimeAfter,
                                             @Param("undercarriageTimeFront") Date undercarriageTimeFront,
                                             @Param("undercarriageTimeAfter") Date undercarriageTimeAfter,
                                             @Param("order") int order, @Param("direction") int direction, @Param("valid") int valid);

    int batchDelete(@Param("commodityId") List<Integer> commodityId);

    /**
     * 更新销售状态，此处更新时，上架时间为null则不会更新上架时间，下架时间为不论是否为null都会更新为设置的值.
     *
     * @param ids        id集合
     * @param state      状态 定义在{@link Commodity}中
     * @param groundTime 上架时间
     * @param underTime  下架时间
     * @return 更新结果
     */
    int updateState(@Param("ids") List<Integer> ids, @Param("state") int state, @Param("groundTime") Date groundTime, @Param("underTime") Date underTime);
}