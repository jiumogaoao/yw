// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"userRemoveAd",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list=[];
			function page(sg){
				var showList=[];
				$.each(list,function(i,n){
					showList.push({id:n.id,main:[n.id,n.userName,n.phone,n.email,false]});
				});
				obj.model.get("#acMain","userRemoveAd","formTable",function(model){
				model.set({
				title:"用户列表",
				button:[{id:"remove_send",text:"提交删除"}],
				head:[
					{"title":"用户编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"用户名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"手机","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"邮箱","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"删除","type":"checkbox","name":"remove","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
				model.target.find("#remove_send").unbind("click").bind("click",function(){
					obj.api.run("client_remove",{tk:tk,list:model.result().remove},function(){
						alert("删除成功");
						window.location.reload();
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
							modelA.change("userRemoveAd");
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
					if(callbackcount===3){
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
					typeArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("client_get",{tk:tk},function(returnData){
					list=returnData;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);