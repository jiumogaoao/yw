// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"detailCenter",
		css:["detail_center"],
		html:["detail_center"],
		fn:function(){
			
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
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);