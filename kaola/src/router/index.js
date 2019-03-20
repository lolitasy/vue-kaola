/*
  路由器对象模板 
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index'
import Productlist from '../pages/Productlist/Productlist'
import enterprise from '../pages/enterprise/enterprise'
import entrances from '../pages/entrances/entrances'
//import VueResource from 'vue-resource'

// 声明使用插件
Vue.use(VueRouter)
// Vue.use(VueResource)
export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/productlist',
      component: Productlist
    },
    {
      path: '/enterprise',
      component: enterprise
    },
    {
      path: '/entrances',
      component: entrances
    },
    {path: '/', redirect: '/index'},
  ],
  mode:'history'
})
