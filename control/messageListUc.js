// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageListUc",
		par:[],
		fn:function(data){
			var tk="";
			var user={};
			var message=[];
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
				var messageObj={};
				$.each(message,function(i,n){
					if(n.from===user.id){
						if(!messageObj[n.to]){
							messageObj[n.to]={id:n.to,name:n.toName,count:0,time:0};
						}
						if(messageObj[n.to].time<n.time){
							messageObj[n.to].time=n.time;
						}
					}else{
						if(!messageObj[n.from]){
							messageObj[n.from]={id:n.from,name:n.fromName,count:0,time:0};
						}
						if(!n.readed){
							messageObj[n.from].count++;
						}
						if(messageObj[n.from].time<n.time){
							messageObj[n.from].time=n.time;
						}
					}
				});
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					var showData=[];
					var time=new Date().getTime();
					var showList=_.groupBy(message,"to")[user.id];
					$.each(messageObj,function(i,n){
						var count=0;
						showData.push({id:n.id,main:[n.name,n.count,moment(n.time,"x").format("YYYY-MM-DD"),"查看"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"消息列表",
				button:[],
				head:[
					{"title":"用户","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"未读消息数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"更新时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"查看","type":"button","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showData
				});
					model.reflash();
					model.show();
					model.target.find(".formButton").unbind("click").bind("click",function(){
						obj.hash("messageDetailUc/"+$(this).attr("D_id"));
						
						
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
					obj.api.run("message_get",{tk:tk},function(clientList){
						message=clientList;
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