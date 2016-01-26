// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:[],
		fn:function(data){
			var tk="";
			var user={};
			var borrowList=[];
			var pomo={};
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
				obj.model.get("#main","borrowIndexSimple","borrowIndex",function(model){
					model.set({list:borrowList,pomo:pomo});
					model.show();
					model.reflash();
					model.target.find("#sendBorrow").unbind("click").bind("click",function(){
						if(user&&user.type){
							var sendData=model.result();
							if(!sendData.linkMan){
								obj.pop.on("alert",{text:"请输入联系人"});
								return false;
							}
							if(!sendData.birthday){
								obj.pop.on("alert",{text:"请输入出生年月"});
								return false;
							}
							if(!sendData.workPlace){
								obj.pop.on("alert",{text:"请输入工作地点"});
								return false;
							}
							if(!sendData.census){
								obj.pop.on("alert",{text:"请输入户籍"});
								return false;
							}
							if(!sendData.pay){
								obj.pop.on("alert",{text:"请输入户籍"});
								return false;
							}
							if(!sendData.house){
								obj.pop.on("alert",{text:"请选择房贷情况"});
								return false;
							}
							if(!sendData.car){
								obj.pop.on("alert",{text:"请选择车贷情况"});
								return false;
							}
							if(!sendData.card){
								obj.pop.on("alert",{text:"请输入身份证号"});
								return false;
							}
							if(!sendData.phone){
								obj.pop.on("alert",{text:"请输入手机号"});
								return false;
							}
							if(!sendData.money){
								obj.pop.on("alert",{text:"请输入期望金额"});
								return false;
							}
							sendData.tk=tk;
							obj.api.run("borrow_add",sendData,function(returnData){
								alert("申请成功");
								obj.hash("borrowListUc");
							},function(e){
								obj.pop.on("alert",{text:(JSON.stringify(e))});
							});
						}else{
							alert("请登录再提交");
						}
					});
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("tk_get",{tk:tk},function(returnData){
						user=returnData.user;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("borrow_success",{tk:tk},function(returnData){
						borrowList=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("promo_get",{tk:tk},function(returnData){
						pomo=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);