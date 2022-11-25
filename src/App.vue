<template>
  <div>
    <Demo></Demo>
    <Preview></Preview>
  </div>
</template>

<script>
import Demo from './Demo'

const Preview = () => import('./Preview') 

export default {
  name: 'App',
  components: {
    Demo,
    Preview
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
</style>