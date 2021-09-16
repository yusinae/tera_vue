<template>
  <div class="main">
    <h1>{{ msg }}</h1>
        <router-link to="/sub">메인페이지</router-link>
  </div>
</template>

<script>
export default {
  name: 'Yusinae',
  data () {
    return {
      msg: 'Welcome to Yusinae App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
