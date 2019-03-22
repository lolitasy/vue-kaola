<template>
  <section id="main">
    <div class="companyBan"></div>
    <div class="conbox">
      <div class="enterprise-con">
        <p class="m-titie">请填写以下信息，我们将在收到信息后尽快致电贵方</p>
        <form id="regist_form">
          <div class="inputheight">
            <label for="enterpriseName" class="center-vertical">企业名称</label>
            <div class="rightinput">
              <input
                type="text"
                class="form-control"
                name="enterpriseName"
                id="enterpriseName"
                placeholder="请填写全称"
              >
              <p class="tips"></p>
            </div>
          </div>
          <div class="inputheight">
            <label for="enterpriseScale" class="center-vertical">企业规模</label>
            <div class="rightinput">
              <input
                type="text"
                class="form-control"
                name="enterpriseScop"
                id="enterpriseScale"
                placeholder="请输入企业规模"
              >
              <p class="tips"></p>
            </div>
          </div>
          <div class="inputheight">
            <label for="enterpriseAddress" class="center-vertical">企业地址</label>
            <div class="rightinput">
              <input
                type="text"
                class="form-control"
                name="enterpriseAddres"
                id="enterpriseAddress"
                placeholder="请输入公司地址"
              >
              <p class="tips"></p>
            </div>
          </div>
          <div class="inputheight">
            <label for="nameReceiver" class="center-vertical">对接人姓名</label>
            <div class="rightinput">
              <input
                type="text"
                class="form-control"
                name="aceptName"
                id="nameReceiver"
                placeholder="请填写对接人姓名"
              >
              <p class="tips"></p>
            </div>
          </div>
          <div class="inputheight">
            <label for="contactWay" class="center-vertical">联系方式</label>
            <div class="rightinput">
              <input
                type="phone"
                class="form-control contactWay"
                name="aceptPhone"
                id="contactWay"
                placeholder="请填写固话或手机号码"
              >
              <p class="tips"></p>
            </div>
          </div>
          <div class="subminbtn">提交</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.companyBan{
      background-image: url('../../../static/images/enterprise-banner.png');
    height: 360px;
}
.control-label{
    color: #666;
    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
}
.conbox{
    background: #fff;
    padding-bottom: 20px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
    overflow: hidden;
    margin-bottom: 10px;
}
.subminbtn{
    text-align: center;
    margin-top: 30px;
}
.companyBan{
    max-height: 300px;
    width: 100%;
    font-size: 0;
    height: 300px;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.companyBan img{
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: #222;
    background-repeat: no-repeat;
    background-position: center 0;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;

}
#regist_form{
    width: 480px;
    margin:0 auto;
}
.enterprise-con{
}
.subminbtn{
    background: #FA7E43;
    border-radius: 4px;
    color: #fff;
    width: 216px;
    height: 40px;
    border: 0;
    font-size: 20px;
    line-height: 40px;
    margin-left: 139px;
    cursor: pointer;
}
.m-titie{
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
}
.inputheight{
    margin-bottom: 5px;
    overflow: hidden;
}
.center-vertical {
    float: left;
    text-align: left;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 0px;
    line-height: 36px;
    font-size: 16px;
    color: #666;
    font-weight: normal;
}
.rightinput {
    float: right;
    width: 392px;
}
.rightinput p{
    margin: 0px;
    margin-top: 5px;
    color: #ee1f1f;
    text-indent: 10px;
}
/*弹窗*/
.m-commask{
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgb(0, 0, 0);
    opacity: 0.3;
    position: fixed;
    left: 0;
    top: 0;
}
.m-combody{
    width: 540px;
    height: 340px;
    background: #FAFAFA;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    margin: 0 auto;
    position: absolute;
    z-index: 99999;
    left: 50%;
    margin-left: -270px;
    top: 50%;
    margin-top: -170px;
}
.u-close{
    width: 40px;
    height:40px;
    display: block;
    background: url('../../../static/images/down-close.png')no-repeat;
    background-size: 40px 40px;
    position: absolute;
    right: 20px;
    top: 20px;
}
.yesicon{
    width: 83px;
    height: 83px;
    display: block;
    background: url('../../../static/images/icon-ok.png') no-repeat;
    background-size: 83px 83px;
    margin: 0 auto;
    margin-top: 90px;
}
.m-combody p{
    text-align: center;
    margin-top: 30px;
    color: #666;
    font-size: 30px;
}

@media only screen and (-webkit-min-device-pixel-ratio:1.5) and (max-width:720px),
only srceen and (max-device-width:720px) {
    .control-label{
        color: #666;
        font-size: 18px;
        font-weight: normal;
        line-height: 18px;
    }
    .conbox{
        background: #fff;
        padding-bottom: 20px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
        overflow: hidden;
        margin-bottom: 10px;
    }
    .companyBan img{
        width: 100%;
        height: 172px;
        overflow: hidden;
        background: #222;
        background-repeat: no-repeat;
        background-position: center 0;
        -webkit-background-size: cover;
        background-size: cover;
        position: relative;

    }
    #regist_form{
        width:100%;
        margin:0 auto;
    }
    input::-webkit-input-placeholder {
        font-size: 12px;
    }
    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        font-size: 12px;
    }
    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        font-size: 12px;

    }
    input:-ms-input-placeholder { /* Internet Explorer 10+ */
        font-size: 12px;
    }
    .subminbtn{
        background: #FA7E43;
        border-radius: 4px;
        color: #fff;
        width: 40%;
        height: 34px;
        border: 0;
        font-size: 15px;
        line-height: 34px;
        margin:0 auto;
        cursor: pointer;
        text-align: center;
        margin-top: 30px;
    }
    .m-titie{
        font-size: 16px;
        font-weight: bold;
        color: #000;
        text-align: center;
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .inputheight{
        margin-bottom:9px;
        overflow: hidden;
    }
    .center-vertical {
        margin-left: 3%;
        float: left;
        text-align: left;
        display: inline-block;
        max-width: 100%;
        margin-bottom: 0px;
        line-height: 36px;
        font-size: 16px;
        font-weight: normal;
        color: #666;
        width: 29%;
        display: none;
    }
    .rightinput {
        float: right;
        width: 76%;
        margin-right: 12%;
    }
    .rightinput p{
        margin: 0px;
        margin-top: 5px;
        color: #ee1f1f;
        text-indent: 10px;
    }
    /**/
    .m-combody{
        width: 90%;
        height: 225px;
        background: #FAFAFA;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
        border-radius: 4px;
        margin: 0 auto;
        position: absolute;
        z-index: 99999;
        left: 50%;
        margin-left: -45%;
        top: 50%;
        margin-top: -145px
    }
    .close{
        width: 40px;
        height:40px;
        display: block;
        background: url('../../../static/images/down-close.png')no-repeat;
        background-size: 40px 40px;
        position: absolute;
        right: 20px;
        top: 20px;
    }
    .yesicon{
        width: 60px;
        height: 60px;
        display: block;
        background: url('../../../static/images/icon-ok.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        margin-top: 82px;
    }
    .m-combody p{
        text-align: center;
        margin-top: 20px;
        color: #666;
        font-size: 20px;
    }
}

</style>
