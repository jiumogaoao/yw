/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"productEditUc",par:["id"],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){var d={},e=[];a.each(i,function(a,b){d[b.parentId]||(d[b.parentId]=[]),d[b.parentId].push({label:b.name,value:b.id})}),a.each(j,function(a,b){e.push({label:b.name,value:b.id})}),b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","productAddForm","formInput",function(a){a.set({title:"添加产品",nav:[],list:[{name:"id",title:"商品编码",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"title",title:"商品名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"image",title:"商品图片",placeholder:"",type:"pic",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"brand",title:"品牌",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"object",title:"所属栏目",placeholder:"",type:"linkage",value:"",valuelabel:"",option:d},{name:"tag",title:"标签",placeholder:"",type:"checkbox",value:"",valuelabel:"",option:e},{name:"stratTime",title:"上架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},{name:"endTime",title:"下架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"dsc",title:"简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"goodState",title:"商品属性",placeholder:"",type:"keyValue",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"place",title:"发货地",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"recommend",title:"推荐",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"否",value:"0"},{label:"是",value:"1"}]},{name:"priceState",title:"价格属性",placeholder:"",type:"state",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"price",title:"价格",placeholder:"",type:"selectGroup",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"detail",title:"详情",placeholder:"",type:"richWord",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"productAdd",text:"下一步修改价格"}]}),a.setResult(k),a.reflash(),a.show(),a.target.find("#productAdd").unbind("click").bind("click",function(){var d=a.result();d.tk=h,b.api.run("product_edit",d,function(a){b.pop.on("alert",{text:"修改成功"}),b.hash("priceEditUc/"+c.id)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function g(a){h=a;var g=0,l=function(){g++,3===g&&(d(),e(),f())};b.api.run("product_get",{tk:h},function(a){k=_indexBy(a,"id")[c.id],l()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("type_get",{tk:h},function(a){j=a,l()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("obj_get",{tk:h},function(a){i=a,l()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=[],k={};b.api.tk(g)}})}($,app,config);