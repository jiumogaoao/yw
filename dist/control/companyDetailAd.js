/*! This is uglify test - 2016-01-10 */!function(a,b,c){b.control.set({name:"companyDetailAd",par:["id"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show(),b.model.get("#UC","companyDetailAdForm","formInput",function(c){c.setResult(h);var d=[];h.state||(d=[{id:"sendCompany",text:"通过审核"}]),c.set({title:"企业信息",nav:[],list:[{name:"id",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"name",title:"公司名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"place",title:"地区",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"money",title:"注册资金",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"email",title:"邮箱",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"type",title:"企业类型",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"国营",value:"0"},{label:"外资",value:"1"},{label:"合资",value:"2"},{label:"民营",value:"3"}]},{name:"linkMan",title:"联系人",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"linkPhone",title:"联系电话",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"cardNumber",title:"执照号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"state",title:"状态",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未通过",value:"0"},{label:"通过",value:"1"}]}],button:d}),c.reflash(),c.show(),c.target.find("#sendCompany").unbind("click").bind("click",function(){b.api.run("company_pass",{tk:g,id:a.id},function(a){b.pop.on("alert",{text:"修改成功"}),b.hash("companyListAd")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(f){g=f;var i=0,j=function(){i++,1===i&&(c(),d(),e())};b.api.run("company_list_get",{tk:g},function(b){h=_.indexBy(b,"id")[a.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);