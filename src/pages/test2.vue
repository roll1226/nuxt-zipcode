<template>
  <div>
    <input v-model="test" type="text" />
    <nuxt-link :to="{ path: test }">aaaaaaaaa</nuxt-link>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="test">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true,
      test: null
    }
  },
  head() {
    return {
      title: 'transision'
    }
  }
}
</script>

<style>
.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s;
}
.test-enter,
.test-leave-to {
  opacity: 0;
}
</style>
