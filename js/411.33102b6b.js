"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[411],{7766:function(t,e,l){l.r(e),l.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{change:e=>t.tableData=e}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500px",border:"","row-key":"id"}},[e("el-table-column",{attrs:{label:"id",prop:"id","class-name":"el-table__row--level"},scopedSlots:t._u([{key:"default",fn:function({row:l}){return[e("span",{staticClass:"el-table__indent",style:{paddingLeft:16*l.level+"px"}}),l.hasChildren?e("div",{staticClass:"el-table__expand-icon",class:l.expanded?"el-table__expand-icon--expanded":"",on:{click:function(e){return t.onExpand(l)}}},[l.loading?e("i",{staticClass:"el-icon-loading"}):e("i",{staticClass:"el-icon-arrow-right"})]):e("span",{staticClass:"el-table__placeholder"}),t._v(" "+t._s(l.id)+" ")]}}])}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",prop:"text","show-overflow-tooltip":""}})],1)],1)],1)},a=[],s=l(414),n={components:{VirtualScroll:s.ZP},data(){return{loading:!1,list:[],tableData:[],count:3e3}},methods:{fetchData(){this.loading=!0,this.list=[],setTimeout((()=>{this.list=[];for(let t=1;t<2e3;t++){const e=this.getRandomContent(),l=this.getRandomContent();this.list.push({id:t,text:e,text2:l,hasChildren:!0,expanded:!1,loading:!1,loaded:!1,level:1,hideNodes:[]})}this.loading=!1}),1e3)},getRandomContent(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onExpand(t){t.expanded=!t.expanded,t.expanded?this.loadChildNodes(t):this.hideChildNodes(t)},loadChildNodes(t){if(t.loaded){const e=this.list.findIndex((e=>e===t));e>-1&&this.list.splice(e+1,0,...t.hideNodes)}else t.loading=!0,setTimeout((()=>{t.loading=!1,t.loaded=!0;const e=[];for(let i=0;i<10;i++)e.push({id:this.count++,show:!1,text:this.getRandomContent(),text2:this.getRandomContent(),hasChildren:!(t.level>3),expanded:!1,loading:!1,level:t.level+1,hideNodes:[]});const l=this.list.findIndex((e=>e===t));l>-1&&this.list.splice(l+1,0,...e)}),1e3)},hideChildNodes(t){const e=this.list.findIndex((e=>e===t));if(-1===e)return;const l=[];for(let i=e+1;i<this.list.length;i++){const e=this.list[i];if(e.level<=t.level)break;l.push(e)}t.hideNodes=l,this.list=this.list.filter((t=>!l.includes(t)))},updateVirtualScroll(){this.$refs.virtualScroll.update()}},created(){this.fetchData()}},d=n,o=l(1001),r=(0,o.Z)(d,i,a,!1,null,"55f71c37",null),h=r.exports}}]);
//# sourceMappingURL=411.33102b6b.js.map