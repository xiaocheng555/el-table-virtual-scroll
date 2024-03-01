<script>
// 此组件仅用于显示VNode
export default {
  name: 'el-table-virtual-column-formatter',
  props: {
    vNode: {
      type: Object
    }
  },
  render () {
    return this.vNode
  }
}
</script>
