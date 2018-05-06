<template>
  <div class="container">
    <div class="row main">
      <div class="column">
        <roll/>
      </div>
      <div class="column">
        <history/>
      </div>
    </div>
  </div>
</template>

<script>
import roll from './components/Roll'
import history from './components/History'

export default {
  name: 'app',
  components: {roll, history},
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.main {
  height: 100vh;
  align-items: center;
  justify-content: center;
  user-select: none;
  -moz-user-select: none;
}
.column {
  max-width: 100vw;
  max-height: 50vh;
}
@media screen and (max-width: 641px) and (orientation: landscape) {
  .column {
    max-height: 90vh;
  }
}
</style>
