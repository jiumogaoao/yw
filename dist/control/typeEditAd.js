/*! This is uglify test - 2015-12-22 */!function(a,b,c){b.control.set({name:"typeEditAd",par:["id"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","typeAddAdForm","formInput",function(a){a.setResult(h),a.set({title:"修改标签",nav:[],list:[{name:"name",title:"标签名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"typeSend",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#typeSend").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("type_edit",c,function(a){b.pop.on("alert",{text:"修改成功"}),b.hash("typeListAd")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(f){g=f;var i=0,j=function(){i++,1===i&&(c(),d(),e())};b.api.run("type_get",{tk:g},function(b){h=_.indexBy(b,"id")[a.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);