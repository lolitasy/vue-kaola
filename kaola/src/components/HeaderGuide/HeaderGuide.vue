<template>
  <div class="navbar-fixed-container header">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Koala" src="../../../static/images/logo.png">
      </a>
      <div class="top-a">
        <ul class="navbar-nav">
          <li :class="{active:'/index'===$route.path}" @click="goTo('/index')">
            <a href="javascript:;">首页</a>
          </li>
          <li :class="{active:'/productlist'=== $route.path}" @click="goTo('/productlist')">
            <a href="javascript:;">签证商品</a>
          </li>
          <li :class=" {active:'/enterprise' === $route.path}" @click="goTo('/enterprise')">
            <a href="javascript:;">企业合作</a>
          </li>
          <li :class=" {active:'/entrances' === $route.path}" @click="goTo('/entrances')">
            <a href="javascript:;" class="open-down-layer">APP下载</a>
          </li>
        </ul>
        <ul class>
          <li class="phone-num">
            境内：
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f1f1f1;
}
* {
  touch-action: pan-y;
  display: block;
}
.navbar-fixed-container {
  background: #ffffff;
  height: 100px;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  letter-spacing: 0;
}

.navbar-header {
  min-height: 100px;
}

.navbar-brand {
  padding: 20px 15px;
  float: left;
}

.navbar-con {
  border: none;
  background: #ffffff;
  margin-bottom: 0;
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    overflow: hidden;
  }
}
.navbar-fixed-container .navbar-toggle {
  margin-top: 30px;
}

.navbar-fixed-container .navbar-nav li {
  min-height: 100px;
  float: left;
}

.navbar-fixed-container .navbar-nav li.active a {
  color: #fa7e43;
  background: none;
}

.navbar-fixed-container .navbar-nav li.active a:hover {
  color: #fa7e43;
  background: none;
}

.navbar-fixed-container .navbar-nav li a {
  line-height: 100px;
  padding: 0 15px;
  font-size: 24px;
  margin-left: 55px;
  color: #333333;
}

.navbar-fixed-container .navbar-nav li a:hover,
.navbar-fixed-container .navbar-nav li a:active {
  background: none;
  text-decoration: none;
}

@media screen and (min-width: 995px) and (max-width: 1200px) {
  .navbar-fixed-container .navbar-right {
    display: none !important;
  }
}

@media screen and (min-width: 700px) and (max-width: 995px) {
  .navbar-fixed-container .navbar-right {
    display: none !important;
  }

  .navbar-fixed-container .navbar-nav li a {
    margin: 0;
    padding: 0 0 0 26px;
  }
}

.phone-num {
  font-size: 20px;
  line-height: 100px;
  padding-left: 55px;
}

.phone-num span {
  text-decoration: underline;
  color: #2ea5de;
}

.footer {
  padding: 30px;
  background: #fff;
}

.footer .top-margin {
  padding: 0;
}

.footer .media-body .media-heading {
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 30px;
}

.footer .media-body {
  font-size: 14px;
  color: #999999;
}

.footer p {
  font-size: 14px;
  color: #666666;
  line-height: 26px;
  letter-spacing: 2px;
}

.footer p.redict {
  font-size: 16px;
  color: #000000;
  margin-bottom: 5px;
  letter-spacing: 2.22px;
  margin-bottom: 12px;
}

.footer p.redict a {
  font-size: 16px;
  font-weight: 800;
  color: #000000;
}

.footer p.redict span {
  color: #000000;
}

.footer .media-body {
  display: table-cell;
}

@media screen and (min-width: 992px) {
  .footer .media .media-body {
    display: table-cell !important;
  }
  .footer .no-margin {
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .footer .no-margin {
    margin: 0;
  }

  .footer .no-margin {
    margin-bottom: 10px;
  }

  .footer p.redict {
    text-align: center;
    margin-bottom: 8px;
  }

  .footer p {
    line-height: 16px;
  }

  .footer .media .media-body {
    display: table-cell !important;
  }
}

@media screen and (max-width: 768px) {
  .header {
    min-height: 60px;
    height: 60px;
  }
  .header .navbar-header {
    min-height: 60px;
    height: 60px;
    text-align: center;
  }

  .header .navbar-header .navbar-toggle {
    padding: 4px 3px;
    margin-top: 20px;
  }
  .header .navbar-default .navbar-toggle:hover,
  .header .navbar-default .navbar-toggle:focus {
    background-color: #fff;
  }
  .header .navbar-header .navbar-brand {
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 15px 0;
  }

  .navbar-fixed-container .navbar-nav {
    margin: 0;
  }
  .navbar-fixed-container .navbar-nav li {
    float: left;
    min-height: 44px;
    height: 44px;
    width: 26%;
  }

  .navbar-fixed-container .navbar-nav li:nth-of-type(1) {
    width: 22%;
  }

  .navbar-fixed-container .navbar-nav li a {
    margin: 0;
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    color: #666;
    padding: 0;
  }

  .header .navbar-header .navbar-brand img {
    display: inline-block;
    height: 30px;
  }

  .header .navbar-toggle {
    border: 1px solid #fa7e43;
    border-radius: 4px;
  }

  .header .navbar-toggle .icon-bar {
    width: 16px;
    height: 1px;
    background-color: #fa7e43;
  }

  .footer .top-margin:nth-of-type(1) {
    width: 38%;
  }
  .footer .top-margin:nth-of-type(2) {
    width: 62%;
  }

  .footer p {
    font-size: 12px;
    line-height: 17px;
  }

  .footer p.redict {
    text-align: justify;
    margin-bottom: 8px;
  }

  .footer .media .media-body {
    display: none;
  }
  .footer .no-margin {
    margin: 0;
  }
  .footer .no-padding {
    padding: 0;
  }

  .footer .no-xs-margin {
    margin-left: 10px;
  }
  .footer {
    padding: 10px;
  }
  .footer .media-object {
    width: 60px;
  }
  .footer .media-left {
    padding-right: 0;
    margin: 0 auto;
  }
  .footer .media h4 {
    margin-top: 10px;
    text-align: center;
  }
  .footer p.redict a {
    font-size: 14px;
  }
}
</style>
