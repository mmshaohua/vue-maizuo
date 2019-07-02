import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/styles/base.scss'
import { Tab, Tabs, Search, IndexBar, IndexAnchor, Cell } from 'vant'

Vue.config.productionTip = false
Vue
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
