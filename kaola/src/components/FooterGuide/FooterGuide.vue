<template>
  <section class="footer">
    <div class="footerbody">
      <div class="leftmedia">
        <div class="media clearfix">
          <div class="media-left">
            <img class="media-object" src="../../../static/images/wechat.png" alt="微信">
            <!-- <h4 class="visible-xs-block" style="color: #1F9D0A;">官方微信</h4> -->
          </div>
          <div class="media-body ">
            <h4 class="media-heading" style="color: #1F9D0A;">微信服务号</h4>为公司顾客提供出国业务相关的服务
          </div>
        </div>
        <div class="media clearfix">
          <div class="media-left">
            <img class="media-object" src="../../../static/images/weibo.png" alt="微博">
            <!-- <h4 class="media-heading" style="color: #D0021B;">官方微博</h4> -->
          </div>
          <div class="media-body">
            <h4 class="media-heading" style="color: #D0021B;">官方微博</h4>每日为您推送最权威、最新鲜的海外资讯
          </div>
        </div>
      </div>
      <div class="rightmedia">
        <p class="redict">
          <router-link tag='a' to='/index'>公司简介</router-link>
          <span>·</span>
          <router-link tag='a' to='/index'>联系我们</router-link>
          <span>·</span>
          <router-link tag='a' to='/index'>加入我们</router-link>
        </p>
        <p>璎腾教育版权所有&nbsp;&nbsp;&nbsp;东湖加澳旗下出国品牌&nbsp;&nbsp;沪ICP备12024148号</p>
        <p>本平台顾客个人信息将不会被泄漏给其他任何机构和个人</p>
        <p>本平台logo和图片都已经申请保护，未经授权不得使用</p>
        <p>
          有任何问题请联系 | 电话：
          <span class="tel-phone"></span>（工作时间：周一至周日 9:00－22:00）
        </p>
        <p>地址：上海市黄浦区淮海东路99号恒积大厦16D-H座</p>
        <p>© 2017-2018 All rights reserved</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
    .footer {
        padding: 30px;
        background: #fff;
    }
    .footerbody{
        width: 1200px;
        margin: 0 auto;
    }
    .leftmedia{
        float: left;
        margin-left: 100px;
    }
    .rightmedia{
        float: left;
        margin-left: 8%;
    }
    .media-left{
        float: left;
        
    }
    .media-body{
        float: left;
        margin-left: 10px;
    }
    .footer .media-body {
        font-size: 14px;
        color: #999999;
    }
    footer .media-body .media-heading {
        font-weight: 800;
        font-size: 16px;
        margin-bottom: 12px;
        line-height: 30px;
    }
    .footer p.redict a {
        font-size: 16px;
        font-weight: 800;
        color: #000000;
    }
    .footer p {
        font-size: 14px;
        color: #666666;
        line-height: 26px;
        letter-spacing: 2px;
    }
</style>
