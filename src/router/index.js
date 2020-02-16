import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    component: Home,
    meta: '首页'

  },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    }
  ]
})
