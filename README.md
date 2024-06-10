# el-table-virtual-scroll

基于Element-UI的Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

⚠️仅支持vue2。

demo & 源码：https://xiaocheng555.github.io/el-table-virtual-scroll/

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
| virtualized | 是否开启虚拟滚动（>=1.0.3版本支持） | boolean | — | true |
| rowSpanKey | 当使用了el-table的合并行，必须设置rowSpanKey函数并返回每组合并行中共用的key值（>=1.0.13版本支持） | Function(row, index) | — | - |
| selectionSort | 支持多选可自定义选中数据的排序规则，默认为 `true` 按选择顺序排，传入 `false` 为按列表中的顺序排，传入函数为自定义排序规则 （>=1.0.27版本支持） | Boolean、Function | — | - |
| getElTable | 获取 `<el-table>` 组件，默认获取 `<virtual-scroll>` 的第一个子组件；如果 `<el-table>` 组件经过用户封装，那么需要使用该方法返回正确的 `<el-table>` 组件【可通过 ref、$children 返回正确的值】（>=1.0.29版本支持） | Function | — | - |
| keepScroll | 当使用v-show，keep-alive 切换表格显示时，会保持原来滚动位置（>=1.1.1版本支持） | boolean | — | true |


### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行；index - 行数索引值；offset - 偏移位置（>=1.0.25版本支持） | (index: number, offset: number) |
| update | 更新，会重新计算实际渲染数据和位置 | - |
| clearSelection | 用于多选 `<virtual-column type="selection">`，清空用户的选择 | - |
| toggleRowSelection | 用于多选 `<virtual-column type="selection">`, 切换表格行的选中状态，如果使用了第二个参数，则是设置表格行选中与否（selected 为 true 则选中）；如果需要切换多行选中状态，请传入数组，避免造成卡顿 | row|rows, selected |
| toggleRowExpansion | 用于展开行 `<virtual-column type="expand">`, 切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）| row, expanded |
| setCurrentRow | 用于单选 `<virtual-column type="radio">`, 设定某一行为选中行 | row |
| slowOnMousewheel | 减缓滚轮滚动的速度，slowNum参数为减缓参数，默认为1，数值越大滚动越慢；在mac电脑上，谷歌、火狐浏览器在 `自定义固定列` demo 上快速滚动会有白屏，可以使用该方法减少白屏。请根据实际情况使用，使用不当可能会让表格滚动卡顿。【注意：滚轮滚动有效，拖动滚动条滚动无效】（>=1.0.28版本支持） | slowNum |

