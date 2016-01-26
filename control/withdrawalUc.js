// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"withdrawalUc",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var shop={};
			var productArry=[];
			var pomo=[];
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
				var objOption={};
				var typeOption=[];
				$.each(objArry,function(i,n){
					if(!objOption[n.parentId]){
						objOption[n.parentId]=[];
					}
					objOption[n.parentId].push({label:n.name,value:n.id});
				});
				$.each(typeArry,function(i,n){
					typeOption.push({label:n.name,value:n.id});
				});
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					var shopType=[];
					$.each(shop.shopType,function(i,n){
						shopType.push({label:n.name,value:n.id});
					});
					obj.model.get("#UC","rechargeUcForm","formInput",function(model){
						model.set({
					title:"提现金额",
					nav:[],
					list:[
					{name:"number",title:"提现金额",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"rechargeAdd",text:"提现"}]
					});
					model.reflash();
					model.show();
					model.target.find("#rechargeAdd").unbind("click").bind("click",function(){
						var sendData=model.result();
						if(!sendData.number){
							obj.pop.on("alert",{text:"请先输入提现金额"});
								return false;
						}
						sendData.tk=tk;
						obj.api.run("money_out",sendData,function(returnData){
							obj.pop.on("alert",{text:"提交成功"});
							window.location.reload();
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
					if(callbackcount===3){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("type_get",{tk:tk},function(returnData){
						typeArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("obj_get",{tk:tk},function(returnData){
						objArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("tk_get",{tk:tk},function(returnData){
						shop=returnData.user;
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