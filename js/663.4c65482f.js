"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[663],{62565:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-alert",{attrs:{type:"warning",title:"树结构虚拟滚动只计算一级节点渲染的数据，如果某个一级节点下的子孙节点超级多，仍然会卡顿。（可以模拟树结构懒加载）","show-icon":""}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500px",border:"","row-key":"id",lazy:"",load:t.onload,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{label:"id",prop:"id"}}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",prop:"text","show-overflow-tooltip":""}})],1)],1)],1)},l=[],o=a(37656),r={components:{VirtualScroll:o.ZP},data:function(){return{loading:!1,list:[],tableData:[]}},methods:{fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=[];for(var e=1;e<2e3;e++){var a=t.getRandomContent(),n=t.getRandomContent();t.list.push({id:e,show:!1,text:a,text2:n,hasChildren:Math.random()>.02})}t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onload:function(t,e,a){var n=this;this.count||(this.count=3e3),setTimeout((function(){if(Math.random()>.5)a([]);else{for(var t=[],e=0;e<10;e++)t.push({id:n.count++,show:!1,text:n.getRandomContent(),text2:n.getRandomContent(),hasChildren:!0});a(t)}}),1e3)}},created:function(){this.fetchData()}},i=r,s=a(1001),d=(0,s.Z)(i,n,l,!1,null,"5e4a32c6",null),u=d.exports}}]);
//# sourceMappingURL=663.4c65482f.js.map