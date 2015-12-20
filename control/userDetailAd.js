// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"userDetailAd",
		par:["id"],
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
				
				obj.model.get("#main","adminCenterTemSimple","adminCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","userDetailAdForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"会员详情",
					nav:[],
					list:[
					{name:"id",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"userName",title:"用户名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"头像",placeholder:"",type:"singlePicSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"phone",title:"手机",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"email",title:"邮箱",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"balance",title:"余额",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"realName",title:"实名认证",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未认证",value:"0"},{label:"已认证",value:"1"}]},
					{name:"card",title:"银行卡认证",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未认证",value:"0"},{label:"已认证",value:"1"}]},
					{name:"company",title:"企业信息认证",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未认证",value:"0"},{label:"已认证",value:"1"}]},
					{name:"introducer",title:"介绍人",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"lastTime",title:"上次登录时间",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"lastIp",title:"上次登录IP",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"sendMessage",text:"重置密码"}]
					});
					model.reflash();
					model.show();
					model.target.find("#sendMessage").unbind("click").bind("click",function(){
						obj.api.run("reset_key",{tk:tk,id:data.id},function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("userListAd");
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
					obj.api.run("client_get",{tk:tk},function(returnData){
						result=_.indexBy(returnData,"id")[data.id];
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});	
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);