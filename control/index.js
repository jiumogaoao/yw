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
				})
				obj.model.get("#main","indexpomo","indexPomo",function(model){
					model.show();
					model.reflash();
				})
				/*
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageOne",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===0){
							fn();
							}
						}
						/*
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
				*/
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
				getList("wdcfv");
			//obj.api.tk(getList);
			}
		});
	})($,app,config);