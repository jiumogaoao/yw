// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"adminCenterTem",
		css:["user_center_tem"],
		html:["admin_center_tem"],
		fn:function(){
			var data={
				};
			var point="projectAddAd";
			function change(){
				source.target.find(".point_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").addClass("hl");
				source.target.find(".group_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").parents(".group_tem").addClass("hl");
				}
			var source=this;
			//init
			source.init=function(){
				};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.target.find(".nav_tem[hash='"+window.location.hash.replace("#","")+"']").addClass("hl");
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				};
			source.change=function(id){
				point=id;
				change();
				};
			//set
			source.set=function(data){};
			source.callback=function(){};
			}
		});
	})($,app,config);