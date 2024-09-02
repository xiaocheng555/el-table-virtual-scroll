# el-table-virtual-scroll

基于Element-UI的Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

⚠️仅支持vue2。

demo & 源码：https://xiaocheng555.github.io/el-table-virtual-scroll/


## 版本说明

### 当前版本 2.x.x

* 重构树形表格和懒加载功能，兼容 element-ui 树形表格原有的属性、事件、方法，支持树形表格筛选；废弃了模拟树结构的方案和相关的api；同时扩展了树形表格的方法

* 优化 element-ui 多选、扩展行功能，支持 element-ui 多选、扩展行原有的属性、事件、方法

* 2.x.x 版本不支持 1.x.x 树形表格功能，其他都能兼容

### 旧版本 1.x.x

旧版本说明文档：https://github.com/xiaocheng555/el-table-virtual-scroll/blob/master/README-v1.md

旧版本demo：https://xiaocheng555.github.io/el-table-virtual-scroll/v1


## 安装

``` bash
$ npm i el-table-virtual-scroll -S
```

## 用法

``` vue
<virtual-scroll
  :data="list"
  :item-size="62"
  key-prop="id"
  @change="(renderData) => virtualList = renderData">
  <el-table 
    row-key="id" 
    :data="virtualList" 
    height="500px">
  </el-table>
</virtual-scroll>
...

import VirtualScroll from 'el-table-virtual-scroll'

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

## el-table-virtual-scroll 组件

### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data    | 总数据 | Array | 必填 |  |
| keyProp | key值，data数据中的唯一id【⚠️若keyProp未设置或keyProp值不唯一，可能导致表格空数据或者滚动时渲染的数据断层、不连贯、滚动不了】 | string | — | id |
| itemSize | 每一行的预估高度 | number | — | 60 |
| scrollBox | 指定滚动容器；在指定滚动容器时，如果表格设置了height高度，则滚动容器为表格内的滚动容器；如果表格未设置height高度，则自动获取外层的滚动容器，直至window容器为止 | string | 'window'、css选择器 | - |
| buffer | 顶部和底部缓冲区域，值越大显示表格的行数越多 | Number | — | 200 |
| throttleTime | 滚动事件的节流时间 | number | — | 16 |
| dynamic | 动态获取表格行高度，默认开启。设置为false时，则以itemSize为表格行的真实高度，能大大减少虚拟滚动计算量，减少滚动白屏；如果itemSize与表格行的真实高度不一致，可能导致滚动时表格数据错乱、抖动、底部有空白 | boolean | — | true |
| virtualized | 是否开启虚拟滚动 | boolean | — | true |
| rowSpanKey | 当使用了el-table的合并行，必须设置rowSpanKey函数并返回每组合并行中共用的key值 | Function(row, index) | — | - |
| selectionSort | 支持多选可自定义选中数据的排序规则，默认为 `true` 按选择顺序排，传入 `false` 为按列表中的顺序排，传入函数为自定义排序规则 | Boolean、Function | — | - |
| getElTable | 获取 `<el-table>` 组件，默认获取 `<virtual-scroll>` 的第一个子组件；如果 `<el-table>` 组件经过用户封装，那么需要使用该方法返回正确的 `<el-table>` 组件【可通过 ref、$children 返回正确的值】 | Function | — | - |
| keepScroll | 当使用v-show，keep-alive 切换表格显示时，会保持原来滚动位置 | boolean | — | true |


### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行；index - 行数索引值；offset - 偏移位置 | (index: number, offset: number) |
| scrollToRow | 滚动到对应的行；row；offset - 偏移位置 | (row: object, offset: number) |
| update | 更新，会重新计算实际渲染数据和位置 | - |
| setCurrentRow | 用于单选 `<virtual-column type="radio">`, 设定某一行为选中行 | row |
| slowOnMousewheel | 减缓滚轮滚动的速度，slowNum参数为减缓参数，默认为1，数值越大滚动越慢；在mac电脑上，谷歌、火狐浏览器在 `自定义固定列` demo 上快速滚动会有白屏，可以使用该方法减少白屏。请根据实际情况使用，使用不当可能会让表格滚动卡顿。【注意：滚轮滚动有效，拖动滚动条滚动无效】 | slowNum |
| getParentNode | 【扩展树形表格】获取父节点 | row |
| getParentNodes | 【扩展树形表格】获取所有父节点 | row |
| getChildNodes | 【扩展树形表格】获取子节点 | row |
| reloadNode | 【扩展树形表格】重新加载节点 | row |
| expandAllNodes | 【扩展树形表格】展开所有树节点 | - |
| unexpandAllNodes | 【扩展树形表格】收起所有树节点，懒加载节点除外 | - |


### Events
| 事件名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |


## virtual-column 组件

使用 `<el-table-virtual-scroll>` 做表格虚拟滚动，是不支持 `ElementUI` 表格的原有的索引、多选、扩展行等功能，需要使用 `<virtual-column>` 来兼容。`<virtual-column>` 组件内封装了 `<el-table-column>`，支持传入 `<el-table-column>` 组件的props属性。
其中 `<virtual-column>` 会在表格row数据上扩展 `$v_checked`、`$v_expanded` ... 等属性，请悉知。 

更多demo & 源码查看：https://xiaocheng555.github.io/el-table-virtual-scroll/

### 引入

``` js
import { VirtualColumn } from 'el-table-virtual-scroll'

...

<virtual-column type="index/selection/radio/expand/tree"></virtual-column>
```

### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| * | 支持 `<el-table-column>` 组件的props属性，如label, fixed, prop, width, min-width, index 等等 | - | — | - |
| type    | type="index" 为索引；type="selection" 为多选；type="radio" 为单选；type="expand" 为扩展行；type="tree" 为模拟树结构 | String | 选填 |  |
| vfixed | 固定列。使用 position: sticky; 来实现固定列，不会生成额外table，滚动更丝滑；使用时，需要设置table的headerCellStyle、cellStyle（注意组件必须按固定列顺序排列最左或最右），参考[demo](https://xiaocheng555.github.io/el-table-virtual-scroll/#/VFixedDemo) | String/Boolean | left/right/true | - |


## el-table-virtual-scroll 组件注意事项

* 使用组件前，请确保项目中有引入 `element-ui` 组件库。

* `<el-table>` 组件最好写上 `row-key` 属性，能避免一些奇怪的问题。例：`<el-table row-key="id">`，其中id为数据中唯一key值。

* Element-UI Table 的多选、扩展行、索引、树功能，需要将 `<el-table-column>` 改为 `<virtual-column type="selection/expand/index/radio/tree">` 组件 。


<!-- ## 贡献者

<a href="https://github.com/xiaocheng555/el-table-virtual-scroll/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=xiaocheng555/el-table-virtual-scroll" />
</a> -->


## 更新内容

### 2024-9-2

* 重构：兼容树形表格；兼容扩展行、多选原生事件、属性、方法；

* npm 2.0.0 版本发包
