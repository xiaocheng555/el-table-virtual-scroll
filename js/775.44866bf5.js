"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[775],{76003:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-alert",{attrs:{type:"success",title:"当数据量大于100条时开启虚拟滚动","show-icon":""}}),e("virtual-scroll",{attrs:{data:t.list2,"item-size":62,"key-prop":"id",virtualized:t.list2.length>100},on:{change:function(e){return t.virtualList2=e}}},[e("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.loadMore,expression:"loadMore"}],class:t.loading?"no-empty":"",attrs:{"row-key":"id",stripe:"",data:t.virtualList2,height:"500px"}},[e("el-table-column",{attrs:{label:"id",prop:"id"}}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"详情"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("el-button",{attrs:{type:"text"},on:{click:function(t){n.show=!n.show}}},[t._v(t._s(n.show?"隐藏":"显示"))]),n.show?e("div",[t._v(t._s(n.text2))]):t._e()]}}])}),e("el-table-column",{attrs:{label:"第n行",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",prop:"id"}}),e("el-table-column",{attrs:{label:"第n行",prop:"id"}}),e("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[t._v(" "+t._s(n.id)+" "),e("el-button",{on:{click:function(e){return t.onDel2(n)}}},[t._v("删除")]),e("el-button",{on:{click:function(e){return t.onEdit2(n)}}},[t._v("编辑")])]}}])}),t.loading?e("div",{staticStyle:{"text-align":"center",padding:"15px",color:"#999"},attrs:{slot:"append"},slot:"append"},[t._v(" 加载中... ")]):t._e()],1)],1),e("b",[t._v("行数: "+t._s(t.virtualList2.length))])],1)},o=[],i=l(49386),a=l(11475),r={components:{VirtualScroll:i.ZP},directives:{ElTableInfiniteScroll:a.Z},data:function(){return{count2:0,list2:[],virtualList2:[],loading:!1}},methods:{onEdit:function(t){t.text=t.text+"__编辑"},onDel2:function(t){var e=this.list2.findIndex((function(e){return e===t}));e>-1&&this.list2.splice(e,1)},loadMore:function(){var t=this;this.loading||(this.loading=!0,setTimeout((function(){for(var e=0;e<30;e++)t.count2++,t.list2.push({id:t.count2,show:!1,text:t.getRandomContent(),text2:t.getRandomContent()});t.loading=!1}),1e3))},getRandomContent:function(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}},created:function(){}},s=r,u=l(1001),c=(0,u.Z)(s,n,o,!1,null,"12066cf2",null),d=c.exports}}]);
//# sourceMappingURL=775.44866bf5.js.map