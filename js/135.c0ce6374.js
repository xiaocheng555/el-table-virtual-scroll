(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[135],{20802:function(t,e,n){var r=n(91990),i=r.Symbol;t.exports=i},36251:function(t,e,n){var r=n(20802),i=n(73845),o=n(27760),a="[object Null]",l="[object Undefined]",s=r?r.toStringTag:void 0;function c(t){return null==t?void 0===t?l:a:s&&s in Object(t)?i(t):o(t)}t.exports=c},23349:function(t,e,n){var r=n(43676),i=/^\s+/;function o(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=o},48371:function(t,e,n){var r=n(1692)["default"],i="object"==("undefined"===typeof n.g?"undefined":r(n.g))&&n.g&&n.g.Object===Object&&n.g;t.exports=i},73845:function(t,e,n){var r=n(20802),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,l=r?r.toStringTag:void 0;function s(t){var e=o.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(s){}var i=a.call(t);return r&&(e?t[l]=n:delete t[l]),i}t.exports=s},27760:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},91990:function(t,e,n){var r=n(1692)["default"],i=n(48371),o="object"==("undefined"===typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=i||o||Function("return this")();t.exports=a},43676:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},38530:function(t,e,n){n(21703);var r=n(30359),i=n(9263),o=n(37044),a="Expected a function",l=Math.max,s=Math.min;function c(t,e,n){var c,u,h,d,f,v,p=0,m=!1,y=!1,g=!0;if("function"!=typeof t)throw new TypeError(a);function b(e){var n=c,r=u;return c=u=void 0,p=e,d=t.apply(r,n),d}function w(t){return p=t,f=setTimeout(S,e),m?b(t):d}function x(t){var n=t-v,r=t-p,i=e-n;return y?s(i,h-r):i}function _(t){var n=t-v,r=t-p;return void 0===v||n>=e||n<0||y&&r>=h}function S(){var t=i();if(_(t))return $(t);f=setTimeout(S,x(t))}function $(t){return f=void 0,g&&c?b(t):(c=u=void 0,d)}function k(){void 0!==f&&clearTimeout(f),p=0,c=v=u=f=void 0}function E(){return void 0===f?d:$(i())}function T(){var t=i(),n=_(t);if(c=arguments,u=this,v=t,n){if(void 0===f)return w(v);if(y)return clearTimeout(f),f=setTimeout(S,e),b(v)}return void 0===f&&(f=setTimeout(S,e)),d}return e=o(e)||0,r(n)&&(m=!!n.leading,y="maxWait"in n,h=y?l(o(n.maxWait)||0,e):h,g="trailing"in n?!!n.trailing:g),T.cancel=k,T.flush=E,T}t.exports=c},30359:function(t,e,n){var r=n(1692)["default"];function i(t){var e=r(t);return null!=t&&("object"==e||"function"==e)}t.exports=i},46841:function(t,e,n){var r=n(1692)["default"];function i(t){return null!=t&&"object"==r(t)}t.exports=i},56619:function(t,e,n){var r=n(1692)["default"],i=n(36251),o=n(46841),a="[object Symbol]";function l(t){return"symbol"==r(t)||o(t)&&i(t)==a}t.exports=l},9263:function(t,e,n){var r=n(91990),i=function(){return r.Date.now()};t.exports=i},71953:function(t,e,n){n(21703);var r=n(38530),i=n(30359),o="Expected a function";function a(t,e,n){var a=!0,l=!0;if("function"!=typeof t)throw new TypeError(o);return i(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),r(t,e,{leading:a,maxWait:e,trailing:l})}t.exports=a},37044:function(t,e,n){var r=n(23349),i=n(30359),o=n(56619),a=NaN,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function h(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):l.test(t)?a:+t}t.exports=h},12135:function(t,e,n){"use strict";n.d(e,{Fg:function(){return O},ZP:function(){return I}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-table-virtual-scroll",class:[t.isExpanding?"is-expanding":"",t.isHideAppend?"hide-append":"",t.scrollPosition?"is-scrolling-".concat(t.scrollPosition):"",t.hasFixedRight?"has-custom-fixed-right":""]},[t._t("default",null,null,{headerCellFixedStyle:t.headerCellFixedStyle,cellFixedStyle:t.cellFixedStyle})],2)},i=[];function o(t){if(Array.isArray(t))return t}function a(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(o.push(r.value),e&&o.length===e)break}catch(s){l=!0,i=s}finally{try{a||null==n["return"]||n["return"]()}finally{if(l)throw i}}return o}}var l=n(67553);function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return o(t)||a(t,e)||(0,l.Z)(t,e)||s()}var u=n(71953),h=n.n(u);function d(t){var e=window.getComputedStyle(t,null),n=["auto","scroll"];return n.includes(e.overflow)||n.includes(e["overflow-y"])}function f(t){var e=t;while(e){if([window,document,document.documentElement].includes(e))return window;if(d(e))return e;e=e.parentNode}return e||window}function v(t){return t===window?window.pageYOffset:t.scrollTop}function p(t){return t===window?window.innerHeight:t.offsetHeight}function m(t,e){t===window?window.scroll(0,e):t.scrollTop=e}function y(t){return"undefined"===typeof t||null===t}var g=[".el-table__body-wrapper",".el-table__fixed-right .el-table__fixed-body-wrapper",".el-table__fixed .el-table__fixed-body-wrapper"],b=0,w={name:"el-table-virtual-scroll",props:{data:{type:Array,required:!0},itemSize:{type:Number,default:60},scrollBox:{type:String},buffer:{type:Number,default:200},keyProp:{type:String,default:"id"},throttleTime:{type:Number,default:10},dynamic:{type:Boolean,default:!0},virtualized:{type:Boolean,default:!0},rowSpanKey:{type:Function},clearFixedMapTime:{type:Number,default:2e3},warn:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},provide:function(){return{virtualScroll:this}},data:function(){return{sizes:{},start:0,end:void 0,curRow:null,isExpanding:!1,columnVms:[],isHideAppend:!1,scrollPosition:"",hasFixedRight:!1}},computed:{offsetMap:function(t){var e=t.keyProp,n=t.itemSize,r=t.sizes,i=t.data;if(!this.dynamic)return{};for(var o={},a=0,l=0;l<i.length;l++){var s=i[l][e];"undefined"===typeof s&&this.warn&&console.warn("data[".concat(l,"][").concat(e,"] 为 undefined，请确保 keyProp 对应的值不为undefined")),o[s]=a;var c=r[s],u="number"===typeof c?c:n;a+=u}return o}},methods:{initData:function(){var t=this;if(this.renderData=[],this.top=void 0,this.bottom=void 0,this.start=0,this.end=void 0,this.isInnerScroll=!1,this.elTable=this.$children[0],!this.elTable||"ElTable"!==this.elTable.$options.name)throw new Error("el-table-virtual-column 组件插槽内必须是el-table");this.scroller=this.getScroller(),this.observeElTable(),setTimeout((function(){t.handleScroll()}),100),this.onScroll=this.throttleTime?h()(this.handleScroll,this.throttleTime):this.handleScroll,this.scroller.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onScroll),this.bindTableExpandEvent()},getScroller:function(){var t;if(this.scrollBox){if("window"===this.scrollBox||this.scrollBox===window)return window;if(t=document.querySelector(this.scrollBox),!t)throw new Error(" scrollBox prop: '".concat(this.scrollBox,"' is not a valid selector"));return d(t)||console.warn("Warning! scrollBox prop: '".concat(this.scrollBox,"' is not a scroll element")),t}return this.elTable&&(this.elTable.height||this.elTable.maxHeight)?(this.isInnerScroll=!0,this.$el.querySelector(".el-table__body-wrapper")):f(this.$el)},getToTop:function(){return this.isInnerScroll?0:this.$el.getBoundingClientRect().top-(this.scroller===window?0:this.scroller.getBoundingClientRect().top)+v(this.scroller)},observeElTable:function(){var t=this,e=this.$watch((function(){return t.elTable.scrollPosition}),(function(e){t.scrollPosition=e}),{immediate:!0}),n=this.$watch((function(){return t.elTable.layout.bodyHeight}),(function(e){e>0&&t.update()}));this.unWatchs=[e,n]},handleScroll:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.disabled||this.virtualized&&(!this.isInnerScroll||this.scroller.style.height||this.scroller.style.maxHeight)&&(this.removeHoverRows(),this.updateSizes(),this.calcRenderData(),this.calcPosition(),t&&this.updatePosition(),this.$emit("change",this.renderData,this.start,this.end),this.setRowsExpanded())},removeHoverRows:function(){var t=this.$el.querySelectorAll(".el-table__row.hover-row");t.length>1&&Array.from(t).forEach((function(t){t.classList.remove("hover-row")}))},updateSizes:function(){var t=this;if(this.dynamic){var e=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row"),n=this.elTable.lazy,r=/el-table__row--level-[1-9]\d*/;n&&(e=Array.from(this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row")).filter((function(t){return!r.test(t.className)}))),Array.from(e).forEach((function(e,i){var o=t.renderData[i];if(o){var a=e.offsetHeight;if(e.classList.contains("expanded")&&(a+=e.nextSibling.offsetHeight),n){var l=e.nextSibling;while(l&&"TR"===l.tagName&&r.test(l.className))a+=l.offsetHeight,l=l.nextSibling}var s=o[t.keyProp];a&&t.sizes[s]!==a&&t.$set(t.sizes,s,a)}}))}},getItemOffsetTop:function(t){if(!this.dynamic)return this.itemSize*t;var e=this.data[t];return e&&this.offsetMap[e[this.keyProp]]||0},getItemSize:function(t){if(t<=-1)return 0;var e=this.data[t];if(e){var n=e[this.keyProp];return this.sizes[n]||this.itemSize}return this.itemSize},calcRenderData:function(){var t,e,n=this.scroller,r=this.data,i=this.buffer,o=this.getToTop(),a=v(n)-i-o,l=v(n)+p(n)+i-o;if(this.dynamic){var s=0,u=r.length-1,h=0;while(s<=u){h=Math.floor((s+u)/2);var d=this.getItemOffsetTop(h);if(d<a){var f=this.getItemOffsetTop(h+1);if(f>a)break;s=h+1}else u=h-1}t=h,e=r.length-1;for(var m=t+1;m<r.length;m++){var y=this.getItemOffsetTop(m);if(y>=l){e=m;break}}}else t=a<=0?0:Math.floor(a/this.itemSize),e=l<=0?0:Math.ceil(l/this.itemSize);if(this.isRowSpan()){var g=this.calcRenderSpanData(t,e),b=c(g,2);t=b[0],e=b[1]}else t%2&&(t-=1);this.top=a,this.bottom=l,this.start=t,this.end=e,this.renderData=r.slice(t,e+1),0===this.start&&this.end>30&&this.end===this.data.length-1&&this.warn&&console.warn("[el-table-virtual-scroll] 表格数据全部渲染，渲染数量为:"+this.data.length)},isRowSpan:function(){return"function"===typeof this.rowSpanKey},calcRenderSpanData:function(t,e){var n;while(t>0){var r=this.data[t],i=this.rowSpanKey(r,t);if(y(i))break;if(!y(n)&&n!==i){t++;break}n=i,t--}var o=this.data.length;n=void 0;while(e<o){var a=this.data[e],l=this.rowSpanKey(a,e);if(!l)break;if(n&&n!==l){e--;break}n=l,e++}return[t,e]},calcPosition:function(){var t,e=this,n=this.data.length-1,r=this.getItemOffsetTop(n)+this.getItemSize(n),i=this.getItemOffsetTop(this.start);g.forEach((function(n,o){var a=e.$el.querySelector(n);if(a){if(!a.wrapEl){var l=document.createElement("div"),s=document.createElement("div");l.appendChild(s),s.appendChild(a.children[0]),a.insertBefore(l,a.firstChild),a.wrapEl=l,a.innerEl=s,o>0&&t&&e.$nextTick((function(){a.scrollTop=t.scrollTop}))}0===o&&(t=a),a.wrapEl&&(a.wrapEl.style.height=r+"px",a.innerEl.style.transform="translateY(".concat(i,"px)"))}}))},updatePosition:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.timer&&clearTimeout(t.timer),t.handleScroll(!1)}),this.throttleTime+10)},renderAllData:function(){var t=this;this.renderData=this.data,this.$emit("change",this.data,0,this.data.length-1),this.$nextTick((function(){g.forEach((function(e){var n=t.$el.querySelector(e);n&&n.wrapEl&&(n.wrapEl.style.height="auto",n.innerEl.style.transform="translateY(".concat(0,"px)"))}))}))},update:function(){this.handleScroll()},scrollTo:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.data[t];i&&this.scroller&&(this.updateSizes(),this.calcRenderData(),this.$nextTick((function(){var i=e.getItemOffsetTop(t)-n;m(e.scroller,i),r||setTimeout((function(){e.scrollTo(t,n,!0)}),50)})))},reset:function(){this.sizes={},this.scrollTo(0,0,!1)},addColumn:function(t){this.columnVms.push(t)},removeColumn:function(t){this.columnVms=this.columnVms.filter((function(e){return e!==t}))},checkAll:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.data,r=[];n.forEach((function(n){n.$v_checked&&r.push(n),e.checkRow(n,t,!1)})),this.emitSelectionChange(r),!1===t&&(b=0)},checkRow:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t.$v_checked!==e&&(this.$set(t,"$v_checked",e),this.$set(t,"$v_checkedOrder",e?b++:void 0),n&&this.emitSelectionChange(e?[]:[t]))},emitSelectionChange:function(t){var e=this.data.filter((function(t){return t.$v_checked})).sort((function(t,e){return t.$v_checkedOrder-e.$v_checkedOrder}));this.$emit("selection-change",e,t)},clearSelection:function(){this.checkAll(!1),this.columnVms.forEach((function(t){return t.syncCheckStatus()}))},toggleRowSelection:function(t,e){var n="boolean"===typeof e?e:!t.$v_checked;this.checkRow(t,n),this.columnVms.forEach((function(t){return t.syncCheckStatus()}))},bindTableExpandEvent:function(){var t=this;this.isExpandType&&this.elTable.$on("expand-change",(function(e,n){t.$set(e,"$v_expanded",n.includes(e))}))},setRowsExpanded:function(){var t=this;this.isExpandType&&this.$nextTick((function(){var e=t.renderData.filter((function(t){return t.$v_expanded}));0!==e.length&&(e.forEach((function(e){t.elTable.toggleRowExpansion(e,!0)})),t.isExpanding=!0,setTimeout((function(){t.isExpanding=!1}),10))}))},toggleRowExpansion:function(t,e){var n="boolean"===typeof e;this.$set(t,"$v_expanded",n?e:!t.$v_expanded),this.renderData.includes(t)&&this.elTable.toggleRowExpansion(t,e)},setCurrentRow:function(t){this.curRow=t,this.$emit("current-change",t)},updateData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.list=t,this.$emit("update:data",this.list)},getData:function(){return this.list||this.data},doUpdate:function(){var t=this;this.hasDoUpdate||this.scroller&&(this.isHideAppend=!0,this.update(),this.hasDoUpdate=!0,this.$nextTick((function(){t.hasDoUpdate=!1,t.isHideAppend=!1})))},headerCellFixedStyle:function(t){return this.cellFixedStyle(t,!0)},cellFixedStyle:function(t){var e=this,n=t.column,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.$children[0];if(i){var o=i.layout,a=o.gutterWidth,l=o.scrollY,s=r&&l?a:0;if(!this.fixedMap||this.isScrollY!==l){this.isScrollY=l,this.fixedMap={},this.totalLeft=0,this.totalRight=0,setTimeout((function(){e.fixedMap=null}),this.clearFixedMapTime);for(var c,u,h=i.columns,d=[],f=0;f<h.length;f++){var v=h[f],p=v.className&&v.className.includes("virtual-column__fixed-left"),m=v.className&&v.className.includes("virtual-column__fixed-right");(p||m)&&(p&&(c=v,this.fixedMap[v.id]={left:this.totalLeft},this.totalLeft+=v.realWidth||v.width),m&&(u||(u=v),d.push(v)))}var y=" is-last-column",g=" is-first-column";c&&!c.className.includes(y)&&(c.className+=y),u&&!u.className.includes(g)&&(u.className+=g),this.hasFixedRight=d.length>0,d.reverse().forEach((function(t){e.fixedMap[t.id]={right:e.totalRight},e.totalRight+=t.realWidth||t.width}))}var b=this.fixedMap[n.id];if(b){var w="right"in b;return w?{right:b.right+s+"px"}:{left:b.left+"px"}}}},doHeaderLayout:function(){this.elTable&&(this.fixedMap=null,this.elTable.$refs.tableHeader.$forceUpdate())}},watch:{data:function(){this.virtualized?this.doUpdate():this.renderAllData(),this.columnVms.forEach((function(t){return t.syncCheckStatus()}))},virtualized:{immediate:!0,handler:function(t){t?this.doUpdate():this.renderAllData()}},disabled:function(){this.doUpdate()}},created:function(){var t=this;this.$nextTick((function(){t.initData()}))},beforeDestroy:function(){this.scroller&&(this.scroller.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll)),this.unWatchs&&this.unWatchs.forEach((function(t){return t()}))}},x=w,_=n(1001),S=(0,_.Z)(x,r,i,!1,null,"11f821ed",null),$=S.exports,k=function(){var t=this,e=t._self._c;return e("el-table-column",t._g(t._b({attrs:{"class-name":t.getClassName},scopedSlots:t._u([{key:"header",fn:function(n){return[t.$scopedSlots["header"]?t._t("header",null,null,n):["v-selection"===n.column.type?e("el-checkbox",{attrs:{indeterminate:t.isCheckedImn},on:{change:t.onCheckAllRows},model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}}):[t._v(" "+t._s(n.column.label)+" ")]]]}},{key:"default",fn:function(n){return[n.column&&"v-tree"===n.column.type?[e("span",{staticClass:"el-table__indent",style:{paddingLeft:"".concat((n.row.$v_level-1)*t.indent,"px")}}),!1!==n.row.$v_hasChildren?e("div",{staticClass:"el-table__expand-icon",class:n.row.$v_expanded?"el-table__expand-icon--expanded":"",on:{click:function(e){return t.onTreeNodeExpand(n.row)}}},[n.row.$v_loading?e("i",{staticClass:"el-icon-loading"}):e("i",{staticClass:"el-icon-arrow-right"})]):e("span",{staticClass:"el-table__placeholder"})]:t._e(),t.$scopedSlots["default"]?t._t("default",null,null,n):["v-selection"===n.column.type?e("el-checkbox",{attrs:{value:n.row.$v_checked,disabled:t.getDisabled(n)},on:{change:function(e){return t.onCheckRow(n,!n.row.$v_checked)}}}):t._e(),"v-radio"===n.column.type?e("el-radio",{attrs:{label:!0,value:t.virtualScroll.curRow===n.row},on:{change:function(e){return t.onRadioChange(n.row)}}},[e("span")]):"v-index"===n.column.type?e("span",[t._v(" "+t._s(t.getIndex(n))+" ")]):n.column.formatter?[t._v(" "+t._s(n.column.formatter(n.row,n.column,n.row[n.column.property],n.$index))+" ")]:[t._v(" "+t._s(n.row[n.column.property])+" ")]]]}}],null,!0)},"el-table-column",t.$attrs,!1),t.$listeners),[t.isNested?[t._t("default")]:t._e()],2)},E=[],T=n(23698),C=n(51907),N=n(85617),A=n(85114),R={name:"el-table-virtual-column",components:{ElTableColumn:A.TableColumn,ElCheckbox:A.Checkbox,ElRadio:A.Radio},inject:["virtualScroll"],props:{load:{type:Function},indent:{type:Number,default:16},selectable:{type:Function}},data:function(){return{isCheckedAll:!1,isCheckedImn:!1,isTree:!1,isNested:!1}},computed:{getClassName:function(){var t=[],e=this.$attrs["class-name"]||this.$attrs.className;e&&t.push(e),this.isTree&&t.push("el-table__row--level");var n=this.$attrs.vfixed;return!0!==n&&""!==n||(n="left"),n&&t.push("virtual-column__fixed-"+n),t.join(" ")}},methods:{getDisabled:function(t){if(this.selectable){var e=this.getIndex(t,!1);return!this.selectable(t.row,e)}return!1},onCheckAllRows:function(t){var e=this;if(t=!!this.isCheckedImn||t,this.selectable){var n=this.virtualScroll.getData(),r=[],i=!1;return n.forEach((function(t,n){var o=e.selectable(t,n);o?r.push(t):t.$v_checked&&(i=!0)})),this.virtualScroll.checkAll(t,r),this.isCheckedAll=t,void(this.isCheckedImn=!(!i||t))}this.virtualScroll.checkAll(t),this.isCheckedAll=t,this.isCheckedImn=!1},onCheckRow:function(t,e){var n=this.getIndex(t,!1);if(this.selectable){var r=this.selectable(t.row,n);if(!r)return}this.virtualScroll.checkRow(t.row,e),this.syncCheckStatus()},syncCheckStatus:function(){var t,e,n=this,r=this.virtualScroll.getData(),i=r.filter((function(t){return!0===t.$v_checked})).length;if(this.selectable){var o=r.filter((function(t,e){return n.selectable(t,e)}));e=o.filter((function(t){return!0===t.$v_checked})).length,t=o.length}0===i?(this.isCheckedAll=!1,this.isCheckedImn=!1):this.selectable&&e===t||i===r.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):(this.isCheckedAll=!1,this.isCheckedImn=!0)},onRadioChange:function(t){this.virtualScroll.setCurrentRow(t)},getIndex:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.virtualScroll.start+t.$index;return"function"===typeof this.$attrs.index?this.$attrs.index(n):n+(e?1:0)},onTreeNodeExpand:function(t){var e=arguments,n=this;return(0,N.Z)((0,C.Z)().mark((function r(){var i,o;return(0,C.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(i=e.length>1&&void 0!==e[1]?e[1]:!t.$v_expanded,o=!(e.length>2&&void 0!==e[2])||e[2],t.$v_expanded!==i){r.next=4;break}return r.abrupt("return",[]);case 4:if(!i){r.next=13;break}if(!t.$v_loaded){r.next=9;break}return r.abrupt("return",n.loadOldChildNodes(t));case 9:if(!o){r.next=11;break}return r.abrupt("return",n.loadChildNodes(t));case 11:r.next=14;break;case 13:return r.abrupt("return",n.hideChildNodes(t));case 14:case"end":return r.stop()}}),r)})))()},loadChildNodes:function(t){var e=this;return new Promise((function(n,r){function i(e){if(!Array.isArray(e))return this.$set(t,"$v_loading",!1),void n();this.$set(t,"$v_loading",!1),this.$set(t,"$v_expanded",!0),this.$set(t,"$v_loaded",!0),this.$set(t,"$v_hasChildren",!!e.length),e.forEach((function(e){e.$v_level="number"===typeof t.$v_level?t.$v_level+1:2}));var r=this.virtualScroll.getData(),i=r.findIndex((function(e){return e===t}));i>-1&&this.virtualScroll.updateData([].concat((0,T.Z)(r.slice(0,i+1)),(0,T.Z)(e),(0,T.Z)(r.slice(i+1)))),n(e)}e.$set(t,"$v_loading",!0),e.load&&e.load(t,i.bind(e))}))},loadOldChildNodes:function(t){this.$set(t,"$v_expanded",!0);var e=this.virtualScroll.getData(),n=e.findIndex((function(e){return e===t}));return n>-1?(this.virtualScroll.updateData([].concat((0,T.Z)(e.slice(0,n+1)),(0,T.Z)(t.$v_hideNodes||[]),(0,T.Z)(e.slice(n+1)))),t.$v_hideNodes):[]},hideChildNodes:function(t){this.$set(t,"$v_expanded",!1);var e=this.virtualScroll.getData(),n=e.findIndex((function(e){return e===t}));if(-1!==n){for(var r=[],i=n+1;i<e.length;i++){var o=e[i];if((o.$v_level||1)<=(t.$v_level||1))break;r.push(o)}this.$set(t,"$v_hideNodes",r);var a=e.filter((function(t){return!r.includes(t)}));return this.virtualScroll.updateData(a),this.virtualScroll.update(),[]}},expand:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Array.isArray(t)){var i=this.virtualScroll,o=i.getData,a=i.keyProp,l=o(),s=[];return l.forEach((function(i){i[a]&&t.includes(i[a])&&s.push(e.onTreeNodeExpand(i,n,r))})),Promise.all(s)}},expandPath:function(t){var e=this;if(Array.isArray(t)){var n=function(){var r=(0,N.Z)((0,C.Z)().mark((function r(i,a){var l;return(0,C.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a!==t.length){r.next=2;break}return r.abrupt("return",t[a-1]);case 2:if(Array.isArray(i)&&i.length){r.next=4;break}return r.abrupt("return",t[a-1]);case 4:if(l=i.find((function(e){return e[o]===t[a]})),!l){r.next=13;break}if(l.$v_expanded){r.next=10;break}return r.next=9,e.onTreeNodeExpand(l,!0);case 9:i=r.sent;case 10:return r.abrupt("return",n(i,a+1));case 13:return console.warn("[expandPath] 没有找到 ".concat(t[a]," key值对应的行")),r.abrupt("return",t[a-1]);case 15:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}(),r=this.virtualScroll,i=r.getData,o=r.keyProp,a=i();return n(a,0)}},expandAll:function(){var t=this,e=function e(n){Array.isArray(n)&&n.length&&n.forEach((function(n){t.onTreeNodeExpand(n,!0,!1),e(n.$v_hideNodes)}))},n=this.virtualScroll.getData,r=n();e(r)},unexpandAll:function(){var t=this,e=this.virtualScroll.getData,n=e(),r=[];n.forEach((function(t){var e=t.$v_level||1;!r[e]&&(r[e]=[]),r[e].push(t)}));for(var i=r.length-1;i>=0;i--)r[i]&&r[i].forEach((function(e){t.onTreeNodeExpand(e,!1)}))}},beforeCreate:function(){var t=this.$attrs.type;["index","selection","radio","tree"].includes(t)&&(this.$attrs.type="v-"+t)},created:function(){this.isNested=!!this.$slots.default,this.virtualScroll.addColumn(this);var t=this.$attrs.type;"expand"===t?this.virtualScroll.isExpandType=!0:"v-tree"===t&&(this.isTree=!0)},beforeDestroy:function(){this.virtualScroll.removeColumn(this)}},D=R,L=(0,_.Z)(D,k,E,!1,null,null,null),O=L.exports,I=$},85617:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var l=t[o](a),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function l(t){r(a,i,o,l,s,"next",t)}function s(t){r(a,i,o,l,s,"throw",t)}l(void 0)}))}}n.d(e,{Z:function(){return i}})},51907:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2434);function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof f?e:f,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=_(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var d={};function f(){}function v(){}function p(){}var m={};c(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==e&&n.call(g,a)&&(m=g);var b=p.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,l,s){var c=h(t[o],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==(0,r.Z)(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,l,s)}),(function(t){i("throw",t,l,s)})):e.resolve(d).then((function(t){u.value=t,l(u)}),(function(t){return i("throw",t,l,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=p,c(b,"constructor",p),c(p,"constructor",v),v.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),c(b,s,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=135.c0ce6374.js.map