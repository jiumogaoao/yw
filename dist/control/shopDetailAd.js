/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"shopDetailAd",par:["id"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show(),b.model.get("#UC","shopDetailAdForm","formInput",function(c){c.setResult(h);var d=[{id:"sendShop",text:"通过审核"}];h.shop&&(d=[]),c.set({title:"店铺信息",nav:[],list:[{name:"id",title:"店铺编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopName",title:"店名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopIcon",title:"店铺logo",placeholder:"",type:"singlePicSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopBanner",title:"店铺banner",placeholder:"",type:"singlePicSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopDesc",title:"店铺简介",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopPlace",title:"店铺地点",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"shopType",title:"销售类型",placeholder:"",type:"optionAddSimple",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:d}),c.reflash(),c.show(),c.target.find("#sendShop").unbind("click").bind("click",function(){b.api.run("client_shopPass",{tk:g,id:a.id},function(){b.hash("shopListAd")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(f){g=f;var i=0,j=function(){i++,1===i&&(c(),d(),e())};b.api.run("client_get",{tk:g},function(b){h=_.indexBy(b,"id")[a.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);