// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productListUc",
		par:["type"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var productList=[];
			var user={};
			var stateArry=["未审核","已通过","未通过"];
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
					var time=new Date().getTime();
					var showResult=_.groupBy(productList,"shopId")[user.id];
					if(data.type==="1"){
						showResult=_.filter(showResult,function(point){return point.stratTime>time});
					}else if(data.type==="0"){
						showResult=_.filter(showResult,function(point){return point.stratTime<=time&&point.endTime>=time});
					}else{
						showResult=_.filter(showResult,function(point){return point.endTime<time});
					}
					$.each(showResult,function(i,n){
						var count=0;
						$.each(n.price,function(x,y){
							count+=y.count;
						})
						showData.push({id:n.id,main:[n.id,n.title,moment(n.stratTime,"x").format("YYYY_MM_DD"),moment(n.endTime,"x").format("YYYY_MM_DD"),n.member.length,count,n.star,stateArry[n.state],"详情"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"商品列表",
				button:[],
				head:[
					{"title":"商品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"上架时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"下架时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"销量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"库存","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"好评数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[]},
					{"title":"详情","type":"button","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showData
				});
					model.reflash();
					model.show();
					model.target.find(".formButton").unbind("click").bind("click",function(){
						obj.hash("productDetailUc/"+$(this).attr("D_id"));
					});
					});
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===2){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("product_get",{tk:tk},function(clientList){
						productList=clientList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("tk_get",{tk:tk},function(returnMessage){
						user=returnMessage.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);