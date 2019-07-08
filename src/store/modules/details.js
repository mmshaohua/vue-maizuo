import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    movieDetails: window.localStorage.getItem('movieDetails') ? window.localStorage.getItem('movieDetails') : ''
  },

  mutations: {
    mutationsMovieDetails (state, payload) {
      state.movieDetails = payload
    }
  },

  actions: {
    actionsMovieDetails ({ commit }, payload) {
      Toast.loading({ duration: 0, mask: true, message: '加载中...' })
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.film.info'
        },
        params: {
          'filmId': payload,
          'k': 1264669
        }
      }).then(response => {
        Toast.clear()
        let res = response.data
        // console.log(res)
        if (res.status === 0) {
          commit('mutationsMovieDetails', res.data.film)
        }
        window.localStorage.setItem('movieDetails', JSON.stringify(res.data.film))
      })
    }
  }
}
