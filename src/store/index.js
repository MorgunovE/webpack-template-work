import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import example from './example'
export default new Vuex.Store({
  state: {
    modalView: null,
  },
  mutations: {
    setModalView(state, view){
      // console.log(view)
      state.modalView = view;
    }
  },
  actions: {
    setModalView({commit}, view){
      commit('setModalView', view)
    }
  },
  getters: {
    getModalView(state) {
      return state.modalView
    }
  },
  modules: {
    example,
  }
})
