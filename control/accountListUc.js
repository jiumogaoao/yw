// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountListUc",
		par:[],
		fn:function(data){
			var tk="";
			var accountList=[];
			var typeArry=["充值","提现"];
			var stateArry=["进行中","已完成"];
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
					var showData=[];
					$.each(accountList,function(i,n){
						showData.push({id:n.id,main:[n.id,typeArry[n.type],n.money,moment(n.time,"x").format("YYYY_MM_DD"),stateArry[n.state]]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"账单明细",
				button:[],
				head:[
					{"title":"账单编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"类型","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showData
				});
					model.reflash();
					model.show();
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
					obj.api.run("account_get",{tk:tk},function(returnData){
						accountList=returnData;
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