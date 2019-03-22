<template>
  <section class="headbox">
    <div class="header">
        <router-link class="logo" tag='a' to='/index'>
        <img alt="Koala" src="../../../static/images/logo.png">
        </router-link>
        <div class="menu clearfix">
            <ul class="headmenu clearfix">
                <li><router-link tag='a' :class="{active:'/index'===$route.path}" to='/index'>首页</router-link></li>
                <li style="position: relative;">
                        <router-link tag='a' :class="{active:'/productlist'=== $route.path}" class="shangp" to='/productlist'>
                        签证商品</router-link>
                        <ul class="nextmenu">
                            <p>商品详列表</p>
                            <p>商品详情页</p>
                        </ul>
                </li>
                <li><router-link tag='a' :class=" {active:'/enterprise' === $route.path}" to='/enterprise'>企业合作</router-link></li>
                <li><router-link tag='a' :class=" {active:'/entrances' === $route.path}" to='/entrances'>APP下载</router-link></li>
                <li class="phone-num">
                境内：
                <span>4001-132-526</span>
                </li>
            </ul>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style scoped>
    * { touch-action: pan-y; }/*允许样式重叠*/
    .headbox{
        height: 100px;
        position: fixed;
        top: 0;
        z-index: 9999;
        background: #fff;
        width: 100%;
    }
    .header{
        width: 1200px;
        height: 100px;
        margin: auto;
    }
    .logo{
        width: 245px;
        height: 100px;
        padding: 20px 15px;
        box-sizing: border-box;
        float: left;
    }
    .logo img{
        width: 100%;
    }
    .menu{
        width: 955px;
        height: 100px;
        float: left;
    }
    .menu ul{
        float: left;
    }
    .headmenu a{
        color: #333333;
        
    }
    .headmenu li{
        line-height: 100px;
        padding: 0 15px;
        font-size: 24px;
        margin-left: 55px;
        float: left;
    }
    .headmenu a.active{
        color: #FA7E43;
        background: none;
    }
    .headmenu a:hover{
        color: #FA7E43;
        background: none;
    }
    .shangp{
        position: relative;
        z-index: 4;
    }
    .nextmenu{
        position: absolute;
        z-index: 3;
         display: inline-block; 
        height: 130px;
        background: #fff;
        top: 26px;
        left: 0;
        width: 100%;
        padding-top: 44px;
        border: 1px solid rgba(216,216,216,0.29);
        border-top: none;
        border-radius: 0 0 3px 3px;
        /* display: none; */
        box-sizing: border-box;
        opacity: 0; 
        visibility:hidden; 
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);

    }
    ul.headmenu li:hover ul.nextmenu{
        /* display: block; */
        visibility: visible; 
        opacity: 1; 
        -webkit-transform: translateY(-2px); 
        transform: translateY(-2px);
    }
    .nextmenu p{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        color: #9b9b9b;
        text-align: center;
        cursor: pointer;
    }
    .nextmenu p:hover{
        color: #FA7E43;
    }
    .phone{
        float: left;
    }
    .headmenu li.phone-num{
        line-height: 100px;
        font-size: 20px;
        margin-left: 50px;
        color: #333333;
        float: left;
    }
    .phone-num span {
        text-decoration: underline;
        color: #2EA5DE;
    }
</style>
