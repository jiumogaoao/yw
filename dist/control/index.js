/*! This is uglify test - 2016-01-04 */!function(a,b,c){b.control.set({name:"index",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","borrowIndexSimple","borrowIndex",function(a){a.set(i),a.show(),a.reflash(),a.target.find("#sendBorrow").unbind("click").bind("click",function(){if(h&&h.type){var c=a.result();c.tk=g,b.api.run("borrow_add",c,function(a){alert("申请成功"),b.hash("borrowListUc")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}else alert("请登录再提交")})})}function f(a){g=a;var f=0,j=function(){f++,2===f&&(c(),d(),e())};b.api.run("tk_get",{tk:g},function(a){h=a.user,j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("borrow_success",{tk:g},function(a){i=a,j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={},i=[];b.api.tk(f)}})}($,app,config);