// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"typeRemoveAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var list=[];
			function page(sg){
				obj.model.get("#acMain","projectRemoveAd","formTable",function(model){
					var showList=[];
					$.each(list,function(i,n){
						showList.push({id:n.id,main:[n.id,n.name,"99","99",false]});
						});
				model.set({
				title:"类型列表",
				button:[{id:"removeSend",text:"提交删除"}],
				head:[
					{"title":"类型编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"类型名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"正在进行的商品数量","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"删除","type":"checkbox","name":"remove","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
				model.target.find("#removeSend").unbind("click").bind("click",function(){
						obj.api.run("type_remove",{tk:tk,list:model.result().remove},function(){
							obj.hash("typeListAd");
							},function(e){alert(e);});
					});
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
				function headLayout(){
					obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
					}
				function footLayout(){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});	
					}
				function mainLayout(){
					obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"adminCenterTem","adminCenterTem",function(modelA){
						modelA.callback=function(){
							modelA.change("typeRemoveAd");
							modelA.clean();
							modelA.show();
							page(model);
							callback();
						};
						modelA.reflash();
						});
					},{w:"100%"});
					
				});
					}
			
function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===2){
						headLayout();
				footLayout();
				mainLayout();
						}
					};
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("type_get",{tk:tk},function(returnData){
					list=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);