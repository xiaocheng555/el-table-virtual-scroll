<template>
  <el-table v-bind="$attrs">
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: 'my-table'
}
</script>

<style lang='less' scoped>
</style>
