<template>
  <div
    class="el-table-virtual-scroll"
    :class="[
      isExpanding ? 'is-expanding' : '',
      isHideAppend ? 'hide-append' : '',
      scrollPosition ? `is-scrolling-${scrollPosition}` : '',
      hasFixedRight ? 'has-custom-fixed-right' : '']">
    <slot v-bind="{ headerCellFixedStyle, cellFixedStyle }"></slot>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

// 判断是否是滚动容器
function isScroller (el) {
  const style = window.getComputedStyle(el, null)
  const scrollValues = ['auto', 'scroll']
  return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y'])
}

// 获取父层滚动容器
function getParentScroller (el) {
  let parent = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroller(parent)) {
      return parent
    }
    parent = parent.parentNode
  }

  return parent || window
}

// 获取容器滚动位置
function getScrollTop (el) {
  return el === window ? window.pageYOffset : el.scrollTop
}

// 获取容器高度
function getOffsetHeight (el) {
  return el === window ? window.innerHeight : el.offsetHeight
}

// 滚动到某个位置
function scrollToY (el, y) {
  if (el === window) {
    window.scroll(0, y)
  } else {
    el.scrollTop = y
  }
}

// 是否为空 undefine or null
function isEmpty (val) {
  return typeof val === 'undefined' || val === null
}

// 表格body class名称
const TableBodyClassNames = ['.el-table__body-wrapper', '.el-table__fixed-right .el-table__fixed-body-wrapper', '.el-table__fixed .el-table__fixed-body-wrapper']

let checkOrder = 0 // 多选：记录多选选项改变的顺序

