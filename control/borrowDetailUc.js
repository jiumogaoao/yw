// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"borrowDetailUc",
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","borrowDetailUcForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"借贷详情",
					nav:[],
					list:[
					{name:"id",title:"借贷编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"user",title:"用户编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"linkMan",title:"联系人",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"birthday",title:"生日",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"workPlace",title:"工作地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"census",title:"户籍",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"本地",value:"0"},{label:"异地",value:"1"}]},
					{name:"pay",title:"月薪",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"house",title:"房贷",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:"0"},{label:"未结清",value:"1"},{label:"无",value:"2"}]},
					{name:"car",title:"车贷",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"已结清",value:"0"},{label:"未结清",value:"1"},{label:"无",value:"2"}]},
					{name:"card",title:"身份证号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"phone",title:"联系手机",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"money",title:"借款金额",placeholder:"",type:"number",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"state",title:"状态",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"未受理",value:"0"},{label:"已受理",value:"1"},{label:"已完成",value:"2"},{label:"已拒绝",value:"3"}]}
					],
					button:[{id:"sendMessage",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#sendMessage").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						sendData.state=Number(sendData.state);
						obj.api.run("borrow_edit",sendData,function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("borrowListAd");
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
					obj.api.run("borrow_get",{tk:tk},function(returnData){
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