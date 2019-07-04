import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    /* 城市列表 */
    cities: window.localStorage.getItem('cities') ? JSON.parse(window.localStorage.getItem('cities')) : [],
    /* 搜索关键字 */
    searchVal: '',
    /* 当前选择城市的 ID */
    curCityId: window.localStorage.getItem('curCityId') ? window.localStorage.getItem('curCityId') - 0 : 440300
  },
  getters: {
    /* 城市列表 二维数组 */
    cityList (state) {
      let result = []
      state.cities.forEach(city => {
        let firstLetter = city.pinyin.charAt(0).toUpperCase()
        let index = result.findIndex(item => item.firstLetter === firstLetter)
        if (index > -1) {
          result[index].list.push(city)
        } else {
          let obj = {
            firstLetter,
            list: [city]
          }
          result.push(obj)
        }
      })
      return result.sort((a, b) => (a.firstLetter.charCodeAt() - b.firstLetter.charCodeAt()))
    },

    /* 热门城市列表 */
    hotCity (state) {
      return state.cities.filter(item => item.isHot)
    },

    /* 右侧首字母列表  state不能省略 */
    indexList (state, getters) {
      return getters.cityList.map(item => item.firstLetter)
    },

    /* 搜索关键字，返回搜索列表 */
    searchList (state) {
      return state.cities.filter(item => {
        return item.name.indexOf(state.searchVal) > -1
      })
    },

    /* 当前选择城市的信息 */
    curCityInfo (state) {
      return state.cities.find(item => item.cityId === state.curCityId)
    }
  },
  mutations: {
    mutationsCityList (state, payload) {
      state.cities = payload.list
    },

    mutationsSearchVal (state, payload) {
      state.searchVal = payload
    },

    mutationsChangeCity (state, payload) {
      state.curCityId = payload
    }
  },
  actions: {
    actionsCityList ({ commit }) {
      Toast.loading({ duration: 0, mask: true, message: '加载中...' })
      axios.get('https://m.maizuo.com/gateway?k=9828800', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(response => {
        Toast.clear()
        let res = response.data
        // console.log(res)
        if (res.status === 0) {
          commit('mutationsCityList', {
            list: res.data.cities
          })
          window.localStorage.setItem('cities', JSON.stringify(res.data.cities))
        }
      })
    }
  }
}
