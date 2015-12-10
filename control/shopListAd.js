// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopListAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var userList=[];
			var passArry=["未通过","已通过"];
			var companyArry=["国营","外资","合资","民营"];
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
						showData.push({id:n.id,main:[n.id,n.name,n.linkMan,n.linkPhone,n.cardNumber,n.money,companyArry[n.type],passArry[n.state],"详情"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"店铺列表",
				button:[],
				head:[
					{"title":"店铺编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"店铺名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"好评数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"人气","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品总数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"在线商品数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
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
					obj.api.run("company_list_get",{tk:tk},function(clientList){
						userList=clientList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					})
					
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);