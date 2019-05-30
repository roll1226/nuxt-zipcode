<template>
  <section class="container">
    <label
      >住所検索
      <input
        v-model="zipcode"
        type="text"
        placeholder="郵便番号を入力"
        @input="search"
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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      zipcode: ''
    }
  },
  computed: {
    ...mapGetters(['msg', 'addressData'])
  },
  methods: {
    search(event) {
      this.$store.dispatch('serchApi', this.zipcode)
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
