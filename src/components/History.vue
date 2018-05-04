<template>
  <div class="centered">
    <ul>
      <history-item v-for="(item, index) in history" v-bind:key="index" :rolled="item.rolled" :at="item.at" />
    </ul>
  </div>
</template>

<script>
import HistoryItem from './HistoryItem'

export default {
  name: 'history',
  components: { HistoryItem },
  data () {
    return {
    }
  },
  computed: {
    history () {
      return this.$store.getters['rolls/getHistory']
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {display:none;}

.centered {
  text-align: left;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  height: 50vh;
}

@media screen and (max-width: 640px) and (orientation: landscape) {
  .centered {
    height: 90vh;
  }
}

</style>
