// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"userListAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var userList=[];
			var passArry=["未通过","已通过"];
			var bindArry=["未绑定","已绑定"];
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
						showData.push({id:n.id,main:[n.id,n.userName,n.phone,n.email,passArry[n.realName],bindArry[n.card],passArry[n.company],n.balance,"详情"]});
					});
					obj.model.get("#UC","formTableSimple","formTable",function(model){
					model.set({
				title:"会员列表",
				button:[],
				head:[
					{"title":"会员编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"用户名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"手机号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"邮箱","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"实名认证","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"绑定银行卡","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"店铺信息认证","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"帐号余额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
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
					obj.api.run("client_get",{tk:tk},function(clientList){
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