// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"broadcast",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var broadcast={};
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

				obj.model.get("#main","broadcastSimple","broadcast",function(model){
					model.setResult({broadcast:broadcast});
					model.show();
					model.reflash();

				});


				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("type_get",{tk:tk},function(returnData){
						typeArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("obj_get",{tk:tk},function(returnData){
						objArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("broadcast_get",{tk:tk},function(returnData){
						broadcast=_.indexBy(returnData,"id")[data.id];
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