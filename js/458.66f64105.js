"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[458,870],{6870:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("el-table",t._b({},"el-table",t.$attrs,!1),[t._t("default")],2)},l=[],n={name:"my-table"},o=n,i=a(1001),s=(0,i.Z)(o,r,l,!1,null,"56ca870b",null),u=s.exports},57206:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("div",[t._v(" 带边框："),e("el-switch",{model:{value:t.border,callback:function(e){t.border=e},expression:"border"}}),t._v(" / 带状态表格："),e("el-switch",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" / 带条纹："),e("el-switch",{model:{value:t.stripe,callback:function(e){t.stripe=e},expression:"stripe"}}),e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"row-key":"id","item-size":62,"key-prop":"id",getElTable:t.getElTable},on:{change:function(e){return t.tableData=e}},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.headerCellFixedStyle,l=a.cellFixedStyle;return[e("MyTable",{ref:"myTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:t.stripe,border:t.border,height:"500px",headerCellStyle:r,cellStyle:l,"row-class-name":t.tableRowClassName}},[e("VirtualColumn",{attrs:{label:"id",prop:"id",width:"180",vfixed:""}}),e("el-table-column",{attrs:{label:"日期",width:"260",prop:"date"}}),e("el-table-column",{attrs:{label:"内容省略",width:"800",prop:"text","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"内容",prop:"text",width:"800"}})],1)]}}])})],1)},l=[],n=a(20727),o=a(79879),i=a(6870),s={components:{VirtualScroll:n.ZP,VirtualColumn:n.Fg,MyTable:i["default"]},data:function(){return{list:(0,o.c4)(0,2e3),tableData:[],stripe:!1,border:!1,status:!1}},methods:{tableRowClassName:function(t){var e=t.row;if(this.status)return 1===e.index?"warning-row":3===e.index?"success-row":""},getElTable:function(){return this.$refs.myTable.$children[0]}}},u=s,c=a(1001),d=(0,c.Z)(u,r,l,!1,null,"4b05234b",null),h=d.exports},79879:function(t,e,a){function r(t,e){for(var a=1,r=[],o=t;o<e;o++){var i=n(),s=n();Math.random()>.6&&a++,r.push({id:t++,index:o,text:i,text2:s,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:l(0,1e3),cate:a})}return r}function l(t,e){return Math.floor(Math.random()*(e-t))+t}function n(){var t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}function o(t,e){for(var a=[],r=1;r<=t;r++){var l=Math.random()>=.8,i=l?null:Math.random()>=.7,s=e?"".concat(e,"_").concat(r):r,u=null;i&&(u=o(Math.floor(5*Math.random())+1,s));var c=n(),d=n(),h={id:s,text:c,text2:d,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",hasChildren:i,children:u};a.push(h)}return a}a.d(e,{bW:function(){return o},c4:function(){return r}})}}]);
//# sourceMappingURL=458.66f64105.js.map