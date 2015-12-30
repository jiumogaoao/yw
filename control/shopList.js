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
			var shopArry=[];
			var shopList={};
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
					searchList=[];
					var showList={};
					$.each(shopList,function(i,n){
						if(productArry[n.id]){
							if(!showList[productArry[n.id].shopId]){
								showList[productArry[n.id].shopId]={
									"star":shopArry[productArry[n.id].shopId].star,/*好评数*/
									"shopName":shopArry[productArry[n.id].shopId].shopName,/*店名*/
									"list":[]
								}
							}
							var pushPoint=productArry[n.id];
							pushPoint.buy=n;
							showList[productArry[n.id].shopId].list.push(pushPoint);
						}
					});
					model.set(showList);
					model.setResult(searchList);
					model.show();
					model.reflash();
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===5){
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
						objArry=returnObj;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("product_get",{tk:tk},function(returnData){
						productArry=_.indexby(returnData,"id");
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("client_shopMessage",{tk:tk},function(returnData){
						shopArry=_.indexby(returnData,"id");
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("tk_get",{tk:tk},function(returnData){
						shopList=returnData.user.shopList;
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