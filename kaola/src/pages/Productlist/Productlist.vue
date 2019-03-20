<template>
  <div style="background-color: #F1F1F1;"> 
    <div class="banner-img"></div>
    <div id="product-box-contain">
      <Search title="搜索国家或地区" isIndexsearch=""/>

      <div class="search-box container">
        <ul class="clearfix">
          <li class="active" data-continentid="1">
            <span>亚洲</span>
          </li>
          <li data-continentid="2">
            <span>欧洲</span>
          </li>
          <li data-continentid="3">
            <span>大洋洲</span>
          </li>
          <li data-continentid="6">
            <span>美洲</span>
          </li>
          <li data-continentid="5">
            <span>非洲</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="country-box container">
      <div class="country-list active"></div>
      <div class="country-list">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="142">
              <span>阿塞拜疆</span>Azerbaijan
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="143">
              <span>巴林</span>Bahrain
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="177">
              <span>帕劳</span>Beluu er a Belau
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="176">
              <span>孟加拉</span>Bengal
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="97">
              <span>文莱</span>Brunei
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="86">
              <span>柬埔寨</span>Cambodia
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="133">
              <span>格鲁吉亚</span>Georgia
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="180">
              <span>香港</span>Hong Kong
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="163">
              <span>印度尼西亚</span>Indonesia
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="162">
              <span>伊朗</span>Iran
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="74">
              <span>日本</span>Japan
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="164">
              <span>约旦</span>Jordan
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="42">
              <span>韩国</span>Korea
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="175">
              <span>老挝</span>Laos
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="150">
              <span>黎巴嫩</span>Lebanon
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="64">
              <span>马来西亚</span>Malaysia
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="107">
              <span>马尔代夫</span>Maldives
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="156">
              <span>缅甸</span>Myanmar
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="105">
              <span>尼泊尔</span>Nepal
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="55">
              <span>菲律宾</span>Philippine
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="147">
              <span>卡塔尔</span>Qatar
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="181">
              <span>印度</span>Republic of India
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="43">
              <span>新加坡</span>Singapore
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="87">
              <span>斯里兰卡</span>Sri Lanka
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="44">
              <span>泰国</span>Thailand
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="89">
              <span>阿联酋</span>The United Arab Emirates
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="144">
              <span>东帝汶</span>Timor-Leste
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="116">
              <span>土耳其</span>Turkey
            </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <a href="javascript:;" data-oid="73">
              <span>越南</span>Vietnam
            </a>
          </div>
        </div>
      </div>
      <div class="country-list"></div>
      <div class="country-list"></div>
      <div class="country-list"></div>
    </div>
  </div>
</template>

<script>
import Search from '../../components/Search/Search'
export default {
  components:{
    Search
  }
};
</script>

<style scoped>
.banner-img {
  max-height: 300px;
  width: 100%;
  font-size: 0;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 360px;
  background-image: url(http://console.koalavisa.com/koalavisafiles/AppContentLine/2018/11/27/201811271732110609.png);
}

/*搜索*/
#product-box-contain {
  background: #fff;
  margin: 15px 0 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding-top: 15px;
}
.search-tit {
  width: 42%;
  margin: 0 auto 20px;
  position: relative;
}
#search_text {
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 2px solid #fa7e43;
  border-radius: 4px;
  letter-spacing: 2px;
  color: #fa7e43;
  text-indent: 20px;
  padding: 15px 0;
  background: url("../../../static/images/search-y.png") no-repeat 98% center;
}
.search-result {
  width: 100%;
  height: 280px;
  background: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  overflow: hidden;
  padding: 0 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  z-index: 99;

  overflow-y: scroll;
}
.search-result li {
  height: 56px;
  line-height: 56px;
  font-size: 16px;
  padding: 0 17px;
  color: #666666;
  border-bottom: 1px dashed #fa7e43;
}
.search-result li span {
  margin-right: 20px;
}

.search-result li:nth-last-child(1) {
  border-bottom: none;
}

.search-result li:hover {
  cursor: pointer;
  color: #fa7e43;
}

/*国家tab*/
#product-box-contain .search-box {
  text-align: center;
  padding: 0;
}

#product-box-contain .search-box ul {
  /* width: 54%; */
  margin: 0 auto;
  text-align: center;
}

#product-box-contain .search-box li {
  display: inline-block !important;
  margin: 0 4%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

#product-box-contain .search-box li span {
  padding: 5px 8px;
  color: #999999;
}

#product-box-contain .search-box li.active {
  color: #fa7e43;
  border-bottom: 2px solid #fa7e43;
}

#product-box-contain .search-box li.active span {
  color: #fa7e43;
}

/*国家显示*/
.country-box {
  width: 100%;
  margin: 0px auto 70px;
  font-size: 20px;
  letter-spacing: 1.7px;
  line-height: 50px;
}

.country-box .row {
  margin: 0;
}

.country-box .row > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.country-box a {
  color: #666666;
  font-size: 16px;
}

.country-box a:hover {
  color: #fa7e43;
}

.country-box a:link,
.country-box a:visited,
.country-box a:hover,
.country-box a:active {
  text-decoration: none;
}

.country-box a span {
  margin-right: 25px;
}

/* .country-box > div {
  display: none;
} */
</style>
