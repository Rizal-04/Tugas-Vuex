import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listAgenda:[
        ]
    },
    mutations: {
        KONFIRMASI_MENU: (state, agenda) => {
            state.listAgenda.push(agenda)
        }
    },
    actions: {
        simpanAgenda({ commit, state}, agenda) {
            state.isLoading = true
            setTimeout(() => {
                commit('KONFIRMASI_MENU', agenda)
                state.isLoading = false
            }, 1500)
        }
    }
})