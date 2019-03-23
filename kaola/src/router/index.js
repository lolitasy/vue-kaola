/*
  路由器对象模板 
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index'
import Productlist from '../pages/Productlist/Productlist'
import enterprise from '../pages/enterprise/enterprise'
import entrances from '../pages/entrances/entrances'
import synopsis from '../pages/synopsis/synopsis'
//import VueResource from 'vue-resource'

// 声明使用插件
Vue.use(VueRouter)
// Vue.use(VueResource)
export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/index',
      name:'index',
      component: index
    },
    {
      path: '/productlist',
      name:'productlist',
      component: Productlist
    },
    {
      path: '/enterprise',
      name:'enterprise',
      component: enterprise
    },
    {
      path: '/entrances',
      name:'entrances',
      component: entrances
    },
    {
      path:'/synopsis',
      name:'synopsis',
      component:synopsis
    },
    {path: '/', redirect: '/index'},
  ],
  mode:'history'
})
