<template>
  <section class="container">
    <label
      >住所検索
      <input
        v-model="zipcode"
        type="text"
        placeholder="郵便番号を入力"
        @keyup="searchAddressInfo"
    /></label>

    <!-- <br /> -->
    <!-- <button @click="searchAddressInfo">住所自動入力</button> -->
    <br />
    <p v-if="zipcode === ''">
      入力してね
    </p>
    <p v-else-if="msg == ''">
      住所：<ruby
        >{{ addressData['address1'] }}<rt>{{ addressData['kana1'] }}</rt
        >{{ addressData['address2'] }}<rt>{{ addressData['kana2'] }}</rt
        >{{ addressData['address3'] }}<rt>{{ addressData['kana3'] }}</rt></ruby
      >
    </p>
    <p v-else id="error">
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
        if (this.zipcode === '') {
          this.addressData = ''
          this.msg = ''
        }
      })
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
#error {
  color: red;
  font-weight: bold;
}
</style>
