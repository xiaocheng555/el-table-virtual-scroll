import{m as i}from"./utils-4sfz355c.js";import{n as s}from"./index-b4RXg8tS.js";var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"tooltip-effect":"dark","select-on-indeterminate":!1,"row-key":"id",height:"400"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{"reserve-selection":"",type:"selection",width:"55"}}),t("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v(e._s(n.row.date))]}}])}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.row;return[e._v(" "+e._s(o.id)+" "),t("el-button",{on:{click:function(h){return e.onDel(o)}}},[e._v("删除")])]}}])})],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-button",{on:{click:function(n){return e.toggleSelection([e.list[1],e.list[2]])}}},[e._v("切换第二、第三行的选中状态")]),t("el-button",{on:{click:function(n){return e.toggleSelection()}}},[e._v("取消选择")]),t("el-button",{on:{click:function(n){return e.refresh()}}},[e._v("重新获取数据")])],1)],1)},c=[];const u={components:{},data(){return{list:i(0,50),tableData:[],multipleSelection:[],show:!0,highlight:!1}},methods:{toggleSelection(e){e?e.forEach(l=>{this.$refs.multipleTable.toggleRowSelection(l,!0)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){console.log(e,"val"),this.multipleSelection=e},refresh(){this.list=i(30,80)},onDel(e){const l=this.list.findIndex(t=>t===e);l>-1&&this.list.splice(l,1)}},created(){}},r={};var f=s(u,a,c,!1,d,"789e262f");function d(e){for(let l in r)this[l]=r[l]}const p=function(){return f.exports}();export{p as default};
//# sourceMappingURL=Selection-BsP4lGAk.js.map