export default {
  name: 'el-table-virtual-scroll',
  props: {
    // 总数据
    data: {
      type: Array,
      required: true
    },
    // 每一行的预估高度
    itemSize: {
      type: Number,
      default: 60
    },
    // 指定滚动容器
    scrollBox: {
      type: String
    },
    // 顶部和底部缓冲区域，值越大显示表格的行数越多
    buffer: {
      type: Number,
      default: 200
    },
    // key值，data数据中的唯一id
    keyProp: {
      type: String,
      default: 'id'
    },
    // 滚动事件的节流时间
    throttleTime: {
      type: Number,
      default: 10
    },
    // 是否获取表格行动态高度
    dynamic: {
      type: Boolean,
      default: true
    },
    // 是否开启虚拟滚动
    virtualized: {
      type: Boolean,
      default: true
    },
    // 表格行合并时，合并在一起的行返回相同的key值
    rowSpanKey: {
      type: Function
    },
    // 清除固定列存储值的间隔时间
    clearFixedMapTime: {
      type: Number,
      default: 2000
    },
    warn: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      virtualScroll: this
    }
  },
  data () {
    return {
      sizes: {}, // 尺寸映射（依赖响应式）
      start: 0,
      end: undefined,
      curRow: null, // 表格单选：选中的行
      isExpanding: false, // 列是否正在展开
      columnVms: [], // virtual-column 组件实例
      isHideAppend: false,
      scrollPosition: '',
      hasFixedRight: false
    }
  },
  computed: {
    // 计算出每个item（的key值）到滚动容器顶部的距离
    offsetMap ({ keyProp, itemSize, sizes, data }) {
      if (!this.dynamic) return {}

      const res = {}
      let total = 0
      for (let i = 0; i < data.length; i++) {
        const key = data[i][keyProp]
        if (typeof key === 'undefined') {
          this.warn && console.warn(`data[${i}][${keyProp}] 为 undefined，请确保 keyProp 对应的值不为undefined`)
        }
        res[key] = total

        const curSize = sizes[key]
        const size = typeof curSize === 'number' ? curSize : itemSize
        total += size
      }
      return res
    }
  },
  methods: {
    // 初始化数据
    initData () {
      // 可视范围内显示数据
      this.renderData = []
      // 页面可视范围顶端、底部
      this.top = undefined
      this.bottom = undefined
      // 截取页面可视范围内显示数据的开始和结尾索引
      this.start = 0
      this.end = undefined
      // 是否是表格内部滚动
      this.isInnerScroll = false

      // 验证ElTable组件
      this.elTable = this.$children[0]
      if (!this.elTable || this.elTable.$options.name !== 'ElTable') {
        throw new Error('el-table-virtual-column 组件插槽内必须是el-table')
      }

      this.scroller = this.getScroller()
      this.observeElTable()
      // 初次执行
      setTimeout(() => {
        this.handleScroll()
      }, 100)

      // 监听事件
      this.onScroll = !this.throttleTime ? this.handleScroll : throttle(this.handleScroll, this.throttleTime)
      this.scroller.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onScroll)
      this.bindTableExpandEvent()
    },

    // 获取滚动元素
    getScroller () {
      let el
      if (this.scrollBox) {
        if (this.scrollBox === 'window' || this.scrollBox === window) return window

        el = document.querySelector(this.scrollBox)
        if (!el) throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`)
        if (!isScroller(el)) console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`)
        return el
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.elTable && (this.elTable.height || this.elTable.maxHeight)) {
        this.isInnerScroll = true
        return this.$el.querySelector('.el-table__body-wrapper')
      } else {
        return getParentScroller(this.$el)
      }
    },

    // 设置表格到滚动容器的距离
    getToTop () {
      if (this.isInnerScroll) {
        return 0
      } else {
        return this.$el.getBoundingClientRect().top - (this.scroller === window ? 0 : this.scroller.getBoundingClientRect().top) + getScrollTop(this.scroller)
      }
    },

    // 监听el-table
    observeElTable () {
      // 监听滚动位置
      const unWatch1 = this.$watch(() => this.elTable.scrollPosition, (val) => {
        this.scrollPosition = val
      }, { immediate: true })

      // 监听表格滚动高度变化（切换v-show时更新）
      const unWatch2 = this.$watch(() => this.elTable.layout.bodyHeight, (val) => {
        val > 0 && this.update()
      })
      this.unWatchs = [unWatch1, unWatch2]
    },

    // 处理滚动事件
    handleScroll (shouldUpdate = true) {
      if (this.disabled) return
      if (!this.virtualized) return
      // 【修复】如果使用v-show 进行切换表格会特别卡顿 #30；
      // 【原因】v-show为false时，表格内滚动容器的高度为auto，没有滚动条限制，虚拟滚动计算渲染全部内容
      if (this.isInnerScroll && !this.scroller.style.height && !this.scroller.style.maxHeight) return

      this.removeHoverRows()
      // 更新当前尺寸（高度）
      this.updateSizes()
      // 计算renderData
      this.calcRenderData()
      // 计算位置
      this.calcPosition()
      shouldUpdate && this.updatePosition()
      // 触发事件
      this.$emit('change', this.renderData, this.start, this.end)
      // 设置表格行展开
      this.setRowsExpanded()
    },

    // 移除多个hover-row
    removeHoverRows () {
      const hoverRows = this.$el.querySelectorAll('.el-table__row.hover-row')
      if (hoverRows.length > 1) {
        Array.from(hoverRows).forEach((row) => {
          row.classList.remove('hover-row')
        })
      }
    },

    // 更新尺寸（高度）
    updateSizes () {
      if (!this.dynamic) return
      let rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row')

      // 处理树形表格(修复树结构懒加载 如果有hasChildren=false的行 行可视区域高度异常 #45)
      const isTree = this.elTable.lazy
      const noFirstLevelReg = /el-table__row--level-[1-9]\d*/ // 匹配树形表格非一级行
      if (isTree) {
        // 筛选出树形表格的一级行，一级行className含有el-table__row--level-0或者不存在层级className
        rows = Array.from(this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row')).filter(row => {
          return !noFirstLevelReg.test(row.className)
        })
      }

      Array.from(rows).forEach((row, index) => {
        const item = this.renderData[index]
        if (!item) return

        // 计算表格行的高度
        let offsetHeight = row.offsetHeight
        // 表格行如果有扩展行，需要加上扩展内容的高度
        if (row.classList.contains('expanded')) {
          offsetHeight += row.nextSibling.offsetHeight
        }
        // 表格行如果有子孙节点，需要加上子孙节点的高度
        if (isTree) {
          let next = row.nextSibling
          while (next && next.tagName === 'TR' && noFirstLevelReg.test(next.className)) {
            offsetHeight += next.offsetHeight
            next = next.nextSibling
          }
        }

        const key = item[this.keyProp]
        if (offsetHeight && this.sizes[key] !== offsetHeight) {
          this.$set(this.sizes, key, offsetHeight)
        }
      })
    },

    // 获取某条数据offsetTop
    getItemOffsetTop (index) {
      if (!this.dynamic) {
        return this.itemSize * index
      }

      const item = this.data[index]
      if (item) {
        return this.offsetMap[item[this.keyProp]] || 0
      }
      return 0
    },

    // 获取某条数据的尺寸
    getItemSize (index) {
      if (index <= -1) return 0
      const item = this.data[index]
      if (item) {
        const key = item[this.keyProp]
        return this.sizes[key] || this.itemSize
      }
      return this.itemSize
    },

    // 计算只在视图上渲染的数据
    calcRenderData () {
      const { scroller, data, buffer } = this
      // 计算可视范围顶部、底部
      const toTop = this.getToTop() // 表格到滚动容器的距离
      const top = getScrollTop(scroller) - buffer - toTop
      const bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer - toTop

      let start
      let end
      if (!this.dynamic) {
        start = top <= 0 ? 0 : Math.floor(top / this.itemSize)
        end = bottom <= 0 ? 0 : Math.ceil(bottom / this.itemSize)
      } else {
        // 二分法计算可视范围内的开始的第一个内容
        let l = 0
        let r = data.length - 1
        let mid = 0
        while (l <= r) {
          mid = Math.floor((l + r) / 2)
          const midVal = this.getItemOffsetTop(mid)
          if (midVal < top) {
            const midNextVal = this.getItemOffsetTop(mid + 1)
            if (midNextVal > top) break
            l = mid + 1
          } else {
            r = mid - 1
          }
        }

        // 计算渲染内容的开始、结束索引
        start = mid
        end = data.length - 1
        for (let i = start + 1; i < data.length; i++) {
          const offsetTop = this.getItemOffsetTop(i)
          if (offsetTop >= bottom) {
            end = i
            break
          }
        }
      }

      if (this.isRowSpan()) {
        // 计算包含合并行的开始结束区间（⚠️注意：合并行不支持使用斑马纹，因为不能100%确定合并行的开始行是偶数，可能会向上找一直到第一行，导致渲染非常多行，浪费性能）
        [start, end] = this.calcRenderSpanData(start, end)
      } else {
        // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
        if (start % 2) start = start - 1
      }

      this.top = top
      this.bottom = bottom
      this.start = start
      this.end = end
      this.renderData = data.slice(start, end + 1)
      if (this.start === 0 && this.end > 30 && this.end === this.data.length - 1) {
        this.warn && console.warn('[el-table-virtual-scroll] 表格数据全部渲染，渲染数量为:' + this.data.length)
      }
    },

    // 是否是合并行
    isRowSpan () {
      return typeof this.rowSpanKey === 'function'
    },

    // 如果存在合并行的情况，渲染的数据范围扩大到包含合并行
    calcRenderSpanData (start, end) {
      // 从开始节点向上查找是否有合并行
      let prevKey
      while (start > 0) {
        const curRow = this.data[start]
        const curkey = this.rowSpanKey(curRow, start)
        // 如果不存在key，说明当前行不属于合并行
        if (isEmpty(curkey)) break

        // 如果当前行与后面一行的key不相同，说明则当前行不属于合并行，从后一行开始截断
        if (!isEmpty(prevKey) && prevKey !== curkey) {
          start++
          break
        }

        prevKey = curkey
        start--
      }

      // 从末端节点向下查找是否有合并行
      const len = this.data.length
      prevKey = undefined
      while (end < len) {
        const curRow = this.data[end]
        const curkey = this.rowSpanKey(curRow, end)
        // 如果不存在key，说明当前行不属于合并行
        if (!curkey) break

        // 如果当前行与前面一行的key不相同，说明则当前行不属于合并行，从前一行开始截断
        if (prevKey && prevKey !== curkey) {
          end--
          break
        }

        prevKey = curkey
        end++
      }

      return [start, end]
    },

    // 计算位置
    calcPosition () {
      const last = this.data.length - 1
      // 计算内容总高度
      const wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last)
      // 计算当前滚动位置需要撑起的高度
      const offsetTop = this.getItemOffsetTop(this.start)

      let tableWrapEl
      // 设置dom位置
      TableBodyClassNames.forEach((className, index) => {
        const el = this.$el.querySelector(className)
        if (!el) return

        // 创建wrapEl、innerEl
        if (!el.wrapEl) {
          const wrapEl = document.createElement('div')
          const innerEl = document.createElement('div')
          wrapEl.appendChild(innerEl)
          innerEl.appendChild(el.children[0])
          el.insertBefore(wrapEl, el.firstChild)
          el.wrapEl = wrapEl
          el.innerEl = innerEl

          // 修复 fixed 动态切换时，固定列不显示（scrollTop位置和非固定列滚动位置不一致导致的，需要同步scrollTop的值）
          if (index > 0 && tableWrapEl) {
            this.$nextTick(() => {
              el.scrollTop = tableWrapEl.scrollTop
            })
          }
        }
        index === 0 && (tableWrapEl = el) // 记录非固定列的dom

        if (el.wrapEl) {
          // 设置高度
          el.wrapEl.style.height = wrapHeight + 'px'
          // 设置transform撑起高度
          el.innerEl.style.transform = `translateY(${offsetTop}px)`
          // 设置paddingTop撑起高度
          // el.innerEl.style.paddingTop = `${offsetTop}px`
        }
      })
    },

    // 空闲时更新位置（触发时间：滚动停止后等待10ms执行）
    // 滚动停止之后，偶尔表格的行发生高度变更，那么当前计算的渲染数据是不正确的；那么需要手动触发最后一次handleScroll来重新计算
    updatePosition () {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.timer && clearTimeout(this.timer)
        // 传入false，避免一直循环调用
        this.handleScroll(false)
      }, this.throttleTime + 10)
    },

    // 渲染全部数据
    renderAllData () {
      this.renderData = this.data
      this.$emit('change', this.data, 0, this.data.length - 1)

      this.$nextTick(() => {
        // 清除撑起的高度和位置
        TableBodyClassNames.forEach(className => {
          const el = this.$el.querySelector(className)
          if (!el) return

          if (el.wrapEl) {
            // 设置高度
            el.wrapEl.style.height = 'auto'
            // 设置transform撑起高度
            el.innerEl.style.transform = `translateY(${0}px)`
          }
        })
      })
    },

    // 【外部调用】更新
    update () {
      // console.log('update')
      this.handleScroll()
    },

    // 【外部调用】滚动到第几行
    // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
    // offsetY - 偏移量
    scrollTo (index, offsetY = 0, stop = false) {
      const item = this.data[index]
      if (item && this.scroller) {
        this.updateSizes()
        this.calcRenderData()

        this.$nextTick(() => {
          const offsetTop = this.getItemOffsetTop(index) - offsetY
          scrollToY(this.scroller, offsetTop)

          // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
          if (!stop) {
            setTimeout(() => {
              this.scrollTo(index, offsetY, true)
            }, 50)
          }
        })
      }
    },
    // 【外部调用】重置
    reset () {
      this.sizes = {}
      this.scrollTo(0, 0, false)
    },

    // 添加virtual-column实例
    addColumn (vm) {
      this.columnVms.push(vm)
    },
    // 移除virtual-column实例
    removeColumn (vm) {
      this.columnVms = this.columnVms.filter(item => item !== vm)
    },
    // 多选：选中所有列
    checkAll (val, rows = this.data) {
      const removedRows = []
      rows.forEach(row => {
        if (row.$v_checked) removedRows.push(row)
        this.checkRow(row, val, false)
      })
      this.emitSelectionChange(removedRows)

      if (val === false) checkOrder = 0 // 取消全选，则重置checkOrder
    },
    // 多选：选中某一列
    checkRow (row, val, emit = true) {
      if (row.$v_checked === val) return

      this.$set(row, '$v_checked', val)
      this.$set(row, '$v_checkedOrder', val ? checkOrder++ : undefined)
      emit && this.emitSelectionChange(val ? [] : [row])
    },
    // 多选：兼容表格selection-change事件
    emitSelectionChange (removedRows) {
      const selection = this.data.filter(row => row.$v_checked).sort((a, b) => a.$v_checkedOrder - b.$v_checkedOrder)
      this.$emit('selection-change', selection, removedRows)
    },
    // 多选：兼容表格clearSelection方法
    clearSelection () {
      this.checkAll(false)
      this.columnVms.forEach(vm => vm.syncCheckStatus())
    },
    // 多选：兼容表格toggleRowSelection方法
    toggleRowSelection (row, selected) {
      const val = typeof selected === 'boolean' ? selected : !row.$v_checked
      this.checkRow(row, val)
      this.columnVms.forEach(vm => vm.syncCheckStatus())
    },
    // 展开行：监听表格expand-change事件
    bindTableExpandEvent () {
      // el-table-virtual-column 组件如果设置了type="expand"，则会将this.isExpandType设为true
      if (!this.isExpandType) return

      this.elTable.$on('expand-change', (row, expandedRows) => {
        this.$set(row, '$v_expanded', expandedRows.includes(row))
      })
    },
    // 展开行：设置表格行展开
    setRowsExpanded () {
      if (!this.isExpandType) return

      this.$nextTick(() => {
        const expandRows = this.renderData.filter(item => item.$v_expanded)
        if (expandRows.length === 0) return

        expandRows.forEach(row => {
          this.elTable.toggleRowExpansion(row, true)
        })
        // 手动设置列展开时，禁止展开动画
        this.isExpanding = true
        setTimeout(() => {
          this.isExpanding = false
        }, 10)
      })
    },
    // 展开行：切换某一行的展开状态
    toggleRowExpansion (row, expanded) {
      const hasVal = typeof expanded === 'boolean'
      this.$set(row, '$v_expanded', hasVal ? expanded : !row.$v_expanded)
      if (this.renderData.includes(row)) {
        this.elTable.toggleRowExpansion(row, expanded)
      }
    },
    // 单选：设置选中行
    setCurrentRow (row) {
      this.curRow = row
      this.$emit('current-change', row)
    },
    // 更新数据
    updateData (data = []) {
      this.list = data
      this.$emit('update:data', this.list)
    },
    getData () {
      return this.list || this.data
    },
    // 执行update方法更新虚拟滚动，且每次nextTick只能执行一次【在数据大于100条开启虚拟滚动时，由于监听了data、virtualized会连续触发两次update方法：第一次update时，（updateSize）计算尺寸里的渲染数据（renderData）与表格行的dom是一一对应，之后会改变渲染数据（renderData）的值；而第二次执行update时，renderData改变了，而表格行dom未改变，导致renderData与dom不一一对应，从而位置计算错误，最终渲染的数据对应不上。因此使用每次nextTick只能执行一次来避免bug发生】
    doUpdate () {
      if (this.hasDoUpdate) return // nextTick内已经执行过一次就不执行
      if (!this.scroller) return // scroller不存在说明未初始化完成，不执行

      // 启动虚拟滚动的瞬间，需要暂时隐藏el-table__append-wrapper里的内容，不然会导致滚动位置一直到append的内容处
      this.isHideAppend = true
      this.update()
      this.hasDoUpdate = true
      this.$nextTick(() => {
        this.hasDoUpdate = false
        this.isHideAppend = false
      })
    },

    // 设置固定左右样式
    headerCellFixedStyle (data) {
      return this.cellFixedStyle(data, true)
    },

    // 设置固定左右样式
    cellFixedStyle ({ column }, isHeader = false) {
      const elTable = this.$children[0]
      if (!elTable) return
      // 右边固定列头部需要加上滚动条宽度-gutterWidth
      const { gutterWidth: _gutterWidth, scrollY } = elTable.layout
      const gutterWidth = isHeader && scrollY ? _gutterWidth : 0
      // 计算固定样式
      if (!this.fixedMap || this.isScrollY !== scrollY) {
        this.isScrollY = scrollY
        this.fixedMap = {}
        this.totalLeft = 0 // 左边固定定位累加值
        this.totalRight = 0 // 右边固定定位累加值
        // 清空fixedMap
        setTimeout(() => {
          this.fixedMap = null
        }, this.clearFixedMapTime)

        const columns = elTable.columns
        const rightColumns = []
        let lastLeftColumn
        let firstRightColumn
        for (let i = 0; i < columns.length; i++) {
          const column = columns[i]
          const isLeft = column.className && column.className.includes('virtual-column__fixed-left')
          const isRight = column.className && column.className.includes('virtual-column__fixed-right')

          if (!isLeft && !isRight) continue
          // 设置左边固定列定位样式
          if (isLeft) {
            lastLeftColumn = column
            this.fixedMap[column.id] = {
              left: this.totalLeft
            }
            this.totalLeft += column.realWidth || column.width
          }
          // 收集右边固定列
          if (isRight) {
            if (!firstRightColumn) firstRightColumn = column
            rightColumns.push(column)
          }
        }
        // 设置固定列阴影classname
        const leftClass = ' is-last-column'
        const rightClass = ' is-first-column'
        if (lastLeftColumn && !lastLeftColumn.className.includes(leftClass)) lastLeftColumn.className += leftClass
        if (firstRightColumn && !firstRightColumn.className.includes(rightClass)) firstRightColumn.className += rightClass
        // 设置右边固定列定位样式（从结尾开始算）
        this.hasFixedRight = rightColumns.length > 0
        rightColumns.reverse().forEach(column => {
          this.fixedMap[column.id] = {
            right: this.totalRight
          }
          this.totalRight += column.realWidth || column.width
        })
      }
      const style = this.fixedMap[column.id]
      if (!style) return
      const isFixedRight = 'right' in style
      return isFixedRight ? { right: style.right + gutterWidth + 'px' } : { left: style.left + 'px' }
    },

    // 更新表头布局
    doHeaderLayout () {
      if (!this.elTable) return
      this.fixedMap = null
      this.elTable.$refs.tableHeader.$forceUpdate()
    }
  },
  watch: {
    data () {
      if (!this.virtualized) {
        this.renderAllData()
      } else {
        this.doUpdate()
      }
      this.columnVms.forEach(vm => vm.syncCheckStatus())
    },
    virtualized: {
      immediate: true,
      handler (val) {
        if (!val) {
          this.renderAllData()
        } else {
          this.doUpdate()
        }
      }
    },
    disabled () {
      this.doUpdate()
    }
  },
  created () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  beforeDestroy () {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.onScroll)
      window.removeEventListener('resize', this.onScroll)
    }
    if (this.unWatchs) {
      this.unWatchs.forEach(unWatch => unWatch())
    }
  }
}
</script>

<style lang="less">
.el-table-virtual-scroll {
  &.has-custom-fixed-right {
    .el-table__cell.gutter {
      position: sticky;
      right: 0;
    }
  }
}
</style>

<style lang='less' scoped>
.is-expanding {
  :deep(.el-table__expand-icon) {
    transition: none;
  }
}
.hide-append {
  :deep(.el-table__append-wrapper) {
    display: none;
  }
}
</style>
