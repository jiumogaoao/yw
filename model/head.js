// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"head",
		css:["head_all"],
		html:["head_all"],
		fn:function(){
			var data={};
			var source=this;
			var tk="";
			var result={
					user:{},
					type:[]
			};
			//init
			source.init=function(){
				};
			source.reData=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				source.target.find("#ext").unbind("click").bind("click",function(){
					app.cookies("tk",null,true);
					obj.hash("index");
					window.location.reload();
				});
			};
			source.reflash=function(){
				source.reData();
				function getList(tka){
					tk=tka;
					var callbackcount=0;
					var callbackfn=function(){
						callbackcount++;
						if(callbackcount===2){
							source.reData();
							}
						};
					obj.api.run("tk_get",{tk:tk},function(returnData){
						result.user=returnData.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("type_get",{tk:tk},function(returnData){
						result.type=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				obj.api.tk(getList);
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