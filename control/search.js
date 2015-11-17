// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"search",
		par:["object","type","state","order"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var list=[];
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
				obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(sg){
						$('img').load(function(){
				sg.reflash();
				});
						count++;
						if(count===2){
							fn();
							}
						}
					obj.model.get(target,"searchList","searchList",function(modelA){
						modelA.set({
							typeList:typeArry,
							stateList:[{id:"1",name:"预约中"},{id:"2",name:"进行中"},{id:"3",name:"已结束"}],
							orderList:[{id:"1",name:"时间"},{id:"2",name:"人气"},{id:"3",name:"金额"}]
						});
						modelA.setResult({
							type:data.type,
							state:data.state,
							order:data.order
						});
						modelA.reflash();
						modelA.callback=function(selectData){
							obj.hash("search/"+data.object+"/"+selectData.type+"/"+selectData.state+"/"+selectData.order);
						};
						modelA.show();

					callback(model);
						});
					obj.model.get(target,"productList","productList",function(modelA){
						var now=new Date().getTime();
						var showList=[];
						function checkState(n){
							if(data.state!=="0"){
								if(data.state==="1"&&n.orderTime<=now&&n.stratTime>=now){
									showList.push(n);
								}
								if(data.state==="2"&&n.stratTime<=now&&n.payedCount>=n.passNumber&&n.payedCount<n.copy){
									showList.push(n);
								}
								if(data.state==="3"&&((n.stratTime<=now&&n.payedCount<n.passNumber)||(n.stratTime<=now&&n.payedCount===n.copy))){
									showList.push(n);
								}
							}else{
								showList.push(n);
							}
						}
						$.each(list,function(i,n){
							if(n.object===data.object){
								if(data.type!=="0"){
									if(data.type===n.type){
										checkState(n);
									}
								}else{
									checkState(n);
								}
							}
						});
						if(data.order!=="0"){
							if(data.order==="1"){
								showList=_.sortBy(showList,function(point) {
    return - point.stratTime;
});
							}
							if(data.order==="2"){
								showList=_.sortBy(showList,function(point) {
    return - point.payedMember;
});
							}
							if(data.order==="3"){
								showList=_.sortBy(showList,function(point) {
    return - (point.copy*point.price);
});
							}
						}
						modelA.set({list:showList,
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
				obj.api.run("product_get",{tk:tk},function(returnData){
					list=returnData;
					callbackfn();
					},function(e){alert(e);});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);