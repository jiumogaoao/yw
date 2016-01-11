// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"userCenterTem",
		css:["user_center_tem"],
		html:["user_center_tem","base_message","base_nav"],
		fn:function(){
			var tk="";
			var point="myAccount";
			var result={};
			var buyList=[];
			var shopList=[];
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
				result.allBuy=buyList.length;
				result.noPayBuy=_.groupBy(buyList,"state")[0]?_.groupBy(buyList,"state")[0].length:0;
				result.payBuy=_.groupBy(buyList,"state")[1]?_.groupBy(buyList,"state")[1].length:0;
				result.cancelBuy=_.groupBy(buyList,"state")[5]?_.groupBy(buyList,"state")[5].length:0;
				result.allDeal=shopList.length;
				result.noSendDeal=_.groupBy(shopList,"state")[1]?_.groupBy(shopList,"state")[1].length:0;
				result.sendDeal=_.groupBy(shopList,"state")[2]?_.groupBy(shopList,"state")[2].length:0;
				result.receiveDeal=_.groupBy(shopList,"state")[3]?_.groupBy(shopList,"state")[3].length:0;
				result.finishDeal=_.groupBy(shopList,"state")[4]?_.groupBy(shopList,"state")[4].length:0;
				result.backDeal=_.groupBy(shopList,"state")[6]?_.groupBy(shopList,"state")[6].length:0;
				var mainA=_.template(source.html[2])({user:result});
				source.target.find(".left_tem").html(mainA);
				source.target.find(".nav_tem[hash='"+window.location.hash.replace("#","")+"']").addClass("hl");
				var main=_.template(source.html[1])({user:result});
				source.target.find(".baseFrame_tem").html(main);
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				source.target.find("#open").unbind("click").bind("click",function(){
					result.wantOpen=1;
					result.tk=tk;
					obj.api.run("client_set",result,function(){
						window.location.reload();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
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
					if(callbackcount===2){
						source.reMessage();
						}
					};
					obj.api.run("tk_get",{tk:tk},function(returnData){
						if(returnData.user&&returnData.user.type&&returnData.user.type!==2){
							result=returnData.user;
							if(result.type===3){
								obj.api.run("deal_get_shop",{tk:tk},function(returnDataA){
									shopList=returnDataA;
									callbackfn();
								},function(e){
									obj.pop.on("alert",{text:(JSON.stringify(e))});
								});
							}else{
							callbackfn();	
							}
							
						}else{
							obj.pop.on("alert",{text:"请先登录"});
							obj.hash("login");
							return false;
						}
						
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("deal_get",{tk:tk},function(returnData){
						buyList=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
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