// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"confirmUc",
		par:["id"],
		fn:function(data){
			var tk="";
			var deal={};
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","priceAddForm","formInput",function(model){
						model.set({
					title:"确认收货",
					nav:[],
					list:[
					{name:"id",title:"订单号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"startTime",title:"下单时间",placeholder:"simpleTime",type:"simpleTime",value:"",valuelabel:"",option:[]},
					{name:"totalPrice",title:"总价",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"password",title:"输入密码",placeholder:"",type:"password",value:"",valuelabel:"",option:[]}
					],
					button:[{id:"sendConfirm",text:"确认收货"}]
					});
					model.setResult(deal);	
					model.reflash();
					model.show();
					model.target.find("#sendConfirm").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("deal_confirm",sendData,function(){
							obj.pop.on("alert",{text:"提交成功"});
							obj.hash("buyListUc/0");
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
					obj.api.run("deal_get_shop",{tk:tk},function(returnData){
						deal=_.indexBy(returnData,"id")[data.id];
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