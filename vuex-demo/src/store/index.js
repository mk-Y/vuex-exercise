import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, step) {
      state.count += step
    },
    sub(state, payload) {
      state.count -= payload.amount
    }
  },
  actions: {
    addAsync(context, step) {
      setTimeout(() => {
        context.commit('add', step)
      }, 1000)
    },
    subAsync({ commit }, payload) {
      setTimeout(() => {
        commit('sub', payload)
      }, 1000)
    }
  },
  getters: {
    showNum({ count }) {
      return `当前最新的数量为 ${count}`
    }
  },
  modules: {
  }
})
