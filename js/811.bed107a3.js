"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[811],{57159:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var o=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e},"current-change":t.onRadioChange}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500","row-key":"id","tooltip-effect":"dark"}},[e("virtual-column",{attrs:{width:"160",type:"radio"}}),e("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(e){return t.setCheckedRow(t.list[1])}}},[t._v("选中第二行")]),e("el-button",{on:{click:function(e){return t.setCheckedRow()}}},[t._v("取消选择")])],1)],1)},a=[],r=n(15101),l=n(79879),c={components:{VirtualScroll:r.ZP,VirtualColumn:r.Fg},data:function(){return{list:(0,l.c)(0,2e3),tableData:[],checkedRow:null}},methods:{setCheckedRow:function(t){this.$refs.virtualScroll.setCurrentRow(t)},onRadioChange:function(t){console.log(t,"onRadioChange")}}},i=c,u=n(1001),s=(0,u.Z)(i,o,a,!1,null,"10ae3472",null),d=s.exports},79879:function(t,e,n){function o(t,e){for(var n=1,o=[],l=0;l<e;l++){var c=r(),i=r();Math.random()>.6&&n++,o.push({id:t++,index:l,text:c,text2:i,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:a(0,1e3),cate:n})}return o}function a(t,e){return Math.floor(Math.random()*(e-t))+t}function r(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}n.d(e,{c:function(){return o}})}}]);
//# sourceMappingURL=811.bed107a3.js.map