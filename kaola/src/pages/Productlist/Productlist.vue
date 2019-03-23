<template>
  <section style="background-color: #F1F1F1; overflow: hidden;" id="main">
    <div class="banner-img"></div>
    <div id="product-box-contain">
      <Search title="搜索国家或地区" isIndexsearch/>
      <div class="search-box container">
        <ul class="clearfix">
          <li v-for="(status,index) in continent" :key="status.name" :class="{active:active===index}" @click="getcountry(status.oid,index)">
            <span>{{ status.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="country-box container">
      <div class="country-list">
        <div class="row">
          <div
            class="col-md-4 col-sm-6 col-xs-6"
            v-for="(value, index) in countryList"
            :key="index"
          >
            <a href="javascript:;" :data-oid="value.oid">
              <span>{{value.countryName}}</span>
              {{value.countryPinyin}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from '../../components/Search/Search'
import axios from 'axios'
export default {
    data(){
        return{
        countryList:'',
        continent:[
            {
                name:'亚洲',
                oid:0
            },{
                name:'欧洲',
                oid:1
            },{
                name:'大洋洲',
                oid:2
            },{
                name:'美洲',
                oid:3
            },{
                name:'非洲',
                oid:4
            }
        ],
        active: 0 
        }
    },
    components:{
        Search
    },
    methods:{
        getcountry(oid,index){
            let url='/static/mock/country.json'
            let params={
                oid:oid
            }
            axios.get(url,params).then(response=>{
                this.countryList=response.data.result;
            }).catch(error=>{
                alert('失败')
            })
            this.active = index
        }
        
    },
    created(){
        let url='/static/mock/country.json'
        axios.get(url).then(response=>{
            this.countryList=response.data.result;
        }).catch(error=>{
            alert('失败')
        })
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
  width: 1000px;
  margin: 0px auto 70px;
  font-size: 20px;
  letter-spacing: 1.7px;
  line-height: 50px;
}
.col-md-4 {
  width: 33.3333%;
  float: left;
}
.country-box .row {
  margin: 0;
  overflow: hidden;
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
