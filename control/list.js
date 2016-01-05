// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"list",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var tagArry=[];
			var productArry=[];
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
					model.set(data.id);
					model.show();
					model.reflash();
				});
				var showData={};
				$.each(objArry[data.id],function(i,n){
					showData[n.id]=n;
					showData[n.id].list=[];
				});
				$.each(productArry,function(i,n){
					var pushed=0;
					$.each(n.object,function(x,y){
						if(!pushed&&showData[y]){
							pushed=1;
							showData[y].list.push(n);
						}
					});
				});

				

				$.each(showData,function(i,n){
					obj.model.get("#main","productTitleSimple"+i,"productTitle",function(model){
						model.setResult(n);
						model.show();
						model.reflash();
					});

					obj.model.get("#main","productListSimple"+i,"productList",function(model){
						model.setResult(n.list);
						model.show();
						model.reflash();
					});
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
						tagArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("obj_get",{tk:tk},function(returnData){
						objArry=_.groupBy(returnData,"parentId");
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("product_get",{tk:tk},function(returnData){
						productArry=returnData;
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