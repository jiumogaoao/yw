// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"borrowListUc",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var userList=[];
			var passArry=["未受理","已受理","已完成","已拒绝"];
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
					$.each(userList,function(i,n){
						showData.push({id:n.id,main:[n.id,n.linkMan,n.phone,n.money,passArry[n.state],"详情"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"借贷列表",
				button:[],
				head:[
					{"title":"借贷编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"联系人","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"联系电话","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"期望金额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
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
					obj.api.run("borrow_get",{tk:tk},function(clientList){
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