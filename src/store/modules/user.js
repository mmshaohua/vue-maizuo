import axios from 'axios'
import router from '@/router'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    userInfo: window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : null
  },

  mutations: {
    mutationsLogin (state, payload) {
      state.userInfo = payload.userInfo
    },
    mutationsLogout (state, payload) {
      state.userInfo = payload.userInfo
    }
  },

  actions: {
    actionsLogin ({ commit }, payload) {
      Toast.loading({ duration: 0, message: '加载中...' })
      axios.post('http://localhost:9090/sign-in', payload)
        .then(response => {
          Toast.clear()
          let res = response.data
          if (res.code === 0) {
            Toast.success('登录成功')
            window.localStorage.setItem('userInfo', JSON.stringify(res.data))
            console.log(111)
            commit('mutationsLogin', {
              userInfo: res.data
            })
            let redirect = router.currentRoute.query.redirect || '/center'
            router.replace(redirect)
          } else {
            Toast.fail(res.msg)
          }
        })
    },
    actionsLogout ({ commit }) {
      commit('mutationsLogout', {
        userInfo: null
      })
      Toast('已退出登录')
      window.localStorage.removeItem('userInfo')
      // window.location.reload()
    }
  }
}
