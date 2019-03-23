<template>
  <section>
    <div class="phone-slidebar-box">
      <div class="slidebar-list">
        <div class="p-slidebar-icon slidebar-icon-download">
          <img src="../../../static/images/downicon.png" alt>
        </div>
        <div class="p-slidebar-icon slidebar-icon-phone">
          <img src="../../../static/images/phoneicon.png" alt>
        </div>
        <div class="p-slidebar-icon slidebar-icon-company">
          <a href="../enterprise/index.html">
            <img src="../../../static/images/pantericon.png" alt>
          </a>
        </div>
        <div class="slidebar-btn">···</div>
      </div>
    </div>
    <div class="slidebar-box">
      <div class="slidebar-icon-list">
        <div class="slidebar-icon slidebar-icon-download" @mouseenter="enter(1)" @mouseleave="leave(1)">
          <img  src="../../../static/images/qrcode-download.png" alt v-if="isApp"/>
          <img src="../../../static/images/qrcode-download-a.png" alt v-else>
          <p>APP下载</p>
        </div>
        <div class="slidebar-icon slidebar-icon-phone" @mouseenter="enter(2)" :class="!isPhone?'phonebox':''" @mouseleave="leave(2)">
          <img src="../../../static/images/customer-service-phone.png" alt v-if="isPhone"/>
          <img src="../../../static/images/customer-service-phone-a.png" alt v-else/>
          <p>客服电话</p>
          <div class="tel-phone" v-show="!isPhone">4001-132-526</div>
        </div>
        <div class="slidebar-icon slidebar-icon-company" @mouseenter="enter(3)" @mouseleave="leave(3)">
          <router-link tag='a' to='/enterprise'>
            <img src="../../../static/images/company-cooperation.png" alt v-if="isPrise"/>
            <img src="../../../static/images/company-cooperation-a.png" alt v-else/>
            <p>企业合作</p>
          </router-link>
        </div>
      </div>
      <div class="back-top" v-show="topStatus" @click="toTop">
        <img src="../../../static/images/back-top.png" alt>
        <p>返回顶部</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "vue-scroll",
    data() {
        return {
            topStatus: false,
            timer: null,
            isTop:true,
            index:'',
            isApp:true,
            isPhone:true,
            isPrise:true
        };
    },
    mounted: function() {
        window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件

    },
    methods: {
    //回到顶部
        handleScroll() {
            let scrollTop =
                window.pageYOffset || // 文档在窗口左上角垂直方向滚动的像素
                document.documentElement.scrollTop || // 获取滚动条位置
                document.body.scrollTop; // 网页被卷去的高
            //let clientHeight=document.documentElement.clientHeight; // 屏幕的高度
            if (scrollTop >= 200){
                this.topStatus = true;
            } else {
                this.topStatus = false;
            }
            if(!this.isTop){
                clearInterval(this.timer)
            }
            this.isTop=false;
        },
        toTop() {
        //document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.timer=setInterval(()=>{
                let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                let ispeed=Math.floor(scrollTop/2);
                document.documentElement.scrollTop=document.body.scrollTop=ispeed;
                this.isTop=true;
                if(scrollTop===0){
                    clearInterval(this.timer)
                }
            },40);
        },
        enter(index){
            if(index == 1){
                this.isApp=false;
            }else if(index == 2){
                this.isPhone=false;
            }else if(index == 3){
                this.isPrise=false;
            }
        },
        leave(index){
            if(index == 1){
                this.isApp=true;
            }else if(index == 2){
                this.isPhone=true;
            }else if(index == 3){
                this.isPrise=true;
            }
        }
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
    }
};
/* 侧边栏事件 */
// $(window).scroll(function () { //    页面滑动显示右侧固定栏
//     var st = $(document).scrollTop();
//     var $top = $(".back-top");
//     if (st > 150) {
//         $top.fadeIn();
//     } else {
//         $top.hide();
//     }
// $(".search-result").hide()

// if ($(window).width() < 768) {
//     //滚动屏幕时，把导航选项折叠起来
//     $(window).scroll(function () {
//         $(".top-a").collapse('hide');
//     });
// }

// });

// $(document).on("click", ".back-top", function () { //  返回顶部事件
//     $("html,body").animate({
//         scrollTop: 0
//     });
// });

