import{V as a}from"./el-table-virtual-column.vue_vue_type_style_index_0_lang-DWl8J-iF.js";import{n as l}from"./index-b4RXg8tS.js";import{m as c}from"./utils-4sfz355c.js";var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("el-alert",{attrs:{type:"info",title:"版本>=1.0.26支持","show-icon":""}}),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(r){return t.setCheckedRow(t.list[1])}}},[t._v("选中第二行")]),e("el-button",{on:{click:function(r){return t.setCheckedRow()}}},[t._v("取消选择")])],1),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(r){return t.tableData=r}}},[e("el-table",{ref:"tableRef",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500","row-key":"id",currentRowKey:t.currentRowKey,"tooltip-effect":"dark","highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[e("el-table-column",{attrs:{label:"id",prop:"id",width:"120"}}),e("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[t._v(t._s(r.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1)],1)},s=[];const u={components:{VirtualScroll:a},data(){return{currentRowKey:5,list:c(0,2e3),tableData:[],checkedRow:null}},methods:{handleCurrentChange(t){console.log("handleCurrentChange:",t),this.checkedRow=t},setCheckedRow(t){this.$refs.tableRef.setCurrentRow(t)}}},n={};var d=l(u,i,s,!1,h,"dc888b48");function h(t){for(let o in n)this[o]=n[o]}const _=function(){return d.exports}();export{_ as default};
//# sourceMappingURL=Highlight-CUF3kyt0.js.map