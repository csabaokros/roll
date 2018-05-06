<template>
  <div class="roll" @click="roll">
    <h1 class="roll" v-if="rolling || rolled">{{rolling ? rolled : lastRoll}}</h1>
    <h2 v-else @click="roll">{{msg}}</h2>
  </div>
</template>

<script>
import Shake from 'shake.js'

export default {
  name: 'roll',
  data () {
    return {
      rolled: 0,  // A pörgetés effekt aktuális száma
      rolling: false  // A pörgetés effek folyamtban van
    }
  },
  computed: {
    // Az utolsó valódi dobás betöltése
    lastRoll () {
      return  this.$store.getters['rolls/getLastRoll'].rolled
    },
    // Telefonon rázás, máshol kattintás
    msg () {
      return ('LinearAccelerationSensor' in window) ?
      'Rázd meg a készüléket a dobáshoz' :
      'Kattints ide a dobáshoz'
    }
  },
  methods: {
    roll() {
      // Csak a pörgő effekt végén dobhatunk újra
      if (this.rolling) return
      this.rolling = true
      // Meddig tartson az effekt?
      const rollTimes = 8 + Math.ceil(4 * Math.random())
      let times = rollTimes
      // Az effekt késleltetett dobásai, az első jelenik meg utoljára, az lesz a valós dobás értéke
      while(--times) {
        setTimeout(time => {
          this.rolled = Math.ceil(6 * Math.random())
          if (rollTimes === time + 1) {
            // Az első dobás értékét mentjük el
            this.$store.dispatch('rolls/logRoll', this.rolled)
            this.rolling = false
          }
        }, 100 * times, times)
      }
    }
  },
  mounted () {
    // Mi minősül rázásnak?
    new Shake({
      threshold: 8,
      timeout: 500
    }).start()
    // El kezdünk figyelni a rázásra
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
