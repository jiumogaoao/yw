/*! This is uglify test - 2015-12-15 */!function(a,b,c){b.control.set({name:"realNameUc",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","baseMessageForm","formInput",function(a){a.setResult(h),a.set({title:"店铺信息",nav:[],list:[{name:"name",title:"真实姓名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"sex",title:"性别",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"女",value:"0"},{label:"男",value:"1"}]},{name:"cardType",title:"证件类型",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"身份证",value:"0"},{label:"回乡证",value:"1"}]},{name:"place",title:"地区",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"birthday",title:"生日",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"cardNumber",title:"证件号",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"startTime",title:"开始时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"endTime",title:"结束时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"image",title:"证件照",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"realNameSend",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#realNameSend").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("realName_edit",c,function(a){b.pop.on("alert",{text:"修改成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(a){g=a;var f=0,i=function(){f++,1===f&&(c(),d(),e())};b.api.run("realName_get",{tk:g},function(a){h=a,i()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);