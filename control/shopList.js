// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopList",
		par:["object","type","brand","tag","sort","title"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var tagArry=[];
			var productArry=[];
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
				
				
				obj.model.get("#main","shopListSimple","shopList",function(model){
					var showData={};
					$.each(user.shopList,function(i,n){
						if(productArry[n.id]){
						var pushData=productArry[n.id];
						pushData.buy=n;
						if(!showData[pushData.shopId]){
							showData[pushData.shopId]={id:pushData.shopId,list:[]};
						};
							showData[pushData.shopId].list.push(pushData);
						}
						
					});
					searchList=[];
					model.setResult(user);
					model.show();
					model.reflash();
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===4){
						headLayput();
						footLayout();
						mainLayout();
						}
					};
					obj.api.run("type_get",{tk:tk},function(returnData){
						tagArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("obj_get",{tk:tk},function(returnData){
						objArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("product_get",{tk:tk},function(returnData){
						productArry=_.indexBy(returnData,"id");
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("tk_get",{tk:tk},function(returnData){
						user=returnData.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);