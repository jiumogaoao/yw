// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeEditAd",
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
					obj.model.get("#UC","typeAddAdForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"修改标签",
					nav:[],
					list:[
					{name:"name",title:"标签名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"typeSend",text:"提交修改"}]
					});
					model.reflash();
					model.show();
					model.target.find("#typeSend").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("type_edit",sendData,function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("typeListAd");
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
					obj.api.run("type_get",{tk:tk},function(returnData){
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