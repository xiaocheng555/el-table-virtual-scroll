import{m as n}from"./utils-4sfz355c.js";import{n as i}from"./index-b4RXg8tS.js";var s=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark","row-key":"id",height:"500px","default-sort":{prop:"count",order:"ascending"}},on:{"sort-change":t.onSortChange,"filter-change":t.onFilterChange}},[e("el-table-column",{attrs:{width:"60",type:"selection",selectable:t.getSelectable}}),e("el-table-column",{attrs:{label:"id",prop:"id",width:"100",sortable:""}}),e("el-table-column",{attrs:{label:"随机数",prop:"count",width:"300",sortable:"","filter-multiple":!1,filters:t.filters2,"filter-method":t.filterCount}}),e("el-table-column",{attrs:{label:"content",prop:"text",width:"500",filters:t.filters,"filter-method":t.filterText,"filtered-value":["红豆"]}}),e("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[t._v(t._s(r.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1),e("el-button",{on:{click:t.refresh}},[t._v("refresh")]),e("el-button",{on:{click:t.clear}},[t._v("clear")]),e("el-button",{on:{click:t.add}},[t._v("add")]),e("el-button",{on:{click:t.addMore}},[t._v("addMore")]),e("el-button",{on:{click:function(r){return t.toggleSelection([t.list[1],t.list[2]])}}},[t._v("切换第二、第三行的选中状态")]),e("el-button",{on:{click:function(r){return t.toggleSelection()}}},[t._v("取消选择")]),e("el-button",{on:{click:function(r){t.show=!t.show}}},[t._v("show")]),e("el-button",{on:{click:function(r){return t.clearSort()}}},[t._v("clearSort")]),e("el-button",{on:{click:function(r){return t.clearFilter()}}},[t._v("clearFilter")])],1)},c=[];let o=200;const u={name:"SortDemoTest",data(){return{list:n(0,o),filters:[{text:"红豆",value:"红豆"},{text:"明月",value:"明月"},{text:"酒",value:"酒"},{text:"桃花",value:"桃花"}],filters2:[{text:">200",value:200},{text:">400",value:400},{text:">600",value:600},{text:">800",value:800}],filterVal:{texts:[],counts:[]},sortVal:{}}},methods:{getSelectable(t,l){return l>2},onSortChange({prop:t,order:l}){console.log(t,l,"prop, order")},onFilterChange(t){console.log("filters",t)},refresh(){this.list=n(0,200)},clear(){this.list=[]},add(){const t=n(++o,o+1);this.list.push(...t)},addMore(){const t=n(++o,o+5);this.list.push(...t),o+=5},filterCount(t,l,e){const r=e.property;return l[r]>t},filterText(t,l,e){const r=e.property;return l[r].includes(t)},toggleSelection(t){t?t.forEach(l=>{this.$refs.table.toggleRowSelection(l)}):this.$refs.table.clearSelection()},clearSort(){this.$refs.table.clearSort()},clearFilter(){this.$refs.table.clearFilter()}},created(){}},a={};var f=i(u,s,c,!1,d,"14641761");function d(t){for(let l in a)this[l]=a[l]}const v=function(){return f.exports}();export{v as default};
//# sourceMappingURL=SortDemoTest-Cu9R5hfy.js.map