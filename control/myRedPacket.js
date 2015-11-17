// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"myRedPacket",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list={};
			function page(sg){
				var showList=[];
				$.each(list,function(i,n){
					showList.push({id:n.id,main:[n.id,n.money,moment(n.strat,"x").format("YYYY-MM-DD"),n.type?"购买邀请奖励":"注册邀请奖励"]});
				});
				obj.model.get("#ucMain","myRedPacket","formTable",function(model){
				model.set({
				title:"红包记录",
				button:[],
				head:[
					{"title":"红包编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"红包金额/元","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发放时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"发放规则","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
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
							modelA.change("myRedPacket");
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
				obj.api.run("redpacket_get",{tk:tk},function(returnData){
					list=returnData;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);