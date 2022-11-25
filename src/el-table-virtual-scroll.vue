<template>
  <div class="el-table-virtual-scroll">
    <slot></slot>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

// 判断是否是滚动容器
function isScroller (el) {
  const style = window.getComputedStyle(el, null)
  const scrollValues = ['auto', 'scroll']
  return scrollValues.includes(style['overflow']) || scrollValues.includes(style['overflow-y'])
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

export default {
  name: 'el-table-virtual-scroll',
  props: {
    // 总数据
    data: {
      type: Array,
      required: true
    },
    // 每一行的预估高度（height 废弃，改为使用itemSize，语义更好）
    height: {
      type: Number,
      default: 60
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
      default: 400
    },
    // key值，data数据中的唯一id
    keyProp: {
      type: String,
      default: 'id'
    },
    // 滚动事件的节流时间
    throttleTime: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      sizes: {} // 尺寸映射（依赖响应式）
    }
  },
  computed: {
    // 计算出每个item（的key值）到滚动容器顶部的距离
    offsetMap ({ keyProp, avgItemSize, sizes, data }) {
      const res = {}
      let total = 0
      for (let i = 0; i < data.length; i++) {
        const key = data[i][keyProp]
        res[key] = total

        const curSize = sizes[key]
        const size = typeof curSize === 'number' ? curSize : avgItemSize
        total += size
      }
      return res
    },
    avgItemSize () {
      return this.itemSize || this.height
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

      this.scroller = this.getScroller()

      // 初次执行
      setTimeout(() => {
        this.handleScroll()
      }, 100)

      // 监听事件
      this.onScroll = throttle(this.handleScroll, this.throttleTime)
      this.scroller.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onScroll)
    },
    
    // 获取滚动元素
    getScroller () {
      let el
      if (this.scrollBox) {
        el = document.querySelector(this.scrollBox)
        if (!el) throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`)
        if (!isScroller(el)) console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`)
        return el
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.$children[0] && this.$children[0].height) {
        return this.$el.querySelector('.el-table__body-wrapper')
      } else {
        return getParentScroller(this.$el)
      }
    },

    // 更新尺寸（高度）
    updateSizes () {
      const rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row')

      Array.from(rows).forEach((row, index) => {
        const item = this.renderData[index]
        if (!item) return

        const key = item[this.keyProp]
        const offsetHeight = row.offsetHeight

        if (this.sizes[key] !== offsetHeight) {
          this.$set(this.sizes, key, offsetHeight)
        }
      })
    },

    // 处理滚动事件
    handleScroll (shouldUpdate = true) {
      // 更新当前尺寸（高度）
      this.updateSizes()
      // 计算renderData
      this.calcRenderData()
      // 计算位置
      this.calcPosition()
      shouldUpdate && this.updatePosition()
      // 触发事件
      this.$emit('change', this.renderData, this.start, this.end)
    },

    // 获取某条数据offsetTop
    getItemOffsetTop (index) {
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
        return this.sizes[key] || this.avgItemSize
      }
      return this.avgItemSize
    },

    // 计算只在视图上渲染的数据
    calcRenderData () {
      const { scroller, data, buffer } = this
      // 计算可视范围顶部、底部
      const top = getScrollTop(scroller) - buffer
      const bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer
      
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
      let start = mid
      let end = data.length - 1
      for (let i = start + 1; i < data.length; i++) {
        const offsetTop = this.getItemOffsetTop(i)
        if (offsetTop >= bottom) {
          end = i
          break
        }
      }

      // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
      if (start % 2) {
        start = start - 1
      }

      this.top = top
      this.bottom = bottom
      this.start = start
      this.end = end
      this.renderData = data.slice(start, end + 1)
    },

    // 计算位置
    calcPosition () {
      const last = this.data.length - 1
      // 计算内容总高度
      const wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last)
      // 计算当前滚动位置需要撑起的高度
      const offsetTop = this.getItemOffsetTop(this.start)

      // 设置dom位置
      const classNames = ['.el-table__body-wrapper', '.el-table__fixed-right .el-table__fixed-body-wrapper', '.el-table__fixed .el-table__fixed-body-wrapper']
      classNames.forEach(className => {
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

    // 【外部调用】更新
    update () {
      console.log('update')
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
    }
  },
  watch: {
    data () {
      this.update()
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
</style>
