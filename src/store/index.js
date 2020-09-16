import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [],
    menuFold: false
  },
  mutations: {
    setMenuItems(state, data) {
      // console.log(data)
      state.menuItems = [...data]
    },
    setMenuFold(state, data) {
      // console.log(data)
      state.menuFold = data
    }
  },
  actions: {
  },
  modules: {
  }
})
