(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a175"],{"1e5d":function(t,e,a){},2934:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return l});var o=a("66df"),i=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},n=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},l=function(t){return o["a"].request({url:"/api/admin/attachments/"+t+"/force_destroy",method:"delete"})}},"6a8f":function(t,e,a){"use strict";var o=a("1e5d"),i=a.n(o);i.a},c13c:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.uploadList,function(e){return a("div",{staticClass:"demo-upload-list"},["finished"===e.status?[a("img",{attrs:{src:e.url}}),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){t.handleRemove(e)}}})],1)]:[e.showProgress?a("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[a("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[a("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),t.formatFileList.length>0?a("Collapse",[a("Panel",{attrs:{name:"1"}},[t._v("\n      预览\n      "),a("p",{attrs:{slot:"content"},slot:"content"},t._l(t.formatFileList,function(t,e){return a("img",{staticStyle:{width:"100%"},attrs:{src:t.url,alt:t.name}})}))])],1):t._e()],2)},i=[],n=(a("7f7f"),a("ac6a"),a("2934")),l={props:{isDelete:{type:Boolean,default:!0},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadTmp,file_name:"file",multiple:!1,file_num:0,default_list:[{name:"",attachment_id:0,url:""},{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[]}},methods:{handleRemove:function(t){var e=this,a=this.$refs.upload.fileList;t.attachment_id>0&&!0===this.isDelete&&Object(n["a"])(t.attachment_id).then(function(t){e.$Notice.success({title:"操作成功",desc:"文件删除成功"})}),this.$refs.upload.fileList.splice(a.indexOf(t),1);var o=this.fomatFile();this.$emit("input",o),this.$emit("on-upload-change",this.uploadList,o)},handleSuccess:function(t,e){e.url=t.data.url,e.name=t.data.original_name,e.attachment_id=t.data.attachment_id;var a=this.fomatFile();this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a)},fomatFile:function(){var t=[];return this.uploadList.forEach(function(e,a,o){t.push({attachment_id:e.attachment_id,url:e.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"})},handleBeforeUpload:function(){var t=this.uploadList.length<this.uploadConfig.file_num;return t||this.$Notice.warning({title:"数量限制",desc:"最多只能上传"+this.uploadConfig.file_num+"个文件"}),t}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t))}},r=l,s=(a("6a8f"),a("66b7")),d=Object(s["a"])(r,o,i,!1,null,null,null);d.options.__file="upload.vue";e["a"]=d.exports},f118:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:6,lg:15}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){t.addBtn()}}},[t._v("Add")])],1),a("Col",{attrs:{xs:10,lg:5}},[a("Input",{attrs:{icon:"searchForm",placeholder:"请输入名称..."},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("Col",{attrs:{xs:2,lg:3}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){t.getTableDataExcute()}}},[t._v("Search")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.dataList},on:{"on-sort-change":t.onSortChange}})],1),!0===t.addModal.show?a("add-component",{on:{"on-add-modal-success":function(e){t.getTableDataExcute()},"on-add-modal-hide":t.addModalHide}}):t._e(),!0===t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id},on:{"on-edit-modal-success":function(e){t.getTableDataExcute()},"on-edit-modal-hide":t.editModalHide}}):t._e(),a("Modal",{model:{value:t.modalCoverImage.show,callback:function(e){t.$set(t.modalCoverImage,"show",e)},expression:"modalCoverImage.show"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("图片预览")]),a("div",{staticClass:"text-center"},[t.modalCoverImage.show?a("img",{staticClass:"center-align",staticStyle:{width:"100%"},attrs:{src:t.modalCoverImage.url,alt:""}}):t._e()]),a("div",{attrs:{slot:"footer"},slot:"footer"})])],1)},i=[],n=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加分类")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"分类名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输分类名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"封面："}},[a("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.cover_image,callback:function(e){t.$set(t.formData,"cover_image",e)},expression:"formData.cover_image"}})],1),a("FormItem",{attrs:{label:"描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditCategoryExcute}},[t._v("保存 ")])],1)],1)],1)}),l=[],r=a("66df"),s=function(t){return r["a"].request({url:"/api/admin/categories",params:{search_data:JSON.stringify(t)},method:"get"})},d=function(t){return r["a"].request({url:"/api/admin/categories/"+t,method:"delete"})},c=function(t){return r["a"].request({url:"/api/admin/categories",data:t,method:"post"})},u=function(t){return r["a"].request({url:"api/admin/categories/"+t,method:"get"})},m=a("c13c"),f={components:{Upload:m["a"]},data:function(){return{modalShow:!0,saveLoading:!1,formData:{name:"",description:"",cover_image:{attachment_id:0,url:""}},rules:{name:[{required:!0,message:"请填写分类名称",trigger:"blur"}]},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadAdvertisement,file_name:"file",multiple:!1,file_num:1,default_list:[]}}},methods:{addEditCategoryExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,c(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},uploadChange:function(t,e){}}},p=f,h=a("66b7"),g=Object(h["a"])(p,n,l,!1,null,null,null);g.options.__file="add-category.vue";var v=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("添加分类")]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"分类名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输分类名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"封面："}},[t.formdataFinished?a("upload",{attrs:{"is-delete":!1,"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.cover_image,callback:function(e){t.$set(t.formData,"cover_image",e)},expression:"formData.cover_image"}}):t._e()],1),a("FormItem",{attrs:{label:"描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addEditCategoryExcute}},[t._v("保存 ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v("加载中...")])],1)],1):t._e()],1)],1)},w=[],b=(a("c5f6"),{components:{Upload:m["a"]},props:{modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,formdataFinished:!1,formData:{id:0,name:"",description:"",cover_image:{attachment_id:0,url:""}},rules:{name:[{required:!0,message:"请填写分类名称",trigger:"blur"}]},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadAdvertisement,file_name:"file",multiple:!1,file_num:1,default_list:[]}}},mounted:function(){this.modalId>0&&this.getCategoryInfoByIdExcute()},methods:{getCategoryInfoByIdExcute:function(){var t=this;u(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,name:a.name,description:a.description,cover_image:{attachment_id:a.cover_image.attachment_id,url:a.cover_image.url}},t.imguploadConfig.default_list=[t.formData.cover_image],t.formdataFinished=!0,t.spinLoading=!1})},addEditCategoryExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,c(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},uploadChange:function(t,e){}}}),x=b,C=Object(h["a"])(x,_,w,!1,null,null,null);C.options.__file="edit-category.vue";var y=C.exports,D={components:{AddComponent:v,EditComponent:y},data:function(){var t=this;return{searchForm:{order_by:"id,desc"},tableLoading:!1,dataList:[],tableStatus:{type:[]},addModal:{show:!1},editModal:{show:!1,id:0},modalCoverImage:{show:!1,url:null},columns:[{title:"ID",key:"id",sortable:!0,minWidth:50},{title:"名称",key:"name",minWidth:100},{title:"封面",key:"",minWidth:150,render:function(e,a){var o=t;if(a.row.cover_image.url)return e("div",[e("img",{attrs:{src:a.row.cover_image.url},style:{width:"40px",height:"40px"},on:{click:function(t){o.modalCoverImage.show=!0,o.modalCoverImage.url=a.row.cover_image.url}}})])}},{title:"描述",key:"description",minWidth:150},{title:"创建时间",key:"created_at",sortable:!0,minWidth:150},{title:"更新时间",key:"created_at",minWidth:150},{title:"操作",minWidth:150,render:function(e,a){var o=t;return e("div",[e("Button",{props:{type:"success",size:"small"},on:{click:function(){t.editModal.show=!0,t.editModal.id=a.row.id}}},"Edit"),e("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.name+"」？",transfer:!0},on:{"on-ok":function(){o.deleteCategoryExcute(a.row.id,a.index)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},created:function(){var t=this;t.getTableDataExcute()},methods:{getTableDataExcute:function(t){var e=this;e.tableLoading=!0,s(e.searchForm).then(function(t){var a=t.data;e.dataList=a,e.tableLoading=!1},function(t){e.tableLoading=!1})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute(1)},deleteCategoryExcute:function(t,e){var a=this;d(t).then(function(t){a.dataList.splice(e,1),a.$Notice.success({title:t.message})})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1}}},k=D,L=Object(h["a"])(k,o,i,!1,null,null,null);L.options.__file="list.vue";e["default"]=L.exports}}]);