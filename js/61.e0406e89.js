"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[61],{19395:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{"key-prop":"id",data:t.list,"item-size":62,"row-span-key":t.getRowSpanKey},on:{change:function(e){return t.tableData=e}}},[e("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-key":"id",height:"600px","span-method":t.objectSpanMethod}},[e("el-table-column",{attrs:{label:"分类",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.row;return[e("span",[t._v("第"+t._s(a.cate)+"类别")])]}}])}),e("el-table-column",{attrs:{prop:"id",label:"id",width:"150"}}),e("el-table-column",{attrs:{prop:"cate",label:"cate值",width:"150"}}),e("el-table-column",{attrs:{prop:"text",label:"text",width:"500"}}),e("el-table-column",{attrs:{prop:"text2",label:"text2",width:"500"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.row;return[e("el-button",{on:{click:function(e){return t.onDel(a)}}},[t._v("删除")])]}}])})],1)],1)],1)},o=[],r=n(4551),l=n(79879),i={components:{VirtualScroll:r.ZP},data:function(){return{list:(0,l.c)(0,2e3),tableData:[]}},methods:{handleListRowSpan:function(){var t;this.list.forEach((function(e){var n;(null===(n=t)||void 0===n?void 0:n.cate)===e.cate?(t.rowspan++,e.rowspan=0):(e.rowspan=1,t=e)})),console.log(this.list.map((function(t){return t.rowspan})),"合并")},objectSpanMethod:function(t){var e=t.row,n=t.columnIndex;if(0===n)return e.rowspan?{rowspan:e.rowspan,colspan:1}:{rowspan:0,colspan:0}},getRowSpanKey:function(t){return t.cate},onDel:function(t){var e=this.list.findIndex((function(e){return e===t}));e>-1&&(this.list.splice(e,1),this.handleListRowSpan(),this.$refs.table.doLayout())}},created:function(){this.handleListRowSpan()}},c=i,s=n(1001),u=(0,s.Z)(c,a,o,!1,null,"b6ee2b84",null),d=u.exports},79879:function(t,e,n){function a(t,e){for(var n=1,a=[],l=0;l<e;l++){var i=r(),c=r();Math.random()>.6&&n++,a.push({id:t++,index:l,text:i,text2:c,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:o(0,1e3),cate:n})}return a}function o(t,e){return Math.floor(Math.random()*(e-t))+t}function r(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}n.d(e,{c:function(){return a}})}}]);
//# sourceMappingURL=61.e0406e89.js.map