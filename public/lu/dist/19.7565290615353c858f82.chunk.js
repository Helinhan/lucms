webpackJsonp([19],{256:function(e,t,i){"use strict";function a(e){l||i(858)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(482),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);var s=i(860),d=i.n(s),l=!1,u=i(3),c=a,m=u(r.a,d.a,!1,c,null,null);m.options.__file="src/views/privileges/users/edit-user.vue",t.default=m.exports},482:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loading:!1,editUserForm:{id:this.$route.params.user_id,name:"",is_admin:"F",email:"",head_image:"",head_image_id:""},ruleEditUser:{name:[{required:!0,message:"请填写昵称",trigger:"blur"}]},uploadConfig:{headers:{Authorization:localStorage.access_token_type+" "+localStorage.access_token},format:["jpg","jpeg","png"],max_size:500,uploadUrl:window.uploadUrl.uploadAvatar}}},created:function(){var e=this;e.getUserInfo(e.editUserForm.id)},methods:{getUserInfo:function(e){var t=this;t.$util.ajax.get("/admin/users/"+e).then(function(e){var i=e.data;t.editUserForm=i.data,t.editUserForm.head_image.attachment_id=i.data.head_image.attachment_id},function(e){t.$Notice.warning({title:"出错了",desc:e.message})})},handleSubmit:function(){var e=this,t=this;t.$refs.editUserForm.validate(function(i){i&&e.$util.ajax.post("/admin/users/"+t.editUserForm.id,t.editUserForm).then(function(e){t.$Notice.success({title:"资料修改成功"})},function(e){console.log(e),t.$Notice.warning({title:"出错了",desc:e.message})})})},handleSuccess:function(e,t){var i=e.data;t.url=i.url,t.name=i.original_name,this.editUserForm.head_image.attachment_id=i.attachment_id,this.editUserForm.head_image.url=i.url},handleView:function(e){},handleRemove:function(e){},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+e.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"})},handleBeforeUpload:function(){}}}},858:function(e,t,i){var a=i(859);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(16)("0984e27e",a,!1,{})},859:function(e,t,i){t=e.exports=i(15)(!1),t.push([e.i,"\n.admin-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.admin-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.admin-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.admin-upload-list:hover .admin-upload-list-cover {\n  display: block;\n}\n.admin-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n",""])},860:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Col",{attrs:{span:"10"}},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"edit"}}),e._v("\n                编辑用户信息\n            ")],1),e._v(" "),i("div",[i("Form",{ref:"editUserForm",attrs:{model:e.editUserForm,rules:e.ruleEditUser,"label-position":"right"}},[i("FormItem",{attrs:{label:"昵称：",prop:"name"}},[i("div",{staticStyle:{display:"inline-block",width:"50%"}},[i("Input",{model:{value:e.editUserForm.name,callback:function(t){e.$set(e.editUserForm,"name",t)},expression:"editUserForm.name"}})],1)]),e._v(" "),i("FormItem",{attrs:{label:"邮箱："}},[i("span",[e._v(e._s(e.editUserForm.email))])]),e._v(" "),i("FormItem",{attrs:{label:"是否可登录后台"}},[i("RadioGroup",{model:{value:e.editUserForm.is_admin,callback:function(t){e.$set(e.editUserForm,"is_admin",t)},expression:"editUserForm.is_admin"}},[i("Radio",{attrs:{label:"F"}},[e._v("否")]),e._v(" "),i("Radio",{attrs:{label:"T"}},[e._v("是")])],1)],1),e._v(" "),i("FormItem",{attrs:{label:"头像："}},[i("div",{staticStyle:{display:"inline-block",width:"50%"}},[i("Upload",{staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":e.handleSuccess,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,headers:e.uploadConfig.headers,"max-size":e.uploadConfig.max_size,format:e.uploadConfig.format,name:"avatar",type:"drag",action:e.uploadConfig.uploadUrl}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"camera",size:"20"}})],1)]),e._v(" "),e.editUserForm.head_image.url?i("img",{staticClass:"head_image",attrs:{src:e.editUserForm.head_image.url,alt:""}}):e._e()],1)]),e._v(" "),i("FormItem",[i("Button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e.loading?i("span",[e._v("正在保存...")]):i("span",[e._v("保存")])])],1)],1)],1)])],1)],1)},n=[];a._withStripped=!0;var r={render:a,staticRenderFns:n};t.default=r}});