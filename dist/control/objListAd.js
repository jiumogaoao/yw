/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"objListAd",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","objListAdForm","formInput",function(a){a.setResult(h),a.set({title:"栏目信息",nav:[],list:[{name:"obj",title:"栏目",placeholder:"",type:"tree",value:"",valuelabel:"",option:[{label:"",value:""}]}],button:[{id:"objSend",text:"提交修改"}]}),a.reflash(),a.show(),a.target.find("#objSend").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("obj_edit",c,function(a){b.pop.on("alert",{text:"修改成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(a){g=a;var f=0,i=function(){f++,1===f&&(c(),d(),e())};b.api.run("obj_get",{tk:g},function(a){h={obj:a||[]},i()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);