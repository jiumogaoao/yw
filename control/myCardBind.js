// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myCardBind",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var cardBind={};
			function page(sg){
				obj.model.get("#ucMain","myCardBind","formInput",function(model){
				model.set({
					title:"银行卡绑定",
					nav:[{id:"baseDetail",title:"基本资料"},{id:"realName",title:"实名认证"}],
					list:[
					{name:"name",title:"开户名",placeholder:"请填写开户名",type:"input",value:cardBind.name,valuelabel:"",option:[{label:"",value:""}]},
					{name:"number",title:"银行卡号",placeholder:"请填写银行卡号",type:"input",value:cardBind.number,valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"开户城市",placeholder:"请填写银行卡号",type:"longInput",value:cardBind.place,valuelabel:"",option:{"aa":{label:"",value:"",option:[]}}},
					{name:"bank",title:"开户支行",placeholder:"请填写银行卡号",type:"input",value:cardBind.bank,valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"editSend",text:"确认"}]
					});
				model.setResult(cardBind);
				model.reflash();
				model.target.find("#editSend").unbind("click").bind("click",function(){
					var sendMessage=model.result();
					sendMessage.tk=tk;
					if(!sendMessage.name){
						alert("请输入开户名")
						return false;
					}
					if(!sendMessage.number){
						alert("请填写开户银行卡号")
						return false;
					}
					if(!sendMessage.place){
						alert("请填写开户城市")
						return false;
					}
					if(!sendMessage.bank){
						alert("请填写开户支行")
						return false;
					}
					obj.api.run("cardBind_edit",sendMessage,function(){
						alert("修改成功");
						},function(e){alert(e);});
					});
				model.target.find("#baseDetail").unbind("click").bind("click",function(){
					obj.hash("myDetail");
					});
				model.target.find("#realName").unbind("click").bind("click",function(){
					obj.hash("myRealName");
					});
				model.show();
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
				obj.api.run("cardBind_get",{tk:tk},function(returnData){
					cardBind=returnData[0];
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);