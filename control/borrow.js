// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"borrow",
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

				obj.model.get("#main","rootNavSimple","rootNav",function(model){
					model.show();
					model.reflash();
				});

				obj.model.get("#main","formInputSimple","formInput",function(model){
					model.set({
					title:"申请贷款",
					nav:[],
					list:[
					{name:"",title:"联系人",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"出生年月",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"现工作地",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"户籍",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"本地",value:""},{label:"异地",value:""}]},
					{name:"",title:"月收入",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"房贷情况",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"",title:"车贷情况",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"",title:"身份证号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"",title:"常用手机号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					],
					button:[{id:"",text:"提交"}]
					});
					model.show();
					model.reflash();
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