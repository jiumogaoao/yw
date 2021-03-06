// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"rootNav",
		css:["root_nav"],
		html:["root_nav"],
		fn:function(){
			var result={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
			};
			//set
			source.set=function(data){};
			source.setResult=function(data){
				result=data;
			};
			}
		});
	})($,app,config);