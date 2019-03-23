<template>
<section id="main" style="background-color: #F1F1F1;" >
    <div class="center">
        <div class="companyBan"></div>
        <div class="list-nav">
            <div class="nav-box">
                <ul class="nav-ul">
                    <li class="koala active">关于考拉签证</li>
                    <li class="contact">联系我们</li>
                </ul>
            </div>
        </div>
        <div class="desc" style="display: none;">
            <h1>公司简介</h1>
            <p class="desc-day">发布日期：2018-08-03 00:00</p>
            <div>
                <p>
                    近年来中国出境的游客人数不断攀升，已连续多年位列全球第一大出境旅游客源国，2017年中国出境旅游人数达到1.3亿人次。签证被业内定位为是至关重要的流量入口，有近900亿元的市场规模。随着OTA纷纷发力在线签证市场，在线签证成为当前OTA加码年轻客群的一种新方式。考拉签证抓住了这两年出境游的机会，通过技术和产品服务的升级来树立自己在这一领域的专业性。
                </p>
                <p>
                    在早期的出境行业中，签证办理市场鱼龙混杂，线下旅行社仰仗资源的优势，进行效率低下的人工填写办理模式，很多人为了办理签证需要一次次跑旅行社。考拉签证改善了这一痛点，通过技术和产品的能力将过去填表等这一线下行为线上化，将纸质的签证办理流程数字化，用户只需要在手机上就能完成全部的办理流程。
                </p>
                <p>
                    在产品和技术上，本着以用户体验为核心的服务理念，考拉签证进行了多次技术迭代更新，并集合了多项AI人工智能系统：OCR电子技术应用，证件信息智能填表、证件照片智能处理，美颜一键快捷生成，、信息数据安全加密，三防验证技术等。
                </p>
                <p>
                    C端的用户在使用过这些功能后都感受到了办理的便捷，考拉签证复购率的增长就是最为显著的效果，目前考拉签证的复购率达到了30%，从在线旅游单一服务而言这是相当可观的数据。
                </p>
                <p>
                    在签证办理的流程中，符合各国大使馆要求的资质的旅行社才是服务的落地环节，只是过去没有这样的技术和服务来优化旅行社办理的流程。考拉签证针对B端寻求了大量的优质顶端资源，与各个项目供应商完美衔接，最后输出C端，使用考拉签证的用户都能享受整套技术服务的支持和便捷。
                </p>
                <p>
                    “想走就走，通行全球”，这是考拉签证APP的slogan，也是给自己未来定下的发展方向，考拉签证将会继续加大产品服务和产品的研发上的投入，包括尝试利用区块链技术保护用户数据隐私，还有就是要继续跑通签证服务的供应链，包括尽力去打通使馆直连，为的是为更多使用考拉签证APP的用户带来真正意义上的快捷高效。
                </p>
            </div>
        </div>
        <div class="desc2" style="display: none;">
            <div>企业/媒体/市场/产品合作</div>
            <p>bd@effulgence-group.com</p>
            <div>人员招聘</div>
            <p>hr@effulgence-group.com</p>
            <div>服务热线</div>
            <p class="hotphone">4001-132-526</p>
            <div>服务电话</div>
            <p class="serverphone">021-5187-7570</p>
            <div>公司地址</div>
            <p>上海市淮海东路99号16D-H</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
.center {
    width: 1200px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 100px;
    overflow: hidden;
}

.list-nav {
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.20);
}

.nav-box {
    overflow: hidden;
}

.nav-box ul li {
    float: left;
    line-height: 60px;
    font-size: 20px;
    color: #666;
    cursor: pointer;
    width: 50%;
    text-align: center;
}

.nav-box ul li a {
    color: #666;
    text-decoration: none;
}

.nav-box ul li a:hover {
    color: #FA7E43;
}

.active {
    color: #FA7E43;
}
.desc{
    width: 955px;
    margin: 0 auto;
    margin-bottom: 115px;
}
.desc h1{
    font-size: 20px;
    color: #333;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 10px;
}
.desc .desc-day{
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 30px;
}
.desc div{
    color: #666;
    font-size: 16px;
}
.desc div p{
    margin-bottom: 20px;
}
.nav-box ul li.active a{
    color: #FA7E43;
}
.desc2{
    width: 1200px;
    margin:0 auto;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
    box-sizing: border-box;
    padding:40px 0px 60px 236px;
    margin-bottom: 20px;
}
.desc2 div{
    color: #333;
    font-size:16px;
    margin-bottom:15px;
    font-weight: bold;
}
.desc2 p{
    color: #666;
    font-size:16px;
    margin-bottom: 20px;
}
.companyBan{
    width: 100%;
    font-size: 0;
    max-height: 400px;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 360px;
    background-image: url('../../../static/images/companyB.png');
}
/* .companyBan img{
    width: 1200px;
    height: 360px;
    background-image: url('../../../static/images/companyB.png');
} */
@media only screen and (-webkit-min-device-pixel-ratio:1.5) and (max-width:720px),
only srceen and (max-device-width:720px) {
    .active{
        color: #FA7E43;
        border-bottom: 3px solid #FA7E43;
    }
    .center {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }

    .center img {
        width: 100%;
        height: 172px;
    }

    .list-nav {
        width: 100%;
        background: #fff;
        margin-bottom: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.20);
        margin-top:10px;
    }

    .nav-box {
        overflow: hidden;
    }

    .nav-box ul li {
        float: left;
        line-height:44px;
        font-size: 16px;
        color: #999;
        cursor: pointer;
        width: 29%;
        text-align: center;
    }

    .nav-ul {
        overflow: hidden;
        margin-bottom: 0;
    }
    .nav-box ul li:nth-child(1){
        margin-left: 14%;
        margin-right: 14%;
    }
    .nav-box ul li a {
        color: #666;
        text-decoration: none;
    }

    .nav-box ul li a:hover {
        color: #FA7E43;
    }
    .desc{
        width:85%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .desc h1{
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-top: 30px;
        margin-bottom:5px;
    }
    .desc .desc-day{
        font-size: 12px;
        color: #666;
        text-align: center;
        margin-bottom: 12px;
    }
    .desc div{
        color: #666;
        font-size: 14px;
    }
    .desc div p{
        margin-bottom: 20px;
    }
    .desc2 {
        width: 90%;
        margin: 0 auto;
        background: #FFFFFF;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
        box-sizing: border-box;
        padding: 20px 0 10px 0px;
        margin-bottom: 20px;
    }
    .desc2 div {
        color: #333;
        font-size: 14px;
        margin-bottom: 5px;
        text-align: center;
    }
    .desc2 p{
        color: #666;
        font-size:14px;
        text-align: center;
    }
}
</style>
