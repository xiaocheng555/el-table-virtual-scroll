"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[970],{18065:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:t.onVirtualChange}},[e("el-table",{ref:"table",class:t.isExpanding?"is-expanding":"",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"600","row-key":"id","row-class-name":t.rowClassName},on:{"expand-change":t.onExpandChange}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"商品名称"}},[e("span",[t._v(t._s(a.row.name))])]),e("el-form-item",{attrs:{label:"所属店铺"}},[e("span",[t._v(t._s(a.row.shop))])]),e("el-form-item",{attrs:{label:"商品 ID"}},[e("span",[t._v(t._s(a.row.id))])]),e("el-form-item",{attrs:{label:"店铺 ID"}},[e("span",[t._v(t._s(a.row.shopId))])]),e("el-form-item",{attrs:{label:"商品分类"}},[e("span",[t._v(t._s(a.row.category))])]),e("el-form-item",{attrs:{label:"店铺地址"}},[e("span",[t._v(t._s(a.row.address))])]),e("el-form-item",{attrs:{label:"商品描述"}},[e("span",[t._v(t._s(a.row.desc))])])],1)]}}])}),e("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1)],1)},n=[],l=a(54667),o=a(79879),r={components:{VirtualScroll:l.ZP},data(){return{list:(0,o.c)(0,2e3),tableData:[],expandRows:[],isExpanding:!1}},methods:{rowClassName({row:t}){return`row_${t.id}`},async onVirtualChange(t){this.tableData=t,this.isExpanding=!0,await this.$nextTick(),this.expandRows.forEach((t=>{this.$refs.table?.toggleRowExpansion?.(t,!0)})),setTimeout((()=>{this.isExpanding=!1}),10)},onExpandChange(t){const e=document.querySelector(`.row_${t.id}`);if(e){const a=!e.className.includes("expanded");a?this.expandRows.includes(t)||this.expandRows.push(t):this.expandRows=this.expandRows.filter((e=>e!==t))}}}},i=r,c=a(1001),d=(0,c.Z)(i,s,n,!1,null,"c7f46f4e",null),p=d.exports},79879:function(t,e,a){function s(t,e){let a=1;const s=[];for(let o=0;o<e;o++){const e=l(),r=l();Math.random()>.6&&a++,s.push({id:t++,index:o,text:e,text2:r,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3),cate:a})}return s}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function l(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}a.d(e,{c:function(){return s}})}}]);
//# sourceMappingURL=970.3f420d9c.js.map