import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    movieNowList: JSON.parse(window.localStorage.getItem('movieNowList')) || [],
    movieComingList: JSON.parse(window.localStorage.getItem('movieComingList')) || [],
    // 页码
    pageNum: 1,
    // 每页显示条数
    pageSize: 10
  },
  mutations: {
    mutationsMovieNowList (state, payload) {
      state.movieNowList = payload.movieNowList
    },
    mutationsMovieComing (state, payload) {
      state.movieComingList = payload.movieComingList
    }
  },
  actions: {
    actionsMovieNowList ({ commit, state, rootState }) {
      Toast.loading({ duration: 0, mask: true, message: '加载中...' })
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          'cityId': rootState.city.curCityId,
          'pageNum': state.pageNum,
          'pageSize': state.pageSize,
          'type': 1,
          'k': 9154900
        }
      }).then(response => {
        Toast.clear()
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.films)
          commit('mutationsMovieNowList', {
            movieNowList: res.data.films
          })
          window.localStorage.setItem('movieNowList', JSON.stringify(res.data.films))
        }
      })
    },
    actionsMovieComing ({ commit, state, rootState }) {
      Toast.loading({ duration: 0, mask: true, message: '加载中...' })
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          'cityId': rootState.city.curCityId,
          'pageNum': state.pageNum,
          'pageSize': state.pageSize,
          'type': 2,
          'k': 9154900
        }
      }).then(response => {
        Toast.clear()
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.films)
          commit('mutationsMovieComing', {
            movieComingList: res.data.films
          })
          window.localStorage.setItem('movieComingList', JSON.stringify(res.data.films))
        }
      })
    }
  }
}
