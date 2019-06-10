<template>
  <div class="anke">
    <div class="header">
      aaaa
      <div class="hamburger">
        <span class="hamburgerLine"></span>
        <span class="hamburgerLine"></span>
        <span class="hamburgerLine"></span>
        <spam class="menuText">MENU</spam>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100wv;
  height: 10vh;
  background: #fcfcff;
  border: solid 1px #ddd;
  border-top: none;
  border-radius: 10% 10% 8% 8% / 0% 0% 50% 50%;
  .hamburger {
    .hamburgerLine {
      display: block;
      margin-top: 9px;
      width: 3vw;
      height: 5px;
      background: #000;
    }
    .menuText {
      display: block;
      margin-top: 9px;
      font-size: 1.05vw;
    }
  }
}
</style>
