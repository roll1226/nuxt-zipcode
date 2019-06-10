<template>
  <div id="app">
    <div class="content">
      <span>{{ scrollY }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  },
  head() {
    return {
      title: 'scroll'
    }
  }
}
</script>

<style>
.content {
  min-height: 300vh;
}

.content span {
  position: fixed;
}
</style>
