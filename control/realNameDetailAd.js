// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"realNameDetailAd",
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
					obj.model.get("#UC","realNameDetailAdForm","formInput",function(model){
						model.setResult(result);
						var sendButton=[];
						if(!result.state){
							sendButton=[{id:"realSend",text:"通过审核"}];
					}
						model.set({ 
					title:"实名制信息",
					nav:[],
					list:[
					{name:"id",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"name",title:"真实姓名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"sex",title:"性别",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"女",value:"0"},{label:"男",value:"1"}]},
					{name:"cardType",title:"证件类型",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"身份证",value:"0"},{label:"回乡证",value:"1"}]},
					{name:"place",title:"地区",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"birthday",title:"生日",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"cardNumber",title:"证件号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"startTime",title:"开始时间",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"endTime",title:"结束时间",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"证件照",placeholder:"",type:"simplePic",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:sendButton
					});
					model.reflash();
					model.show();
					model.target.find("#realSend").unbind("click").bind("click",function(){
						obj.api.run("realName_pass",{tk:tk,id:data.id},function(returnData){
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
					obj.api.run("realName_list_get",{tk:tk},function(returnData){
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