// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"nav",
		css:["nav_all"],
		html:["nav_all"],
		fn:function(){
			var result=[];
			var source=this;
			var tk="";
			//init
			source.init=function(){
				
				};
			source.relist=function(){
				var main=_.template(source.html[0])({list:result});
				source.target.html(source.css[0]+main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
			};
			source.reflash=function(){
				source.relist();
				function getList(tka){
					tk=tka;
					obj.api.run("obj_get",{tk:tk},function(returnData){
						var list=_.groupBy(returnData,"parentId");
						if(list&&list.all){
							result=list.all;
						}
						source.relist();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				obj.api.tk(getList);
			};
			//set
			source.set=function(data){};
			}
		});
	})($,app,config);