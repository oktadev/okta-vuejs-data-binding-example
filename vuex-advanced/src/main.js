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
    ary: [],
    obj: {}
  },
  mutations: {
    addAry: function (state, elem) {
      state.ary.push(elem)
    },
    delAry: function (state) {
      state.ary.splice(-1, 1)
    },
    addObj: function (state, elem) {
      Vue.set(state.obj, elem.key, elem.value)
    },
    delObj: function (state, name) {
      Vue.delete(state.obj, name);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
