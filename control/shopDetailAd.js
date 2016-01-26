// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"shopDetailAd",
		par:["id"],
		fn:function(data){
			var tk="";
			var result={};
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
				
				obj.model.get("#main","adminCenterTemSimple","adminCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","shopDetailAdForm","formInput",function(model){
						model.setResult(result);
						var passButton=[{id:"sendShop",text:"通过审核"}];
						if(result.shop){
							passButton=[];
						}
						model.set({
					title:"店铺信息",
					nav:[],
					list:[
					{name:"id",title:"店铺编号",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopName",title:"店名",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopIcon",title:"店铺logo",placeholder:"",type:"singlePicSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopBanner",title:"店铺banner",placeholder:"",type:"singlePicSimple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopDesc",title:"店铺简介",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopPlace",title:"店铺地点",placeholder:"",type:"simple",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"shopType",title:"销售类型",placeholder:"",type:"optionAddSimple",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:passButton
					});
					model.reflash();
					model.show();
					model.target.find("#sendShop").unbind("click").bind("click",function(){
						obj.api.run("client_shopPass",{tk:tk,id:data.id},function(){
							obj.hash("shopListAd");
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
					obj.api.run("client_get",{tk:tk},function(returnData){
						result=_.indexBy(returnData,"id")[data.id];
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