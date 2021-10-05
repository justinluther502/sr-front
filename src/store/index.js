import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

// properties
const state = {
  drawer: false,
  drawerImage: true,
  mini: true,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Rowers',
      icon: 'mdi-account-multiple',
      to: '/rowers/',
    },
    {
      title: 'Hulls',
      icon: 'mdi-anchor',
      to: '/hulls/',
    },
    {
      title: 'Crews',
      icon: 'mdi-account-group',
      to: '/crews/',
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