import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Tab, Tabs, Search, IndexBar, IndexAnchor, Cell, List, Toast, DropdownMenu, DropdownItem  } from 'vant'
import '@/assets/styles/base.scss'

Vue.config.productionTip = false
Vue
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
  .use(List)
  .use(Toast)
  .use(DropdownMenu)
  .use(DropdownItem )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
