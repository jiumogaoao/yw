// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealListUc",
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
						model.set({list:dealList,type:1});
					model.reflash();
					model.show();
					model.target.find("#send").unbind("click").bind("click",function(){
						obj.hash("sendUc/"+$(this).attr("pid"));
					});
					model.target.find("#checkBack").unbind("click").bind("click",function(){
						obj.api.run("deal_checkBack",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"退款成功"});
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
					if(callbackcount===1){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("deal_get_shop",{tk:tk},function(returnData){
						if(data.type==="0"){
							dealList=returnData;
						}else if(data.type==="1"){
							dealList=_.groupBy(returnData,"state")[1];
						}
						if(data.type==="2"){
							dealList=_.groupBy(returnData,"state")[2];
						}
						if(data.type==="3"){
							dealList=_.groupBy(returnData,"state")[6];
						}
						if(data.type==="4"){
							$.each(returnData,function(i,n){
								if(n.state===3||n.state===4||n.state===5){
									dealList.push(n);
								}
							});
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