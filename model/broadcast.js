// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"broadcast",
		css:["broadcast_all"],
		html:["broadcast_all"],
		fn:function(){
			var result={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
			};
			//set
			source.set=function(data){};
			source.setResult=function(data){
				result=data;
			};
			}
		});
	})($,app,config);