const state = {
  history: [
  ]
}

const mutations = {
  ADD_NEW_ITEM (state, value) {
    const item = {
      rolled: value,
      at: new Date()
    }
    if (state.history.push(item) > 10) state.history.shift()
  }
}

const getters = {
  getHistory: state => state.history.slice().sort((a, b) => {
    return a.at < b.at
  }),
  getLastRoll: (state, getters) => {
    const history = getters.getHistory
    return history.length ? history[0] : false
  }
}

const actions = {
  logRoll (state, value) {
    state.commit('ADD_NEW_ITEM', value)
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
