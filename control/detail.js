// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"detail",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var product={};
			var redpacket={};
			var account={};
			var user={};
			function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
				}
			function footLayout(){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function mainLayout(){
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"detailAll","detailAll",function(modelA){
						product.buy=0;
						product.user={};
						if(user&&user.id){
							product.user={
							balance:user.balance,
							redpacket:user.redpacket
						};
						}
						product.buildtypeArry=["农民房","商品房","商铺"];
						product.buildStateArry=["未建","在建","新房","二手房"];
						var now=new Date().getTime();
						if(product.orderTime<now){
							if(product.stratTime>now){
								product.tag=0;
							}else if(product.stratTime<now&&product.payedCount>=product.passNumber&&product.payedCount<product.copy){
								product.tag=1;
							}else{
								product.tag=2;
							}
						}
						modelA.set(product);
						modelA.refalsh();
							modelA.target.find(".addCom").unbind("click").bind("click",function(){
								if(user&&user.id){
									obj.model.get("#pop","moneyIn","pop",function(model){
										model.set({
										title:"添加评论",
										button:[{id:"comSend",text:"提交评论"}],
										list:[
											{name:"main",title:"内容",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
										]
										});
										model.reflash();
										model.target.find("#comSend").unbind("click").bind("click",function(){
											var sendData=model.result();
											sendData.tk=tk;
											sendData.userId=user.id;
											sendData.productId=product.id;
											sendData.userHead=user.image;
											sendData.userName=user.userName;
											obj.api.run("com_add",sendData,function(){
												alert("评论成功");
												window.location.reload();
											},function(e){alert(e);});
										});
										model.show();
										app.pop.show();
									});
								}else{
									alert("请先登录");
								}
							});
						modelA.target.find("#moneyIn").unbind("click").bind("click",function(){
					obj.model.get("#pop","moneyIn","pop",function(model){
						model.set({
						title:"充值确认",
						button:[{id:"inSend",text:"确认充值"}],
						list:[
							{name:"number",title:"充值金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}
						]
						});
						model.reflash();
						model.target.find("#inSend").unbind("click").bind("click",function(){
							var sendData=model.result();
							sendData.tk=tk;
							obj.api.run("money_in",sendData,function(){
								alert("充值成功");
								window.location.reload();
							},function(e){alert(e);});
						});
						model.show();
						app.pop.show();
					});
				});
						modelA.target.find("#buyButton").unbind("click").bind("click",function(){
							var newBuy={
										"id":uuid(),/*id*/
										"productId":product.id,/*商品id*/
										"userId":user.id,/*用户id*/
										"startTime":new Date().getTime(),/*购买时间*/
										"endTime":0,/*退出时间*/
										"buyPrice":product.price,/*买入价*/
										"sellPrice":0,/*卖出价*/
										"count":product.buy,/*数量*/
										"tk":tk
										};
							obj.model.get("#pop","buy","pop",function(modelBuy){
							modelBuy.set({
							title:"买入确认",
							button:[{id:"buySend",text:"买入"}],
							list:[
								{name:"",title:"交易编码",placeholder:"",type:"simple",value:newBuy.id,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品编码",placeholder:"",type:"simple",value:newBuy.productId,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品名",placeholder:"",type:"simple",value:product.title,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入价",placeholder:"",type:"simple",value:"￥"+newBuy.buyPrice,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入份数",placeholder:"",type:"simple",value:newBuy.count,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入时间",placeholder:"",type:"simple",value:moment(newBuy.startTime,"x").format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"合计金额",placeholder:"",type:"simple",value:"￥"+(newBuy.buyPrice*newBuy.count),valuelabel:"",option:[{label:"",value:""}]}
							]
							});
							modelBuy.reflash();
							modelBuy.show();
							modelBuy.target.find("#buySend").unbind("click").bind("click",function(){
								obj.api.run("buy",newBuy,function(){
									alert("购买成功");
									app.pop.hide();
									var now=new Date().getTime();
									if(product.stratTime>now){
									obj.hash("orderManage/"+product.object);	
								}else{
									obj.hash("dealManage/"+product.object);
								}
									
								},function(e){alert(e);});
								
							});
							app.pop.show();
							});
						});
						modelA.target.find(".numSub").unbind("click").bind("click",function(){
							if(product.buy>1){
								product.buy--;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").html("支持 ￥"+(product.price*product.buy));
								modelA.target.find("#buyButton").show();
							}else{
								product.buy=0;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").hide();
							}
						});
						modelA.target.find(".numAdd").unbind("click").bind("click",function(){
							var maxValue=((product.copy-product.payedCount)<Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price))?(product.copy-product.payedCount):Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price);
							if(product.buy<=maxValue-1){
								product.buy++;
								modelA.target.find(".numInput").val(product.buy);
								modelA.target.find("#buyButton").html("支持 ￥"+(product.price*product.buy));
								modelA.target.find("#buyButton").show();
							}
						});
						modelA.target.find(".numInput").unbind("change").bind("change",function(){
							var maxValue=((product.copy-product.payedCount)<Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price))?(product.copy-product.payedCount):Math.floor(((product.user.balance||0)+(product.user.reckpacket||0))/product.price);
							product.buy=Number($(this).val());
							if(product.buy>maxValue){
								product.buy=maxValue;
							}
							$(this).val(product.buy);
						});
						modelA.show();
					$('img').load(function(){
				model.reflash();
				});	
					callback();
					
						});
					},{w:"100%"});
					
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===4){
						headLayout();
				footLayout();
				mainLayout();
						}
					};
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("product_detail",{tk:tk,id:data.id},function(returnData){
					product=returnData;
					callbackfn();					},function(e){alert(e);});
				obj.api.run("tk_get",{tk:tk},function(returnData){
					user=returnData.user;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);