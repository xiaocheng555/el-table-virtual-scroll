"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[315],{9100:function(t,e,l){l.r(e),l.d(e,{default:function(){return h}});var o=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e},"selection-change":t.handleSelectionChange}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500","row-key":"id","tooltip-effect":"dark"}},[e("virtual-column",{attrs:{width:"60",type:"selection",selectable:t.getSelectable}}),e("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(e){return t.toggleSelection([t.list[1],t.list[2]])}}},[t._v("切换第二、第三行的选中状态")]),e("el-button",{on:{click:function(e){return t.toggleSelection()}}},[t._v("取消选择")]),e("el-button",{on:{click:function(e){t.show=!t.show}}},[t._v("show")])],1)],1)},n=[],a=l(12135),r=l(79879),i={components:{VirtualScroll:a.ZP,VirtualColumn:a.Fg},data:function(){return{list:(0,r.c)(0,2e3),tableData:[],multipleSelection:[],show:!0}},methods:{getSelectable:function(t,e){return e>5},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.virtualScroll.toggleRowSelection(t)})):this.$refs.virtualScroll.clearSelection()},handleSelectionChange:function(t){console.log("multipleSelection",t),this.multipleSelection=t}},created:function(){}},c=i,u=l(1001),s=(0,u.Z)(c,o,n,!1,null,"65425572",null),h=s.exports},79879:function(t,e,l){function o(t,e){for(var l=1,o=[],r=0;r<e;r++){var i=a(),c=a();Math.random()>.6&&l++,o.push({id:t++,index:r,text:i,text2:c,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3),cate:l})}return o}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function a(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}l.d(e,{c:function(){return o}})}}]);
//# sourceMappingURL=315.0fce623e.js.map