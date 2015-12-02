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
					{name:"object",title:"所属栏目",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"本地",value:""},{label:"异地",value:""}]},
					{name:"type",title:"所属类型",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"tage",title:"标签",placeholder:"",type:"checkbox",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"stratTime",title:"上架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"已结清",value:""},{label:"未结清",value:""},{label:"无",value:""}]},
					{name:"endTime",title:"下架时间",placeholder:"",type:"time",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"dsc",title:"简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"goodState",title:"商品属性",placeholder:"",type:"keyValue",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"place",title:"发货地",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"recommend",title:"推荐",placeholder:"",type:"select",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"priceState",title:"价格属性",placeholder:"",type:"state",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"price",title:"价格",placeholder:"",type:"selectGroup",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"detail",title:"详情",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},
					],
					button:[{id:"",text:"提交"}]
					});
					model.reflash();
					model.show();
						
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
					callbackfn();
				}
				getList("wdcfv");
			//obj.api.tk(getList);
			}
		});
	})($,app,config);