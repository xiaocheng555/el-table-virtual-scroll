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
| keyProp | key值，data数据中的唯一id【⚠️若keyProp未设置或keyProp值不唯一，可能导致表格空数据或者滚动时渲染的数据断层、不连贯】 | string | — | id |
| itemSize | 每一行的预估高度 | number | — | 60 |
| scrollBox | 指定滚动容器；在指定滚动容器时，如果表格设置了height高度，则滚动容器为表格内的滚动容器；如果表格为设置height高度，则自动获取父层以外的滚动容器，直至window容器为止 | string | 'window'、css选择器 | - |
| buffer | 顶部和底部缓冲区域，值越大显示表格的行数越多 | Number | — | 200 |
| throttleTime | 滚动事件的节流时间 | number | — | 10 |
| dynamic | 动态获取表格行高度，默认开启。设置为false时，则以itemSize为表格行的真实高度，能大大减少虚拟滚动计算量，减少滚动白屏；如果itemSize与表格行的真实高度不一致，可能导致滚动时表格数据错乱 | boolean | — | true |
| virtualized | 是否开启虚拟滚动（1.0.3之后版本支持） | boolean | — | true |


### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行 | index |
| update | 更新，会重新计算实际渲染数据和位置 | - |
| reset | 重置 | - |
| clearSelection | 用于多选 `<virtual-column type="selection">`，清空用户的选择 | - |
| toggleRowSelection | 用于多选 `<virtual-column type="selection">`, 切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleRowExpansion | 用于展开行 `<virtual-column type="expand">`, 切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）| row, expanded |
| setCurrentRow | 用于单选 `<virtual-column type="radio">`, 设定某一行为选中行 | row |


### Events
| 事件名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |
| current-change | 虚拟表格单选选中事件 | currentRow |
| selection-change | 虚拟表格多选选项发生更改时触发事件 | selectedRows |

## virtual-column 组件

使用 `<el-table-virtual-scroll>` 做表格虚拟滚动，是不支持 `ElementUI` 表格的原有的索引、单选、多选、扩展行等功能，需要使用 `<virtual-column>` 来兼容。`<virtual-column>` 组件内封装了 `<el-table-column>`，支持传入 `<el-table-column>` 组件的props属性。
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

## el-table-virtual-scroll 组件注意事项

* 使用组件前，请确保项目中有引入 `element-ui` 组件库。

* `<el-table>` 组件最好写上 `row-key` 属性，能避免一些奇怪的问题。例：`<el-table row-key="id">`，其中id为数据中唯一key值。

* 不支持 Element-UI Table 原有单选、多选、扩展行、索引，请使用 `<virtual-column>` 做兼容，详见demo。

* 使用 Element-UI Table 排序时，需要做额外兼容，详见demo。

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
