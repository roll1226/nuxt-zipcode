<template>
  <section class="container">
    <input v-model="zipcode" type="text" placeholder="郵便番号を入力" />
    <button @click="searchAddressInfo">住所自動入力</button>
    <p>
      住所：{{ addressData['address1'] }}{{ addressData['address2']
      }}{{ addressData['address3'] }}
    </p>
    <p id="error">
      {{ msg }}
    </p>
  </section>
</template>

<script>
const axios = require('axios')

// api
const url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='

export default {
  data() {
    return {
      zipcode: '',
      msg: '',
      addressData: {}
    }
  },
  methods: {
    searchAddressInfo() {
      axios.get(url + this.zipcode).then(res => {
        // 入力エラー
        if (res.data.results == null) {
          this.addressData = ''
          this.msg = 'そのような住所ないよ'
        } else {
          // ある場合
          this.addressData = res.data.results[0]
          this.msg = ''
        }
      })
    }
  }
}
</script>

<style>
#error {
  color: red;
  font-weight: bold;
}
</style>
