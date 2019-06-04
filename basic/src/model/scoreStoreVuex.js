import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default
 new Vuex.Store({
    state: {
        max: 50,            
        score: 0
    },
    mutations: {
        bumpScore (state) {
            if (state.score < 50) {
                state.score += 10
            }
        },
        reset (state) {
            state.score = 0
        }
    }
  })