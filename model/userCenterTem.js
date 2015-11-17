// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"userCenterTem",
		css:["user_center_tem"],
		html:["user_center_tem"],
		fn:function(){
			var tk="";
			
			var data={
				object:[
					{id:"a",name:"产权众筹"},
					{id:"b",name:"经营权众筹"},
					{id:"c",name:"众筹建房"},
				]
				};
			var point="myAccount";
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
			source.reflash=function(){
				var product=[];
			var deal=[];
			var user={};
				function layout(){
					data.balance=user.balance;
					data.redpacket=user.redpacket;
					data.phone=user.phone;
					data.image=user.image;
					data.order=0;
					data.buy=0;
					$.each(deal,function(i,n){
						if(product[n.productId]){
							data.order++;
						}else{
							data.buy++;
						}
					});
					var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.callback();
				source.target.find("#moneyIn").unbind("click").bind("click",function(){
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
				source.target.find("#moneyOut").unbind("click").bind("click",function(){
					obj.model.get("#pop","moneyOut","pop",function(model){
						model.set({
						title:"提现确认",
						button:[{id:"outSend",text:"确认提现"}],
						list:[
							{name:"number",title:"提现金额",placeholder:"",type:"number",value:"0",valuelabel:"",option:[{label:"",value:""}]}
						]
						});
						model.reflash();
						model.target.find("#outSend").unbind("click").bind("click",function(){
							var sendData=model.result();
							sendData.tk=tk;
							obj.api.run("money_out",sendData,function(){
								alert("提现成功");
								window.location.reload();
							},function(e){alert(e);});
						});
						model.show();
						app.pop.show();
					});
				});
				change();
				source.target.find(".group_tem").unbind("click").bind("click",function(){
					source.target.find(".group_tem").removeClass("hl");
					$(this).addClass("hl");
					});
				source.target.find(".point_tem").unbind("click").bind("click",function(){
					obj.hash($(this).attr("pid"));
					});
				}
				function getBase(tka){
					tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						layout();
						}
					};
				obj.api.run("product_get",{tk:tk},function(returnData){
					var now=new Date().getTime();
					$.each(returnData,function(i,n){
						if(n.stratTime>now){
							product.push(n);
						}
					});
					product=_.indexBy(product,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("deal_get",{tk:tk},function(returnData){
					$.each(returnData,function(i,n){
						if(!n.endTime){
							deal.push(n);
						}	
					});
					deal=_.indexBy(deal,"id");
					callbackfn();
					},function(){});
				obj.api.run("tk_get",{tk:tk},function(returnData){
					user=returnData.user;
					callbackfn();
					},function(){});
				}
				obj.api.tk(getBase);
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