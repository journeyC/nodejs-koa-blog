webpackJsonp([7],{yx1W:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),c=a("exGp"),o=a.n(c),s=a("Dd8w"),i=a.n(s),l=a("NYxO"),u={computed:i()({},Object(l.d)({categoryList:function(e){return e.category.categoryList}})),data:function(){return{categoryData:{name:""},ruleValidate:{name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}]}}},created:function(){},methods:i()({},Object(l.b)({createCategory:"category/createCategory"}),{handleSubmit:function(e){var t,a=this;this.$refs[e].validate((t=o()(n.a.mark(function e(t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}return e.prev=1,e.next=4,a.createCategory(a.categoryData);case 4:a.$Message.success("创建分类成功"),window.location.href="/category/list",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.$Message.error("创建分类失败");case 11:e.next=14;break;case 13:a.$Message.error("Fail!");case 14:case"end":return e.stop()}},e,a,[[1,8]])})),function(e){return t.apply(this,arguments)}))},handleReset:function(e){this.$refs[e].resetFields()}})},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"categoryData",attrs:{model:e.categoryData,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"分类名称",prop:"name"}},[a("Input",{attrs:{placeholder:"category name"},model:{value:e.categoryData.name,callback:function(t){e.$set(e.categoryData,"name",t)},expression:"categoryData.name"}})],1),e._v(" "),a("FormItem",[a("Button",{on:{click:function(t){e.handleReset("categoryData")}}},[e._v("重置")]),e._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("categoryData")}}},[e._v("创建")])],1)],1)},staticRenderFns:[]},g=a("VU/8")(u,d,!1,null,null,null);t.default=g.exports}});
//# sourceMappingURL=7.0fe994772d0ee9aee79d.js.map