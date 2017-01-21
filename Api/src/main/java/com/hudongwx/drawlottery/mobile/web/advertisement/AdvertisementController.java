package com.hudongwx.drawlottery.mobile.web.advertisement;

import com.alibaba.fastjson.JSONObject;
import com.hudongwx.drawlottery.mobile.service.advertisement.IAdvertisementService;
import com.hudongwx.drawlottery.mobile.web.BaseController;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 开发公司：hudongwx.com<br/>
 * 版权：294786949@qq.com<br/>
 * <p>
 *
 * @author wu
 * @version 1.0, 2017/1/6 <br/>
 * @desc <p>
 * <p>
 * 创建　wu　2017/1/6 <br/>
 * <p>
 * 商品广告管理
 * <p>
 * @email 294786949@qq.com
 */
@RestController
@Api(value = "AdvertisementController", description = "商品广告管理")
public class AdvertisementController extends BaseController {

    @Autowired
    IAdvertisementService adService;

    /**
     * 广告
     * @return
     *
     */
    @RequestMapping(value = "/api/v1/pub/ad/show", method = {RequestMethod.POST, RequestMethod.GET})
    public JSONObject queryAdvertisement() {
        return success(adService.selectAdvertisement());
    }
}
