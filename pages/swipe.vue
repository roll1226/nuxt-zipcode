<template>
  <div>
    <div v-touch:swipe.right="navHandler" class="swipe"></div>
    <div
      class="navwrap"
      :class="{ navtrue: navOption1, navfales: navOption2 }"
    ></div>
    <div
      v-touch:tap="maskHandler"
      v-touch:swipe.left="maskHandler"
      class="mask"
      :class="{ masktrue: navOption1 }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOption1: false,
      navOption2: false
    }
  },
  methods: {
    navHandler: function() {
      this.navOption1 = true
      this.navOption2 = false
    },
    maskHandler: function() {
      this.navOption1 = false
      this.navOption2 = true
    }
  }
}
</script>

<style>
.swipe {
  width: 40%;
  height: 100vh;
  position: absolute;
  z-index: 3;
}

.navwrap {
  position: fixed;
  z-index: 2;
  background: #fff;
  width: 0;
  height: 100vh;
}

.masktrue {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: #000;
}

@keyframes trueNav {
  from {
    width: 0;
  }
  to {
    width: 35%;
  }
}

@keyframes falesNav {
  from {
    width: 35%;
  }
  to {
    width: 0;
  }
}

.navtrue {
  animation: trueNav 250ms ease-in 0s forwards;
}

.navfales {
  animation: falesNav 250ms ease-in 0s forwards;
}
</style>
