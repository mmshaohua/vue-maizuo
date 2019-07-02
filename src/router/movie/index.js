// 电影页面
export default {
  path: '/movie',
  name: 'movie',
  component: () => import('@/views/home/movie'),
  children: [
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    },
    {
      path: 'nowPlaying',
      name: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      name: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    }
  ]
}
