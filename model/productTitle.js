// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"productTitle",
		css:["product_title"],
		html:["product_title"],
		fn:function(){
			
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);
			};
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);