// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"objListAd",
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
				
				obj.model.get("#main","adminCenterTemSimple","adminCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","companyDetailAdForm","formInput",function(model){
						model.setResult(result);
						var sendButton=[];
						if(!result.state){
							sendButton=[{id:"cardSend",text:"通过审核"}]
					}
						model.set({
					title:"栏目信息",
					nav:[],
					list:[
					{name:"obj",title:"栏目",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:sendButton
					});
					model.reflash();
					model.show();
					model.target.find("#sendCompany").unbind("click").bind("click",function(){
						obj.api.run("company_pass",{tk:tk,id:data.id},function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("companyListAd");
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
					obj.api.run("company_list_get",{tk:tk},function(returnData){
						result=_.index(returnData,"id")[data.id];
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