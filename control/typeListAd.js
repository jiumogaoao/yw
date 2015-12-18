// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeListAd",
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
					var showData=[];
					$.each(result,function(i,n){
						showData.push({id:n.id,main:[n.id,n.name,"修改","删除"]});
					});
					obj.model.get("#UC","realNameSimple","formTable",function(model){
					model.set({
				title:"标签列表",
				button:[{id:"addType",text:"添加标签"}],
				head:[
					{"title":"标签编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"标签名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"修改","type":"button","name":"edit","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"删除","type":"button","name":"remove","placeholder":"","option":[{"label":"","value":""}]},
					],
				list:showData
				});
					model.reflash();
					model.show();
					model.target.find(".formButton[D_key='edit']").unbind("click").bind("click",function(){
						obj.hash("typeEditAd/"+$(this).attr("D_id"));
					});
					model.target.find(".formButton[D_key='remove']").unbind("click").bind("click",function(){
						obj.api.run("type_remove",{tk:tk,id:$(this).attr("D_id")},function(){
							alert("删除成功");
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						})
					});
					model.target.find("#addType").unbind("click").bind("click",function(){
						obj.hash("typeAddAd");
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
						result=returnData;
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