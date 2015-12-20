// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cardBindDetailAd",
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
					obj.model.get("#UC","cardBindDetailAdForm","formInput",function(model){
						model.setResult(result);
						var sendButton=[];
						if(!result.state){
							sendButton=[{id:"cardSend",text:"通过审核"}]
					}
						model.set({
					title:"银行卡绑定",
					nav:[],
					list:[
					{name:"id",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"name",title:"开户名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"number",title:"银行卡",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"开户城市",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"bank",title:"开户支行",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"state",title:"状态",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未通过",value:"0"},{label:"通过",value:"1"}]}
					],
					button:sendButton
					});
					
					model.reflash();
					model.show();
					model.target.find("#cardSend").unbind("click").bind("click",function(){
						obj.api.run("cardBind_pass",{tk:tk,id:data.id},function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("cardBindListAd");
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
					
					obj.api.run("cardBind_list_get",{tk:tk},function(returnData){
						result=_.indexBy(returnData,"id")[data.id];
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