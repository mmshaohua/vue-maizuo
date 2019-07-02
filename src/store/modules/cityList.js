import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cities: []
  },
  mutations: {
    mutationsCityList (state, payload) {
      state.cities = payload.list
    }
  },
  actions: {
    actionsCityList ({ commit }) {
      axios.get('https://m.maizuo.com/gateway', {
        header: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.city.list'
        },
        params: {
          'k': 2170914
        }
      }).then(response => {
        let res = response.data
        if (res.status === 0) {
          commit('mutationsCityList', {
            list: res.cities
          })
        }
      })
    }
  }
}
