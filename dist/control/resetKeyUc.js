/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"resetKeyUc",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","baseMessageForm","formInput",function(a){a.setResult(h),a.set({title:"密码重置",nav:[],list:[{name:"oldKey",title:"旧密码",placeholder:"",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"newKey",title:"新密码",placeholder:"",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"reKeySend",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#reKeySend").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("reset_key",c,function(a){b.pop.on("alert",{text:"修改成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(a){g=a;var f=0,i=function(){f++,1===f&&(c(),d(),e())};b.api.run("realName_get",{tk:g},function(a){h=a,i()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);