import{V as n}from"./el-table-virtual-column.vue_vue_type_style_index_0_lang-VGVMlOYe.js";import{V as l}from"./el-table-virtual-column-Bpk12JGr.js";import{m as i}from"./utils-4sfz355c.js";import{n as s}from"./index-CGTLIXey.js";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-alert",{attrs:{type:"warning",title:"virtual-column组件设type属性为 radio","show-icon":""}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:function(o){return t.tableData=o},"current-change":t.onRadioChange}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500","row-key":"id","tooltip-effect":"dark"}},[e("virtual-column",{attrs:{width:"160",type:"radio"}}),e("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(t._s(o.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-button",{on:{click:function(o){return t.setCheckedRow(t.list[1])}}},[t._v("选中第二行")]),e("el-button",{on:{click:function(o){return t.setCheckedRow()}}},[t._v("取消选择")])],1)],1)},u=[];const d={components:{VirtualScroll:n,VirtualColumn:l},data(){return{list:i(0,2e3),tableData:[],checkedRow:null}},methods:{setCheckedRow(t){this.$refs.virtualScroll.setCurrentRow(t)},onRadioChange(t){console.log(t,"onRadioChange")}}},r={};var m=s(d,c,u,!1,p,"244526e0");function p(t){for(let a in r)this[a]=r[a]}const w=function(){return m.exports}();export{w as default};
//# sourceMappingURL=VRadioDemo-DYM-OGDw.js.map