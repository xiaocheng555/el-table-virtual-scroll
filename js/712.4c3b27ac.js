"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[712],{87005:function(t,e,l){l.r(e),l.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500px",border:"","row-key":"id"}},[e("el-table-column",{attrs:{label:"id",prop:"id","class-name":"el-table__row--level"},scopedSlots:t._u([{key:"default",fn:function(l){var a=l.row;return[e("span",{staticClass:"el-table__indent",style:{paddingLeft:"".concat(16*a.level,"px")}}),a.hasChildren?e("div",{staticClass:"el-table__expand-icon",class:a.expanded?"el-table__expand-icon--expanded":"",on:{click:function(e){return t.onExpand(a)}}},[a.loading?e("i",{staticClass:"el-icon-loading"}):e("i",{staticClass:"el-icon-arrow-right"})]):e("span",{staticClass:"el-table__placeholder"}),t._v(" "+t._s(a.id)+" ")]}}])}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",prop:"text","show-overflow-tooltip":""}})],1)],1)],1)},n=[],i=l(23698),o=l(37656),d={components:{VirtualScroll:o.ZP},data:function(){return{loading:!1,list:[],tableData:[],count:3e3}},methods:{fetchData:function(){var t=this;this.loading=!0,this.list=[],setTimeout((function(){t.list=[];for(var e=1;e<2e3;e++){var l=t.getRandomContent(),a=t.getRandomContent();t.list.push({id:e,text:l,text2:a,hasChildren:!0,expanded:!1,loading:!1,loaded:!1,level:1,hideNodes:[]})}t.loading=!1}),1e3)},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onExpand:function(t){t.expanded=!t.expanded,t.expanded?this.loadChildNodes(t):this.hideChildNodes(t)},loadChildNodes:function(t){var e=this;if(t.loaded){var l,a=this.list.findIndex((function(e){return e===t}));a>-1&&(l=this.list).splice.apply(l,[a+1,0].concat((0,i.Z)(t.hideNodes)))}else t.loading=!0,setTimeout((function(){t.loading=!1,t.loaded=!0;for(var l=[],a=0;a<10;a++)l.push({id:e.count++,show:!1,text:e.getRandomContent(),text2:e.getRandomContent(),hasChildren:!(t.level>3),expanded:!1,loading:!1,level:t.level+1,hideNodes:[]});var n,i=e.list.findIndex((function(e){return e===t}));i>-1&&(n=e.list).splice.apply(n,[i+1,0].concat(l))}),1e3)},hideChildNodes:function(t){var e=this.list.findIndex((function(e){return e===t}));if(-1!==e){for(var l=[],a=e+1;a<this.list.length;a++){var n=this.list[a];if(n.level<=t.level)break;l.push(n)}t.hideNodes=l,this.list=this.list.filter((function(t){return!l.includes(t)}))}}},created:function(){this.fetchData()}},s=d,r=l(1001),c=(0,r.Z)(s,a,n,!1,null,"8e4a88dc",null),u=c.exports}}]);
//# sourceMappingURL=712.4c3b27ac.js.map