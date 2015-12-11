// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"companyUc",
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
					title:"企业信息",
					nav:[],
					list:[
					{name:"name",title:"公司名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"地区",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"money",title:"注册资金",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"email",title:"邮箱",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"type",title:"企业类型",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"国营",value:"0"},{label:"外资",value:"1"},{label:"合资",value:"2"},{label:"民营",value:"3"}]},
					{name:"linkMan",title:"联系人",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"linkPhone",title:"联系电话",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"cardNumber",title:"执照号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
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