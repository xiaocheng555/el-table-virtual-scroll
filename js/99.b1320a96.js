"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[99],{9327:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:e=>t.tableData=e}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-key":"id",height:"500px"}},[e("virtual-column",{attrs:{width:"60",type:"selection"}}),e("el-table-column",{attrs:{prop:"id",label:"id",width:"150"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"420"}}),e("el-table-column",{attrs:{prop:"province",label:"省份",width:"320"}}),e("el-table-column",{attrs:{prop:"city",label:"市区",width:"320"}}),e("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),e("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"320"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(l.row)}}},[t._v("查看")]),e("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1),e("el-pagination",{attrs:{total:t.total},on:{"current-change":t.onCurChange}})],1)},r=[],n=l(7354),o=l(9879),i={components:{VirtualScroll:n.ZP,VirtualColumn:n.Fg},data(){return{total:200,list:(0,o.c)(0,200),tableData:[]}},methods:{onCurChange(t){this.list=(0,o.c)(this.total*(t-1),this.total*t)}},created(){}},c=i,s=l(1001),u=(0,s.Z)(c,a,r,!1,null,"ce303566",null),d=u.exports},9879:function(t,e,l){function a(t,e){let l=1;const a=[];for(let o=0;o<e;o++){const e=n(),i=n();Math.random()>.6&&l++,a.push({id:t++,index:o,text:e,text2:i,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:r(0,1e3),cate:l})}return a}function r(t,e){return Math.floor(Math.random()*(e-t))+t}function n(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}l.d(e,{c:function(){return a}})}}]);
//# sourceMappingURL=99.b1320a96.js.map