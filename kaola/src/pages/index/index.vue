<template>
    <div id="main">
        <div class="banner clearfix">
             <div class="banner-swiper">
                <div class="swiper-wrapper">
                    <div class='swiper-slide'><img src='../../../static/images/min-banner.png' alt=''></div>
                    <div class='swiper-slide'><img src='../../../static/images/bigbanner.png' alt=''></div>
                    <div class='swiper-slide'><img src='../../../static/images/bigbanner2.jpg' alt=''></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <div class="search-container">
                <div class="search-box clearfix">
                    <Search title="搜索国家或地区" isIndexsearch="one"/>
                </div>
            </div> 
            <!-- <div class="bigbox">
              <button class="btn" @click="showBox=!showBox">切换</button>
              <transition name="box">
                <div class="box" v-show="showBox"> I am a box</div>
              </transition>
            </div> -->
        </div>
  </div>

</template>

<script>
import Search from '../../components/Search/Search'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
export default {
    data(){
      return {
        showBox:false
      }
    },
    mounted(){
        //创建一个swiper实例对象，来实现轮播
        new Swiper('.banner-swiper', {
              loop: false,
              effect: 'fade',
              autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
        })
    },
    components:{
        Search
    },
    created(){
      //const url='http://jsonplaceholder.typicode.com/posts';
      // this.$http.get(url)
      // .then((data)=>{
      //   console.log(data)
      // })
      //使用axios发送请求
      // axios.get(url).then(response=>{
      //   const result=response.data;
      //   console.log(result);
      // }).catch(error=>{
      //   alert('失败')
      // })
    }
}
</script>

<style>

.bigbox{
  width: 150px;
  height: 150px;
}
.box{
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 100px;
  background: red;
  color: #fff;
  opacity: 1;
  margin-left: 0;
}

.box-enter-active,.box-leave-active{
  transition: all 0.8s;
}
.box-enter{
  opacity: 0;
  margin-left: 100%;
}
.box-leave-active{
  opacity: 0;
  margin-left: 100%;
}
.container {
  width: 1200px;
  margin: 0 auto;
}


/* 大banner */

.banner{
  height: 880px;
  background-color: #ccc;
  padding: 0;
}


.banner .banner-swiper {
  width: 100%;
  height: 880px;
  position: relative;
  overflow: hidden;
}

.banner .banner-swiper .swiper-slide {
  height: 880px;
  width: 100%;
  background: #ccc;
}


.banner .banner-swiper .swiper-slide a {
  width: 100%;
  height: 100%;
  display: block;
}

.banner .banner-swiper .swiper-slide a img {
  width: 100%;
  height: 100%;
  display: block;
}

.banner .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
  display: block;
}

.banner .banner-swiper .swiper-pagination-bullet {
  width: 50px;
  height: 4px;
  margin-right: 20px;
  background: #FFFFFF;
  border-radius: 0;
  opacity: 1;
  border: none;
}

.banner .banner-swiper .swiper-pagination-bullet-active {
  background: #FA7E43;
  border: none;
}

.banner .banner-swiper .swiper-pagination {
  position: absolute;
  bottom: 370px;
  left: auto;
  width: auto;
  right: 350px;
}

.search-container {
  position: relative;
  top: -470px;
  z-index: 1001;
  width: 100%;
  margin: 0 auto;
}

.search-container .search-box {
  width: 100%;
  position: relative;
}


</style>
