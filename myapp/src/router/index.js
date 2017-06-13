import Vue from 'vue'
import Router from 'vue-router'
import HelloMusic from '@/components/HelloMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMusic',
      component: HelloMusic
    }
  ]
})
