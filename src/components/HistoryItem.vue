<template>
  <li>
    <span>{{at.toLocaleTimeString("Hu-hu")}}</span>-kor {{rolledText[rolled]}} dobtál
  </li>
</template>

<script>
export default {
  name: 'history-item',
  props: ['at', 'rolled'],
  data () {
    return {
      rolledText: [
        '',
        'egyest',
        'kettest',
        'hármast',
        'négyest',
        'ötöst',
        'hatost'
      ]
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
li > span {
  font-weight: bold
}
</style>
