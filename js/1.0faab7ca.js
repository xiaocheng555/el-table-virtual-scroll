"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[1],{6868:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",[e("el-alert",{attrs:{type:"warning",title:"非懒加载的树结构需要写成懒加载的形式，否则树展开后，来回滚动会导致展开树重置为未展开状态","show-icon":""}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500px","row-key":"id",border:"",lazy:"",load:function(t,e,n){return n(t.children)},"tree-props":{hasChildren:"children"}}},[e("el-table-column",{attrs:{label:"id",prop:"id"}}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",prop:"text","show-overflow-tooltip":""}})],1)],1)],1)},o=[],l=n(39561),i={components:{VirtualScroll:l.ZP},data:function(){return{loading:!1,list:[],tableData:[]}},methods:{fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=[];for(var e=1;e<2e3;e++){var n=t.getRandomContent(),a=t.getRandomContent();t.list.push({id:e,show:!1,text:n,text2:a,children:[{id:e+"_1",text:t.getRandomContent(),text2:t.getRandomContent()},{id:e+"_2",text:t.getRandomContent(),text2:t.getRandomContent()},{id:e+"_3",text:t.getRandomContent(),text2:t.getRandomContent()},{id:e+"_4",text:t.getRandomContent(),text2:t.getRandomContent()},{id:e+"_5",text:t.getRandomContent(),text2:t.getRandomContent()},{id:e+"_6",text:t.getRandomContent(),text2:t.getRandomContent()}]})}t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}},created:function(){this.fetchData()}},r=i,d=n(1001),s=(0,d.Z)(r,a,o,!1,null,"e3d2c330",null),c=s.exports}}]);
//# sourceMappingURL=1.0faab7ca.js.map