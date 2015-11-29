// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"searchNav",
		css:["search_nav"],
		html:["search_nav"],
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