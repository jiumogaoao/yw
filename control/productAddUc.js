// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productAddUc",
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","productAddForm","formInput",function(model){
						model.set({
					title:"添加产品",
					nav:[],
					list:[
					{name:"title",title:"商品名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"image",title:"商品图片",placeholder:"",type:"pic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"brand",title:"品牌",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"object",title:"所属栏目",placeholder:"",type:"linkage",value:"",valuelabel:"",option:objOption},
					{name:"tage",title:"标签",placeholder:"",type:"checkbox",value:"",valuelabel:"",option:typeOption},
					{name:"stratTime",title:"上架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"endTime",title:"下架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"goodState",title:"商品属性",placeholder:"",type:"keyValue",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"发货地",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"recommend",title:"推荐",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"否",value:"0"},{label:"是",value:"1"}]},
					{name:"priceState",title:"价格属性",placeholder:"",type:"state",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"price",title:"价格",placeholder:"",type:"selectGroup",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"detail",title:"详情",placeholder:"",type:"richWord",value:"",valuelabel:"",option:[{label:"",value:""}]}

					],
					button:[{id:"productAdd",text:"下一步添加价格"}]
					});
					model.reflash();
					model.show();
					model.target.find("#productAdd").unbind("click").bind("click",function(){
						console.log(model.result());
					});	
					});
				});

				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===2){
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
					
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);