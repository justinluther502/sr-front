import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

// properties
const state = {
  drawer: true,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/profile/',
    },
    {
      title: 'Rowers',
      icon: 'mdi-account-multiple',
      to: '/rowers/',
    },
  ],
}

const getters = make.getters(state)
const actions = make.actions(state)
const mutations = make.mutations(state)

// store
Vue.use(Vuex)
const store = new Vuex.Store({

  // use the plugin
  plugins: [
    pathify.plugin
  ],

  // properties
  state,
  getters,
  actions,
  mutations,
})

export default store