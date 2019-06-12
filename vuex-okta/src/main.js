import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
    idToken: ''
  },
  mutations: {
    setUser: function (state, elem) {
      Vue.set(state.user, elem.key, elem.value);
    },
    setIdToken: function (state, value) {
      state.idToken = value;
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
