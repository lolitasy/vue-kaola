<template>
  <section id="main" class="main" style="background-color: #F1F1F1;overflow: hidden;">
    <div class="search-container">
      <div class="search-box">
           <Search title="职位搜索" isIndexsearch=""/>
      </div>
    </div>
    <div class="container bs-docs-container entrances-con ">
        <div class="phonebox col-xs-12 col-md-12">
        <div class="jiontitle titleone">关于考拉签证</div>
        <p
          class="jiontext"
        >考拉签证，由上海东湖出入境服务有限公司在2017年创立，是大型国企上海市东湖集团及机场集团旗下出入境公司。全球移民电子商务平台开创者，互联网应用服务提供商，已于多个国家设立分支机构，提供短期签证、海外移民、全球资产配置、海外教育、海外医疗、海外后续服务及机场出入境贵宾服务等。公司总部在上海，期待更多有梦想、有追求，愿意努力拼搏的精英人士加入我们。</p>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="jiontitle">加入璎腾</div>
            <div class="col-xs-12 col-md-offset-1 taglist clearfix">   
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import Search from '../../components/Search/Search';
export default {
    components:{
        Search
    }
};
</script>

<style scoped>
.taglist {
  margin-bottom: 55px;
  padding: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
  border-radius: 4px;
}
.entrances-con .titleone {
  margin-top: 30px;
  margin-bottom: 20px;
}
.jiontitle {
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #333333;
  letter-spacing: 2.67px;
  text-align: center;
}
.jiontext {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
  .searchvalue {
    border: 2px solid #fa7e43;
    border-radius: 4px;
    width: 702px;
    height: 63px;
    line-height: 63px;
    padding-left: 30px;
    float: left;
    margin-right: 20px;
  }
  .searchbox {
    width: 802px;
  }
  .searchbtn {
    width: 80px;
    height: 63px;
    background: #ef8451;
    border-radius: 4px;
    float: left;
  }
  .tag:nth-child(3n + 1) {
    margin-left: 0;
  }
  .col-md-offset-1 {
    margin-left: 6.333333%;
  }
  .jiontext {
    margin-bottom: 118px;
  }
  .tag {
    width: 27%;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-left: 3%;
    float: left;
    margin-top: 40px;
    cursor: pointer;
    padding-bottom: 10px;
  }
  .tag .tagleft {
    float: left;
  }
  .tag .tagleft div {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #fa7e43;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: 15px;
    margin-left: 30px;
  }
  .tag .tagleft p {
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    margin-top: 10px;
    margin-left: 30px;
  }
  .tag .tagright {
    float: right;
    margin-right: 20px;
    margin-top: 30px;
  }
.input-group-btn {
  left: 10px;
}
.search-container {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  height: 103px;
  top: 0px;
}
.search-container .search-box {
  position: relative;
  margin: 0 auto;
}
  .jiontitle {
    font-size: 16px;
  }
</style>
