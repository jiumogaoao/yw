// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pomoListAd",
		par:[],
		fn:function(data){
			var tk="";
			var promo={};
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
					obj.model.get("#UC","pomoListSimple","promo",function(model){
					model.set(promo);
					model.reflash();
					model.show();
					model.target.find("#sendPromo").unbind("click").bind("click",function(){
						var sendData={tk:tk,any:model.result()};
						obj.api.run("promo_edit",sendData,function(returnData){
							obj.pop.on("alert",{text:"提交成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					});
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===1){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("promo_get",{tk:tk},function(promoList){
						promo=promoList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);