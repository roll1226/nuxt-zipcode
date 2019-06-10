<template>
  <div>
    <div
      v-touch:swipe.left="navLeft"
      v-touch:swipe.right="navRight"
      class="swipeLeft"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    navLeft: function() {
      this.$router.push('/')
    },
    navRight: function() {
      this.$router.push('/anke')
    }
  }
}
</script>

<style lang="scss">
.swipeLeft,
.swipeRight {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>
