"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[7],{67552:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("el-button",{on:{click:t.expand1}},[t._v("展开第一层")]),e("el-button",{on:{click:t.expand2}},[t._v("展开第二层")]),e("el-button",{on:{click:t.expandAll}},[t._v("展开全部")]),e("el-button",{on:{click:t.unexpandAll}},[t._v("收起全部")]),e("el-button",{on:{click:t.unexpandTarget}},[t._v("展开目标路径")])],1),e("VirtualScroll",{ref:"virtualScroll",staticClass:"visual-table",attrs:{data:t.treeData,"item-size":48,"key-prop":"id"},on:{"update:data":function(e){t.treeData=e},change:function(e){return t.tableData=e}}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tableRef",attrs:{data:t.tableData,height:"calc(100vh - 150px)","highlight-current-row":!0,"row-key":"id"}},[e("VirtualColumn",{ref:"virtualColumn",attrs:{type:"tree",indent:40,minWidth:300,label:"",prop:"product",load:t.onload},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.row;return[a["describe"]?e("div",{staticStyle:{"line-height":"1.2em"}},[e("div",[t._v(" "+t._s(a["product"])+" ")]),e("div",{staticStyle:{color:"grey","font-size":"12px"}},[t._v(" "+t._s(a["describe"])+" ")])]):e("div",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(a["product"])+" ")])]}}])}),e("el-table-column",{attrs:{minWidth:100,label:"id",prop:"id"}}),e("el-table-column",{attrs:{minWidth:100,label:"随机名",prop:"database"}}),e("el-table-column",{attrs:{minWidth:40,label:"排序",prop:"rank"}}),e("el-table-column",{attrs:{minWidth:60,label:"数据",prop:"status"}})],1)],1)],1)},r=[],l=n(51907),i=n(85617),u=n(4551),o=n(50813),s=n.n(o),c=n(35823),d={name:"VTreeDemo2",components:{VirtualScroll:u.ZP,VirtualColumn:u.Fg},data:function(){return{tableData:[],treeData:[],loading:!1,dataMap:{}}},mounted:function(){this.initData()},methods:{initData:function(){this.dataMap=c,this.treeData=[{id:"49__@@__1",product:"产品线",productId:49,parent:null,isRoot:!0,$v_level:1},{id:"-1__@@__4690",product:"未归类头部表",productId:-1,parent:null,isRoot:!0,$v_level:1}]},onload:function(t,e){var n=this;return(0,i.Z)((0,l.Z)().mark((function a(){return(0,l.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:setTimeout((function(){e(s()(n.dataMap[t.id]||[]))}),200);case 1:case"end":return a.stop()}}),a)})))()},expand:function(t){var e=this.treeData.filter((function(e){return e.$v_level===t})).map((function(t){return t.id}));return this.$refs.virtualColumn.expand(e).then((function(){console.log("展开第".concat(t,"层完成"))}))},expand1:function(){var t=this;return(0,i.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$refs.virtualColumn.unexpandAll(),e.next=3,t.expand(1);case 3:case"end":return e.stop()}}),e)})))()},expand2:function(){var t=this;return(0,i.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$refs.virtualColumn.unexpandAll(),e.next=3,t.expand(1);case 3:return e.next=5,t.expand(2);case 5:case"end":return e.stop()}}),e)})))()},unexpandAll:function(){this.$refs.virtualColumn.unexpandAll()},expandAll:function(){this.$refs.virtualColumn.expandAll()},unexpandTarget:function(){var t=this;return(0,i.Z)((0,l.Z)().mark((function e(){var n,a;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["49__@@__1","120__@@__4200","114__@@__4201","2902__@@__4324"],e.next=3,t.$refs.virtualColumn.expandPath(n);case 3:a=e.sent,a&&t.scrollTo(a);case 5:case"end":return e.stop()}}),e)})))()},scrollTo:function(t){var e=this;if(t){var n=this.treeData.findIndex((function(e){return e["id"]===t}));this.$refs.virtualScroll.scrollTo(n,50);var a=300;setTimeout((function(){e.$refs["tableRef"].setCurrentRow(e.treeData[n])})),setTimeout((function(){e.$refs["tableRef"].setCurrentRow(null)}),a),setTimeout((function(){e.$refs["tableRef"].setCurrentRow(e.treeData[n])}),2*a),setTimeout((function(){e.$refs["tableRef"].setCurrentRow(null)}),3*a)}}}},p=d,f=n(1001),v=(0,f.Z)(p,a,r,!1,null,"1074fd4e",null),_=v.exports}}]);
//# sourceMappingURL=7.b6192f9c.js.map