"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[741,797,666,1,889],{15598:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[t._v(" 带边框："),e("el-switch",{model:{value:t.border,callback:function(e){t.border=e},expression:"border"}}),t._v(" / 带状态表格："),e("el-switch",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" / 带条纹："),e("el-switch",{model:{value:t.stripe,callback:function(e){t.stripe=e},expression:"stripe"}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"row-key":"id","item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:t.stripe,border:t.border,height:"500px","row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{label:"id",prop:"id",width:"180",fixed:""}}),e("el-table-column",{attrs:{label:"日期",width:"260",prop:"date"}}),e("el-table-column",{attrs:{label:"内容省略",width:"800",prop:"text","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"内容",prop:"text",width:"800"}})],1)],1)],1)},n=[],o=l(68347),r=l(79879),i={components:{VirtualScroll:o.ZP},data:function(){return{list:(0,r.c)(0,2e3),tableData:[],stripe:!1,border:!1,status:!1}},methods:{tableRowClassName:function(t){var e=t.row;if(this.status)return 1===e.index?"warning-row":3===e.index?"success-row":""}}},s=i,c=l(1001),u=(0,c.Z)(s,a,n,!1,null,"5a251a10",null),d=u.exports},99416:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("el-select",{staticStyle:{width:"100px"},on:{change:t.onFixedChange},model:{value:t.fixed,callback:function(e){t.fixed=e},expression:"fixed"}},[e("el-option",{attrs:{value:void 0,label:"不固定"}}),e("el-option",{attrs:{value:"left",label:"固定左边"}}),e("el-option",{attrs:{value:"right",label:"固定右边"}})],1),t._v("   "),e("el-input",{staticStyle:{width:"300px"},attrs:{type:"number",placeholder:"滚动到第几行"},model:{value:t.jumpIndex,callback:function(e){t.jumpIndex=e},expression:"jumpIndex"}},[e("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.scrollToRow(t.jumpIndex)}},slot:"append"},[t._v("滚动"+t._s(t.jumpIndex))])],1),t._v("   数据总数量："),e("el-input",{staticStyle:{width:"200px"},attrs:{type:"number",placeholder:"数据条数"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:t.onChange}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.virtualList1,stripe:"","row-key":"id",height:"600"}},[e("virtual-column",{attrs:{type:"selection",width:"60"}}),e("el-table-column",{attrs:{label:"id",prop:"id"}}),e("el-table-column",{attrs:{label:"内容",width:"260",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",width:"260",prop:"text","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"详情","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(l){var a=l.row;return[e("el-button",{attrs:{type:"text"},on:{click:function(t){a.show=!a.show}}},[t._v(t._s(a.show?"隐藏":"显示"))]),a.show?e("div",[t._v(t._s(a.text2))]):t._e()]}}])}),e("el-table-column",{attrs:{label:"一级表头"}},[e("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",width:"400",prop:"id"}})],1),e("el-table-column",{attrs:{label:"操作",fixed:t.fixed,width:"260"},scopedSlots:t._u([{key:"default",fn:function(l){var a=l.row;return[t._v(" "+t._s(a.id)+" "),e("el-button",{on:{click:function(e){return t.onDel(a)}}},[t._v("删除")]),e("el-button",{on:{click:function(e){return t.onEdit(a)}}},[t._v("编辑")])]}}])}),e("div",{attrs:{slot:"append"},slot:"append"},[e("el-divider",[t._v("到底了~")])],1)],1)],1),e("b",[t._v("行数: "+t._s(t.virtualList1.length))])],1)},n=[],o=l(68347),r=l(79879),i={components:{VirtualScroll:o.ZP,VirtualColumn:o.Fg},data:function(){return{count:2e3,fixed:void 0,jumpIndex:1999,loading:!1,show:!1,list:[],virtualList1:[],isCheckedAll:!1,isCheckedImn:!1}},methods:{onFixedChange:function(){this.$refs.virtualScroll.update()},fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=(0,r.c)(0,t.count),t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},scrollToRow:function(t){this.$refs.virtualScroll.scrollTo(t)},onChange:function(t){console.log("onChange"),this.virtualList1=t},onDel:function(t){var e=this.list.findIndex((function(e){return e===t}));e>-1&&this.list.splice(e,1)},onEdit:function(t){t.text=t.text+"__编辑"}},watch:{count:function(){var t,e;null===(t=this.$refs.virtualScroll)||void 0===t||null===(e=t.reset)||void 0===e||e.call(t),this.fetchData()}},created:function(){this.fetchData()}},s=i,c=l(1001),u=(0,c.Z)(s,a,n,!1,null,"28a96e90",null),d=u.exports},18065:function(t,e,l){l.r(e),l.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:t.onVirtualChange}},[e("el-table",{ref:"table",class:t.isExpanding?"is-expanding":"",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"600","row-key":"id","row-class-name":t.rowClassName},on:{"expand-change":t.onExpandChange}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"商品名称"}},[e("span",[t._v(t._s(l.row.name))])]),e("el-form-item",{attrs:{label:"所属店铺"}},[e("span",[t._v(t._s(l.row.shop))])]),e("el-form-item",{attrs:{label:"商品 ID"}},[e("span",[t._v(t._s(l.row.id))])]),e("el-form-item",{attrs:{label:"店铺 ID"}},[e("span",[t._v(t._s(l.row.shopId))])]),e("el-form-item",{attrs:{label:"商品分类"}},[e("span",[t._v(t._s(l.row.category))])]),e("el-form-item",{attrs:{label:"店铺地址"}},[e("span",[t._v(t._s(l.row.address))])]),e("el-form-item",{attrs:{label:"商品描述"}},[e("span",[t._v(t._s(l.row.desc))])])],1)]}}])}),e("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1)],1)},n=[],o=l(51907),r=l(85617),i=l(68347),s=l(79879),c={components:{VirtualScroll:i.ZP},data:function(){return{list:(0,s.c)(0,2e3),tableData:[],expandRows:[],isExpanding:!1}},methods:{rowClassName:function(t){var e=t.row;return"row_".concat(e.id)},onVirtualChange:function(t){var e=this;return(0,r.Z)((0,o.Z)().mark((function l(){return(0,o.Z)().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return e.tableData=t,e.isExpanding=!0,l.next=4,e.$nextTick();case 4:e.expandRows.forEach((function(t){var l,a;null===(l=e.$refs.table)||void 0===l||null===(a=l.toggleRowExpansion)||void 0===a||a.call(l,t,!0)})),setTimeout((function(){e.isExpanding=!1}),10);case 6:case"end":return l.stop()}}),l)})))()},onExpandChange:function(t){var e=document.querySelector(".row_".concat(t.id));if(e){var l=!e.className.includes("expanded");l?this.expandRows.includes(t)||this.expandRows.push(t):this.expandRows=this.expandRows.filter((function(e){return e!==t}))}}}},u=c,d=l(1001),p=(0,d.Z)(u,a,n,!1,null,"c7f46f4e",null),h=p.exports},55388:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("el-button",{on:{click:function(e){t.show=!t.show}}},[t._v("切换显示")]),e("virtual-scroll",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-key":"id",height:"500px"}},[e("el-table-column",{attrs:{label:"id",prop:"id",fixed:""}}),e("el-table-column",{attrs:{label:"内容",width:"260",prop:"text",fixed:""}}),e("el-table-column",{attrs:{label:"内容省略",width:"260",prop:"text","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"详情","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(l){var a=l.row;return[e("el-button",{attrs:{type:"text"},on:{click:function(t){a.show=!a.show}}},[t._v(t._s(a.show?"隐藏":"显示"))]),a.show?e("div",[t._v(t._s(a.text2))]):t._e()]}}])}),e("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"420"}}),e("el-table-column",{attrs:{prop:"province",label:"省份",width:"320"}}),e("el-table-column",{attrs:{prop:"city",label:"市区",width:"320"}}),e("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),e("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"320"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(l.row)}}},[t._v("查看")]),e("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)],1)},n=[],o=l(68347),r=l(79879),i={components:{VirtualScroll:o.ZP},data:function(){return{show:!0,list:(0,r.c)(0,2e3),tableData:[]}},methods:{},mounted:function(){var t=this;setTimeout((function(){t.$refs.virtualScroll.slowOnMousewheel()}))}},s=i,c=l(1001),u=(0,c.Z)(s,a,n,!1,null,"4a7303fe",null),d=u.exports},51890:function(t,e,l){l.r(e),l.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ulAll"},[e("div",{staticClass:"tabxiangmu"},[e("ul",[e("li",{class:{tabAclive:1===t.activeIndex1},on:{click:function(e){return t.changeTab(1)}}},[t._v("表格1")]),e("li",{class:{tabAclive:2===t.activeIndex1},on:{click:function(e){return t.changeTab(2)}}},[t._v("表格2")]),e("li",{class:{tabAclive:3===t.activeIndex1},on:{click:function(e){return t.changeTab(3)}}},[t._v("表格3")]),e("li",{class:{tabAclive:4===t.activeIndex1},on:{click:function(e){return t.changeTab(4)}}},[t._v("表格4")])])]),e("div",{staticStyle:{height:"calc(100% - 50px)",width:"100%"}},[e("BasicDemo",{directives:[{name:"show",rawName:"v-show",value:"1"===t.showTeb1,expression:"showTeb1==='1'"}],ref:"powerBreakRef"}),e("CaseDemo",{directives:[{name:"show",rawName:"v-show",value:"2"===t.showTeb1,expression:"showTeb1==='2'"}],ref:"powerWorkErrorRef"}),e("ExpandDemo",{directives:[{name:"show",rawName:"v-show",value:"3"===t.showTeb1,expression:"showTeb1==='3'"}],ref:"powerCheckWorkRef"}),e("FixedDemo",{directives:[{name:"show",rawName:"v-show",value:"4"===t.showTeb1,expression:"showTeb1==='4'"}],ref:"powerRiskAnalyseRef"})],1)])},n=[],o=l(15598),r=l(99416),i=l(18065),s=l(55388),c={components:{BasicDemo:o["default"],CaseDemo:r["default"],ExpandDemo:i["default"],FixedDemo:s["default"]},data:function(){return{showTeb1:"1",activeIndex1:1}},created:function(){},mounted:function(){},unmounted:function(){},methods:{show:function(t){console.log(t)},changeTab:function(t){var e=this;e.activeIndex1=t,1===t?e.showTeb1="1":2===t?e.showTeb1="2":3===t?e.showTeb1="3":4===t&&(e.showTeb1="4")}}},u=c,d=l(1001),p=(0,d.Z)(u,a,n,!1,null,"50703027",null),h=p.exports},79879:function(t,e,l){function a(t,e){for(var l=1,a=[],r=0;r<e;r++){var i=o(),s=o();Math.random()>.6&&l++,a.push({id:t++,index:r,text:i,text2:s,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3),cate:l})}return a}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function o(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}l.d(e,{c:function(){return a}})}}]);
//# sourceMappingURL=741.d3d80cf8.js.map