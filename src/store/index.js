import Vue from 'vue'
import Vuex from 'vuex'
import banner from './modules/banner'
import movie from './modules/movie'
import cinema from './modules/cinema'
import city from './modules/city'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banner,
    movie,
    cinema,
    city
  }
})
