// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"baseMessageUc",
		par:[],
		fn:function(data){
			var tk="";
			var result={};
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
					obj.model.get("#UC","baseMessageForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"基本信息",
					nav:[],
					list:[
					{name:"userName",title:"用户名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"头像",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"phone",title:"手机",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"email",title:"邮箱",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"sendMessage",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#sendMessage").unbind("click").bind("click",function(){
						var sendData=model.result();
						if(!sendData.userName){
								obj.pop.on("alert",{text:"请先输入用户名"});
								return false;
							}
						if(!sendData.image){
								obj.pop.on("alert",{text:"请先上传图像"});
								return false;
							}
						if(!sendData.phone){
								obj.pop.on("alert",{text:"请先输入手机号"});
								return false;
							}
						if(!sendData.email){
								obj.pop.on("alert",{text:"请先输入邮箱"});
								return false;
							}
						if(!sendData.dsc){
								obj.pop.on("alert",{text:"请先输入简介"});
								return false;
							}	
						sendData.tk=tk;
						obj.api.run("client_set",sendData,function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
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
					obj.api.run("tk_get",{tk:tk},function(returnData){
						result=returnData.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});	
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);