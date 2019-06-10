<template>
  <div id="label">
    <label
      >住所検索
      <input
        v-model="zipcode"
        type="text"
        placeholder="郵便番号を入力"
        @input="search"
    /></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zipcode: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('serchApi', this.zipcode)
    }
  }
}
</script>
