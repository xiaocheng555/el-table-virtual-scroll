import normalizeWheel from 'normalize-wheel'
import { getValueByPath } from 'element-ui/src/utils/util'
import throttle from 'lodash/throttle'

// 判断是否是滚动容器
export function isScroller (el) {
  const style = window.getComputedStyle(el, null)
  const scrollValues = ['auto', 'scroll']
  return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y'])
}

// 获取父层滚动容器
export function getParentScroller (el) {
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
export function getScrollTop (el) {
  return el === window ? window.pageYOffset : el.scrollTop
}

// 获取容器高度
export function getOffsetHeight (el) {
  return el === window ? window.innerHeight : el.offsetHeight
}

// 滚动到某个位置
export function scrollToY (el, y) {
  if (el === window) {
    window.scroll(0, y)
  } else {
    el.scrollTop = y
  }
}

// 是否为空 undefine or null
export function isEmpty (val) {
  return typeof val === 'undefined' || val === null
}

export const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1

// 设置滚轮速度（完全参考 element-ui > table > handleFixedMousewheel方法）
export function setMousewheelSlow (scroller, slow) {
  function handler (event) {
    const data = normalizeWheel(event)
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = scroller.scrollTop
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault()
      }
      if (data.pixelY > 0 && scroller.scrollHeight - scroller.clientHeight > currentScrollTop) {
        event.preventDefault()
      }
      scroller.scrollTop += Math.ceil(data.pixelY / slow)
    }
  }
  const throttleHandler = throttle(handler, 0)
  scroller.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', throttleHandler, { passive: false })
  return function destory () {
    scroller.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', throttleHandler)
  }
}

const isObject = function (obj) {
  return obj !== null && typeof obj === 'object'
}

// 排序（来源：element-ui/table/util的orderBy方法)
export const orderBy = function (array, sortKey, reverse, sortMethod, sortBy) {
  // eslint-disable-next-line no-mixed-operators
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1
  } else {
    reverse = (reverse && reverse < 0) ? -1 : 1
  }
  const getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy]
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return getValueByPath(value, by)
        } else {
          return by(value, index, array)
        }
      })
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value
    }
    return [isObject(value) ? getValueByPath(value, sortKey) : value]
  }
  const compare = function (a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value)
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1
      }
      if (a.key[i] > b.key[i]) {
        return 1
      }
    }
    return 0
  }
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    }
  }).sort(function (a, b) {
    let order = compare(a, b)
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index
    }
    return order * reverse
  }).map(item => item.value)
}

export const getColumnById = function (table, columnId) {
  let column = null
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item
    }
  })
  return column
}
