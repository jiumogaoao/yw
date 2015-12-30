// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"shopList",
		css:["shop_list"],
		html:["shop_list"],
		fn:function(){
			/*
			{
					title:"",
					nav:[{id:"",title:""}],
					list:[
					{name:"",title:"",placeholder:"",type:"",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:""}]
					};
			*/
			var result=[];
			var data={};
			var source=this;
			//init
			source.init=function(){
				source.target.html("");
				};
			source.reflash=function(){
				var main=_.template(source.html[0])({list:data,result:result});
				source.target.html(source.css[0]+main);	
				source.target.find(".radio").unbind("click").bind("click",function(){
					if(!$(this).data("choose")){
						source.target.find(".radio").data("choose",false);
						source.target.find(".radio").removeClass("hl");
						source.target.find(".checkBox").removeClass("hl");
						$(this).addClass("hl");
						$(this).data("choose",true);
					}
				});
				source.target.find(".checkBox").unbind("click").bind("click",function(){
					if(!$(this).data("choose")){
						$(this).data("choose",true);
						$(this).addClass("hl");
					}
				});
				};
			//set
			source.set=function(setData){
				data=setData;
				};
			source.setResult=function(setData){
				result=setData;
				};
			source.result=function(){
				return result;
				};
			}
		});
	})($,app,config);