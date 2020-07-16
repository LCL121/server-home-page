import Vue from 'vue'
import Vuex from 'vuex'
import { ProjectObjs } from '../utils/interface'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: {
      public: {}
    }
  },
  mutations: {
    setProjects (state, projects) {
      state.projects = projects
    }
  },
  actions: {
  },
  getters: {
    projects: status => status.projects
  },
  modules: {
  }
})
