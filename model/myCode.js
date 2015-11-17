// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"myCode",
		css:["my_code"],
		html:["my_code"],
		fn:function(){
			var data={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
			};
			//set
			source.set=function(dataSet){
				data=dataSet;
			};
			}
		});
	})($,app,config);