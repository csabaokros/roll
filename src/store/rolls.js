const state = {
  test: 'Asd',
  history: []
}

const mutations = {
  ADD_NEW_ITEM (state) {
    return state.history.push({
      rolled: 6,
      at: new Date()
    })
  },
  SET_MSG (state, val) {
    state.test = val
  }
}

const getters = {
  test: (state) => state.test
}

export default {
  namespaced: true,
  getters,
  state,
  mutations
}
