// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myDetail",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var user={};
			function page(sg){
				obj.model.get("#ucMain","myDetail","formInput",function(model){
				model.set({
					title:"基本资料",
					nav:[{id:"realName",title:"实名认证"},{id:"cardBind",title:"银行卡绑定"}],
					list:[
					{name:"phone",title:"手机",placeholder:"",type:"input",value:user.phone,valuelabel:"",option:[{label:"",value:""}]},
					{name:"email",title:"邮箱",placeholder:"请填写邮箱",type:"input",value:user.email,valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"头像",placeholder:"支持JPG,JPEG,GIF,PNG,BMP格式，且不超过5M",type:"singlePic",value:user.image,valuelabel:"",option:[{label:"",value:""}]},
					{name:"userName",title:"昵称",placeholder:"请填写昵称",type:"input",value:user.userName,valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"textArea",value:user.dsc,valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"setSend",text:"保存"}]
					});
				model.setResult(user);
				model.reflash();
				model.target.find("#realName").unbind("click").bind("click",function(){
					obj.hash("myRealName");
					});
				model.target.find("#cardBind").unbind("click").bind("click",function(){
					obj.hash("myCardBind");
					});
				model.target.find("#setSend").unbind("click").bind("click",function(){
					var sendMessage=model.result();
					sendMessage.tk=tk;
					if(!sendMessage.phone){
						alert("请输入手机号")
						return false;
					}
					if(!sendMessage.email){
						alert("请输入邮箱")
						return false;
					}
					if(!sendMessage.image){
						alert("请上传头像")
						return false;
					}
					if(!sendMessage.userName){
						alert("请输入用户名")
						return false;
					}
					if(!sendMessage.dsc){
						alert("请输入简介")
						return false;
					}
					obj.api.run("set_detail",sendMessage,function(){
						alert("修改成功");
						},function(e){alert(e);});
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
				type:2
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
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.callback=function(){
							modelA.change("myDetail");
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						};
						modelA.set({
							object:objArry
						});
						modelA.reflash();
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
				obj.api.run("tk_get",{tk:tk},function(returnData){
					user=returnData.user;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);