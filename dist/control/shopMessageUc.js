/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"shopMessageUc",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","baseMessageForm","formInput",function(a){a.setResult(h),a.set({title:"店铺信息",nav:[],list:[{name:"shopName",title:"店名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopIcon",title:"店铺logo",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopBanner",title:"店铺banner",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopDesc",title:"店铺简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopPlace",title:"店铺地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopType",title:"销售类型",placeholder:"",type:"optionAdd",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"sendShop",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#sendShop").unbind("click").bind("click",function(){var c=a.result();return c.shopName?c.shopIcon?c.shopBanner?c.shopDesc?c.shopPlace?c.shopType?(c.tk=g,void b.api.run("client_set",c,function(a){b.pop.on("alert",{text:"修改成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})):(b.pop.on("alert",{text:"请先添加销售类型"}),!1):(b.pop.on("alert",{text:"请先输入店铺地点"}),!1):(b.pop.on("alert",{text:"请先输入店铺简介"}),!1):(b.pop.on("alert",{text:"请先上传店铺banner"}),!1):(b.pop.on("alert",{text:"请先上传店铺logo"}),!1):(b.pop.on("alert",{text:"请先输入店名"}),!1)})})})}function f(a){g=a;var f=0,i=function(){f++,1===f&&(c(),d(),e())};b.api.run("tk_get",{tk:g},function(a){h=a.user,i()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);