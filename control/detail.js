// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"detail",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var productArry=[];
			var product={};
			var shop={};
			var user={};
			var price=0;
			var priceId="";
			var modelString="";
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

				price=product.price[0].price;
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				obj.model.get("#main","rootNavSimple","rootNav",function(model){
					var resultData={
						obj:_.indexBy(objArry,"id"),
						product:product
					}
					model.setResult(resultData);
					model.show();
					model.reflash();
				});
				obj.model.get("#main","detailTopSimple","detailTop",function(model){
					model.setResult({product:product,shop:shop});
					model.show();
					model.reflash();
					function priceCheck(){
						modelString="";
						price=0;
						priceId="";
						$.each(product.price,function(i,n){
								var priceSelect=1;
								console.log(n)
								model.target.find(".priceFrame .selectPoint.hl").each(function(){
									if(n.state[$(this).attr("gid")]!==$(this).attr("pid")||n.count===0){
										priceSelect=0;
									}
									if(priceSelect){
										modelString+=" "+$(this).find(".selectTitle").html();
									}
								});
								if(priceSelect){
									price=n.price;
									priceId=n.id;
									model.target.find("#priceChoose").html("￥"+price+"（降价通知）");
								}
							});
							if(!priceId){
								model.target.find("#priceChoose").html("该型号缺货");
							}

					}
					model.target.find(".priceFrame .selectPoint").unbind("click").bind("click",function(){
						$(this).parents(".priceFrame").find(".selectPoint").removeClass('hl');
						$(this).addClass("hl");
						priceCheck();
					});
					model.target.find(".priceFrame").each(function(){
						$(this).find(".selectPoint").first().click();
					});
					model.target.find(".addBuyCard").unbind("click").bind("click",function(){
						if(user&&user.id){
							priceCheck();

							if(priceId&&price){
								if(!user.shopList){
									user.shopList={};
								}
								user.shopList[data.id]={id:data.id,count:Number(model.target.find(".count input").val()),modelId:priceId,modelString:modelString};
								obj.api.run("client_shopList",{tk:tk,shopList:user.shopList},function(){
									obj.pop.on("alert",{text:"添加成功"});
									},function(e){
										obj.pop.on("alert",{text:(JSON.stringify(e))});
								});
							}else{
								obj.pop.on("alert",{text:"请先选择有效价格属性"});
							};
						}else{
							obj.pop.on("alert",{text:"请先登录"});
							obj.hash("login");
						}
					});
				});
				obj.model.get("#main","detailCenterSimple","detailCenter",function(model){
					var resultData={
									shopRecommend:_.where(productArry,{shopId:product.shopId,recommend:"1"}),
									otherRecommend:_.filter(productArry,function(other){return other.object[other.object.length-1]===product.object[product.object.length-1]&&other.recommend==="1"})
									}
					model.setResult(resultData);
					model.show();
					model.reflash();
				});
				obj.model.get("#main","detailBottomSimple","detailBottom",function(model){
					var resultData={
						type:[],
						brand:[],
						topShell:[],
						topVisit:[],
						topPrice:[],
						product:product
					};
					if(product.object[0]){
						resultData.type=_.where(objArry,{"parentId":product.object[0]});
					}
					if(product.object[1]){
						resultData.brand=_.where(objArry,{"parentId":product.object[1]});
					}
					resultData.topShell=_.sortBy(_.filter(productArry,function(other){return other.object[other.object.length-1]===product.object[product.object.length-1]}),function(other){return Math.sin(other.member.length);});
					resultData.topVisit=_.sortBy(_.filter(productArry,function(other){return other.object[other.object.length-1]===product.object[product.object.length-1]}),function(other){return Math.sin(other.visit);});
					resultData.topPrice=_.sortBy(_.filter(productArry,function(other){return other.object[other.object.length-1]===product.object[product.object.length-1]}),function(other){return Math.sin(other.price[0].price);});
					model.setResult(resultData);
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
						typeArry=returnData;
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
					obj.api.run("product_visit",{tk:tk,id:data.id},function(returnData){
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
					obj.api.run("product_get",{tk:tk},function(returnData){
						productArry=returnData;
						product=_.indexBy(productArry,"id")[data.id];
						obj.api.run("client_getShop",{tk:tk,id:product.shopId},function(shopData){
							shop=shopData;
							callbackfn();
						},function(){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);