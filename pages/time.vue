<template>
  <div class="time">
    <p>{{ times }}</p>
    <button @click="countUp">{{ startBtn }}</button>
    <button @click="timeStop">{{ stopBtn }}</button>
    <button @click="timeReset">{{ resetBtn }}</button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
let id

export default {
  data() {
    return {
      startBtn: 'Start',
      stopBtn: 'Stop',
      resetBtn: 'Reset',
      times: '00:00.000',
      isRunning: false
    }
  },
  // computed: {
  //   ...mapGetters({ times: 'modules/time/times' })
  // },
  methods: {
    // Startボタンを押したときの処理
    countUp: function() {
      // this.$store.commit('modules/time/countUp')
      if (this.isRunning === false) {
        const startTime = Date.now()
        const that = this
        const count = function() {
          const countup = Date.now() - startTime
          let min = Math.floor(countup / 60000)
          let sec = Math.floor((countup % 60000) / 1000)
          let msc = countup % 1000

          min = ('0' + min).slice(-2)
          sec = ('0' + sec).slice(-2)
          msc = ('00' + msc).slice(-3)

          that.times = `${min}:${sec}.${msc}`
          id = setTimeout(count, 10)
        }
        count()
        this.isRunning = true
      }
    },

    // Stopボタンを押したときの処理
    timeStop: function() {
      // this.$store.commit('modules/time/timeStop')
      if (this.isRunning === true) {
        clearTimeout(id)
        this.isRunning = false
      }
    },

    // Resetボタンを押したときの処理
    timeReset: function() {
      // this.$store.commit('modules/time/timeReset')
      if (this.isRunning === false) {
        this.times = '00:00.000'
      }
    }
  },
  head() {
    return {
      title: 'Time'
    }
  }
}
</script>
