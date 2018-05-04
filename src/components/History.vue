<template>
  <div>
    <history-item rolled="6" at="now" />
  </div>
</template>

<script>
import HistoryItem from './HistoryItem'

export default {
  name: 'history',
  components: { HistoryItem },
  data () {
    return {
      msg: 'History'
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">

</style>
