/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"login",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","productAddForm","formInput",function(a){a.set({title:"登录",nav:[],list:[{name:"userName",title:"用户名",placeholder:"请填写用户名/手机号/邮箱",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"passWord",title:"密码",placeholder:"请填写密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"sendLogin",text:"登录"},{id:"sendReset",text:"忘记密码"}]}),a.reflash(),a.show(),a.target.find("#sendLogin").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("login",a.result(),function(a){b.hash("index")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})}function f(a){g=a;var b=0,f=function(){b++,1===b&&(c(),d(),e())};f()}var g="";b.api.tk(f)}})}($,app,config);