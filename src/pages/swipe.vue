<template>
  <div>
    <div v-touch:swipe.left="navLeft" class="swipeLeft"></div>
    <div v-touch:swipe.right="navRight" class="swipeRight"></div>
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
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
}

.swipeLeft {
  left: 0;
}

.swipeRight {
  right: 0;
}
</style>
