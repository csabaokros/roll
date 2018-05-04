<template>
  <div class="container">
    <div class="row main">
      <div class="column column-50">
        <roll/>
      </div>
      <div class="column column-50">
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
}
</style>
