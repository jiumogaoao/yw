// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myAccount",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list=[];
			function page(sg){
				var showList=[];
				$.each(list,function(i,n){
					showList.push({id:n.id,main:[n.id,n.money,moment(n.time,"x").format("YYYY-MM-DD"),(n.type==="0")?"充值":"提现",(n.state==="0")?"进行中":"已完成"]});
				});
				obj.model.get("#ucMain","myAccount","formTable",function(model){
				model.set({
				title:"收支记录",
				button:[],
				head:[
					{"title":"收支编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支金额/元","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支类型","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"收支状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
				model.reflash();
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
				type:2
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
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.callback=function(){
							modelA.change("myAccount");
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						};
						modelA.set({
							object:objArry
						});
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
				obj.api.run("money_get",{tk:tk},function(returnData){
					list=returnData;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);