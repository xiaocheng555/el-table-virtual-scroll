"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[41],{71894:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var l=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:t.onVirtualChange}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"600","row-key":"id"}},[e("virtual-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"商品名称"}},[e("span",[t._v(t._s(a.row.name))])]),e("el-form-item",{attrs:{label:"所属店铺"}},[e("span",[t._v(t._s(a.row.shop))])]),e("el-form-item",{attrs:{label:"商品 ID"}},[e("span",[t._v(t._s(a.row.id))])]),e("el-form-item",{attrs:{label:"店铺 ID"}},[e("span",[t._v(t._s(a.row.shopId))])]),e("el-form-item",{attrs:{label:"商品分类"}},[e("span",[t._v(t._s(a.row.category))])]),e("el-form-item",{attrs:{label:"店铺地址"}},[e("span",[t._v(t._s(a.row.address))])]),e("el-form-item",{attrs:{label:"商品描述"}},[e("span",[t._v(t._s(a.row.desc))])])],1)]}}])}),e("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(e){return t.toggleExpand([t.list[1],t.list[2]])}}},[t._v("切换第二、第三行的展开收起状态")]),e("el-button",{on:{click:function(e){return t.toggleExpand(t.list,!1)}}},[t._v("全部收起")])],1)],1)},n=[],r=a(51907),o=a(85617),i=a(68347),s={components:{VirtualScroll:i.ZP,VirtualColumn:i.Fg},data:function(){return{list:[],tableData:[],loading:!1}},methods:{fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=[];for(var e=1;e<2e3;e++){var a=t.getRandomContent(),l=t.getRandomContent();t.list.push({id:e,show:!1,text:a,text2:l})}t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onVirtualChange:function(t){var e=this;return(0,o.Z)((0,r.Z)().mark((function a(){return(0,r.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.tableData=t;case 1:case"end":return a.stop()}}),a)})))()},toggleExpand:function(t,e){var a=this;t.forEach((function(t){a.$refs.virtualScroll.toggleRowExpansion(t,e)})),this.$refs.virtualScroll.update()}},created:function(){this.fetchData()}},u=s,c=a(1001),d=(0,c.Z)(u,l,n,!1,null,"b82227c8",null),f=d.exports}}]);
//# sourceMappingURL=41.bddedd2a.js.map