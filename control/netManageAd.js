// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"netManageAd",
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
					obj.model.get("#UC","borrowDetailForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"网站信息",
					nav:[],
					list:[
					{name:"logo",title:"logo",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"name",title:"公司名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"phone",title:"公司电话",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"mail",title:"客服邮箱",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"businessMail",title:"商务邮箱",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"公司地点",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"本地",value:"0"},{label:"异地",value:"1"}]},
					{name:"icp",title:"icp号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"host",title:"版权",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"本地",value:"0"},{label:"异地",value:"1"}]},
					{name:"wx",title:"微信二维码",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"wb",title:"微博二维码",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"已结清",value:"0"},{label:"未结清",value:"1"},{label:"无",value:"2"}]}
					],
					button:[{id:"sendMessage",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#sendMessage").unbind("click").bind("click",function(){
						var sendData={};
						sendData.tk=tk;
						sendData.any=model.result();
						obj.api.run("config_edit",sendData,function(returnData){
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
					obj.api.run("config_get",{tk:tk},function(returnData){
						result=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});	
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);