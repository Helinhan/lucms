webpackJsonp([32],{285:function(e,t,n){"use strict";function i(e){u||n(986)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(525),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(988),p=n.n(s),u=!1,l=n(3),d=i,c=l(r.a,p.a,!1,d,null,null);c.options.__file="src/views/advanced-router/argument-page.vue",t.default=c.exports},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"argument-page",data:function(){var e=this;return{shoppingColumns:[{type:"index",title:"序号",width:60},{title:"购物单号",key:"shopping_id",align:"center"},{title:"购买物品名称",key:"name",align:"center"},{title:"购买时间",key:"time"},{title:"查看详情",key:"show_more",align:"center",render:function(t,n){return t("Button",{props:{type:"text",size:"small"},on:{click:function(){var t={shopping_id:n.row.shopping_id};e.$router.push({name:"shopping",query:t})}}},"了解详情")}}],shoppingData:[{shopping_id:100001,name:"《vue.js实战》",time:"2017年11月12日"},{shopping_id:100002,name:"面包",time:"2017年11月5日"},{shopping_id:100003,name:"咖啡",time:"2017年11月8日"},{shopping_id:100004,name:"超级豪华土豪金牙签",time:"2017年11月9日"}]}}}},986:function(e,t,n){var i=n(987);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(16)("cbd5def0",i,!1,{})},987:function(e,t,n){t=e.exports=n(15)(!1),t.push([e.i,"\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n",""])},988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-list"}}),e._v("\n                购物记录(传递参数)\n            ")],1),e._v(" "),n("Row",{staticClass:"advanced-router",attrs:{type:"flex",justify:"center",align:"middle"}},[n("Table",{staticStyle:{width:"100%"},attrs:{columns:e.shoppingColumns,data:e.shoppingData}})],1)],1)],1)],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};t.default=r}});