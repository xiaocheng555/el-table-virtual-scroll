"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[1],{18065:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=function(){var e=this,t=e._self._c;return t("div",[t("virtual-scroll",{ref:"virtualScroll",attrs:{data:e.list,"item-size":62,"key-prop":"id"},on:{change:e.onVirtualChange}},[t("el-table",{ref:"table",class:e.isExpanding?"is-expanding":"",staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"600","row-key":"id","row-class-name":e.rowClassName},on:{"expand-change":e.onExpandChange}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"商品名称"}},[t("span",[e._v(e._s(a.row.name))])]),t("el-form-item",{attrs:{label:"所属店铺"}},[t("span",[e._v(e._s(a.row.shop))])]),t("el-form-item",{attrs:{label:"商品 ID"}},[t("span",[e._v(e._s(a.row.id))])]),t("el-form-item",{attrs:{label:"店铺 ID"}},[t("span",[e._v(e._s(a.row.shopId))])]),t("el-form-item",{attrs:{label:"商品分类"}},[t("span",[e._v(e._s(a.row.category))])]),t("el-form-item",{attrs:{label:"店铺地址"}},[t("span",[e._v(e._s(a.row.address))])]),t("el-form-item",{attrs:{label:"商品描述"}},[t("span",[e._v(e._s(a.row.desc))])])],1)]}}])}),t("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),t("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),t("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1)],1)},r=[],l=a(51907),o=a(85617),s=a(68347),i=a(79879),c={components:{VirtualScroll:s.ZP},data:function(){return{list:(0,i.c)(0,2e3),tableData:[],expandRows:[],isExpanding:!1}},methods:{rowClassName:function(e){var t=e.row;return"row_".concat(t.id)},onVirtualChange:function(e){var t=this;return(0,o.Z)((0,l.Z)().mark((function a(){return(0,l.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.tableData=e,t.isExpanding=!0,a.next=4,t.$nextTick();case 4:t.expandRows.forEach((function(e){var a,n;null===(a=t.$refs.table)||void 0===a||null===(n=a.toggleRowExpansion)||void 0===n||n.call(a,e,!0)})),setTimeout((function(){t.isExpanding=!1}),10);case 6:case"end":return a.stop()}}),a)})))()},onExpandChange:function(e){var t=document.querySelector(".row_".concat(e.id));if(t){var a=!t.className.includes("expanded");a?this.expandRows.includes(e)||this.expandRows.push(e):this.expandRows=this.expandRows.filter((function(t){return t!==e}))}}}},u=c,d=a(1001),p=(0,d.Z)(u,n,r,!1,null,"c7f46f4e",null),f=p.exports},79879:function(e,t,a){function n(e,t){for(var a=1,n=[],o=0;o<t;o++){var s=l(),i=l();Math.random()>.6&&a++,n.push({id:e++,index:o,text:s,text2:i,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:r(0,1e3),cate:a})}return n}function r(e,t){return Math.floor(Math.random()*(t-e))+e}function l(){var e=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],t=Math.floor(10*Math.random());return e[t]}a.d(t,{c:function(){return n}})}}]);
//# sourceMappingURL=1.d235b3aa.js.map