// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"broadcastDetailAd",
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
					obj.model.get("#UC","broadcastAddAdForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"公告详情",
					nav:[],
					list:[
					{name:"title",title:"标题",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"start",title:"开始时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"end",title:"结束时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"message",title:"内容",placeholder:"",type:"richWord",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"objSend",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#objSend").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("broadcast_edit",sendData,function(returnData){
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
					obj.api.run("broadcast_get",{tk:tk},function(returnData){
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