import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const globalData = {
  state: {
    max: 50,
    score: 0
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
