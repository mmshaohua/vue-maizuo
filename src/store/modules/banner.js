import axios from 'axios'
export default {
  namespaced: true,
  state: {
    bannerList: []
  },
  mutations: {
    mutationsBannerList (state, payload) {
      state.bannerList = payload.bannerList
    }
  },
  actions: {
    actionsBannerList ({ commit, rootState }) {
      let curCityId = rootState.city.curCityId
      // console.log(curCityId)
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.cfg.common-banner'
        },
        params: {
          'type': 2,
          'cityId': curCityId,
          'k': 7939812
        }
      }).then(response => {
        let res = response.data
        // console.log(res)
        if (res.status === 0) {
          commit('mutationsBannerList', {
            bannerList: res.data
          })
        }
      })
    }
  }
}
