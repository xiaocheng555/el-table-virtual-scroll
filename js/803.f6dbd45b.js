"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[803],{92803:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=function(){var t=this,e=t._self._c;return e("div",[e("el-alert",{attrs:{type:"info",title:"版本>=1.26.0支持","show-icon":""}}),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(e){return t.setCheckedRow(t.list[1])}}},[t._v("选中第二行")]),e("el-button",{on:{click:function(e){return t.setCheckedRow()}}},[t._v("取消选择")])],1),e("el-table",{ref:"tableRef",staticStyle:{width:"100%"},attrs:{data:t.list,height:"500","tooltip-effect":"dark",currentRowKey:t.currentRowKey,"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[e("el-table-column",{attrs:{label:"id",prop:"id",width:"120"}}),e("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1)},o=[],l=n(79879),a={components:{},data:function(){return{list:(0,l.c)(0,200),tableData:[],checkedRow:null,currentRowKey:50}},methods:{handleCurrentChange:function(t){console.log("handleCurrentChange:",t),this.checkedRow=t},setCheckedRow:function(t){this.$refs.tableRef.setCurrentRow(t)}}},c=a,u=n(1001),i=(0,u.Z)(c,r,o,!1,null,"74218ebc",null),s=i.exports},79879:function(t,e,n){function r(t,e){for(var n=1,r=[],a=0;a<e;a++){var c=l(),u=l();Math.random()>.6&&n++,r.push({id:t++,index:a,text:c,text2:u,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:o(0,1e3),cate:n})}return r}function o(t,e){return Math.floor(Math.random()*(e-t))+t}function l(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}n.d(e,{c:function(){return r}})}}]);
//# sourceMappingURL=803.f6dbd45b.js.map