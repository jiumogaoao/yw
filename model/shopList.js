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
				data.result=result;
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);	
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