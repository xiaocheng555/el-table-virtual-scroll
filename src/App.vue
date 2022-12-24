<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
import Layout from './Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
</style>