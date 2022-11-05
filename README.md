# el-table-virtual-scroll

基于Element-UI的Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

预览：https://xiaocheng555.github.io/el-table-virtual-scroll/

## 用法

``` vue
<VirtualScroll
  :data="list"
  :height="62"
  key-prop="id"
  @change="(renderData) => virtualList = renderData">
  <el-table 
    row-key="id" 
    :data="virtualList" 
    height="500px">
  </el-table>
</VirtualScroll>

...

import VirtualScroll from './el-table-virtual-scroll'

export default {
  component: {
    VirtualScroll
  },
  data () {
    list: [
      {
        id: 1,
        text: 'content'
      },
      // ...... 省略n条
      {
        id: 2000,
        text: 'content2'
      }
    ],
    virtualList: []
  }
}
```

Demo 在 `src/App.vue`，组件在 `src/el-table-virtual-scroll.vue`

## API

### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data    | 总数据 | Array | 必填 |  |
| keyProp | key值，data数据中的唯一id【⚠️若keyProp未设置或keyProp值不唯一，可能导致表格空数据或者滚动时渲染的数据断层、不连贯】 | string | — | id |
| height | 每一行的预估高度（废弃，改为使用itemSize，语义更好） | number | — | 60 |
| itemSize | 每一行的预估高度（废弃，改为使用itemSize，语义更好） | number | — | 60 |
| scrollBox | 指定滚动容器；在指定滚动容器时，如果表格设置了height高度，则滚动容器为表格内的滚动容器；如果表格为设置height高度，则自动获取父层以外的滚动容器，直至window容器为止 | string | — | - |
| buffer | 顶部和底部缓冲区域，值越大显示表格的行数越多 | Number | — | 500 |
| throttleTime | 滚动事件的节流时间 | number | — | 100 |

### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行 | index |
| update | 更新 | - |
| reset | 重置 | - |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |


