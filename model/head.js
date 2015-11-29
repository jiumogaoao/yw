// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"head",
		css:["head_all"],
		html:["head_all"],
		fn:function(){
			var data={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				};
			source.change=function(id){
				};
			source.center=function (center){
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);