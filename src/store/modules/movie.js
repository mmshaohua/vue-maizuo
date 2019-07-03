import axios from 'axios'

export default {
  namespaced: true,
  state: {
    movieNowList: [],
    movieComingList: []
  },
  actions: {
    actionsMoviePaying ({ commit, rootState }) {
      let curCityId = rootState.city.curCityId
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          'cityId': curCityId,
          'pageNum': 1,
          'pageSize': 10,
          'type': 1,
          'k': 9154900
        }
      }).then(response => {
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.films)
          commit('mutationsMoviePaying', {
            movieNowList: res.data.films
          })
        }
      })
    },
    actionsMovieComing ({ commit, rootState }) {
      let curCityId = rootState.city.curCityId
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          'cityId': curCityId,
          'pageNum': 1,
          'pageSize': 10,
          'type': 2,
          'k': 9154900
        }
      }).then(response => {
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.films)
          commit('mutationsMovieComing', {
            movieComingList: res.data.films
          })
        }
      })
    }
  },
  mutations: {
    mutationsMoviePaying (state, payload) {
      state.movieNowList = payload.movieNowList
    },
    mutationsMovieComing (state, payload) {
      state.movieComingList = payload.movieComingList
    }
  }
}
