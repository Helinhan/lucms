(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dd1"],{2058:function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return i});var o=a("66df"),n=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},s=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},i=function(t){return o["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}},9128:function(t,e,a){"use strict";var o=a("2058"),n=a.n(o);n.a},"9f69":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("Icon",{attrs:{type:t.type}}),a("span",{class:t.styleClass},[t._v(t._s(t.text))])],1)},n=[],s={props:{styleClass:{type:String,default:"color-light-gray"},type:{type:String,default:"md-information"},text:{type:String,default:"温馨提示..."}}},i=s,r=a("66b7"),l=Object(r["a"])(i,o,n,!1,null,null,null);l.options.__file="input-helper.vue";e["a"]=l.exports},b92e:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("Upload",{ref:"upload",attrs:{"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[a("Button",{staticStyle:{"margin-right":"10px",float:"left"},attrs:{icon:"ios-cloud-upload-outline",loading:t.loading}},[t._v(t._s(t.uploadConfig.button_text))]),a("div",[a("span",{staticClass:"green-color",staticStyle:{"line-height":"32px"}},[t._v(t._s(t.text))])])],1)],1)},n=[],s=(a("7f7f"),a("ac6a"),a("2934"),{props:{isDelete:{type:Boolean,default:!0},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["txt","xsls"],max_size:800,upload_url:window.uploadUrl.uploadTmp,file_name:"file",multiple:!1,file_num:0,button_text:"上传文件",default_list:[{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[],loading:!1,text:"未上传"}},methods:{handleSuccess:function(t,e){e.url=t.data.url,e.name=t.data.original_name,e.attachment_id=t.data.attachment_id;var a=[];a.push({attachment_id:e.attachment_id,url:e.url}),a=a[0],this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a),this.text="已上传",this.$Notice.success({title:"操作成功",desc:"文件上传成功"}),this.loading=!1},fomatFile:function(){var t=[];return this.uploadList.forEach(function(e,a,o){t.push({attachment_id:e.attachment_id,url:e.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"}),this.loading=!1},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"}),this.loading=!1},handleBeforeUpload:function(){return this.text="正在上传...",!0}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(t.attachment_id>0&&(this.text="已上传"),this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t))}}),i=s,r=(a("9128"),a("66b7")),l=Object(r["a"])(i,o,n,!1,null,null,null);l.options.__file="upload-file.vue";e["a"]=l.exports},c0b6:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end",gutter:16}},[a("Col",{attrs:{span:"2"}},[a("Select",{attrs:{placeholder:"请选择 app"},model:{value:t.searchForm.port,callback:function(e){t.$set(t.searchForm,"port",e)},expression:"searchForm.port"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.port,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{span:"2"}},[a("Select",{attrs:{placeholder:"请选择系统"},model:{value:t.searchForm.system,callback:function(e){t.$set(t.searchForm,"system",e)},expression:"searchForm.system"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.system,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute(t.feeds.current_page)}}},[t._v("Search")])],1),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){t.addBtn()}}},[t._v("Add")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.feeds.total,current:t.feeds.current_page,"page-size":t.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":t.handleOnPageChange,"on-page-size-change":t.onPageSizeChange}})],1)])],1),!0===t.addModal.show?a("add-component",{attrs:{port:t.tableStatus.port,system:t.tableStatus.system},on:{"on-add-modal-success":function(e){t.getTableDataExcute(t.feeds.current_page)},"on-add-modal-hide":t.addModalHide}}):t._e(),!0===t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id,port:t.tableStatus.port,system:t.tableStatus.system},on:{"on-edit-modal-success":function(e){t.getTableDataExcute(t.feeds.current_page)},"on-edit-modal-hide":t.editModalHide}}):t._e(),!0===t.showInfoModal.show?a("show-info",{attrs:{info:t.showInfoModal.info},on:{"show-modal-close":t.showModalClose}}):t._e()],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("发布新版本")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"选择 App:",prop:"port"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择 app"},model:{value:t.formData.port,callback:function(e){t.$set(t.formData,"port",e)},expression:"formData.port"}},t._l(t.port,function(e,o){return a("Option",{key:e,attrs:{value:o}},[t._v(t._s(e)+" ")])}))],1),a("FormItem",{attrs:{label:"选择系统:",prop:"system"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择系统"},model:{value:t.formData.system,callback:function(e){t.$set(t.formData,"system",e)},expression:"formData.system"}},t._l(t.system,function(e,o){return a("Option",{key:e,attrs:{value:o}},[t._v(t._s(e)+" ")])}))],1),a("FormItem",{attrs:{label:"版本号：",prop:"version_sn"}},[a("Input",{model:{value:t.formData.version_sn,callback:function(e){t.$set(t.formData,"version_sn",e)},expression:"formData.version_sn"}})],1),a("FormItem",{attrs:{label:"描述：",prop:"version_intro"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.formData.version_intro,callback:function(e){t.$set(t.formData,"version_intro",e)},expression:"formData.version_intro"}})],1),a("FormItem",{attrs:{label:"上传包："}},[a("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.package,callback:function(e){t.$set(t.formData,"package",e)},expression:"formData.package"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addVersionExcute}},[t._v("保存 ")])],1)],1)],1)},i=[],r=a("66df"),l=function(t,e,a){return r["a"].request({url:"/api/admin/app_versions",params:{page:t,per_page:e,search_data:JSON.stringify(a)},method:"get"})},d=function(t){return r["a"].request({url:"/api/admin/app_versions/"+t,method:"delete"})},u=function(t){return r["a"].request({url:"/api/admin/app_versions",data:t,method:"post"})},c=function(t,e){return r["a"].request({url:"/api/admin/app_versions/"+t,data:e,method:"patch"})},p=function(t){return r["a"].request({url:"api/admin/app_versions/"+t,method:"get"})},m=a("b92e"),f=a("9f69"),h={props:{port:{default:[]},system:{default:[]}},components:{Upload:m["a"],InputHelper:f["a"]},data:function(){return{modalShow:!0,saveLoading:!1,formData:{port:"A",system:"ALL",version_sn:"",version_intro:"",package:{attachment_id:0,url:""}},imguploadConfig:{headers:{Authorization:window.access_token},format:["wgt"],max_size:5e4,upload_url:window.uploadUrl.uploadNewVersion,file_name:"file",multiple:!1,file_num:1,default_list:[]},rules:{version_sn:[{required:!0,message:"请填写版本号",trigger:"blur"},{type:"string",min:2,message:"版本号至少要 2 个字符",trigger:"blur"}],version_intro:[{required:!0,message:"请填写描述",trigger:"blur"}]}}},methods:{addVersionExcute:function(){var t=this;t.$refs.formData.validate(function(e){e?(t.saveLoading=!0,u(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1})):t.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},editContentChange:function(t,e){},uploadChange:function(t,e){}}},_=h,g=a("66b7"),v=Object(g["a"])(_,s,i,!1,null,null,null);v.options.__file="add-version.vue";var b=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("修改管理员信息")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"选择 App:",prop:"port"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择 app"},model:{value:t.formData.port,callback:function(e){t.$set(t.formData,"port",e)},expression:"formData.port"}},t._l(t.port,function(e,o){return a("Option",{key:e,attrs:{value:o}},[t._v(t._s(e)+" ")])}))],1),a("FormItem",{attrs:{label:"选择系统:",prop:"system"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择系统"},model:{value:t.formData.system,callback:function(e){t.$set(t.formData,"system",e)},expression:"formData.system"}},t._l(t.system,function(e,o){return a("Option",{key:e,attrs:{value:o}},[t._v(t._s(e)+" ")])}))],1),a("FormItem",{attrs:{label:"版本号：",prop:"version_sn"}},[a("Input",{model:{value:t.formData.version_sn,callback:function(e){t.$set(t.formData,"version_sn",e)},expression:"formData.version_sn"}})],1),a("FormItem",{attrs:{label:"描述：",prop:"version_intro"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.formData.version_intro,callback:function(e){t.$set(t.formData,"version_intro",e)},expression:"formData.version_intro"}})],1),a("FormItem",{attrs:{label:"上传包："}},[t.formdataFinished?a("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.package,callback:function(e){t.$set(t.formData,"package",e)},expression:"formData.package"}}):t._e()],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editVersionExcute}},[t._v("保存\n                ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e()],1)],1)},y=[],x=(a("c5f6"),{components:{Upload:m["a"]},props:{modalId:{type:Number,default:0},port:{default:[]},system:{default:[]}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{port:"A",system:"ALL",version_sn:"",version_intro:"",package:{attachment_id:0,url:""}},formdataFinished:!1,imguploadConfig:{headers:{Authorization:window.access_token},format:["wgt"],max_size:5e4,upload_url:window.uploadUrl.uploadNewVersion,file_name:"file",multiple:!1,file_num:1,default_list:[]},rules:{version_sn:[{required:!0,message:"请填写版本号",trigger:"blur"},{type:"string",min:2,message:"版本号至少要 2 个字符",trigger:"blur"}],version_intro:[{required:!0,message:"请填写描述",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getVersionInfoByIdExcute()},methods:{getVersionInfoByIdExcute:function(){var t=this;p(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,port:a.port,system:a.system,version_sn:a.version_sn,version_intro:a.version_intro,package:{attachment_id:a.package.attachment_id,url:a.package.url}},t.imguploadConfig.default_list=[t.formData.package],t.formdataFinished=!0,t.spinLoading=!1})},editVersionExcute:function(){var t=this,e=this;e.$refs.formData.validate(function(a){a?(e.saveLoading=!0,c(e.modalId,e.formData).then(function(a){e.saveLoading=!1,e.modalShow=!1,e.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),e.$Notice.success({title:a.message})},function(t){e.saveLoading=!1})):e.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},editContentChange:function(t,e){},uploadChange:function(t,e){}}}),k=x,C=Object(g["a"])(k,w,y,!1,null,null,null);C.options.__file="edit-version.vue";var D=C.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Drawer",{attrs:{closable:!1,width:"640",title:"用户信息："},on:{"on-close":t.closed},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("p",{staticClass:"drawer-title"},[t._v("基本资料：")]),a("div",{staticClass:"drawer-profile"},[a("Row",[a("Col",{attrs:{span:"12"}},[t._v(" app： "+t._s(t.info.port)+" ")]),a("Col",{attrs:{span:"12"}},[t._v(" 系统： "+t._s(t.info.system)+" ")]),a("Col",{attrs:{span:"12"}},[t._v(" 版本号： "+t._s(t.info.version_sn)+" ")])],1)],1),a("Divider"),a("p",{staticClass:"drawer-title"},[t._v("更新包下载")]),a("div",{staticClass:"drawer-profile"},[a("a",{attrs:{href:t.info.package.url}},[t._v("点我下载")])])],1)],1)},$=[],I={props:{info:{type:Object,default:""}},data:function(){return{show:!0}},methods:{closed:function(){this.show=!1,this.$emit("show-modal-close")}}},L=I,F=Object(g["a"])(L,S,$,!1,null,null,null);F.options.__file="show-info.vue";var E=F.exports,M=a("2934"),z={components:{AddComponent:b,EditComponent:D,ShowInfo:E},data:function(){var t=this;return{searchForm:{order_by:"created_at,desc"},tableLoading:!1,tableStatus:{port:[],system:[]},feeds:{data:[],total:0,current_page:1,per_page:10},addModal:{show:!1},editModal:{show:!1,id:0},showInfoModal:{show:!1,info:""},columns:[{title:"ID",key:"id",sortable:"customer",width:100},{title:"端口",render:function(e,a){return e("div",[t.tableStatus.port[a.row.port]])}},{title:"系统",render:function(e,a){return e("div",[t.tableStatus.system[a.row.system]])}},{title:"版本号",key:"version_sn",sortable:"customer",width:100},{title:"描述",key:"version_intro"},{title:"创建时间",key:"created_at"},{title:"操作",key:"",width:250,render:function(e,a){var o=t;return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){o.showInfoModal.show=!0,o.showInfoModal.info=a.row}}},"详细"),e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.editModal.show=!0,t.editModal.id=a.row.id}}},"Edit"),e("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.version_sn+"」？",transfer:!0},on:{"on-ok":function(){o.deleteVersionExcute(a.row.id,a.index)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},created:function(){var t=this;t.getTableStatusExcute("api_versions"),t.getTableDataExcute(t.feeds.current_page)},methods:{handleOnPageChange:function(t){this.getTableDataExcute(t)},onPageSizeChange:function(t){this.feeds.per_page=t,this.getTableDataExcute(this.feeds.current_page)},getTableStatusExcute:function(t){var e=this;Object(M["b"])(t).then(function(t){e.tableStatus.port=t.data.port,e.tableStatus.system=t.data.system})},getTableDataExcute:function(t){var e=this;e.tableLoading=!0,e.feeds.current_page=t,l(t,e.feeds.per_page,e.searchForm).then(function(t){e.feeds.data=t.data,e.feeds.total=t.meta.total,e.tableLoading=!1},function(t){e.tableLoading=!1})},deleteVersionExcute:function(t,e){var a=this;d(t).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page)},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},showModalClose:function(){this.showInfoModal.show=!1}}},O=z,B=Object(g["a"])(O,o,n,!1,null,null,null);B.options.__file="list.vue";e["default"]=B.exports}}]);