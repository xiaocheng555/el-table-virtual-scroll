"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[400],{8174:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var c=function(){var e=this,t=e._self._c;return t("div",[t("virtual-scroll",{ref:"virtualScroll",attrs:{data:e.list,"item-size":62,"key-prop":"id"},on:{change:t=>e.tableData=t}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"500","row-key":"id","tooltip-effect":"dark"}},[t("el-table-column",{attrs:{width:"60"},scopedSlots:e._u([{key:"header",fn:function({}){return[t("el-checkbox",{attrs:{indeterminate:e.isCheckedImn},on:{change:e.onCheckAllRows},model:{value:e.isCheckedAll,callback:function(t){e.isCheckedAll=t},expression:"isCheckedAll"}})]}},{key:"default",fn:function({row:l}){return[t("el-checkbox",{on:{change:e.onCheckRow},model:{value:l.checked,callback:function(t){e.$set(l,"checked",t)},expression:"row.checked"}})]}}])}),t("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.date))]}}])}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-button",{on:{click:function(t){return e.setCurrent(e.list[1])}}},[e._v("选中第二行")]),t("el-button",{on:{click:function(t){return e.setCurrent()}}},[e._v("取消选择")])],1)],1)},n=[],o=l(225),s=l(9879),i={components:{VirtualScroll:o.ZP},data(){return{list:(0,s.c)(0,2e3),tableData:[],isCheckedAll:!1,isCheckedImn:!1}},methods:{setCurrent(e){this.list.forEach((t=>{t.checked=t===e})),this.onCheckRow()},onCheckAllRows(e){e=!!this.isCheckedImn||e,this.list.forEach((t=>t.checked=e)),this.isCheckedAll=e,this.isCheckedImn=!1},onCheckRow(){const e=this.list.filter((e=>!0===e.checked)).length;0===e?(this.isCheckedAll=!1,this.isCheckedImn=!1):e===this.list.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):(this.isCheckedAll=!1,this.isCheckedImn=!0)}},created(){}},r=i,a=l(1001),h=(0,a.Z)(r,c,n,!1,null,"c5dcb640",null),d=h.exports},9879:function(e,t,l){function c(e,t){let l=1;const c=[];for(let s=0;s<t;s++){const t=o(),i=o();Math.random()>.6&&l++,c.push({id:e++,index:s,text:t,text2:i,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3),cate:l})}return c}function n(e,t){return Math.floor(Math.random()*(t-e))+e}function o(){const e=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],t=Math.floor(10*Math.random());return e[t]}l.d(t,{c:function(){return c}})}}]);
//# sourceMappingURL=400.dc019ce3.js.map