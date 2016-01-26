// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"broadcastListAd",
		par:[],
		fn:function(data){
			var tk="";
			var broadcast=[];
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
					$.each(broadcast,function(i,n){
						showData.push({id:n.id,main:[n.id,n.title,moment(n.start,"x").format("YYYY-MM-DD"),moment(n.end,"x").format("YYYY-MM-DD"),"详情"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"公告列表",
				button:[{id:"addBroadcast",text:"添加公告"}],
				head:[
					{"title":"公告编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"标题","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"开始时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"结束时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"详情","type":"button","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showData
				});
					model.reflash();
					model.show();
					model.target.find("#addBroadcast").unbind("click").bind("click",function(){
						obj.hash("broadcastAddAd");
					});
					model.target.find(".formButton").unbind("click").bind("click",function(){
						obj.hash("broadcastDetailAd/"+$(this).attr("D_id"));
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
					obj.api.run("broadcast_get",{tk:tk},function(clientList){
						broadcast=clientList;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);