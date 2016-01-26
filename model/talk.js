// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"talk",
		css:["talk_all"],
		html:["talk_frame","talk_list"],
		fn:function(){
			var result=[];
			var data={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.relist=function(){
				data.result=result;
				var main=_.template(source.html[1])(data);
				source.target.find(".frame").html(main);
			};
			source.reflash=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
				source.relist();
			};
			//set
			source.setResult=function(data){
				result=data;
			};
			source.set=function(dataA){
				data=dataA;
			};
			}
		});
	})($,app,config);