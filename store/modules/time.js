let id
export const state = () => ({
  times: '00:00.000',
  isRunning: false
})
export const getters = {
  times(state) {
    return state.times
  }
}
export const mutations = {
  count(state, payload) {
    payload()
  }
}
export const actions = {
  countUp({ commit }, state) {
    if (state.isRunning === false) {
      const startTime = Date.now()
      // const that = state
      const that = state
      const count = function() {
        const countup = Date.now() - startTime
        let min = Math.floor(countup / 60000)
        let sec = Math.floor((countup % 60000) / 1000)
        let msc = countup % 1000
        min = ('0' + min).slice(-2)
        sec = ('0' + sec).slice(-2)
        msc = ('00' + msc).slice(-3)
        that.times = `${min}:${sec}.${msc}`
        id = setTimeout(count, 10)
      }
      commit('count', count)
      state.isRunning = true
    }
  },
  timeStop(state) {
    if (state.isRunning === true) {
      clearTimeout(id)
      state.isRunning = false
    }
  },
  timeReset(state) {
    if (state.isRunning === false) {
      state.times = '00:00.000'
    }
  }
}
