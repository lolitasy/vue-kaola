<template>
    <div class="search-tit">
        <input type="text" :class="isIndexsearch ? 'search_two' : 'search_one'" :placeholder="title">
        <div class="search-result" style="display: none;">
          <ul>
            <li data-continentid="2">
              <span>欧洲</span>
            </li>
            <li data-continentid="3">
              <span>大洋洲</span>
            </li>
            <li data-continentid="2">
              <span>欧洲</span>
            </li>
            <li data-continentid="3">
              <span>大洋洲</span>
            </li>
            <li data-continentid="2">
              <span>欧洲</span>
            </li>
            <li data-continentid="3">
              <span>大洋洲</span>
            </li>
            <li data-continentid="2">
              <span>欧洲</span>
            </li>
            <li data-continentid="3">
              <span>大洋洲</span>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        title:String,
        isIndexsearch:String
    },
    methods: {
    },
};
</script>

<style scoped>
.search-tit {
  width: 42%;
  margin: 0 auto 20px;
  position: relative;
}
.search_one {
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
.search_two {
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 2px solid #FA7E43;
  border-radius: 4px;
  letter-spacing: 2px;
  color: #fff;
  text-indent: 20px;
  padding: 15px 0;
  background: rgba(51, 51, 51, 0.50) url("../../../static/images/search.png") no-repeat 98% center;
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
</style>
