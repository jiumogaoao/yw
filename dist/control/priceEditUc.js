/*! This is uglify test - 2016-01-10 */!function(a,b,c){b.control.set({name:"priceEditUc",par:["id"],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){var c=[];a.each(i.priceState,function(b,d){var e={title:d.title,id:d.id||"",list:[]};a.each(d.list,function(a,b){e.list.push({label:b.name,value:b.id})}),c.push(e)}),b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","priceAddForm","formInput",function(a){a.set({title:"添加产品价格",nav:[],list:[{name:"title",title:"商品名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"price",title:"商品图片",placeholder:"",type:"price",value:"",valuelabel:"",option:c}],button:[{id:"sendPrice",text:"修改价格列表"}]}),a.setResult(i),a.reflash(),a.show(),a.target.find("#sendPrice").unbind("click").bind("click",function(){var c=a.result();c.tk=h,b.api.run("product_edit",c,function(){b.pop.on("alert",{text:"提交成功"}),b.hash("productListUc/1")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function g(a){h=a;var g=0,j=function(){g++,1===g&&(d(),e(),f())};b.api.run("product_get",{tk:h},function(a){i=_.indexBy(a,"id")[c.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i={};b.api.tk(g)}})}($,app,config);