// $(document).on("mouseover", ".slidebar-icon", function () { //    右边固定向上。鼠标移入更换样式
//     $(this).addClass("active");
//     $(this).find(".tel-phone").show();
//     if ($(this).hasClass("slidebar-icon-download")) {
//         $(this).find("img").attr("src", "../../static/images/qrcode-download-a.png")
//     } else if ($(this).hasClass("slidebar-icon-phone")) {
//         $(this).find(".tel-phone").text($(".phone-num span").text().trim());
//         $(this).find("img").attr("src", "../../static/images/customer-service-phone-a.png");
//         $(this).css({
//             "border-color": "#FA7E43",
//             "background": "#fff"
//         });
//     } else if ($(this).hasClass("slidebar-icon-company")) {
//         $(this).find("img").attr("src", "../../static/images/company-cooperation-a.png")
//     }

// });

// $(document).on("mouseout", ".slidebar-icon", function () { //    右边固定向上。鼠标移出更换样式

//     $(this).removeClass("active");
//     $(this).find(".tel-phone").hide();

//     if ($(this).hasClass("slidebar-icon-download")) {
//         $(this).find("img").attr("src", "../../static/images/qrcode-download.png")
//     } else if ($(this).hasClass("slidebar-icon-phone")) {
//         $(this).find("img").attr("src", "../../static/images/customer-service-phone.png");
//         $(this).css({
//             "border-color": "transparent",
//             "background": "none"
//         });
//     } else if ($(this).hasClass("slidebar-icon-company")) {
//         $(this).find("img").attr("src", "../../static/images/company-cooperation.png")
//     }

// });

// $(document).on("click", ".slidebar-icon-download", function () {
//     openDownLayer();
// });

/* 侧边栏事件结束 */
//};
</script>
<style scoped>
/* 侧边栏 */
.slidebar-box {
    position: fixed;
    bottom: 50px;
    right: 10%;
    text-align: center;
    z-index: 100000;
    color: #fff;
}

.slidebar-box .slidebar-icon-list {
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
}

.slidebar-box .slidebar-icon {
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px 0 10px;
    position: relative;
    cursor: pointer;
    border: 1px solid transparent;
}
.slidebar-box .slidebar-icon:hover p{
    color: #fa7e43;
}

.slidebar-box .slidebar-icon p,
.slidebar-box .back-top p {
    margin-top: 7px;
}

.slidebar-box .slidebar-icon a {
    color: #fff;
}

.slidebar-box .slidebar-icon.active a {
    color: #fa7e43;
}

.slidebar-box .slidebar-icon.active {
    color: #fa7e43;
}
.slidebar-icon.phonebox{
    border-color: #FA7E43;
    background: #fff;
}
.slidebar-box .slidebar-icon .tel-phone {
    position: absolute;
    width: 180px;
    height: 65px;
    line-height: 65px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    left: -180px;
    top: -1px;
    background: #fa7e43;
    border: 1px solid #fa7e43;
}

.slidebar-box .slidebar-icon a {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.slidebar-box .slidebar-icon::after {
  content: "";
  border-bottom: 1px dashed rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: -5px;
  left: 20%;
  width: 60%;
}

.slidebar-box .slidebar-icon:nth-of-type(3)::after {
  display: none;
}

.slidebar-box .back-top {
  cursor: pointer;
  /* display: none; */
  border-radius: 4px;
  border: 1px solid transparent;
  background: rgba(0, 0, 0, 0.9);
  margin-top: 10px;
  padding: 10px 0 6px;
}
.phone-slidebar-box {
  display: none;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 720px),
  only srceen and (max-device-width: 720px) {
  .slidebar-box {
    right: 0;
    display: none;
  }
  .phone-slidebar-box {
    display: block;
    position: fixed;
    bottom: 50px;
    right: 8px;
    text-align: center;
    z-index: 100000;
    color: #fff;
  }

  .slidebar-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    text-align: center;
    line-height: 50px;
    font-size: 26px;
    letter-spacing: -3px;
    position: absolute;
    right: 0;
    bottom: 0px;
    background: #fff;
    border: 2px solid #fa7e43;
    color: #fa7e43;
  }
  .slidebar-btn.active {
    background: #fa7e43;
    border: 2px solid #fff;
    color: #fff;
  }
  .slidebar-list {
    position: relative;
    width: 92px;
    height: 100px;
  }

  .phone-slidebar-box .p-slidebar-icon {
    cursor: pointer;
    border: 1px solid transparent;
    background: #fa7e43;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 1px 2px 8px 3px rgba(0, 0, 0, 0.3);
  }
  .p-slidebar-icon img {
    display: inline-block;
    width: 32px;
    height: 32px;
  }
  .slidebar-icon-download {
    position: absolute;
    left: 12px;
    top: 18px;
    display: none;
  }
  .slidebar-icon-phone {
    position: absolute;
    top: 0px;
    right: 0px;
    display: none;
  }
  .slidebar-icon-company {
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: none;
  }
}
</style>
