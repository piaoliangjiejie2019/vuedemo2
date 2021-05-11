import Vue from 'vue'
import vueConfig from '../vue.config'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
