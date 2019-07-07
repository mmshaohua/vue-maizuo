import Vue from 'vue'
import Router from 'vue-router'
import center from './center'
import movieDetails from './movieDetails'
import city from './city'
import movie from './movie'
import cinema from './cinema'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // 主界面
    {
      path: '/',
      component: () => import('@/views/home'),
      children: [
        movie,
        cinema,
        center,
        {
          path: '',
          redirect: '/movie/nowPlaying'
        }
      ]
    },
    movieDetails,
    city,
    {
      path: 'cinema/search',
      name: 'search',
      component: () => import('@/components/CinemaSearch')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/user/card'),
      meta: {
        // 判断是否需要登陆
        isLogined: true
      }
    },
    {
      path: '*',
      redirect: '/movie/nowPlaying'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isLogined && !store.state.user.userInfo) {
    return next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
  next()
})

export default router
