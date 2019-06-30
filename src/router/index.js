import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Personal from '@/page/Personal'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
  ]
})
