(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[225],{802:function(e,t,i){var l=i(1990),s=l.Symbol;e.exports=s},6251:function(e,t,i){var l=i(802),s=i(3845),n=i(7760),o="[object Null]",r="[object Undefined]",a=l?l.toStringTag:void 0;function c(e){return null==e?void 0===e?r:o:a&&a in Object(e)?s(e):n(e)}e.exports=c},3349:function(e,t,i){var l=i(3676),s=/^\s+/;function n(e){return e?e.slice(0,l(e)+1).replace(s,""):e}e.exports=n},8371:function(e,t,i){var l="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=l},3845:function(e,t,i){var l=i(802),s=Object.prototype,n=s.hasOwnProperty,o=s.toString,r=l?l.toStringTag:void 0;function a(e){var t=n.call(e,r),i=e[r];try{e[r]=void 0;var l=!0}catch(a){}var s=o.call(e);return l&&(t?e[r]=i:delete e[r]),s}e.exports=a},7760:function(e){var t=Object.prototype,i=t.toString;function l(e){return i.call(e)}e.exports=l},1990:function(e,t,i){var l=i(8371),s="object"==typeof self&&self&&self.Object===Object&&self,n=l||s||Function("return this")();e.exports=n},3676:function(e){var t=/\s/;function i(e){var i=e.length;while(i--&&t.test(e.charAt(i)));return i}e.exports=i},8530:function(e,t,i){i(1703);var l=i(359),s=i(9263),n=i(7044),o="Expected a function",r=Math.max,a=Math.min;function c(e,t,i){var c,h,d,u,f,p,m=0,v=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function x(t){var i=c,l=h;return c=h=void 0,m=t,u=e.apply(l,i),u}function w(e){return m=e,f=setTimeout(_,t),v?x(e):u}function y(e){var i=e-p,l=e-m,s=t-i;return b?a(s,d-l):s}function S(e){var i=e-p,l=e-m;return void 0===p||i>=t||i<0||b&&l>=d}function _(){var e=s();if(S(e))return $(e);f=setTimeout(_,y(e))}function $(e){return f=void 0,g&&c?x(e):(c=h=void 0,u)}function k(){void 0!==f&&clearTimeout(f),m=0,c=p=h=f=void 0}function T(){return void 0===f?u:$(s())}function C(){var e=s(),i=S(e);if(c=arguments,h=this,p=e,i){if(void 0===f)return w(p);if(b)return clearTimeout(f),f=setTimeout(_,t),x(p)}return void 0===f&&(f=setTimeout(_,t)),u}return t=n(t)||0,l(i)&&(v=!!i.leading,b="maxWait"in i,d=b?r(n(i.maxWait)||0,t):d,g="trailing"in i?!!i.trailing:g),C.cancel=k,C.flush=T,C}e.exports=c},359:function(e){function t(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=t},6841:function(e){function t(e){return null!=e&&"object"==typeof e}e.exports=t},6619:function(e,t,i){var l=i(6251),s=i(6841),n="[object Symbol]";function o(e){return"symbol"==typeof e||s(e)&&l(e)==n}e.exports=o},9263:function(e,t,i){var l=i(1990),s=function(){return l.Date.now()};e.exports=s},1953:function(e,t,i){i(1703);var l=i(8530),s=i(359),n="Expected a function";function o(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return s(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),l(e,t,{leading:o,maxWait:t,trailing:r})}e.exports=o},7044:function(e,t,i){var l=i(3349),s=i(359),n=i(6619),o=NaN,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,h=parseInt;function d(e){if("number"==typeof e)return e;if(n(e))return o;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=l(e);var i=a.test(e);return i||c.test(e)?h(e.slice(2),i?2:8):r.test(e)?o:+e}e.exports=d},225:function(e,t,i){"use strict";i.d(t,{Fg:function(){return T},ZP:function(){return C}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"el-table-virtual-scroll",class:[e.isExpanding?"is-expanding":"",e.isHideAppend?"hide-append":"",e.scrollPosition?`is-scrolling-${e.scrollPosition}`:"",e.hasFixedRight?"has-custom-fixed-right":""]},[e._t("default",null,null,{headerCellFixedStyle:e.headerCellFixedStyle,cellFixedStyle:e.cellFixedStyle})],2)},s=[],n=(i(1703),i(1953)),o=i.n(n);function r(e){const t=window.getComputedStyle(e,null),i=["auto","scroll"];return i.includes(t.overflow)||i.includes(t["overflow-y"])}function a(e){let t=e;while(t){if([window,document,document.documentElement].includes(t))return window;if(r(t))return t;t=t.parentNode}return t||window}function c(e){return e===window?window.pageYOffset:e.scrollTop}function h(e){return e===window?window.innerHeight:e.offsetHeight}function d(e,t){e===window?window.scroll(0,t):e.scrollTop=t}function u(e){return"undefined"===typeof e||null===e}const f=[".el-table__body-wrapper",".el-table__fixed-right .el-table__fixed-body-wrapper",".el-table__fixed .el-table__fixed-body-wrapper"];let p=0;var m={name:"el-table-virtual-scroll",props:{data:{type:Array,required:!0},itemSize:{type:Number,default:60},scrollBox:{type:String},buffer:{type:Number,default:200},keyProp:{type:String,default:"id"},throttleTime:{type:Number,default:10},dynamic:{type:Boolean,default:!0},virtualized:{type:Boolean,default:!0},rowSpanKey:{type:Function},clearFixedMapTime:{type:Number,default:2e3},warn:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},provide(){return{virtualScroll:this}},data(){return{sizes:{},start:0,end:void 0,curRow:null,isExpanding:!1,columnVms:[],isHideAppend:!1,scrollPosition:"",hasFixedRight:!1}},computed:{offsetMap({keyProp:e,itemSize:t,sizes:i,data:l}){if(!this.dynamic)return{};const s={};let n=0;for(let o=0;o<l.length;o++){const r=l[o][e];"undefined"===typeof r&&this.warn&&console.warn(`data[${o}][${e}] 为 undefined，请确保 keyProp 对应的值不为undefined`),s[r]=n;const a=i[r],c="number"===typeof a?a:t;n+=c}return s}},methods:{initData(){if(this.renderData=[],this.top=void 0,this.bottom=void 0,this.start=0,this.end=void 0,this.isInnerScroll=!1,this.elTable=this.$children[0],!this.elTable||"ElTable"!==this.elTable.$options.name)throw new Error("el-table-virtual-column 组件插槽内必须是el-table");this.scroller=this.getScroller(),this.observeElTable(),setTimeout((()=>{this.handleScroll()}),100),this.onScroll=this.throttleTime?o()(this.handleScroll,this.throttleTime):this.handleScroll,this.scroller.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onScroll),this.bindTableExpandEvent()},getScroller(){let e;if(this.scrollBox){if("window"===this.scrollBox||this.scrollBox===window)return window;if(e=document.querySelector(this.scrollBox),!e)throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`);return r(e)||console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`),e}return this.elTable&&(this.elTable.height||this.elTable.maxHeight)?(this.isInnerScroll=!0,this.$el.querySelector(".el-table__body-wrapper")):a(this.$el)},getToTop(){return this.isInnerScroll?0:this.$el.getBoundingClientRect().top-(this.scroller===window?0:this.scroller.getBoundingClientRect().top)+c(this.scroller)},observeElTable(){const e=this.$watch((()=>this.elTable.scrollPosition),(e=>{this.scrollPosition=e}),{immediate:!0}),t=this.$watch((()=>this.elTable.layout.bodyHeight),(e=>{e>0&&this.update()}));this.unWatchs=[e,t]},handleScroll(e=!0){this.disabled||this.virtualized&&(!this.isInnerScroll||this.scroller.style.height||this.scroller.style.maxHeight)&&(this.removeHoverRows(),this.updateSizes(),this.calcRenderData(),this.calcPosition(),e&&this.updatePosition(),this.$emit("change",this.renderData,this.start,this.end),this.setRowsExpanded())},removeHoverRows(){const e=this.$el.querySelectorAll(".el-table__row.hover-row");e.length>1&&Array.from(e).forEach((e=>{e.classList.remove("hover-row")}))},updateSizes(){if(!this.dynamic)return;let e=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row"),t=!1;e[0]&&e[0].classList.contains("el-table__row--level-0")&&(t=!0,e=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row.el-table__row--level-0")),Array.from(e).forEach(((e,i)=>{const l=this.renderData[i];if(!l)return;let s=e.offsetHeight;if(e.classList.contains("expanded")&&(s+=e.nextSibling.offsetHeight),t){let t=e.nextSibling;while(t&&"TR"===t.tagName&&!t.classList.contains("el-table__row--level-0"))s+=t.offsetHeight,t=t.nextSibling}const n=l[this.keyProp];s&&this.sizes[n]!==s&&this.$set(this.sizes,n,s)}))},getItemOffsetTop(e){if(!this.dynamic)return this.itemSize*e;const t=this.data[e];return t&&this.offsetMap[t[this.keyProp]]||0},getItemSize(e){if(e<=-1)return 0;const t=this.data[e];if(t){const e=t[this.keyProp];return this.sizes[e]||this.itemSize}return this.itemSize},calcRenderData(){const{scroller:e,data:t,buffer:i}=this,l=this.getToTop(),s=c(e)-i-l,n=c(e)+h(e)+i-l;let o,r;if(this.dynamic){let e=0,i=t.length-1,l=0;while(e<=i){l=Math.floor((e+i)/2);const t=this.getItemOffsetTop(l);if(t<s){const t=this.getItemOffsetTop(l+1);if(t>s)break;e=l+1}else i=l-1}o=l,r=t.length-1;for(let s=o+1;s<t.length;s++){const e=this.getItemOffsetTop(s);if(e>=n){r=s;break}}}else o=s<=0?0:Math.floor(s/this.itemSize),r=n<=0?0:Math.ceil(n/this.itemSize);this.isRowSpan()?[o,r]=this.calcRenderSpanData(o,r):o%2&&(o-=1),this.top=s,this.bottom=n,this.start=o,this.end=r,this.renderData=t.slice(o,r+1),0===this.start&&this.end>30&&this.end===this.data.length-1&&this.warn&&console.warn("[el-table-virtual-scroll] 表格数据全部渲染，渲染数量为:"+this.data.length)},isRowSpan(){return"function"===typeof this.rowSpanKey},calcRenderSpanData(e,t){let i;while(e>0){const t=this.data[e],l=this.rowSpanKey(t,e);if(u(l))break;if(!u(i)&&i!==l){e++;break}i=l,e--}const l=this.data.length;i=void 0;while(t<l){const e=this.data[t],l=this.rowSpanKey(e,t);if(!l)break;if(i&&i!==l){t--;break}i=l,t++}return[e,t]},calcPosition(){const e=this.data.length-1,t=this.getItemOffsetTop(e)+this.getItemSize(e),i=this.getItemOffsetTop(this.start);f.forEach((e=>{const l=this.$el.querySelector(e);if(l){if(!l.wrapEl){const e=document.createElement("div"),t=document.createElement("div");e.appendChild(t),t.appendChild(l.children[0]),l.insertBefore(e,l.firstChild),l.wrapEl=e,l.innerEl=t}l.wrapEl&&(l.wrapEl.style.height=t+"px",l.innerEl.style.transform=`translateY(${i}px)`)}}))},updatePosition(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.timer&&clearTimeout(this.timer),this.handleScroll(!1)}),this.throttleTime+10)},renderAllData(){this.renderData=this.data,this.$emit("change",this.data,0,this.data.length-1),this.$nextTick((()=>{f.forEach((e=>{const t=this.$el.querySelector(e);t&&t.wrapEl&&(t.wrapEl.style.height="auto",t.innerEl.style.transform="translateY(0px)")}))}))},update(){this.handleScroll()},scrollTo(e,t=!1){const i=this.data[e];i&&this.scroller&&(this.updateSizes(),this.calcRenderData(),this.$nextTick((()=>{const i=this.getItemOffsetTop(e);d(this.scroller,i),t||setTimeout((()=>{this.scrollTo(e,!0)}),50)})))},reset(){this.sizes={},this.scrollTo(0,!1)},addColumn(e){this.columnVms.push(e)},removeColumn(e){this.columnVms=this.columnVms.filter((t=>t!==e))},checkAll(e,t=this.data){const i=[];t.forEach((t=>{t.$v_checked&&i.push(t),this.checkRow(t,e,!1)})),this.emitSelectionChange(i),!1===e&&(p=0)},checkRow(e,t,i=!0){e.$v_checked!==t&&(this.$set(e,"$v_checked",t),this.$set(e,"$v_checkedOrder",t?p++:void 0),i&&this.emitSelectionChange(t?[]:[e]))},emitSelectionChange(e){const t=this.data.filter((e=>e.$v_checked)).sort(((e,t)=>e.$v_checkedOrder-t.$v_checkedOrder));this.$emit("selection-change",t,e)},clearSelection(){this.checkAll(!1),this.columnVms.forEach((e=>e.syncCheckStatus()))},toggleRowSelection(e,t){const i="boolean"===typeof t?t:!e.$v_checked;this.checkRow(e,i),this.columnVms.forEach((e=>e.syncCheckStatus()))},bindTableExpandEvent(){this.isExpandType&&this.elTable.$on("expand-change",((e,t)=>{this.$set(e,"$v_expanded",t.includes(e))}))},setRowsExpanded(){this.isExpandType&&this.$nextTick((()=>{const e=this.renderData.filter((e=>e.$v_expanded));0!==e.length&&(e.forEach((e=>{this.elTable.toggleRowExpansion(e,!0)})),this.isExpanding=!0,setTimeout((()=>{this.isExpanding=!1}),10))}))},toggleRowExpansion(e,t){const i="boolean"===typeof t;this.$set(e,"$v_expanded",i?t:!e.$v_expanded),this.renderData.includes(e)&&this.elTable.toggleRowExpansion(e,t)},setCurrentRow(e){this.curRow=e,this.$emit("current-change",e)},updateData(e){this.$emit("update:data",e)},doUpdate(){this.hasDoUpdate||this.scroller&&(this.isHideAppend=!0,this.update(),this.hasDoUpdate=!0,this.$nextTick((()=>{this.hasDoUpdate=!1,this.isHideAppend=!1})))},headerCellFixedStyle(e){return this.cellFixedStyle(e,!0)},cellFixedStyle({column:e},t=!1){const i=this.$children[0];if(!i)return;const{gutterWidth:l,scrollY:s}=i.layout,n=t&&s?l:0;if(!this.fixedMap||this.isScrollY!==s){this.isScrollY=s,this.fixedMap={},this.totalLeft=0,this.totalRight=0,setTimeout((()=>{this.fixedMap=null}),this.clearFixedMapTime);const e=i.columns,t=[];let l,n;for(let i=0;i<e.length;i++){const s=e[i],o=s.className&&s.className.includes("virtual-column__fixed-left"),r=s.className&&s.className.includes("virtual-column__fixed-right");(o||r)&&(o&&(l=s,this.fixedMap[s.id]={left:this.totalLeft},this.totalLeft+=s.realWidth||s.width),r&&(n||(n=s),t.push(s)))}const o=" is-last-column",r=" is-first-column";l&&!l.className.includes(o)&&(l.className+=o),n&&!n.className.includes(r)&&(n.className+=r),this.hasFixedRight=t.length>0,t.reverse().forEach((e=>{this.fixedMap[e.id]={right:this.totalRight},this.totalRight+=e.realWidth||e.width}))}const o=this.fixedMap[e.id];if(!o)return;const r="right"in o;return r?{right:o.right+n+"px"}:{left:o.left+"px"}},doHeaderLayout(){this.elTable&&(this.fixedMap=null,this.elTable.$refs.tableHeader.$forceUpdate())}},watch:{data(){this.virtualized?this.doUpdate():this.renderAllData(),this.columnVms.forEach((e=>e.syncCheckStatus()))},virtualized:{immediate:!0,handler(e){e?this.doUpdate():this.renderAllData()}},disabled(){this.doUpdate()}},created(){this.$nextTick((()=>{this.initData()}))},beforeDestroy(){this.scroller&&(this.scroller.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll)),this.unWatchs&&this.unWatchs.forEach((e=>e()))}},v=m,b=i(1001),g=(0,b.Z)(v,l,s,!1,null,"6352ede4",null),x=g.exports,w=function(){var e=this,t=e._self._c;return t("el-table-column",e._g(e._b({attrs:{"class-name":e.getClassName},scopedSlots:e._u([{key:"header",fn:function(i){return[e.$scopedSlots["header"]?e._t("header",null,null,i):["v-selection"===i.column.type?t("el-checkbox",{attrs:{indeterminate:e.isCheckedImn},on:{change:e.onCheckAllRows},model:{value:e.isCheckedAll,callback:function(t){e.isCheckedAll=t},expression:"isCheckedAll"}}):[e._v(" "+e._s(i.column.label)+" ")]]]}},{key:"default",fn:function(i){return[i.column&&"v-tree"===i.column.type?[t("span",{staticClass:"el-table__indent",style:{paddingLeft:(i.row.$level-1)*e.indent+"px"}}),!1!==i.row.$v_hasChildren?t("div",{staticClass:"el-table__expand-icon",class:i.row.$v_expanded?"el-table__expand-icon--expanded":"",on:{click:function(t){return e.onTreeNodeExpand(i.row)}}},[i.row.$v_loading?t("i",{staticClass:"el-icon-loading"}):t("i",{staticClass:"el-icon-arrow-right"})]):t("span",{staticClass:"el-table__placeholder"})]:e._e(),e.$scopedSlots["default"]?e._t("default",null,null,i):["v-selection"===i.column.type?t("el-checkbox",{attrs:{value:i.row.$v_checked,disabled:e.getDisabled(i)},on:{change:function(t){return e.onCheckRow(i,!i.row.$v_checked)}}}):e._e(),"v-radio"===i.column.type?t("el-radio",{attrs:{label:!0,value:e.virtualScroll.curRow===i.row},on:{change:function(t){return e.onRadioChange(i.row)}}},[t("span")]):"v-index"===i.column.type?t("span",[e._v(" "+e._s(e.getIndex(i))+" ")]):[e._v(" "+e._s(i.row[i.column.property])+" ")]]]}}],null,!0)},"el-table-column",e.$attrs,!1),e.$listeners))},y=[],S=i(5114),_={name:"el-table-virtual-column",components:{ElTableColumn:S.TableColumn,ElCheckbox:S.Checkbox,ElRadio:S.Radio},inject:["virtualScroll"],props:{load:{type:Function},indent:{type:Number,default:16},selectable:{type:Function}},data(){return{isCheckedAll:!1,isCheckedImn:!1,isTree:!1}},computed:{getClassName(){const e=[],t=this.$attrs["class-name"]||this.$attrs.className;t&&e.push(t),this.isTree&&e.push("el-table__row--level");let i=this.$attrs.vfixed;return!0!==i&&""!==i||(i="left"),i&&e.push("virtual-column__fixed-"+i),e.join(" ")}},methods:{getDisabled(e){if(this.selectable){const t=this.getIndex(e,!1);return!this.selectable(e.row,t)}return!1},onCheckAllRows(e){if(e=!!this.isCheckedImn||e,this.selectable){const t=this.virtualScroll.data,i=[];let l=!1;return t.forEach(((e,t)=>{const s=this.selectable(e,t);s?i.push(e):e.$v_checked&&(l=!0)})),this.virtualScroll.checkAll(e,i),this.isCheckedAll=e,void(this.isCheckedImn=!(!l||e))}this.virtualScroll.checkAll(e),this.isCheckedAll=e,this.isCheckedImn=!1},onCheckRow(e,t){const i=this.getIndex(e,!1);if(this.selectable){const t=this.selectable(e.row,i);if(!t)return}this.virtualScroll.checkRow(e.row,t),this.syncCheckStatus()},syncCheckStatus(){const e=this.virtualScroll.data,t=e.filter((e=>!0===e.$v_checked)).length;let i,l;if(this.selectable){const t=e.filter(((e,t)=>this.selectable(e,t)));l=t.filter((e=>!0===e.$v_checked)).length,i=t.length}0===t?(this.isCheckedAll=!1,this.isCheckedImn=!1):this.selectable&&l===i||t===e.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):(this.isCheckedAll=!1,this.isCheckedImn=!0)},onRadioChange(e){this.virtualScroll.setCurrentRow(e)},getIndex(e,t=!0){const i=this.virtualScroll.start+e.$index;return"function"===typeof this.$attrs.index?this.$attrs.index(i):i+(t?1:0)},onTreeNodeExpand(e){this.$set(e,"$v_expanded",!e.$v_expanded),e.$v_expanded?this.loadChildNodes(e):this.hideChildNodes(e)},loadChildNodes(e){if(e.$v_loaded){const t=this.virtualScroll.data,i=t.findIndex((t=>t===e));i>-1&&this.virtualScroll.updateData([...t.slice(0,i+1),...e.$v_hideNodes,...t.slice(i+1)])}else this.$set(e,"$v_loading",!0),this.load&&this.load(e,t.bind(this));function t(t){Array.isArray(!t)&&(t=[]),this.$set(e,"$v_loading",!1),this.$set(e,"$v_loaded",!0),this.$set(e,"$v_hasChildren",!!t.length),t.forEach((t=>{t.$level="number"===typeof e.$level?e.$level+1:2}));const i=this.virtualScroll.data,l=i.findIndex((t=>t===e));l>-1&&this.virtualScroll.updateData([...i.slice(0,l+1),...t,...i.slice(l+1)])}},hideChildNodes(e){const t=this.virtualScroll.data,i=t.findIndex((t=>t===e));if(-1===i)return;const l=[];for(let n=i+1;n<t.length;n++){const i=t[n];if((i.$level||1)<=(e.$level||1))break;l.push(i)}this.$set(e,"$v_hideNodes",l);const s=t.filter((e=>!l.includes(e)));this.virtualScroll.updateData(s),this.virtualScroll.update()}},beforeCreate(){const{type:e}=this.$attrs;["index","selection","radio","tree"].includes(e)&&(this.$attrs.type="v-"+e)},created(){this.virtualScroll.addColumn(this);const{type:e}=this.$attrs;"expand"===e?this.virtualScroll.isExpandType=!0:"v-tree"===e&&(this.isTree=!0)},beforeDestroy(){this.virtualScroll.removeColumn(this)}},$=_,k=(0,b.Z)($,w,y,!1,null,null,null),T=k.exports,C=x}}]);
//# sourceMappingURL=225.875cde12.js.map