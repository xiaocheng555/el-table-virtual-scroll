"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[336],{79487:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var l=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("el-button",{on:{click:t.expand1}},[t._v("展开第一层")]),e("el-button",{on:{click:t.expand2}},[t._v("展开第二层")]),e("el-button",{on:{click:t.expandAll}},[t._v("展开全部")]),e("el-button",{on:{click:t.unexpandAll}},[t._v("收起全部")]),e("el-button",{on:{click:t.unexpandTarget}},[t._v("展开目标路径")])],1),e("VirtualScroll",{ref:"virtualScroll",staticClass:"visual-table",attrs:{data:t.treeData,"item-size":40,"key-prop":"id"},on:{"update:data":function(e){t.treeData=e},change:e=>t.tableData=e}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tableRef",attrs:{data:t.tableData,height:"calc(100vh - 150px)","highlight-current-row":!0,"row-key":"id"}},[e("VirtualColumn",{ref:"virtualColumn",attrs:{type:"tree",indent:40,minWidth:300,label:"",prop:"product",load:t.onload},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[a["describe"]?e("div",{staticStyle:{"line-height":"1.2em"}},[e("div",[t._v(" "+t._s(a["product"])+" ")]),e("div",{staticStyle:{color:"grey","font-size":"12px"}},[t._v(" "+t._s(a["describe"])+" ")])]):e("div",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(a["product"])+" ")])]}}])}),e("el-table-column",{attrs:{minWidth:100,label:"id",prop:"id"}}),e("el-table-column",{attrs:{minWidth:100,label:"随机名",prop:"database"}}),e("el-table-column",{attrs:{minWidth:40,label:"排序",prop:"rank"}}),e("el-table-column",{attrs:{minWidth:60,label:"数据",prop:"status"}})],1)],1)],1)},n=[],i=a(54667),r=a(50813),o=a.n(r),s=a(35823),u={name:"VTreeDemo2",components:{VirtualScroll:i.ZP,VirtualColumn:i.Fg},data(){return{tableData:[],treeData:[],loading:!1,dataMap:{}}},mounted(){this.initData()},methods:{initData(){this.dataMap=s,this.treeData=[{id:"49__@@__1",product:"产品线",productId:49,parent:null,isRoot:!0,$v_level:1},{id:"-1__@@__4690",product:"未归类头部表",productId:-1,parent:null,isRoot:!0,$v_level:1}]},async onload(t,e){setTimeout((()=>{e(o()(this.dataMap[t.id]||[]))}),200)},expand(t){const e=this.treeData.filter((e=>e.$v_level===t)).map((t=>t.id));return this.$refs.virtualColumn.expand(e).then((()=>{console.log(`展开第${t}层完成`)}))},async expand1(){this.$refs.virtualColumn.unexpandAll(),await this.expand(1)},async expand2(){this.$refs.virtualColumn.unexpandAll(),await this.expand(1),await this.expand(2)},unexpandAll(){this.$refs.virtualColumn.unexpandAll()},expandAll(){this.$refs.virtualColumn.expandAll()},async unexpandTarget(){const t=["49__@@__1","120__@@__4200","114__@@__4201","2902__@@__4324"],e=await this.$refs.virtualColumn.expandPath(t);e&&this.scrollTo(e)},scrollTo(t){if(t){const e=this.treeData.findIndex((e=>e["id"]===t));this.$refs.virtualScroll.scrollTo(e,50);const a=300;setTimeout((()=>{this.$refs["tableRef"].setCurrentRow(this.treeData[e])})),setTimeout((()=>{this.$refs["tableRef"].setCurrentRow(null)}),a),setTimeout((()=>{this.$refs["tableRef"].setCurrentRow(this.treeData[e])}),2*a),setTimeout((()=>{this.$refs["tableRef"].setCurrentRow(null)}),3*a)}}}},d=u,c=a(1001),p=(0,c.Z)(d,l,n,!1,null,null,null),_=p.exports}}]);
//# sourceMappingURL=336.d6355f8c.js.map