// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myRealName",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var realName={};
			function page(sg){
				obj.model.get("#ucMain","myRealName","myRealName",function(model){
				model.set(realName);
				model.reflash();
				model.target.find("#editSend").unbind("click").bind("click",function(){
					var sendMessage=model.result();
					sendMessage.tk=tk;
					if(!sendMessage.name){
						alert("请输入真实姓名")
						return false;
					}
					if(!sendMessage.cardNumber){
						alert("请输入证件号")
						return false;
					}
					obj.api.run("realName_edit",sendMessage,function(){
						alert("修改成功");
						},function(e){alert(e);});
					});
				model.show();
				model.typeChange=function(){
					sg.reflash();
					};
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
			function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
				}
			function footLayout(){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function mainLayout(){
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){modelA.reflash();
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						});
					},{w:"100%"});
					
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						headLayout();
				footLayout();
				mainLayout();
						}
					};
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("realName_get",{tk:tk},function(returnData){
					realName=returnData[0];
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);