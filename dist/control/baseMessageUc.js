/*! This is uglify test - 2015-12-15 */!function(a,b,c){b.control.set({name:"baseMessageUc",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","baseMessageForm","formInput",function(a){a.setResult(h),a.set({title:"基本信息",nav:[],list:[{name:"userName",title:"用户名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"image",title:"头像",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"phone",title:"手机",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"email",title:"邮箱",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"dsc",title:"简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"sendMessage",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#sendMessage").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("client_set",c,function(a){b.pop.on("alert",{text:"修改成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(a){g=a;var f=0,i=function(){f++,1===f&&(c(),d(),e())};b.api.run("tk_get",{tk:g},function(a){h=a.user,i()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);