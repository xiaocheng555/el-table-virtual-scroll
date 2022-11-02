(function(){"use strict";var t={8601:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var l=n(9567),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-select",{staticStyle:{width:"100px"},model:{value:t.fixed,callback:function(e){t.fixed=e},expression:"fixed"}},[n("el-option",{attrs:{value:void 0,label:"不固定"}}),n("el-option",{attrs:{value:"left",label:"固定左边"}}),n("el-option",{attrs:{value:"right",label:"固定右边"}})],1),t._v("   "),n("el-input",{staticStyle:{width:"300px"},attrs:{type:"number",placeholder:"滚动到第几行"},model:{value:t.jumpIndex,callback:function(e){t.jumpIndex=e},expression:"jumpIndex"}},[n("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.scrollToRow(t.jumpIndex)}},slot:"append"},[t._v("滚动")])],1),t._v("   数据总数量："),n("el-input",{staticStyle:{width:"200px"},attrs:{type:"number",placeholder:"数据条数"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),n("VirtualScroll",{ref:"virtualScroll",attrs:{data:t.list,height:62,"key-prop":"id"},on:{change:t.onChange}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.virtualList1,stripe:"","row-key":"id",height:"500px"}},[n("el-table-column",{attrs:{width:"60"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-checkbox",{attrs:{indeterminate:t.isCheckedImn},on:{change:t.onCheckAllRows},model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}})]}},{key:"default",fn:function(e){var l=e.row;return[n("el-checkbox",{on:{change:t.onCheckRow},model:{value:l.checked,callback:function(e){t.$set(l,"checked",e)},expression:"row.checked"}})]}}])}),n("el-table-column",{attrs:{label:"id",prop:"id"}}),n("el-table-column",{attrs:{label:"内容",width:"260",prop:"text"}}),n("el-table-column",{attrs:{label:"内容省略",width:"260",prop:"text","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"详情","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){l.show=!l.show}}},[t._v(t._s(l.show?"隐藏":"显示"))]),l.show?n("div",[t._v(t._s(l.text2))]):t._e()]}}])}),n("el-table-column",{attrs:{label:"一级表头"}},[n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}})],1),n("el-table-column",{attrs:{label:"操作",fixed:t.fixed,width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.id)+" "),n("el-button",{on:{click:function(e){return t.onDel(l)}}},[t._v("删除")]),n("el-button",{on:{click:function(e){return t.onEdit(l)}}},[t._v("编辑")])]}}])}),n("div",{attrs:{slot:"append"},slot:"append"},[n("el-divider",[t._v("到底了")])],1)],1)],1),n("b",[t._v("行数: "+t._s(t.virtualList1.length))]),n("h2",[t._v("不定列宽度，下拉加载")]),n("VirtualScroll",{attrs:{data:t.list2,height:62,"key-prop":"id"},on:{change:function(e){return t.virtualList2=e}}},[n("el-table",{staticClass:"table2",attrs:{"row-key":"id",stripe:"",data:t.virtualList2,height:"500px"}},[n("el-table-column",{attrs:{label:"id",prop:"id"}}),n("el-table-column",{attrs:{label:"内容",prop:"text"}}),n("el-table-column",{attrs:{label:"详情"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){l.show=!l.show}}},[t._v(t._s(l.show?"隐藏":"显示"))]),l.show?n("div",[t._v(t._s(l.text2))]):t._e()]}}])}),n("el-table-column",{attrs:{label:"第n行",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",prop:"id"}}),n("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.id)+" "),n("el-button",{on:{click:function(e){return t.onDel2(l)}}},[t._v("删除")]),n("el-button",{on:{click:function(e){return t.onEdit2(l)}}},[t._v("编辑")])]}}])}),n("div",{attrs:{slot:"append"},slot:"append"},[n("InfiniteLoading",{attrs:{forceUseInfiniteWrapper:".table2 .el-table__body-wrapper"},on:{infinite:t.loadMore}})],1)],1)],1),n("b",[t._v("行数: "+t._s(t.virtualList2.length))]),n("h2",[t._v("不使用虚拟滚动的表格效果（数据大时会卡顿）")]),t._v(" 开启："),n("el-switch",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t.show?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,height:"500px"}},[n("el-table-column",{attrs:{label:"id",prop:"id"}}),n("el-table-column",{attrs:{label:"内容",width:"260",prop:"text"}}),n("el-table-column",{attrs:{label:"内容省略",width:"260",prop:"text","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"详情","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){l.show=!l.show}}},[t._v(t._s(l.show?"隐藏":"显示"))]),l.show?n("div",[t._v(t._s(l.text2))]):t._e()]}}],null,!1,230167116)}),n("el-table-column",{attrs:{label:"一级表头"}},[n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),n("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}})],1),n("el-table-column",{attrs:{label:"操作",fixed:t.fixed,width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.id)+" "),n("el-button",{key:l.id,on:{click:function(e){return t.onDel(l)}}},[t._v("删除")]),n("el-button",{key:l.id,on:{click:function(e){return t.onEdit(l)}}},[t._v("编辑")])]}}],null,!1,1374602272)}),n("el-divider",{attrs:{slot:"append"},slot:"append"},[t._v("到底了")])],1):t._e(),n("br"),n("b",[t._v("行数: "+t._s(t.list.length))])],1)},o=[],r=(n(4553),n(561),n(1539),n(4747),n(7327),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)}),a=[],s=(n(9653),n(1038),n(8783),n(7042),n(4074)),c=n.n(s),u={name:"el-table-virtual-scroll",props:{data:{type:Array,required:!0},height:{type:Number,default:60},buffer:{type:Number,default:500},keyProp:{type:String,default:"id"},throttleTime:{type:Number,default:100}},data:function(){return{sizes:{}}},computed:{offsetMap:function(t){for(var e=t.keyProp,n=t.height,l=t.sizes,i=t.data,o={},r=0,a=0;a<i.length;a++){var s=i[a][e];o[s]=r;var c=l[s],u="number"===typeof c?c:n;r+=u}return o}},methods:{initData:function(){var t=this;this.renderData=[],this.top=void 0,this.bottom=void 0,this.start=0,this.end=void 0,this.scroller=this.$el.querySelector(".el-table__body-wrapper"),setTimeout((function(){t.handleScroll()}),100),this.onScroll=c()(this.handleScroll,this.throttleTime),this.scroller.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.onScroll)},updateSizes:function(){var t=this,e=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row");Array.from(e).forEach((function(e,n){var l=t.renderData[n];if(l){var i=l[t.keyProp],o=e.offsetHeight;t.sizes[i]!==o&&t.$set(t.sizes,i,o)}}))},handleScroll:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.updateSizes(),this.calcRenderData(),this.calcPosition(),t&&this.updatePosition(),this.$emit("change",this.renderData,this.start,this.end)},getOffsetTop:function(t){var e=this.data[t];return e&&this.offsetMap[e[this.keyProp]]||0},getSize:function(t){var e=this.data[t];if(e){var n=e[this.keyProp];return this.sizes[n]||this.height}return this.height},calcRenderData:function(){var t=this.scroller,e=this.data,n=this.buffer,l=t.scrollTop-n,i=t.scrollTop+t.offsetHeight+n,o=0,r=e.length-1,a=0;while(o<=r){a=Math.floor((o+r)/2);var s=this.getOffsetTop(a);if(s<l){var c=this.getOffsetTop(a+1);if(c>l)break;o=a+1}else r=a-1}for(var u=a,d=e.length-1,h=u+1;h<e.length;h++){var f=this.getOffsetTop(h);if(f>=i){d=h;break}}u%2&&(u-=1),this.top=l,this.bottom=i,this.start=u,this.end=d,this.renderData=e.slice(u,d+1)},calcPosition:function(){var t=this,e=this.data.length-1,n=this.getOffsetTop(e)+this.getSize(e),l=this.getOffsetTop(this.start),i=[".el-table__body-wrapper",".el-table__fixed-right .el-table__fixed-body-wrapper",".el-table__fixed .el-table__fixed-body-wrapper"];i.forEach((function(e){var i=t.$el.querySelector(e);if(i){if(!i.wrapEl){var o=document.createElement("div"),r=document.createElement("div");o.appendChild(r),r.appendChild(i.children[0]),i.insertBefore(o,i.firstChild),i.wrapEl=o,i.innerEl=r}i.wrapEl&&(i.wrapEl.style.height=n+"px",i.innerEl.style.transform="translateY(".concat(l,"px)"))}}))},updatePosition:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.timer&&clearTimeout(t.timer),t.handleScroll(!1)}),this.throttleTime+10)},update:function(){console.log("update"),this.handleScroll()},scrollTo:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=this.data[t];l&&this.scroller&&(this.updateSizes(),this.calcRenderData(),this.$nextTick((function(){var l=e.getOffsetTop(t);e.scroller.scrollTop=l,n||setTimeout((function(){e.scrollTo(t,!0)}),50)})))},reset:function(){this.sizes={},this.scrollTo(0,!1)}},watch:{data:function(){this.update()}},created:function(){var t=this;this.$nextTick((function(){t.initData()}))},beforeDestroy:function(){this.scroller&&(this.scroller.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll))}},d=u,h=n(1001),f=(0,h.Z)(d,r,a,!1,null,"39ceb21c",null),p=f.exports,v=n(1774),b=n.n(v),m={name:"App",components:{VirtualScroll:p,InfiniteLoading:b()},data:function(){return{count:2e3,count2:0,fixed:void 0,jumpIndex:1999,loading:!1,show:!1,list:[],list2:[],virtualList1:[],virtualList2:[],isCheckedAll:!1,isCheckedImn:!1}},methods:{fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=[],t.$refs.virtualScroll.reset();for(var e=0;e<t.count;e++){var n=t.getRandomContent(),l=t.getRandomContent();t.list.push({id:e,show:!1,text:n,text2:l,checked:!1})}t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onChange:function(t){console.log("onChange"),this.virtualList1=t},onDel:function(t){var e=this.list.findIndex((function(e){return e===t}));e>-1&&this.list.splice(e,1)},onEdit:function(t){t.text=t.text+"__编辑"},onDel2:function(t){var e=this.list2.findIndex((function(e){return e===t}));e>-1&&this.list2.splice(e,1)},scrollToRow:function(t){this.$refs.virtualScroll.scrollTo(t)},loadMore:function(t){var e=this;setTimeout((function(){for(var n=0;n<10;n++)e.count2++,e.list2.push({id:e.count2,show:!1,text:e.getRandomContent(),text2:e.getRandomContent()});t&&t.loaded()}),1e3)},onCheckAllRows:function(t){t=!!this.isCheckedImn||t,this.list.forEach((function(e){return e.checked=t})),this.isCheckedAll=t,this.isCheckedImn=!1},onCheckRow:function(){var t=this.list.filter((function(t){return!0===t.checked})).length;0===t?(this.isCheckedAll=!1,this.isCheckedImn=!1):t===this.list.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):this.isCheckedImn=!0}},watch:{count:function(){this.fetchData()}},created:function(){this.fetchData()}},w=m,_=(0,h.Z)(w,i,o,!1,null,null,null),g=_.exports,k=n(4549),x=n.n(k);l["default"].config.productionTip=!1,l["default"].use(x()),new l["default"]({render:function(t){return t(g)}}).$mount("#app")}},e={};function n(l){var i=e[l];if(void 0!==i)return i.exports;var o=e[l]={id:l,loaded:!1,exports:{}};return t[l].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,l,i,o){if(!l){var r=1/0;for(u=0;u<t.length;u++){l=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,s=0;s<l.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](l[s])}))?l.splice(s--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[l,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,o,r=l[0],a=l[1],s=l[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var u=s(n)}for(e&&e(l);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},l=self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(8601)}));l=n.O(l)})();
//# sourceMappingURL=app-legacy.a85bbcba.js.map