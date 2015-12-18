// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeAddAd",
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
					obj.model.get("#UC","typeAddAdForm","formInput",function(model){
						model.setResult(result);
						model.set({
					title:"添加标签",
					nav:[],
					list:[
					{name:"name",title:"标签名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"typeSend",text:"提交标签"}]
					});
					model.reflash();
					model.show();
					model.target.find("#typeSend").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("type_add",sendData,function(returnData){
							obj.pop.on("alert",{text:"新增成功"});
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

					callbackfn();
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);