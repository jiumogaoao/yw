/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"typeListAd",par:[],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show();var d=[];a.each(i,function(a,b){d.push({id:b.id,main:[b.id,b.name,"修改","删除"]})}),b.model.get("#UC","realNameSimple","formTable",function(c){c.set({title:"标签列表",button:[{id:"addType",text:"添加标签"}],head:[{title:"标签编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"标签名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"修改",type:"button",name:"edit",placeholder:"",option:[{label:"",value:""}]},{title:"删除",type:"button",name:"remove",placeholder:"",option:[{label:"",value:""}]}],list:d}),c.reflash(),c.show(),c.target.find(".formButton[D_key='edit']").unbind("click").bind("click",function(){b.hash("typeEditAd/"+a(this).attr("D_id"))}),c.target.find(".formButton[D_key='remove']").unbind("click").bind("click",function(){b.api.run("type_remove",{tk:h,id:a(this).attr("D_id")},function(){alert("删除成功"),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}),c.target.find("#addType").unbind("click").bind("click",function(){b.hash("typeAddAd")})})})}function g(a){h=a;var c=0,g=function(){c++,1===c&&(d(),e(),f())};b.api.run("type_get",{tk:h},function(a){i=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i={};b.api.tk(g)}})}($,app,config);