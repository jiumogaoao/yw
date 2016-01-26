// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"login",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
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
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				obj.model.get("#main","productAddForm","formInput",function(model){
						model.set({
					title:"登录",
					nav:[],
					list:[
					{name:"userName",title:"用户名",placeholder:"请填写用户名/手机号/邮箱",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"passWord",title:"密码",placeholder:"请填写密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"sendLogin",text:"登录"},{id:"sendReset",text:"忘记密码"}]
					});
					model.reflash();
					model.show();
						model.target.find("#sendLogin").unbind("click").bind("click",function(){
							var sendData=model.result();
							if(!sendData.userName){
								obj.pop.on("alert",{text:"请输入用户名"});
								return false;
							}
							if(!sendData.passWord){
								obj.pop.on("alert",{text:"请输入密码"});
								return false;
							}
							sendData.tk=tk;
							obj.api.run("login",model.result(),function(returnData){
								obj.hash("index");
							},function(e){
								obj.pop.on("alert",{text:(JSON.stringify(e))});
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
					callbackfn();
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);