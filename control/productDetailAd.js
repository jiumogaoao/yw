// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productDetailAd",
		par:["id"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
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
				var objOption={};
				var typeOption=[];
				$.each(objArry,function(i,n){
					if(!objOption[n.parentId]){
						objOption[n.parentId]=[];
					}
					objOption[n.parentId].push({label:n.name,value:n.id});
				});
				$.each(typeArry,function(i,n){
					typeOption.push({label:n.name,value:n.id});
				});
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				
				obj.model.get("#main","adminCenterTemSimple","adminCenterTem",function(model){
					var priceArry=[];
				$.each(product.priceState,function(i,n){
					var group={title:n.title,id:n.id||"",list:[]};
					$.each(n.list,function(x,y){
						group.list.push({label:y.name,value:y.id});
					});
					priceArry.push(group);
				});
					model.reflash();
					model.show();
					obj.model.get("#UC","productAddForm","formInput",function(model){
						model.set({
					title:"商品详情",
					nav:[],
					list:[
					{name:"id",title:"商品编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"title",title:"商品名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"商品图片",placeholder:"",type:"picSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"brand",title:"品牌",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"object",title:"所属栏目",placeholder:"",type:"linkageSimple",value:"",valuelabel:"",option:objOption},
					{name:"tag",title:"标签",placeholder:"",type:"checkboxSimple",value:"",valuelabel:"",option:typeOption},
					{name:"stratTime",title:"上架时间",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"endTime",title:"下架时间",placeholder:"",type:"simpleTime",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"goodState",title:"商品属性",placeholder:"",type:"keyValueSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"发货地",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"recommend",title:"推荐",placeholder:"",type:"simpleSelect",value:"",valuelabel:"",option:[{label:"否",value:"0"},{label:"是",value:"1"}]},
					{name:"priceState",title:"价格属性",placeholder:"",type:"stateSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"price",title:"价格",placeholder:"",type:"priceSimple",value:"",valuelabel:"",option:priceArry},
					{name:"detail",title:"详情",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"state",title:"审核状态",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"未审核",value:"0"},{label:"已通过",value:"1"},{label:"未通过",value:"2"}]}
					],
					button:[{id:"productAdd",text:"提交状态修改"}]
					});
					model.setResult(product);
					model.reflash();
					model.show();
					model.target.find("#productAdd").unbind("click").bind("click",function(){
						var sendData=model.result();
						sendData.tk=tk;
						obj.api.run("product_pass",sendData,function(returnData){
							obj.pop.on("alert",{text:"修改成功"});
							obj.hash("productListAd/"+sendData.state);
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
					if(callbackcount===3){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					obj.api.run("product_get",{tk:tk},function(clientList){
						product=_.indexBy(clientList,"id")[data.id];
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
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
					
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);