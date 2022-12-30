<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
    <Preview class="code-preview" v-if="false"></Preview>
  </div>
</template>

<script>
import Layout from './Layout.vue'

const Preview = () => import('./Preview') 

export default {
  name: 'App',
  components: {
    Layout,
    Preview
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
#app {
  height: 100%;
}
.code-preview {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>