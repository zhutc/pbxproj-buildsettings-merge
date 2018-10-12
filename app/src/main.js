import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import preState from './mock'
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  store:store({preState}),
  render: h => h(App)
}).$mount('#app')
