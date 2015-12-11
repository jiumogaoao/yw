// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"realNameUc",
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","baseMessageForm","formInput",function(model){
						model.set({
					title:"店铺信息",
					nav:[],
					list:[
					{name:"name",title:"真实姓名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"sex",title:"性别",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"女",value:"0"},{label:"男",value:"1"}]},
					{name:"cardType",title:"证件类型",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"身份证",value:"0"},{label:"回乡证",value:"1"}]},
					{name:"place",title:"地区",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"birthday",title:"生日",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"cardNumber",title:"证件号",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"startTime",title:"开始时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"endTime",title:"结束时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"证件照",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"提交修改"}]
					});
					model.reflash();
					model.show();
						
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
				getList("wdcfv");
			//obj.api.tk(getList);
			}
		});
	})($,app,config);