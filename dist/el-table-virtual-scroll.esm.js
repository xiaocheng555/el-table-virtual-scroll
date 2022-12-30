import throttle from 'lodash/throttle';

//

// 判断是否是滚动容器
function isScroller(el) {
  var style = window.getComputedStyle(el, null);
  var scrollValues = ['auto', 'scroll'];
  return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y']);
}

// 获取父层滚动容器
function getParentScroller(el) {
  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroller(parent)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent || window;
}

// 获取容器滚动位置
function getScrollTop(el) {
  return el === window ? window.pageYOffset : el.scrollTop;
}

// 获取容器高度
function getOffsetHeight(el) {
  return el === window ? window.innerHeight : el.offsetHeight;
}

// 滚动到某个位置
function scrollToY(el, y) {
  if (el === window) {
    window.scroll(0, y);
  } else {
    el.scrollTop = y;
  }
}
var script$1 = {
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
      "default": 60
    },
    // 指定滚动容器
    scrollBox: {
      type: String
    },
    // 顶部和底部缓冲区域，值越大显示表格的行数越多
    buffer: {
      type: Number,
      "default": 200
    },
    // key值，data数据中的唯一id
    keyProp: {
      type: String,
      "default": 'id'
    },
    // 滚动事件的节流时间
    throttleTime: {
      type: Number,
      "default": 10
    },
    // 是否获取表格行动态高度
    dynamic: {
      type: Boolean,
      "default": true
    }
  },
  provide: function provide() {
    return {
      virtualScroll: this
    };
  },
  data: function data() {
    return {
      sizes: {},
      // 尺寸映射（依赖响应式）
      start: 0,
      end: undefined,
      curRow: null,
      // 表格单选：选中的行
      isExpanding: false,
      // 列是否正在展开
      columnVms: [] // virtual-column 组件实例
    };
  },

  computed: {
    // 计算出每个item（的key值）到滚动容器顶部的距离
    offsetMap: function offsetMap(_ref) {
      var keyProp = _ref.keyProp,
        itemSize = _ref.itemSize,
        sizes = _ref.sizes,
        data = _ref.data;
      if (!this.dynamic) return {};
      var res = {};
      var total = 0;
      for (var i = 0; i < data.length; i++) {
        var key = data[i][keyProp];
        res[key] = total;
        var curSize = sizes[key];
        var size = typeof curSize === 'number' ? curSize : itemSize;
        total += size;
      }
      return res;
    }
  },
  methods: {
    // 初始化数据
    initData: function initData() {
      var _this = this;
      // 可视范围内显示数据
      this.renderData = [];
      // 页面可视范围顶端、底部
      this.top = undefined;
      this.bottom = undefined;
      // 截取页面可视范围内显示数据的开始和结尾索引
      this.start = 0;
      this.end = undefined;

      // 验证ElTable组件
      this.elTable = this.$children[0];
      if (!this.elTable || this.elTable.$options.name !== 'ElTable') {
        throw new Error('el-table-virtual-column 组件插槽内必须是el-table');
      }
      this.scroller = this.getScroller();
      // 初次执行
      setTimeout(function () {
        _this.handleScroll();
      }, 100);

      // 监听事件
      this.onScroll = !this.throttleTime ? this.handleScroll : throttle(this.handleScroll, this.throttleTime);
      this.scroller.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onScroll);
      this.bindTableExpandEvent();
    },
    // 获取滚动元素
    getScroller: function getScroller() {
      var el;
      if (this.scrollBox) {
        el = document.querySelector(this.scrollBox);
        if (!el) throw new Error(" scrollBox prop: '".concat(this.scrollBox, "' is not a valid selector"));
        if (!isScroller(el)) console.warn("Warning! scrollBox prop: '".concat(this.scrollBox, "' is not a scroll element"));
        return el;
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.elTable && this.elTable.height) {
        return this.$el.querySelector('.el-table__body-wrapper');
      } else {
        return getParentScroller(this.$el);
      }
    },
    // 更新尺寸（高度）
    updateSizes: function updateSizes() {
      var _this2 = this;
      if (!this.dynamic) return;
      var rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row');

      // 处理树形表格
      var isTree = false;
      if (rows[0] && rows[0].classList.contains('el-table__row--level-0')) {
        isTree = true;
        rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row.el-table__row--level-0');
      }

      // 移除多个hover-row
      var hoverRows = this.$el.querySelectorAll('.el-table__row.hover-row');
      if (hoverRows.length > 1) {
        Array.from(hoverRows).forEach(function (row) {
          row.classList.remove('hover-row');
        });
      }
      Array.from(rows).forEach(function (row, index) {
        var item = _this2.renderData[index];
        if (!item) return;

        // 计算表格行的高度
        var offsetHeight = row.offsetHeight;
        // 表格行如果有扩展行，需要加上扩展内容的高度
        if (row.classList.contains('expanded')) {
          offsetHeight += row.nextSibling.offsetHeight;
        }
        // 表格行如果有子孙节点，需要加上子孙节点的高度
        if (isTree) {
          var next = row.nextSibling;
          while (next && next.tagName === 'TR' && !next.classList.contains('el-table__row--level-0')) {
            offsetHeight += next.offsetHeight;
            next = next.nextSibling;
          }
        }
        var key = item[_this2.keyProp];
        if (_this2.sizes[key] !== offsetHeight) {
          _this2.$set(_this2.sizes, key, offsetHeight);
        }
      });
    },
    // 处理滚动事件
    handleScroll: function handleScroll() {
      var shouldUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // 更新当前尺寸（高度）
      this.updateSizes();
      // 计算renderData
      this.calcRenderData();
      // 计算位置
      this.calcPosition();
      shouldUpdate && this.updatePosition();
      // 触发事件
      this.$emit('change', this.renderData, this.start, this.end);
      // 设置表格行展开
      this.setRowsExpanded();
    },
    // 获取某条数据offsetTop
    getItemOffsetTop: function getItemOffsetTop(index) {
      if (!this.dynamic) {
        return this.itemSize * index;
      }
      var item = this.data[index];
      if (item) {
        return this.offsetMap[item[this.keyProp]] || 0;
      }
      return 0;
    },
    // 获取某条数据的尺寸
    getItemSize: function getItemSize(index) {
      if (index <= -1) return 0;
      var item = this.data[index];
      if (item) {
        var key = item[this.keyProp];
        return this.sizes[key] || this.itemSize;
      }
      return this.itemSize;
    },
    // 计算只在视图上渲染的数据
    calcRenderData: function calcRenderData() {
      var scroller = this.scroller,
        data = this.data,
        buffer = this.buffer;
      // 计算可视范围顶部、底部
      var top = getScrollTop(scroller) - buffer;
      var bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer;
      var start;
      var end;
      if (!this.dynamic) {
        start = top <= 0 ? 0 : Math.floor(top / this.itemSize);
        end = bottom <= 0 ? 0 : Math.ceil(bottom / this.itemSize);
      } else {
        // 二分法计算可视范围内的开始的第一个内容
        var l = 0;
        var r = data.length - 1;
        var mid = 0;
        while (l <= r) {
          mid = Math.floor((l + r) / 2);
          var midVal = this.getItemOffsetTop(mid);
          if (midVal < top) {
            var midNextVal = this.getItemOffsetTop(mid + 1);
            if (midNextVal > top) break;
            l = mid + 1;
          } else {
            r = mid - 1;
          }
        }

        // 计算渲染内容的开始、结束索引
        start = mid;
        end = data.length - 1;
        for (var i = start + 1; i < data.length; i++) {
          var offsetTop = this.getItemOffsetTop(i);
          if (offsetTop >= bottom) {
            end = i;
            break;
          }
        }
      }

      // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
      if (start % 2) {
        start = start - 1;
      }
      this.top = top;
      this.bottom = bottom;
      this.start = start;
      this.end = end;
      this.renderData = data.slice(start, end + 1);
    },
    // 计算位置
    calcPosition: function calcPosition() {
      var _this3 = this;
      var last = this.data.length - 1;
      // 计算内容总高度
      var wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last);
      // 计算当前滚动位置需要撑起的高度
      var offsetTop = this.getItemOffsetTop(this.start);

      // 设置dom位置
      var classNames = ['.el-table__body-wrapper', '.el-table__fixed-right .el-table__fixed-body-wrapper', '.el-table__fixed .el-table__fixed-body-wrapper'];
      classNames.forEach(function (className) {
        var el = _this3.$el.querySelector(className);
        if (!el) return;

        // 创建wrapEl、innerEl
        if (!el.wrapEl) {
          var wrapEl = document.createElement('div');
          var innerEl = document.createElement('div');
          wrapEl.appendChild(innerEl);
          innerEl.appendChild(el.children[0]);
          el.insertBefore(wrapEl, el.firstChild);
          el.wrapEl = wrapEl;
          el.innerEl = innerEl;
        }
        if (el.wrapEl) {
          // 设置高度
          el.wrapEl.style.height = wrapHeight + 'px';
          // 设置transform撑起高度
          el.innerEl.style.transform = "translateY(".concat(offsetTop, "px)");
          // 设置paddingTop撑起高度
          // el.innerEl.style.paddingTop = `${offsetTop}px`
        }
      });
    },
    // 空闲时更新位置（触发时间：滚动停止后等待10ms执行）
    // 滚动停止之后，偶尔表格的行发生高度变更，那么当前计算的渲染数据是不正确的；那么需要手动触发最后一次handleScroll来重新计算
    updatePosition: function updatePosition() {
      var _this4 = this;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.timer && clearTimeout(_this4.timer);
        // 传入false，避免一直循环调用
        _this4.handleScroll(false);
      }, this.throttleTime + 10);
    },
    // 【外部调用】更新
    update: function update() {
      // console.log('update')
      this.handleScroll();
    },
    // 【外部调用】滚动到第几行
    // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
    scrollTo: function scrollTo(index) {
      var _this5 = this;
      var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var item = this.data[index];
      if (item && this.scroller) {
        this.updateSizes();
        this.calcRenderData();
        this.$nextTick(function () {
          var offsetTop = _this5.getItemOffsetTop(index);
          scrollToY(_this5.scroller, offsetTop);

          // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
          if (!stop) {
            setTimeout(function () {
              _this5.scrollTo(index, true);
            }, 50);
          }
        });
      }
    },
    // 【外部调用】重置
    reset: function reset() {
      this.sizes = {};
      this.scrollTo(0, false);
    },
    // 添加virtual-column实例
    addColumn: function addColumn(vm) {
      this.columnVms.push(vm);
    },
    // 移除virtual-column实例
    removeColumn: function removeColumn(vm) {
      this.columnVms = this.columnVms.filter(function (item) {
        return item !== vm;
      });
    },
    // 多选：选中所有列
    checkAll: function checkAll(val) {
      var _this6 = this;
      this.data.forEach(function (row) {
        return _this6.$set(row, '$v_checked', val);
      });
      this.emitSelectionChange();
    },
    // 多选：选中某一列
    checkRow: function checkRow(row, val) {
      this.$set(row, '$v_checked', val);
      this.emitSelectionChange();
    },
    // 多选：兼容表格selection-change事件
    emitSelectionChange: function emitSelectionChange() {
      var selection = this.data.filter(function (row) {
        return row.$v_checked;
      });
      this.$emit('selection-change', selection);
    },
    // 多选：兼容表格clearSelection方法
    clearSelection: function clearSelection() {
      this.checkAll(false);
      this.columnVms.forEach(function (vm) {
        return vm.syncCheckStatus();
      });
    },
    // 多选：兼容表格toggleRowSelection方法
    toggleRowSelection: function toggleRowSelection(row, selected) {
      var val = typeof selected === 'boolean' ? selected : !row.$v_checked;
      this.checkRow(row, val);
      this.columnVms.forEach(function (vm) {
        return vm.syncCheckStatus();
      });
    },
    // 展开行：监听表格expand-change事件
    bindTableExpandEvent: function bindTableExpandEvent() {
      var _this7 = this;
      // el-table-virtual-column 组件如果设置了type="expand"，则会将this.isExpandType设为true
      if (!this.isExpandType) return;
      this.elTable.$on('expand-change', function (row, expandedRows) {
        _this7.$set(row, '$v_expanded', expandedRows.includes(row));
      });
    },
    // 展开行：设置表格行展开
    setRowsExpanded: function setRowsExpanded() {
      var _this8 = this;
      if (!this.isExpandType) return;
      this.$nextTick(function () {
        var expandRows = _this8.renderData.filter(function (item) {
          return item.$v_expanded;
        });
        if (expandRows.length === 0) return;
        expandRows.forEach(function (row) {
          _this8.elTable.toggleRowExpansion(row, true);
        });
        // 手动设置列展开时，禁止展开动画
        _this8.isExpanding = true;
        setTimeout(function () {
          _this8.isExpanding = false;
        }, 10);
      });
    },
    // 展开行：切换某一行的展开状态
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      var hasVal = typeof expanded === 'boolean';
      this.$set(row, '$v_expanded', hasVal ? expanded : !row.$v_expanded);
      if (this.renderData.includes(row)) {
        this.elTable.toggleRowExpansion(row, expanded);
      }
    },
    // 单选：设置选中行
    setCurrentRow: function setCurrentRow(row) {
      this.curRow = row;
      this.$emit('current-change', row);
    },
    // 更新数据
    updateData: function updateData(data) {
      this.$emit('update:data', data);
    }
  },
  watch: {
    data: function data() {
      this.update();
    }
  },
  created: function created() {
    var _this9 = this;
    this.$nextTick(function () {
      _this9.initData();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "el-table-virtual-scroll",
      class: _vm.isExpanding ? "is-expanding" : "",
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-68733e74_0", { source: ".is-expanding[data-v-68733e74] :deep(.el-table__expand-icon) {\n  transition: none;\n}\n", map: {"version":3,"sources":["el-table-virtual-scroll.vue"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB","file":"el-table-virtual-scroll.vue","sourcesContent":[".is-expanding :deep(.el-table__expand-icon) {\n  transition: none;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-68733e74";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'el-table-virtual-column',
  inject: ['virtualScroll'],
  props: {
    load: {
      type: Function
    },
    indent: {
      type: Number,
      "default": 16
    }
  },
  data: function data() {
    return {
      isCheckedAll: false,
      // 全选
      isCheckedImn: false,
      // 控制半选样式
      isTree: false
    };
  },
  methods: {
    // 选择表格所有行
    onCheckAllRows: function onCheckAllRows(val) {
      val = this.isCheckedImn ? true : val;
      this.virtualScroll.checkAll(val);
      this.isCheckedAll = val;
      this.isCheckedImn = false;
    },
    // 选择表格某行
    onCheckRow: function onCheckRow(row, val) {
      this.virtualScroll.checkRow(row, val);
      this.syncCheckStatus();
    },
    // 同步全选、半选框状态
    syncCheckStatus: function syncCheckStatus() {
      var list = this.virtualScroll.data;
      var checkedLen = list.filter(function (row) {
        return row.$v_checked === true;
      }).length;
      if (checkedLen === 0) {
        this.isCheckedAll = false;
        this.isCheckedImn = false;
      } else if (checkedLen === list.length) {
        this.isCheckedAll = true;
        this.isCheckedImn = false;
      } else {
        this.isCheckedAll = false;
        this.isCheckedImn = true;
      }
    },
    onRadioChange: function onRadioChange(row) {
      this.virtualScroll.setCurrentRow(row);
    },
    // 获取索引值
    getIndex: function getIndex(scope) {
      var index = this.virtualScroll.start + scope.$index;
      if (typeof this.$attrs.index === 'function') {
        return this.$attrs.index(index);
      }
      return index + 1;
    },
    // 展开收起事件
    onTreeNodeExpand: function onTreeNodeExpand(row) {
      this.$set(row, '$v_expanded', !row.$v_expanded);
      if (row.$v_expanded) {
        this.loadChildNodes(row);
      } else {
        this.hideChildNodes(row);
      }
    },
    // 加载子节点
    loadChildNodes: function loadChildNodes(row) {
      // 如果已经加载，则显示隐藏的字节点
      if (row.$v_loaded) {
        var list = this.virtualScroll.data;
        var index = list.findIndex(function (item) {
          return item === row;
        });
        if (index > -1) {
          this.virtualScroll.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(row.$v_hideNodes), _toConsumableArray(list.slice(index + 1))));
        }
        return;
      }

      // 获取子节点数据并显示
      this.$set(row, '$v_loading', true);
      this.load && this.load(row, resolve.bind(this));
      function resolve(data) {
        if (Array.isArray(!data)) data = [];
        this.$set(row, '$v_loading', false);
        this.$set(row, '$v_loaded', true);
        this.$set(row, '$v_hasChildren', !!data.length);
        data.forEach(function (item) {
          item.$level = typeof row.$level === 'number' ? row.$level + 1 : 2;
        });
        // 所有子节点插入到当前同级节点下
        var list = this.virtualScroll.data;
        var index = list.findIndex(function (item) {
          return item === row;
        });
        if (index > -1) {
          this.virtualScroll.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(data), _toConsumableArray(list.slice(index + 1))));
        }
      }
    },
    // 隐藏子节点
    hideChildNodes: function hideChildNodes(row) {
      var list = this.virtualScroll.data;
      var index = list.findIndex(function (item) {
        return item === row;
      });
      if (index === -1) return;

      // 查找当前节点的所有子孙节点
      var hideNodes = [];
      for (var i = index + 1; i < list.length; i++) {
        var curRow = list[i];
        if ((curRow.$level || 1) <= (row.$level || 1)) break;
        hideNodes.push(curRow);
      }
      this.$set(row, '$v_hideNodes', hideNodes);
      // 隐藏所有子孙节点
      var newList = list.filter(function (item) {
        return !hideNodes.includes(item);
      });
      this.virtualScroll.updateData(newList);
      this.virtualScroll.update();
    }
  },
  beforeCreate: function beforeCreate() {
    var type = this.$attrs.type;
    if (['index', 'selection', 'radio', 'tree'].includes(type)) {
      this.$attrs.type = 'v-' + type;
    }
  },
  created: function created() {
    this.virtualScroll.addColumn(this);
    var type = this.$attrs.type;
    if (type === 'expand') {
      this.virtualScroll.isExpandType = true;
    } else if (type === 'v-tree') {
      this.isTree = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.virtualScroll.removeColumn(this);
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-table-column",
    _vm._g(
      _vm._b(
        {
          attrs: { "class-name": _vm.isTree ? "el-table__row--level" : "" },
          scopedSlots: _vm._u(
            [
              {
                key: "header",
                fn: function (scope) {
                  return [
                    _vm._t(
                      "header",
                      function () {
                        return [
                          scope.column.type === "v-selection"
                            ? _c("el-checkbox", {
                                attrs: { indeterminate: _vm.isCheckedImn },
                                on: { change: _vm.onCheckAllRows },
                                model: {
                                  value: _vm.isCheckedAll,
                                  callback: function ($$v) {
                                    _vm.isCheckedAll = $$v;
                                  },
                                  expression: "isCheckedAll",
                                },
                              })
                            : [
                                _vm._v(
                                  "\n        " +
                                    _vm._s(scope.column.label) +
                                    "\n      "
                                ),
                              ],
                        ]
                      },
                      null,
                      scope
                    ),
                  ]
                },
              },
              {
                key: "default",
                fn: function (scope) {
                  return [
                    scope.column && scope.column.type === "v-tree"
                      ? [
                          _c("span", {
                            staticClass: "el-table__indent",
                            style: {
                              paddingLeft:
                                (scope.row.$level - 1) * _vm.indent + "px",
                            },
                          }),
                          _vm._v(" "),
                          scope.row.$v_hasChildren !== false
                            ? _c(
                                "div",
                                {
                                  staticClass: "el-table__expand-icon",
                                  class: scope.row.$v_expanded
                                    ? "el-table__expand-icon--expanded"
                                    : "",
                                  on: {
                                    click: function ($event) {
                                      return _vm.onTreeNodeExpand(scope.row)
                                    },
                                  },
                                },
                                [
                                  scope.row.$v_loading
                                    ? _c("i", {
                                        staticClass: "el-icon-loading",
                                      })
                                    : _c("i", {
                                        staticClass: "el-icon-arrow-right",
                                      }),
                                ]
                              )
                            : _c("span", {
                                staticClass: "el-table__placeholder",
                              }),
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._t(
                      "default",
                      function () {
                        return [
                          scope.column.type === "v-selection"
                            ? _c("el-checkbox", {
                                attrs: { value: scope.row.$v_checked },
                                on: {
                                  change: function ($event) {
                                    return _vm.onCheckRow(
                                      scope.row,
                                      !scope.row.$v_checked
                                    )
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          scope.column.type === "v-radio"
                            ? _c(
                                "el-radio",
                                {
                                  attrs: {
                                    label: true,
                                    value:
                                      _vm.virtualScroll.curRow === scope.row,
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.onRadioChange(scope.row)
                                    },
                                  },
                                },
                                [_c("span")]
                              )
                            : scope.column.type === "v-index"
                            ? _c("span", [
                                _vm._v(
                                  "\n        " +
                                    _vm._s(_vm.getIndex(scope)) +
                                    "\n      "
                                ),
                              ])
                            : [
                                _vm._v(
                                  "\n        " +
                                    _vm._s(scope.row[scope.column.property]) +
                                    "\n      "
                                ),
                              ],
                        ]
                      },
                      null,
                      scope
                    ),
                  ]
                },
              },
            ],
            null,
            true
          ),
        },
        "el-table-column",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    )
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-5805af30";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

export { __vue_component__ as VirtualColumn, __vue_component__$1 as VirtualScroll, __vue_component__$1 as default };
