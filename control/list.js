// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"list",
		par:["object"],
		fn:function(data){
			var objArry={};
			var typeArry={};
			var list=[];
			var pomo=[];
			function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:0
				});
				model.reflash();
				model.change(data.object);
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
				var now=new Date().getTime();
				var nostart=[];
				var started=[];
				var end=[];
				$.each(list,function(i,n){
					if(n.orderTime<now){
						if(n.stratTime>now){
							nostart.push(n);
							}else if(n.stratTime<=now&&n.payedCount>=n.passNumber&&n.payedCount<n.copy){
								started.push(n);
								}else{
									end.push(n);
									}
						}
					});
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTree",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===5){
							fn();
							}
						}
					obj.model.get(target,"productList1","productList",function(modelA){
						modelA.set({list:nostart,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"pomoTableA","pomoTableA",function(modelA){
						modelA.set({image:[
			pomo["04"],
			pomo["05"],
			pomo["06"],
			pomo["07"],
			pomo["08"]
			]
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"productList2","productList",function(modelA){
						modelA.set({list:started,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"pomoTableB","pomoTableB",function(modelA){
						modelA.set({image:[
			pomo["09"],
			pomo["10"],
			pomo["11"],
			pomo["12"],
			pomo["13"]
			]
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					obj.model.get(target,"productList3","productList",function(modelA){
						modelA.set({list:end,
			type:typeArry
			});
						modelA.reflash();
						modelA.show();
					callback(model);
						});
					},{w:"100%"});
					
				});
				}
			
			function getObj(tk){
				var callbackCount=0;
				function callback(){
					callbackCount++;
					if(callbackCount===4){
						headLayout();
						footLayout();
						mainLayout();
						}
					}
				obj.api.run("product_get",null,function(returnData){
					console.log(returnData);
					list=[];
					$.each(returnData,function(i,n){
						if(n.object===data.object){
							list.push(n);
							}
						});
					callback();
					},function(e){alert(e);});
				obj.api.run("obj_get",null,function(returnData){
					objArry=_.indexBy(returnData,"id");
					callback();
					},function(e){alert(e);});
				obj.api.run("type_get",null,function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callback();
					},function(e){alert(e);});
				obj.api.run("promo_get",{tk:tk},function(returnData){
					pomo=_.indexBy(returnData,"id");
					callback();
					},function(e){alert(e);});
				}
			obj.api.tk(getObj);
			}
		});
	})($,app,config);