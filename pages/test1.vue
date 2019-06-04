// マウスをhoverされた時にカウント
<template>
  <div>
    <div class="color" @mouseover="hover">
      マウス
    </div>

    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 0
    }
  },
  methods: {
    hover: function() {
      this.msg++
    }
  }
}
</script>

<style>
.color {
  color: #fff;
  background: #000;
  width: 10%;
}
</style>
