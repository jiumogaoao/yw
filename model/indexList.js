// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"indexList",
		css:["index_list"],
		html:["index_list"],
		fn:function(){
			var result=[];
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])({list:result});
				source.target.html(source.css[0]+main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
			};
			//set
			source.setResult=function(data){
				result=data;
			};
			source.set=function(data){};
			}
		});
	})($,app,config);