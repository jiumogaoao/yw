// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"priceEditUc",
		par:["id"],
		fn:function(data){
			var tk="";
			var product={};
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
				var priceArry=[];
				$.each(product.priceState,function(i,n){
					var group={title:n.title,id:n.id||"",list:[]};
					$.each(n.list,function(x,y){
						group.list.push({label:y.name,value:y.id});
					});
					priceArry.push(group);
				});
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","priceAddForm","formInput",function(model){
						model.set({
					title:"添加产品价格",
					nav:[],
					list:[
					{name:"title",title:"商品名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"price",title:"商品图片",placeholder:"",type:"price",value:"",valuelabel:"",option:priceArry}
					],
					button:[{id:"sendPrice",text:"修改价格列表"}]
					});
					model.setResult(product);	
					model.reflash();
					model.show();
					model.target.find("#sendPrice").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("product_edit",sendData,function(){
							obj.pop.on("alert",{text:"提交成功"});
							obj.hash("productListUc/1");
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					});
				});

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
					obj.api.run("product_get",{tk:tk},function(returnData){
						product=_.indexBy(returnData,"id")[data.id];
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