// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoListAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var promo=[];
			var user={};
			function headLayput(){
				obj.model.get("#head","headSimple","head",function(model){
				/*model.set({
				object:objArry,
				type:0
				});*/
				model.reflash();
				model.show();
				});
				}
			function footLayout(){
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function mainLayout(){
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","adminCenterTemSimple","adminCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","realNameSimple","promo",function(model){
					model.set({});
					model.reflash();
					model.show();
					model.target.find(".formButton").unbind("click").bind("click",function(){
						obj.hash("productDetailAd/"+$(this).attr("D_id"));
					});
					});
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===2){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("promo_get",{tk:tk},function(clientList){
						promo=clientList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("tk_get",{tk:tk},function(returnMessage){
						user=returnMessage.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);