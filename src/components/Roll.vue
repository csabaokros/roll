<template>
  <div class="roll">
    <h1 class="roll" @click="roll" v-if="rolling || rolled">{{rolling ? rolled : lastRoll}}</h1>
    <h2 v-else @click="roll">{{msg}}</h2>
  </div>
</template>

<script>
import shake from 'shake.js'

export default {
  name: 'roll',
  data () {
    return {
      rolled: 0,
      rolling: false
    }
  },
  computed: {
    lastRoll () {
      const lastRoll = this.$store.getters['rolls/getLastRoll']
      return lastRoll ? lastRoll.rolled : lastRoll
    },
    msg () {
      return ('LinearAccelerationSensor' in window) ? 'Rázd meg a készüléket a dobáshoz' : 'Kattints ide a dobáshoz'
    }
  },
  methods: {
    roll() {
      if (this.rolling) return
      this.rolling = true
      const rollTimes = 8 + Math.ceil(4 * Math.random())
      let times = rollTimes
      while(--times) {
        setTimeout(time => {
          this.rolled = Math.ceil(6 * Math.random())
          if (rollTimes === time + 1) {
            this.$store.dispatch('rolls/logRoll', this.rolled)
            this.rolling = false
          }
        }, 100 * times, times)
      }
    }
  },
  mounted () {
    const s = new shake({
      threshold: 8, //default velocity threshold for shake to register
      timeout: 500 //default interval between events
    })
    s.start()
    window.addEventListener('shake', e => {
      this.roll()
    }, false);
  }
}
</script>

<style lang="scss" scoped>
.roll {
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40vh;
  height: 50vh;
}

h1, h2 {
  text-align: center;
  margin: 0
}
</style>
