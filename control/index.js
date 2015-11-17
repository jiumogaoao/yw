// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:[],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var productArry=[];
			var pomo=[];
			function headLayput(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.show();
				});
			$("#head").hide();
			$("#spaceTop").hide();
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
				model.goto("pageOne",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===3){
							fn();
							}
						}
					obj.model.get(target,"banner","banner",function(modelA){
						modelA.set({
				image:[pomo["00"],pomo["01"],pomo["02"],pomo["03"]],
				object:objArry,
				type:0
				});
				obj.api.run("tk_get",{tk:tk},function(returnData){
							modelA.setType(returnData.user.type||0);
							modelA.reflash();
							modelA.show();
							callback(model);
							},function(e){alert(e);});
						});
					obj.model.get(target,"navIndex","navIndex",function(modelA){
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"listIndex","listIndex",function(modelA){
						$.each(objArry,function(i,n){
							if(n.list&&n.list.length){
								n.list=[];
							}
						});
						$.each(productArry,function(i,n){
							if(!objArry[n.object].list){
								objArry[n.object].list=[];
								}
								objArry[n.object].list.push(n);
							});
						modelA.set({
				list:objArry,
				type:typeArry
				});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					},{w:"100%"});
					
				});
				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===4){
						headLayput();
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
				obj.api.run("product_get",{tk:tk},function(returnData){
					productArry=returnData;
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("promo_get",{tk:tk},function(returnData){
					pomo=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);