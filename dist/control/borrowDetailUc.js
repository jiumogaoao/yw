/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"borrowDetailUc",par:["id"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","borrowDetailUcForm","formInput",function(a){a.setResult(h),a.set({title:"借贷详情",nav:[],list:[{name:"id",title:"借贷编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"user",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"linkMan",title:"联系人",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"birthday",title:"生日",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"workPlace",title:"工作地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"census",title:"户籍",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"本地",value:"0"},{label:"异地",value:"1"}]},{name:"pay",title:"月薪",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"house",title:"房贷",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:"0"},{label:"未结清",value:"1"},{label:"无",value:"2"}]},{name:"car",title:"车贷",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:"0"},{label:"未结清",value:"1"},{label:"无",value:"2"}]},{name:"card",title:"身份证号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"phone",title:"联系手机",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"money",title:"借款金额",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"state",title:"状态",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未受理",value:"0"},{label:"已受理",value:"1"},{label:"已完成",value:"2"},{label:"已拒绝",value:"3"}]}],button:[{id:"sendMessage",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#sendMessage").unbind("click").bind("click",function(){var c=a.result();c.tk=g,c.state=Number(c.state),b.api.run("borrow_edit",c,function(a){b.pop.on("alert",{text:"修改成功"}),b.hash("borrowListAd")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(f){g=f;var i=0,j=function(){i++,1===i&&(c(),d(),e())};b.api.run("borrow_get",{tk:g},function(b){h=_.indexBy(b,"id")[a.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);