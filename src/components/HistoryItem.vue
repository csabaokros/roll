<template>
  <li>
    Rolled {{rolled}} at {{at}}
  </li>
</template>

<script>
export default {
  name: 'history-item',
  props: ['at', 'rolled'],
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
