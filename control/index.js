// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:[],
		fn:function(data){
			var tk="";
			var user={};
			var borrowList=[];
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
					model.set(borrowList);
					model.show();
					model.reflash();
					model.target.find("#sendBorrow").unbind("click").bind("click",function(){
						if(user&&user.type){
							var sendData=model.result();
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
					if(callbackcount===2){
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
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);