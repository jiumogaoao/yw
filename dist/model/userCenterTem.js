/*! This is uglify test - 2015-12-08 */!function(a,b,c){b.model.set({name:"userCenterTem",css:["user_center_tem"],html:["user_center_tem"],fn:function(){function a(){c.target.find(".point_tem").removeClass("hl"),c.target.find(".point_tem[pid='"+b+"']").addClass("hl"),c.target.find(".group_tem").removeClass("hl"),c.target.find(".point_tem[pid='"+b+"']").parents(".group_tem").addClass("hl")}var b="myAccount",c=this;c.init=function(){},c.callback=function(){},c.reflash=function(){c.target.html(c.css[0]+c.html[0])},c.change=function(c){b=c,a()},c.set=function(a){data=a}}})}($,app,config);