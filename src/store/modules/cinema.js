import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cinemaList: []
  },
  actions: {
    actionsCinemaList ({ commit }) {
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        },
        params: {
          'cityId': 440300,
          'ticketFlag': 1,
          'k': 9069556
        }
      }).then(response => {
        let res = response.data
        if (res.status === 0) {
          // console.log(res.data.cinemas)
          commit('mutationsCinemaList', {
            cinemaList: res.data.cinemas
          })
        }
      })
    }
  },
  mutations: {
    mutationsCinemaList (state, payload) {
      state.cinemaList = payload.cinemaList
    }
  }
}
