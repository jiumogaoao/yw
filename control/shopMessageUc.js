// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopMessageUc",
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","baseMessageForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"店铺信息",
					nav:[],
					list:[
					{name:"shopName",title:"店名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopIcon",title:"店铺logo",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopBanner",title:"店铺banner",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopDesc",title:"店铺简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopPlace",title:"店铺地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopType",title:"销售类型",placeholder:"",type:"optionAdd",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"sendShop",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#sendShop").unbind("click").bind("click",function(){
						var sendData=model.result();
						if(!sendData.shopName){
								obj.pop.on("alert",{text:"请先输入店名"});
								return false;
							}
						if(!sendData.shopIcon){
								obj.pop.on("alert",{text:"请先上传店铺logo"});
								return false;
							}
						if(!sendData.shopBanner){
								obj.pop.on("alert",{text:"请先上传店铺banner"});
								return false;
							}
						if(!sendData.shopDesc){
								obj.pop.on("alert",{text:"请先输入店铺简介"});
								return false;
							}
						if(!sendData.shopPlace){
								obj.pop.on("alert",{text:"请先输入店铺地点"});
								return false;
							}
						if(!sendData.shopType){
								obj.pop.on("alert",{text:"请先添加销售类型"});
								return false;
							}
						sendData.tk=tk;
						obj.api.run("client_set",sendData,function(returnData){
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
					obj.api.run("tk_get",{tk:tk},function(returnData){
						result=returnData.user;
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