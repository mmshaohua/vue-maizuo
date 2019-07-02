// 电影详情页面
export default {
  path: '/movieDetails/:filmId',
  name: 'movieDetails',
  component: () => import('@/views/movieDetails')
}
