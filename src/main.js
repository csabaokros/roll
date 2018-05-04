import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import rolls from './store/rolls.js'
import App from './App.vue'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [ pathify.plugin ],
  modules: {
    rolls
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
