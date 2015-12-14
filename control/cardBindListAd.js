// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cardBindListAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var userList=[];
			var passArry=["未通过","已通过"];
			var sexArry=["女","男"];
			var cardType=["身份证","回乡证"];
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
					var showData=[];
					$.each(userList,function(i,n){
						showData.push({id:n.id,main:[n.id,n.name,n.number,n.place,n.bank,passArry[n.state],"详情"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"银行卡绑定列表",
				button:[],
				head:[
					{"title":"会员编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开户名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"银行卡号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开户城市","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开户支行","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"审核状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"详情","type":"button","name":"","placeholder":"","option":[{"label":"","value":""}]}
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
					obj.api.run("cardBind_list_get",{tk:tk},function(clientList){
						userList=clientList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);