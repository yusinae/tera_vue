<template>
  <div id="app">
    <header/>
    service1
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import Header from './WrapHeader'
import Footer from './WrapFooter'
export default {
  name: 'App',
  components: {
    'header': Header,
    'footer': Footer
  }
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
