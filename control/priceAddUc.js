// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"priceAddUc",
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
					obj.model.get("#UC","priceAddForm","formInput",function(model){
						model.set({
					title:"添加产品价格",
					nav:[],
					list:[
					{name:"title",title:"商品名",placeholder:"",type:"simple",value:"商品名",valuelabel:"",option:[{label:"",value:""}]},
					{name:"price",title:"商品图片",placeholder:"",type:"price",value:"",valuelabel:"",option:[
						[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"}],
						[{label:"D",value:"D"},{label:"E",value:"E"},{label:"F",value:"F"}],
						[{label:"G",value:"G"},{label:"H",value:"H"},{label:"I",value:"I"}]
					]}
					],
					button:[{id:"",text:"下一步添加价格"}]
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