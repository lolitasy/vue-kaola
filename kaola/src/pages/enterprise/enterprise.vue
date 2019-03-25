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
.rightinput input{
  box-sizing: border-box;
  display: block;
    width: 90%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
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

</style>
