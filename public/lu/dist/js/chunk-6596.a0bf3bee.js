(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6596"],{1131:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:3,lg:1}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){t.addBtn()}}},[t._v("Add")])],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:4,lg:2}},[a("a",{attrs:{href:t.exportExcel}},[a("Button",{attrs:{icon:"md-download"}},[t._v("导出文件")])],1)]),a("Col",{staticClass:"hidden-mobile",attrs:{xs:0,lg:12}},[a("upload-file",{attrs:{"upload-config":t.fileuploadConfig},on:{"on-upload-change":t.uploadfileChange},model:{value:t.uploadFile,callback:function(e){t.uploadFile=e},expression:"uploadFile"}})],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:6,lg:4}},[a("Input",{attrs:{icon:"searchForm",placeholder:"请输入广告位名称..."},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("Col",{attrs:{xs:4,lg:3}},[a("Select",{attrs:{placeholder:"请选择广告位类型"},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.type,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:1,lg:2}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute(t.feeds.current_page)}}},[t._v("Search")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"paging",attrs:{total:t.feeds.total,current:t.feeds.current_page,"page-size":t.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":t.handleOnPageChange,"on-page-size-change":t.onPageSizeChange}})],1)])],1),!0===t.addModal.show?a("add-component",{attrs:{"table-status":t.tableStatus},on:{"on-add-modal-success":function(e){t.getTableDataExcute(t.feeds.current_page)},"on-add-modal-hide":t.addModalHide}}):t._e(),!0===t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id,"table-status":t.tableStatus},on:{"on-edit-modal-success":function(e){t.getTableDataExcute(t.feeds.current_page)},"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},i=[],n=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加角色")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"广告位名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入广告位名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"广告位类型",prop:"type"}},[a("Select",{attrs:{filterable:""},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},t._l(t.tableStatus.type,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])}))],1),a("FormItem",{attrs:{label:"广告位描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditAdvertisementPositionExcute}},[t._v("保存 ")])],1)],1)],1)}),s=[],l=a("66df"),r=function(t,e,a){return l["a"].request({url:"/api/admin/advertisement_positions",params:{page:t,per_page:e,search_data:JSON.stringify(a)},method:"get"})},d=function(t){return l["a"].request({url:"/api/admin/advertisement_positions/"+t,method:"delete"})},u=function(t){return l["a"].request({url:"/api/admin/advertisement_positions",data:t,method:"post"})},c=function(t){return l["a"].request({url:"api/admin/advertisement_positions/"+t,method:"get"})},m={props:{tableStatus:{type:Object,default:{}}},data:function(){return{modalShow:!0,saveLoading:!1,formData:{name:"",type:"",description:""},rules:{name:[{required:!0,message:"请填写广告位名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}]}}},methods:{addEditAdvertisementPositionExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,u(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")}}},p=m,f=a("66b7"),h=Object(f["a"])(p,n,s,!1,null,null,null);h.options.__file="add-advertisement-position.vue";var g=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加角色")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"广告位名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入广告位名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"广告位类型",prop:"type"}},[a("Select",{attrs:{filterable:""},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},t._l(t.tableStatus.type,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])}))],1),a("FormItem",{attrs:{label:"广告位描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditAdvertisementPositionExcute}},[t._v("保存 ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e()],1)],1)},_=[],b=(a("c5f6"),{props:{tableStatus:{type:Object,default:{}},modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{name:"",description:"",type:0},rules:{name:[{required:!0,message:"请填写广告位名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getAdvertisementPositionInfoByIdExcute()},methods:{getAdvertisementPositionInfoByIdExcute:function(){var t=this;c(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,name:a.name,description:a.description,type:a.type},t.spinLoading=!1})},addEditAdvertisementPositionExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,u(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")}}}),x=b,y=Object(f["a"])(x,v,_,!1,null,null,null);y.options.__file="edit-advertisement-position.vue";var w=y.exports,S=a("b92e"),D=a("2934"),C={components:{AddComponent:g,EditComponent:w,UploadFile:S["a"]},data:function(){var t=this;return{searchForm:{order_by:"id,desc"},tableLoading:!1,tableStatus:{type:[]},feeds:{data:[],total:0,current_page:1,per_page:10},addModal:{show:!1},editModal:{show:!1,id:0},fileuploadConfig:{headers:{Authorization:window.access_token},format:["xlsx","xls"],max_size:1048576,upload_url:window.uploadUrl.importExcelAdvertisementPosition,file_name:"file",multiple:!1,default_list:[],button_text:"导入数据"},uploadFile:{attachment_id:0,url:""},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"广告位名称",key:"name",minWidth:150},{title:"广告位描述",key:"description",minWidth:150},{title:"类型",minWidth:150,render:function(e,a){return e("div",[e("Tag",{props:{color:"green"}},t.tableStatus.type[a.row.type])])}},{title:"创建时间",key:"created_at",minWidth:150},{title:"更新时间",key:"created_at",minWidth:150},{title:"操作",minWidth:200,render:function(e,a){var o=t;return e("div",[e("Button",{props:{type:"success",size:"small"},on:{click:function(){t.editModal.show=!0,t.editModal.id=a.row.id}}},"Edit"),e("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.name+"」广告位？",transfer:!0},on:{"on-ok":function(){o.deleteAdvertisementPositionExcute(a.row.id,a.index)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},created:function(){var t=this;t.getTableStatusExcute("advertisement_positions/type"),t.getTableDataExcute(t.feeds.current_page)},computed:{exportExcel:function(){return window.exportExcelUrl.exportAdvertisementPosition+"?search_data="+JSON.stringify(this.searchForm)}},methods:{handleOnPageChange:function(t){this.getTableDataExcute(t)},onPageSizeChange:function(t){this.feeds.per_page=t,this.getTableDataExcute(this.feeds.current_page)},getTableStatusExcute:function(t){var e=this;Object(D["b"])(t).then(function(t){e.tableStatus.type=t.data})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page)},getTableDataExcute:function(t){var e=this;e.tableLoading=!0,e.feeds.current_page=t,r(t,e.feeds.per_page,e.searchForm).then(function(t){e.feeds.data=t.data,e.feeds.total=t.meta.total,e.tableLoading=!1},function(t){e.tableLoading=!1})},deleteAdvertisementPositionExcute:function(t,e){var a=this;d(t).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},uploadfileChange:function(t,e){this.getTableDataExcute(this.feeds.current_page)}}},k=C,E=Object(f["a"])(k,o,i,!1,null,null,null);E.options.__file="list.vue";e["default"]=E.exports},2058:function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return s});var o=a("66df"),i=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},n=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},s=function(t){return o["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}},9128:function(t,e,a){"use strict";var o=a("2058"),i=a.n(o);i.a},b92e:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("Upload",{ref:"upload",attrs:{"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[a("Button",{staticStyle:{"margin-right":"10px",float:"left"},attrs:{icon:"ios-cloud-upload-outline",loading:t.loading}},[t._v(t._s(t.uploadConfig.button_text))]),a("div",[a("span",{staticClass:"green-color",staticStyle:{"line-height":"32px"}},[t._v(t._s(t.text))])])],1)],1)},i=[],n=(a("7f7f"),a("ac6a"),a("2934"),{props:{isDelete:{type:Boolean,default:!0},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["txt","xsls"],max_size:800,upload_url:window.uploadUrl.uploadTmp,file_name:"file",multiple:!1,file_num:0,button_text:"上传文件",default_list:[{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[],loading:!1,text:"未上传"}},methods:{handleSuccess:function(t,e){e.url=t.data.url,e.name=t.data.original_name,e.attachment_id=t.data.attachment_id;var a=[];a.push({attachment_id:e.attachment_id,url:e.url}),a=a[0],this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a),this.text="已上传",this.$Notice.success({title:"操作成功",desc:"文件上传成功"}),this.loading=!1},fomatFile:function(){var t=[];return this.uploadList.forEach(function(e,a,o){t.push({attachment_id:e.attachment_id,url:e.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"}),this.loading=!1},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"}),this.loading=!1},handleBeforeUpload:function(){return this.text="正在上传...",!0}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(t.attachment_id>0&&(this.text="已上传"),this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t))}}),s=n,l=(a("9128"),a("66b7")),r=Object(l["a"])(s,o,i,!1,null,null,null);r.options.__file="upload-file.vue";e["a"]=r.exports}}]);