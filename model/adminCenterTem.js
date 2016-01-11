// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"adminCenterTem",
		css:["user_center_tem"],
		html:["admin_center_tem","admin_message"],
		fn:function(){
			var data={
				};
			var tk="";
			var point="projectAddAd";
			var result={};
			var userList=[];
			var dealList=[];
			var	productList=[];	
			var total=0;		
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
			source.reMessage=function(){
				result.memberCount=0;
				result.shopCount=0;
				result.dealCount=0;
				result.moneyCount=0;
				result.noPay=0;
				result.pay=0;
				result.send=0;
				result.receive=0;
				result.com=0;
				result.cancel=0;
				result.back=0;
				result.total=total;
				$.each(userList,function(i,n){
					result.memberCount++;
					result.moneyCount+=n.balance;
					if(n.type===3){
						result.shopCount+=1;
					}
				});
				result.productCount=productList.length||0;
				$.each(dealList,function(i,n){
					result.dealCount++;
					if(n.state===0){
						result.noPay++;
					}else if(n.state===1){
						result.pay++;
					}else if(n.state===2){
						result.send++;
					}else if(n.state===3){
						result.receive++;
					}else if(n.state===4){
						result.com++;
					}else if(n.state===5){
						result.cancel++;
					}else if(n.state===6){
						result.back++;
					}
				});
				var main=_.template(source.html[1])({result:result});
				source.target.find(".baseFrameBottom_tem").html(main);
			};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);
				source.target.find(".nav_tem[hash='"+window.location.hash.replace("#","")+"']").addClass("hl");
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				source.reMessage();
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===4){
						source.reMessage();
						}
					};
					
					obj.api.tk(function(tka){
						tk=tka;
						obj.api.run("client_get",{tk:tk},function(returnData){
							userList=returnData;
							callbackfn();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
						obj.api.run("deal_getAll",{tk:tk},function(returnData){
							dealList=returnData;
							callbackfn();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
						obj.api.run("product_get",{tk:tk},function(returnData){
							productList=returnData;
							callbackfn();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
						obj.api.run("total_view",{tk:tk},function(returnData){
							total=returnData.number;
							callbackfn();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
				};
			source.change=function(id){
				point=id;
				change();
				};
			//set
			source.set=function(data){};
			source.callback=function(){};
			}
		});
	})($,app,config);