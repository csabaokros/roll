const state = {
  history: []
}

const mutations = {
  // Új dobás a listába
  ADD_NEW_ITEM (state, value) {
    const item = {
      rolled: value,
      at: new Date()
    }
    // Csak az utolsó 10 dobást jegyezzük meg
    if (state.history.push(item) > 10) state.history.shift()
  }
}

const getters = {
  // Az összes dobást adjuk vissza
  // ** A .sort() alapból módosítja az eredeti Array-t, amit .slice()-szal tudunk kivédeni
  getHistory: state => state.history.slice().sort((a, b) => {
    return a.at < b.at
  }),
  // A dobáslista első elemét adjuk vissza
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
