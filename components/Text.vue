<template>
  <div id="text">
    <p v-if="zipcode === ''">
      入力してね
    </p>
    <p v-else-if="msg == ''">住所 ： {{ addressData['fullAddress'] }}</p>
    <p v-else id="error">
      {{ msg }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['msg', 'addressData'])
  }
}
</script>
