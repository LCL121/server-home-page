import Vue from 'vue'
import Vuex from 'vuex'
import { ProjectObjs } from '../utils/interface'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: {}
  },
  mutations: {
    setProjects (state, projects: ProjectObjs) {
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
