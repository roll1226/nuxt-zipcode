import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='

const store = () => {
  return new Vuex.Store({
    state: {
      msg: '',
      addressData: {}
    },
    mutations: {
      error(state) {
        state.addressData = ''
        state.msg = 'そのような住所ないよ'
      },
      ok(state, payload) {
        state.addressData = payload.json.data.results[0]
        state.msg = ''
      }
    },
    getters: {
      addressData(state) {
        return state.addressData
      },
      msg(state) {
        return state.msg
      }
    },
    actions: {
      serchApi({ commit }, payload) {
        // api
        axios.get(url + payload).then(json => {
          // 入力エラー
          if (json.data.results == null) {
            commit('error')
          } else {
            // ある場合
            commit('ok', { json })
          }
        })
      }
    }
  })
}

export default store
