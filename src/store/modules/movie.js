import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    // 正在热映列表
    movieNowList: [],
    // 即将上映列表
    movieComingList: [],
    // 影片加载状态
    loading: false,
    // 页码
    pageNum: 1,
    // 每页显示条数
    pageSize: 100,
    // 总条数
    total: 1
  },
  getters: {
    // 总页数
    totalPage (state) {
      return Math.ceil(state.total / state.pageSize)
    },
    isFinished (state, getters) {
      return state.pageNum > getters.totalPage
    }
  },
  mutations: {
    mutationsMovieNowList (state, payload) {
      state.movieNowList = payload.movieNowList
      state.total = payload.total
    },
    mutationsMovieComing (state, payload) {
      state.movieComingList = payload.movieComingList
    },
    mutationsLoding (state, payload) {
      state.loading = payload.loading
    },
    muatationsChangePageNum (state, payload) {
      state.pageNum = payload
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
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.films)
          commit('mutationsMovieNowList', {
            movieNowList: [...state.movieNowList, ...res.data.films],
            total: res.data.total
          })
        }
        commit('mutationsLoding', {
          loading: false
        })
        commit('muatationsChangePageNum', (state.pageNum + 1))
        // console.log(state.movieNowList)
        Toast.clear()
      })
    },
    actionsMovieComing ({ commit, rootState }) {
      Toast.loading({ duration: 0, mask: true, message: '加载中...' })
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          'cityId': rootState.city.curCityId,
          'pageNum': 1,
          'pageSize': 100,
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
