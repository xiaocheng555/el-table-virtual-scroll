"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[2],{76746:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",[e("el-alert",{attrs:{type:"warning",title:"在表尾合计行功能中，table组件需使用max-height属性代替height，才会正常显示表尾合计行；","show-icon":""}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":48,"key-prop":"id"},on:{change:function(e){return t.tableData=e}}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-key":"id","max-height":"500px","show-summary":"","summary-method":t.getSummaries}},[e("el-table-column",{attrs:{prop:"id",label:"id",width:"150"}}),e("el-table-column",{attrs:{prop:"count",label:"价格",width:"150"}}),e("el-table-column",{attrs:{prop:"index",label:"index",width:"300"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"420"}}),e("el-table-column",{attrs:{prop:"province",label:"省份",width:"320"}}),e("el-table-column",{attrs:{prop:"city",label:"市区",width:"320"}}),e("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"320"}})],1)],1)],1)},n=[],o=a(57056),l=a(79879),i={components:{VirtualScroll:o.ZP},data:function(){return{list:(0,l.c4)(0,2e3),tableData:[]}},computed:{summary:function(){var t=0,e=0;return this.list.forEach((function(a){t+=a.count,e+=a.index})),{countSum:t,indexSum:e}}},methods:{getSummaries:function(t){var e=this,a=[];return t.columns.forEach((function(t,r){0===r?a[r]="总计":"count"===t.property?a[r]=e.summary.countSum+"元":"index"===t.property?a[r]=e.summary.indexSum:a[r]="N/A"})),a}}},u=i,c=a(1001),s=(0,c.Z)(u,r,n,!1,null,"5c49a364",null),d=s.exports},79879:function(t,e,a){function r(t,e){for(var a=1,r=[],l=t;l<e;l++){var i=o(),u=o();Math.random()>.6&&a++,r.push({id:t++,index:l,text:i,text2:u,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3),cate:a})}return r}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function o(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}function l(t,e){for(var a=[],r=1;r<=t;r++){var n=Math.random()>=.8,i=n?null:Math.random()>=.7,u=e?"".concat(e,"_").concat(r):r,c=null;i&&(c=l(Math.floor(5*Math.random())+1,u));var s=o(),d=o(),h={id:u,text:s,text2:d,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",hasChildren:i,children:c};a.push(h)}return a}a.d(e,{bW:function(){return l},c4:function(){return r}})}}]);
//# sourceMappingURL=2.287aacdf.js.map