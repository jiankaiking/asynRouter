import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: []
  },
  mutations: {
    setMenuItems(state, data) {
      state.menuItems = [...data]
    }
  },
  actions: {
  },
  modules: {
  }
})
