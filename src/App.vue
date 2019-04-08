<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
    body, html {
        margin: 0;
        padding: 0;
        height: 100vh;
    }
    #app {
        height: 100%;
    }
</style>
