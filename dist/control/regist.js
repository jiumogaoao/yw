/*! This is uglify test - 2015-12-22 */!function(a,b,c){b.control.set({name:"regist",par:["introducer"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","productAddForm","formInput",function(c){function d(){c.target.find("#getCode").html("获取验证码"),c.target.find("#getCode").unbind("click").bind("click",function(){var a=c.result();return a.tk=g,a.phone?void b.api.run("phoneCode_get",a,function(a){c.target.find("#getCode").unbind("click");var b=30,e=setInterval(function(){b--,c.target.find("#getCode").html(b),b||(clearInterval(e),d())},1e3)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}):(alert("请先输入手机号"),!1)})}c.set({title:"注册",nav:[],list:[{name:"phone",title:"手机号",placeholder:"请填写手机号",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"code",title:"验证码",placeholder:"请输入手机验证码",type:"buttonInput",value:"",valuelabel:"",option:{id:"getCode",text:"获取验证码"}},{name:"password",title:"密码",placeholder:"请填写密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"sendRegist",text:"注册"}]}),c.reflash(),c.show(),d(),c.target.find("#sendRegist").unbind("click").bind("click",function(){var d=c.result();d.tk=g,a.introducer&&(d.introducer=a.introducer),b.api.run("regist",d,function(a){b.hash("index")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})}function f(a){g=a;var b=0,f=function(){b++,1===b&&(c(),d(),e())};f()}var g="";b.api.tk(f)}})}($,app,config);