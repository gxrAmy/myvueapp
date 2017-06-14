import Vue from 'vue'
import Router from 'vue-router'
import HelloMusic from '@/components/HelloMusic'
import HelloSinger from '@/components/HelloSinger'
import search from '@/components/search'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMusic',
      component: HelloMusic
    },
    {
      path: '/singer',
      name: 'HelloSinger',
      component: HelloSinger
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
