import Vue from 'vue'
import Router from 'vue-router'
import center from './center'
import movieDetails from './movieDetails'
import city from './city'
import movie from './movie'
import cinema from './cinema'

Vue.use(Router)

export default new Router({
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
      path: '*',
      redirect: '/movie/nowPlaying'
    }
  ]
})
