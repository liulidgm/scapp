import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import hello from '@/components/Hello'
import list from '@/pages/list/list'
import risk from '@/pages/risk/risk'
import detail from '@/pages/detail/detail'
import proCast from '@/pages/detail/proCast'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // hashbang: false,
  // history: true,
  routes: [
    { path: '/',component: index},//首页
    { path: '/list',component: list},//列表页
    { path: '/detail',component: detail},//项目详情页
    { path: '/proCast',component: proCast},//项目跟投人
    { path: '/risk',component: risk},//风险测评
  ]
})
