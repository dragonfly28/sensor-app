import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
//axios.defaults.baseURL = 'http://192.168.178.116:8833/'
axios.defaults.baseURL = 'http://demo0769848.mockable.io/getdata'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
