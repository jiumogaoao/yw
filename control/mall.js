// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"mall",
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
				});
				obj.model.get("#main","indexpomo","indexPomo",function(model){
					var objObj=_.groupBy(objArry,"parentId");
					var showData={
						left:{}
					};
					$.each(objObj.all,function(i,n){
						if(objObj[n.id]){
							showData.left[n.id]={title:"",id:n.id,list:{}};
							$.each(objObj[n.id],function(x,y){
								showData.left[n.id].title+=x?("、"+y.name):(y.name);
								showData.left[n.id].list[y.id]={title:y.name,id:y.id,list:objObj[y.id]||[]};
							});
						}
					});
					model.setResult(showData);
					model.show();
					model.reflash();
				});
				var listData=[];
				var productGroup=_.groupBy(objArry,"parentId");
				$.each(productGroup.all,function(i,n){
					var groupRoot={
						title:n.name,
						nav:[],
						product:[]
					}
					$.each(productGroup[n.id],function(x,y){
						groupRoot.nav.push(y);
					});
					$.each(productArry,function(x,y){
						if(y.object[0]===n.id){
						groupRoot.product.push(y);	
						}
					});
					listData.push(groupRoot);
				});
				obj.model.get("#main","indexlist","indexList",function(model){
					model.setResult(listData);
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