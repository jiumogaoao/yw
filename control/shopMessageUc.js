// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopMessageUc",
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
					obj.model.get("#UC","baseMessageForm","formInput",function(model){
						model.set({
					title:"店铺信息",
					nav:[],
					list:[
					{name:"shopName",title:"店名",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopIcon",title:"店铺logo",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopBanner",title:"店铺banner",placeholder:"",type:"singlePic",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopDesc",title:"店铺简介",placeholder:"",type:"textarea",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopPlace",title:"店铺地点",placeholder:"",type:"longInput",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:"提交修改"}]
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