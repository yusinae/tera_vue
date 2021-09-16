<template>
    <div id="wrap">
        <wrap-header/>
        <router-view/>
        <wrap-footer/>
    </div>
</template>

<script>
  import WrapHeader from './Header';
  import WrapFooter from './Footer';
export default {
  name: 'wrap page',
  data () {
    return {
      msg2: 'Welcome to Your  App'
    }
  },
  components: {
    'wrap-header': WrapHeader,
    'wrap-footer': WrapFooter,
  },
}
</script>

<style scoped>

</style>
