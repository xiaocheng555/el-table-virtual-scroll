<template>
  <div
    class="el-table-virtual-scroll"
    :class="[isExpanding ? 'is-expanding' : '', isHideAppend ? 'hide-append' : '']">
    <slot></slot>
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
      isHideAppend: false
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
      // 设置表格到滚动容器的距离
      this.toTop = 0

      // 验证ElTable组件
      this.elTable = this.$children[0]
      if (!this.elTable || this.elTable.$options.name !== 'ElTable') {
        throw new Error('el-table-virtual-column 组件插槽内必须是el-table')
      }

      this.scroller = this.getScroller()
      this.setToTop()
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
      if (this.elTable && this.elTable.height) {
        this.isInnerScroll = true
        return this.$el.querySelector('.el-table__body-wrapper')
      } else {
        return getParentScroller(this.$el)
      }
    },

    // 设置表格到滚动容器的距离
    setToTop () {
      if (this.isInnerScroll) {
        this.toTop = 0
      } else {
        this.toTop = this.$el.getBoundingClientRect().top - (this.scroller === window ? 0 : this.scroller.getBoundingClientRect().top) + getScrollTop(this.scroller)
      }
    },

    // 处理滚动事件
    handleScroll (shouldUpdate = true) {
      if (!this.virtualized) return

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

      // 处理树形表格
      let isTree = false
      if (rows[0] && rows[0].classList.contains('el-table__row--level-0')) {
        isTree = true
        rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row.el-table__row--level-0')
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
          while (next && next.tagName === 'TR' && !next.classList.contains('el-table__row--level-0')) {
            offsetHeight += next.offsetHeight
            next = next.nextSibling
          }
        }

        const key = item[this.keyProp]
        if (this.sizes[key] !== offsetHeight) {
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
      const top = getScrollTop(scroller) - buffer - this.toTop
      const bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer - this.toTop

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

      // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
      if (start % 2) {
        start = start - 1
      }

      // 计算包含合并行的开始结束区间
      const [newStart, newEnd] = this.calcRenderSpanData(start, end)

      this.top = top
      this.bottom = bottom
      this.start = newStart
      this.end = newEnd
      this.renderData = data.slice(newStart, newEnd + 1)
    },

    // 如果存在合并行的情况，渲染的数据范围扩大到包含合并行
    calcRenderSpanData (start, end) {
      if (typeof this.rowSpanKey !== 'function') return [start, end]

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

      // 设置dom位置
      TableBodyClassNames.forEach(className => {
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
        }

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
      this.setToTop()
      this.handleScroll()
    },

    // 【外部调用】滚动到第几行
    // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
    scrollTo (index, stop = false) {
      const item = this.data[index]
      if (item && this.scroller) {
        this.updateSizes()
        this.calcRenderData()

        this.$nextTick(() => {
          const offsetTop = this.getItemOffsetTop(index)
          scrollToY(this.scroller, offsetTop)

          // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
          if (!stop) {
            setTimeout(() => {
              this.scrollTo(index, true)
            }, 50)
          }
        })
      }
    },
    // 【外部调用】重置
    reset () {
      this.sizes = {}
      this.scrollTo(0, false)
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
    checkAll (val) {
      const removedRows = []
      this.data.forEach(row => {
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
    updateData (data) {
      this.$emit('update:data', data)
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
  }
}
</script>

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
