"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[463],{5598:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var l=function(){var t=this,e=t._self._c;return e("div",[t._v(" 带边框："),e("el-switch",{model:{value:t.border,callback:function(e){t.border=e},expression:"border"}}),t._v(" / 带状态表格："),e("el-switch",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" / 带条纹："),e("el-switch",{model:{value:t.stripe,callback:function(e){t.stripe=e},expression:"stripe"}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"row-key":"id","item-size":62,"key-prop":"id"},on:{change:e=>t.tableData=e}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:t.stripe,border:t.border,height:"500px","row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{label:"id",prop:"id",width:"180",fixed:""}}),e("el-table-column",{attrs:{label:"日期",width:"260",prop:"date"}}),e("el-table-column",{attrs:{label:"内容省略",width:"800",prop:"text","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"内容",prop:"text",width:"800"}})],1)],1)],1)},r=[],o=a(9115),s=a(9879),n={components:{VirtualScroll:o.ZP},data(){return{list:(0,s.c)(0,2e3),tableData:[],stripe:!1,border:!1,status:!1}},methods:{tableRowClassName({row:t}){if(this.status)return 1===t.index?"warning-row":3===t.index?"success-row":""}}},i=n,c=a(1001),u=(0,c.Z)(i,l,r,!1,null,"5a251a10",null),d=u.exports},9879:function(t,e,a){function l(t,e){let a=1;const l=[];for(let s=0;s<e;s++){const e=o(),n=o();Math.random()>.6&&a++,l.push({id:t++,index:s,text:e,text2:n,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:r(0,1e3),cate:a})}return l}function r(t,e){return Math.floor(Math.random()*(e-t))+t}function o(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}a.d(e,{c:function(){return l}})}}]);
//# sourceMappingURL=463.561bafe0.js.map