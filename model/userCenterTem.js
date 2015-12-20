// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"userCenterTem",
		css:["user_center_tem"],
		html:["user_center_tem","base_message"],
		fn:function(){
			var tk="";
			var point="myAccount";
			var result={};
			function change(){
				source.target.find(".point_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").addClass("hl");
				source.target.find(".group_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").parents(".group_tem").addClass("hl");
				}
			var source=this;
			//init
			source.init=function(){
				
				};
			source.callback=function(){};
			source.reMessage=function(){
				var main=_.template(source.html[1])({user:result});
				source.target.find(".baseFrame_tem").html(main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
			};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.reMessage();
				function getMessage(tka){
					tk=tka;
					var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===1){
						source.reMessage();
						}
					};
					obj.api.run("tk_get",{tk:tk},function(returnData){
						if(returnData.user&&returnData.user.type&&returnData.user.type!=2){
							result=returnData.user;
							callbackfn();
						}else{
							obj.pop.on("alert",{text:"请先登录"});
							obj.hash("login");
							return false;
						}
						
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					
				};
				obj.api.tk(getMessage);
				}; 
			source.change=function(id){
				point=id;
				change();
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
			};
			}
		});
	})($,app,config);