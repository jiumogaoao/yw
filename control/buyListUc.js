// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"buyListUc",
		par:["type"],
		fn:function(data){
			var tk="";
			var dealList=[];
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
					obj.model.get("#UC","dealListUcForm","dealList",function(model){
						model.set({list:dealList,type:0});
					model.reflash();
					model.show();
					model.target.find("#cancel").unbind("click").bind("click",function(){
						obj.api.run("deal_cancel",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"取消成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					model.target.find("#pay").unbind("click").bind("click",function(){
						obj.api.run("deal_pay",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"支付成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					model.target.find("#check").unbind("click").bind("click",function(){
						obj.hash("confirmUc/"+$(this).attr("pid"));
					});
					model.target.find("#back").unbind("click").bind("click",function(){
						obj.api.run("deal_back",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"申请成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					model.target.find("#common").unbind("click").bind("click",function(){
						obj.hash("comAddUc/"+$(this).attr("pid"));
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
					obj.api.run("deal_get",{tk:tk},function(returnData){
						if(data.type==="0"){
							dealList=returnData;
						}else if(data.type==="1"){
							dealList=_.groupBy(returnData,"state")[0];
						}
						if(data.type==="2"){
							dealList=_.groupBy(returnData,"state")[1];
						}
						if(data.type==="3"){
							dealList=_.groupBy(returnData,"state")[5];
						}
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