/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"comAddUc",par:["id"],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","comAddUcForm","comAdd",function(a){a.set(h),a.reflash(),a.show(),a.target.find(".button").unbind("click").bind("click",function(){var c=a.result();c.tk=g,b.api.run("com_add",c,function(a){b.pop.on("alert",{text:"评论成功"}),b.hash("buyListUc/0")},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})})}function f(f){g=f;var i=0,j=function(){i++,1===i&&(c(),d(),e())};b.api.run("deal_get",{tk:g},function(b){h=_.indexBy(b,"id")[a.id],j()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g="",h={};b.api.tk(f)}})}($,app,config);