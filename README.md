# el-table-virtual-scroll

基于Element-UI的Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

预览：https://xiaocheng555.github.io/el-table-virtual-scroll/

## 用法

``` vue
<VirtualScroll
  :data="list"
  :item-size="62"
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
| itemSize | 每一行的预估高度 | number | — | 60 |
| scrollBox | 指定滚动容器；在指定滚动容器时，如果表格设置了height高度，则滚动容器为表格内的滚动容器；如果表格为设置height高度，则自动获取父层以外的滚动容器，直至window容器为止 | string | — | - |
| buffer | 顶部和底部缓冲区域，值越大显示表格的行数越多 | Number | — | 400 |
| throttleTime | 滚动事件的节流时间 | number | — | 50 |

### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行【不太精确：因为滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致当前行坍塌或撑起】 | index |
| update | 更新 | - |
| reset | 重置 | - |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |

## el-table-virtual-scroll 组件注意事项

* 不支持 Element-UI Table 原有单选、多选，需要自行实现单选和多选功能，详见demo

* 使用 Element-UI Table 的扩展行、排序时，需要做额外兼容，详见demo

## 更新内容

### 2022-11-15

* Prop `height` 废弃，改为使用 `item-size`，更具语义

* Prop 增加 `scrollBox`，可以指定滚动容器

* 修复data为空时，表格仍然撑起高度

* 增加多个场景下的demo

### 2022-11-15

* Prop `height` 废弃，改为使用 `item-size`，更具语义

* Prop 增加 `scrollBox`，可以指定滚动容器

* 修复data为空时，表格仍然撑起高度

* 增加多个场景下的demo

### 2022-12-14

* 支持树结构虚拟滚动

* 增加模拟树结构懒加载demo



