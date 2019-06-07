<template>
  <div>
    <span v-touch:swipe.left="Handler" v-touch:swipe.right="Handler"
      >Mix Multiple Events</span
    >
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    Handler: function() {
      this.msg = 'クリア'
    }
  }
}
</script>
