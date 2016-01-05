// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"comList",
		css:["com_list"],
		html:["com_list"],
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
			var result={};
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
				source.target.find(".comRight .point").unbind("click").bind("click",function(){
					$(this).parents(".comRight").attr("class","comRight star"+$(this).attr("count"));
					data.star=Number($(this).attr("count"));
				});
				source.target.find(".comRight input").unbind("change").bind("change",function(){
					data.com=$(this).val();
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
				return data;
				};
			}
		});
	})($,app,config);