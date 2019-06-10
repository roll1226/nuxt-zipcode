import axios from 'axios'
const url = 'https://api.zipaddress.net/?zipcode='

export const state = () => ({
  msg: '',
  addressData: {}
})

export const mutations = {
  error(state) {
    state.addressData = ''
    state.msg = 'そのような住所ないよ'
  },
  ok(state, payload) {
    state.addressData = payload.json.data.data
    state.msg = ''
  }
}

export const actions = {
  serchApi({ commit }, payload) {
    // api
    axios.get(url + payload).then(json => {
      if (json.data.code === 200) {
        // ある場合
        commit('ok', {
          json
        })
      } else {
        // 入力エラー
        commit('error')
      }
    })
  }
}

export const getters = {
  addressData(state) {
    return state.addressData
  },
  msg(state) {
    return state.msg
  }
}
