/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"withdrawalUc",par:[],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){var c={},d=[];a.each(i,function(a,b){c[b.parentId]||(c[b.parentId]=[]),c[b.parentId].push({label:b.name,value:b.id})}),a.each(j,function(a,b){d.push({label:b.name,value:b.id})}),b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(c){c.reflash(),c.show();var d=[];a.each(k.shopType,function(a,b){d.push({label:b.name,value:b.id})}),b.model.get("#UC","rechargeUcForm","formInput",function(a){a.set({title:"提现金额",nav:[],list:[{name:"number",title:"提现金额",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"rechargeAdd",text:"提现"}]}),a.reflash(),a.show(),a.target.find("#rechargeAdd").unbind("click").bind("click",function(){var c=a.result();return c.number?(c.tk=h,void b.api.run("money_out",c,function(a){b.pop.on("alert",{text:"提交成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})):(b.pop.on("alert",{text:"请先输入提现金额"}),!1)})})})}function g(a){h=a;var c=0,g=function(){c++,3===c&&(d(),e(),f())};b.api.run("type_get",{tk:h},function(a){j=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("obj_get",{tk:h},function(a){i=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("tk_get",{tk:h},function(a){k=a.user,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=[],k={};b.api.tk(g)}})}($,app,config);