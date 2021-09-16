import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/service1/Main'
import Sub from '@/components/service1/Sub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/sub',
      name: 'sub',
      component: Sub
    }
  ]
})
