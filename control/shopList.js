// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopList",
		par:["object","type","brand","tag","sort","title"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var brandArry=[];
			var tagArry=[];
			var productArry=[];
			var user={};
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
				
				obj.model.get("#main","searchNavSimple","searchNav",function(model){
					model.setResult({
						objArry:objArry,
						typeArry:typeArry,
						brandArry:brandArry,
						tagArry:tagArry,
						productArry:productArry,
						search:search
					});
					model.show();
					model.reflash();
				});
				var searchList=[];
				var searchObject=function(point){
					if(search.object==="all"){
						searchType(point);
					}else{
						if(point.object[0]===search.object){
							searchType(point);
						}
					}
				}
				var searchType=function(point){
					if(search.type==="all"){
						searchBrand(point);
					}else{
						if(point.object[1]===search.type){
							searchBrand(point);
						}
					}
				}
				var searchBrand=function(point){
					if(search.brand==="all"){
						searchTag(point);
					}else{
						if(point.object[3]===search.brand){
							searchTag(point);
						}
					}
				}
				var searchTag=function(point){
					if(search.tag==="all"){
						searchList.push(point);
					}else{
						var pushed=0;
						$.each(point.tag,function(i,n){
							if(n===search.tag&&!pushed){
								pushed=1;
								searchList.push(point);
							}
						})
						
					}
				}
				obj.model.get("#main","productListSimple","productList",function(model){
					searchList=[];
					$.each(productArry,function(i,n){
						searchObject(n);
					});
					if(search.sort==="0"){
						searchList=_.sortBy(searchList,function(point){
							return Math.sin(point.visit);
						});
					}else if(search.sort==="1"){
						searchList=_.sortBy(searchList,function(point){
							return Math.sin(point.star);
						});
					}else{
						searchList=_.sortBy(searchList,function(point){
							return Math.sin(point.price);
						});
					}
					model.setResult(searchList);
					model.show();
					model.reflash();
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
					obj.api.run("type_get",{tk:tk},function(returnData){
						tagArry=returnData;
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					obj.api.run("obj_get",{tk:tk},function(returnData){
						var returnObj=_.groupBy(returnData,"parentId");
						objArry=returnObj.all;
						$.each(objArry,function(i,n){
							if(returnObj[n.id]){
								$.each(returnObj[n.id],function(x,y){
									typeArry.push(y);
									if(returnObj[y.id]){
										$.each(returnObj[y.id],function(o,p){
											brandArry.push(p);
										})
									}
								})
							}
						});
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
					obj.api.run("tk_get",{tk:tk},function(returnData){
						user=returnData.user;
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