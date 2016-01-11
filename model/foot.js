// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"foot",
		css:["foot_all"],
		html:["foot_all"],
		fn:function(){
			var tk="";
			var result={
				logo:"",
				name:"",
				phone:"",
				mail:"",
				businessMail:"",
				place:"",
				wx:"",
				wb:"",
				icp:"",
				host:""
			};
			var source=this;
			//init
			source.reData=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
			};
			source.init=function(){
				source.reData();
				function getList(tka){
					tk=tka;
					var callbackcount=0;
					var callbackfn=function(){
						callbackcount++;
						if(callbackcount===1){
							source.reData();
							}
						};
						obj.api.run("config_get",{tk:tk},function(returnData){
							result=returnData;
							callbackfn();
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