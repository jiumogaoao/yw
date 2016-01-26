// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageDetailUc",
		par:["id"],
		fn:function(data){
			var tk="";
			var result=[];
			var user={};
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

						obj.api.run("message_edit",{tk:tk,id:data.id},function(){
							
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					var messageList=[];
					var newmessage={
						id:uuid(),
						from:user.id,
						to:data.id,
						readed:false
					};
					function relist(){
						messageList=[];
						$.each(result,function(i,n){
							if(n.from===data.id||n.to===data.id){
								messageList.push(n);
							}
							if(!newmessage.fromName){
								if(n.from===data.id){
									newmessage.fromName=n.toName;
									newmessage.toName=n.fromName;
								}else{
									newmessage.fromName=n.fromName;
									newmessage.toName=n.toName;
								}
							}
						});}
						relist();
						obj.model.get("#UC","messageDetailUcForm","talk",function(model){
						model.setResult(messageList);
						model.set({id:user.id});
					model.reflash();
					model.show();
					function remessage(){
						obj.api.run("message_get",{tk:tk},function(returnData){
						result=returnData;
						relist();
						model.setResult(messageList);
						model.relist();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});	
					}
					;(function(){
						obj.heart=setInterval(function(){
							remessage();
						},3000);
					})();
					model.target.find(".answerButton").unbind("click").bind("click",function(){
						if(!model.target.find("input").val()){
							return false;
						}
						var sendData={};
						sendData.tk=tk;
						sendData.message=newmessage;
						sendData.message.message=model.target.find("input").val();
						sendData.message.time=new Date().getTime();
						obj.api.run("message_add",sendData,function(returnData){
							model.target.find("input").val("");
							remessage();
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
					if(callbackcount===2){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("message_get",{tk:tk},function(returnData){
						result=returnData;
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