### Events
| 事件名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |
| current-change | 虚拟表格单选选中事件 | currentRow |
| selection-change | 虚拟表格多选选项发生更改时触发事件 | selectedRows |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row, checked |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection, checked |

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
| indent | 展示树形数据时，树节点的缩进，type 为 tree 时生效 | Number | — | 16 |
| load | 加载子节点数据的函数，type 为 tree 时生效 | Function(row, resolve) | — | - |
| tree-props | 渲染嵌套数据的配置选项，type 为 tree 时生效（>=1.2.0版本支持） | Object | 例如：{ hasChildren: 'hasChildren', children: 'children' }: 当 hasChildren 为true时，显示 children 为子节点，当 hasChildren 为false时，没有子节点，当 hasChildren 为 null/undefined 时，触发load函数加载子节点 | - |
| vfixed | 固定列（>=1.0.16版本支持）。使用 position: sticky; 来实现固定列，不会生成额外table，滚动更丝滑；使用时，需要设置table的headerCellStyle、cellStyle（注意组件必须按固定列顺序排列最左或最右），参考[demo](https://xiaocheng555.github.io/el-table-virtual-scroll/#/VFixedDemo) | String/Boolean | left/right/true | - |


### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| expand | 【仅type="tree" 模拟树结构】展开行，其中 expandKeys 为展开行的 keys 数组；expanded 为展开或收起，默认为true；doLoad 为当展开时，是否展开新的行（调用load方法），默认为true（>=1.0.25版本支持）| Function(expandKeys, expanded, doLoad)
| expandPath | 【仅type="tree" 模拟树结构】展开目标路径，keyPath为路径数组，如['key1', 'key2', 'key3']，该方法会展开 key1 -> key2 -> key3 对应的树节点（>=1.0.25版本支持） | keyPath: Array |
| expandAll | 【仅type="tree" 模拟树结构】展开所有行（>=1.0.25版本支持） | - |
| unexpandAll | 【仅type="tree" 模拟树结构】收起所有行（>=1.0.25版本支持） | - |
| removeNode | 【仅type="tree" 模拟树结构】删除节点，所有子节点也会删除; onlyChild为true时，只删除子节点（>=1.1.14版本支持） | (row, onlyChild = false) |
| reloadNode | 【仅type="tree" 模拟树结构】重新加载节点（删除所有子节点，并触发load函数重新加载）（>=1.1.14版本支持） | row |
| getChildNodes | 【仅type="tree" 模拟树结构】获取所有子孙节点（>=1.1.14版本支持） | row |
| getParentNodes | 【仅type="tree" 模拟树结构】获取所有父节点（>=1.1.14版本支持） | row |
| getAllNodes | 【仅type="tree" 模拟树结构】获取所有节点，包含隐藏的节点（>=1.1.14版本支持） | - |


## el-table-virtual-scroll 组件注意事项

* 使用组件前，请确保项目中有引入 `element-ui` 组件库。

* `<el-table>` 组件最好写上 `row-key` 属性，能避免一些奇怪的问题。例：`<el-table row-key="id">`，其中id为数据中唯一key值。

* 不支持 Element-UI Table 原有多选、扩展行、索引，请使用 `<virtual-column>` 做兼容，详见demo。

* Element-UI Table 单选高亮，版本>=1.0.26支持

* Element-UI Table 多选高亮，版本>=1.3.1支持

* 支持 Element-UI Table 排序和筛选，版本>=1.3.1支持

* 支持 Element-UI Table 多选的 `reserve-selection`，版本>=1.3.1支持


<!-- ## 贡献者

<a href="https://github.com/xiaocheng555/el-table-virtual-scroll/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=xiaocheng555/el-table-virtual-scroll" />
</a> -->


## 更新内容

### 2022-11-15

* Prop `height` 废弃，改为使用 `item-size`，更具语义

* Prop 增加 `scrollBox`，可以指定滚动容器

* 修复data为空时，表格仍然撑起高度

* 增加多个场景下的demo

### 2022-12-14

* 支持树结构虚拟滚动

* 增加模拟树结构懒加载demo

### 2022-12-30

* 完善demo和api

* npm 发包

### 2023-1-9

* 增加virtualized prop 来控制是否开启虚拟滚动

* npm 1.0.3 版本发包

### 2023-1-11

* 修复表格多选 `selection-change` 事件中返回的数据没有按顺序排序

* npm 1.0.5 版本发包

### 2023-1-12

* 用到的element-ui组件局部引入，无需安装loadsh

* npm 1.0.6 版本发包

### 2023-1-13

* 修复element-ui组件局部引入方式不正确

* npm 1.0.7 版本发包

### 2023-1-13

* 修复滚动容器设置为window时报错

* 修复指定滚动容器，特殊情况滚动时表头会一直在

* npm 1.0.8 版本发包


### 2023-2-22

* 修复 `<virtual-column>` 组件在低版本 `vue-template-compiler` 时会显示 `undefined`

* npm 1.0.9 版本发包


### 2023-2-27

* 修复分页时全选框没有重置状态

* npm 1.0.10 版本发包


### 2023-3-2

* 修复浏览器外链引入时，全局 ElemnetUI 引入错误

* npm 1.0.11 版本发包


### 2023-4-3

* 修复pageckage.json中module文件引入不正确

* npm 1.0.12 版本发包


### 2023-4-12

* 增加rowSpanKey 属性兼容表格合并行；增加相关demo

* npm 1.0.13 版本发包


### 2023-5-9

* 修复 `<el-table>` 组件设置 `max-height` 属性，虚拟滚动有问题；增加表尾合计行demo

* npm 1.0.14 版本发包

### 2023-7-26

* `<virtual-column>` 组件增加 `vfixed: left/right` 来设置固定列，滚动更丝滑

* npm 1.0.15 版本发包

### 2023-7-27

* 修复自定义固定列bug

* npm 1.0.16 版本发包

### 2023-8-10

* virtual-column 支持selectable

* 修复 v-show 切换表格会卡顿

* npm 1.0.17 版本发包

### 2023-8-10

* 修复 v-show 切换表格会卡顿

* npm 1.0.18 版本发包

### 2023-8-11

* 修复自定义固定列表格不存在滚动条时，表头偏移

* npm 1.0.19 版本发包


### 2023-8-21

* 修复 v-show 切换表格引起的bug

* 增加 disabled prop 禁止虚拟计算（v-show=false时可设置）

* npm 1.0.20 版本发包


### 2023-11-14

* `<virtual-column>` 支持嵌套

* npm 1.0.21 版本发包


### 2023-11-23

* `<virtual-column>` 支持 `formatter` 属性

* npm 1.0.22 版本发包



### 2023-11-28

* 修复固定列 fixed 动态切换时，固定列位置可能会错乱

* npm 1.0.23 版本发包


### 2023-11-28

* 修复树结构懒加载 如果有hasChildren=false的行 行可视区域高度异常

* npm 1.0.24 版本发包


### 2023-11-29

* 模拟树结构表格增加一系列展开方法和demo

* `<virtual-column>` 列嵌套修改

* `scrollTo` 方法 支持传入偏移量

* npm 1.0.25 版本发包


### 2023-11-30

* 兼容行高亮（单选）

* npm 1.0.26 版本发包


### 2023-11-31

* 支持 `currentRowKey`


### 2023-12-4

* 增加多选项可选择排序方式；

* 修复删除多选项时没有触发selection-change事件

* npm 1.0.27 版本发包


### 2023-12-6

* 增加 `slowOnMousewheel` 方法

* npm 1.0.28 版本发包


### 2023-12-11

* 增加 `getElTable` 属性

* npm 1.0.29 版本发包


### 2023-12-11

* 修复自定义表格树刷新数据后，子节点无法展开

* npm 1.0.30 版本发包


### 2023-12-19

* 修复表格多选时，刷新列表后选中项还在

* npm 1.0.31 版本发包


### 2023-12-25

* 修复 el-table-virtual-column 中未阻止事件冒泡

* npm 1.0.32 版本发包


### 2024-1-10

* keep-alive 保持滚动位置

* npm 1.1.0 版本发包


### 2024-1-11

* keep-alive 保持滚动位置（优化）

* npm 1.1.1 版本发包


### 2024-1-12

* 兼容设置 `virtualized=false`，keep-alive 保持滚动位置

* npm 1.1.2 版本发包


### 2024-1-19

* 修复通过 `babel-plugin-component` 按需引入 `element-ui` 时，会导致 `<virtual-column>` 组件报重复key

* npm 1.1.3 版本发包


### 2024-1-25

* 修复表格隐藏时向列表头部插入表格数据，显示时不能保持滚动条位置

* 修复自定义固定列如果没有横向滚动条时，仍然显示固定样式

* npm 1.1.4 版本发包


### 2024-1-25

* 如果全局没有引入 ElTableColumn，VirtualColumn 按需引入 ElTableColumn 组件

* npm 1.1.5 版本发包


### 2024-3-1

* formatter参数支持VNode作为返回值（适配jsx写法）

* 修复二次封装的el-table时，cellFixedStyle 获取eltable报错

* npm 1.1.6 版本发包


### 2024-3-5

* 优化virtual-column组件的formatter实现，避免低版本浏览器调用两次formatter

* npm 1.1.7 版本发包



### 2024-3-5

* toggleRowSelection 支持传入数组，避免多次调用toggleRowSelection造成卡顿

* npm 1.1.8 版本发包


### 2024-4-8

* 支持 `select`, `select-all` 事件

* npm 1.1.9 版本发包


### 2024-4-11

* 修复resize后自定义固定样式错乱；列拖拽偶尔会有白边

* 修复isVNode在生产判断有误

* npm 1.1.10 版本发包


### 2024-4-12

* 优化虚拟滚动结束位置计算

* 修复列拖拽跨度太多，表格有部分白屏或者行高度错乱

* npm 1.1.11 版本发包


### 2024-4-23

* 兼容旧版 element-ui table 组件没有 `syncPostion` 方法

* npm 1.1.12 版本发包


### 2024-5-15

* 树形表格提供方法：删除节点、重新加载节点、获取子节点、获取父节点、获取所有节点 （removeNode/reloadNode/getChildNodes/getParentNodes/getAllNodes）

* npm 1.1.13 版本发包


### 2024-5-16

* 修复树形表格提供方法：删除节点、重新加载节点、获取子节点、获取父节点、获取所有节点 （removeNode/reloadNode/getChildNodes/getParentNodes/getAllNodes）

* npm 1.1.14 版本发包


### 2024-5-16

* `VirtualColumn` 组件 增加 `tree-props` 属性设置

* npm 1.2.0 版本发包


### 2024-6-5

* 支持 el-table 的过滤和筛选功能，调整部分代码（代码改动较多）

* 多选支持 reserve-selection

* npm 1.3.0 版本发包


### 2024-6-6

* 兼容 selectOnIndeterminate、highlightSelectionRow、default-sort、filtered-value、clearFilter、clearSort

* 修复全选 bug

* npm 1.3.1 版本发包



### 2024-6-6

* `<virtual-column>` 兼容$index

* 修复filter过滤时，多选选中会闪一下

* 修复removeNode删除节点时没有一同删除子节点

* 兼容展开行时无需手动调用update

* npm 1.4.0 版本发包





