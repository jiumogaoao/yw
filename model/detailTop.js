// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"detailTop",
		css:["detail_top"],
		html:["detail_top"],
		fn:function(){
			var result={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
				source.target.find("#goToShop").unbind("click").bind("click",function(){
					obj.hash("shop/"+$(this).attr("sId"));
				});
				source.target.find(".add").unbind("click").bind("click",function(){
					source.target.find(".count input").val(Number(source.target.find(".count input").val())+1);
				});
				source.target.find(".sub").unbind("click").bind("click",function(){
					if(source.target.find(".count input").val()!=="0"){
						source.target.find(".count input").val(Number(source.target.find(".count input").val())-1);
					}
				});
			};
			//set
			source.set=function(data){};
			source.setResult=function(data){
				result=data;
			};
			}
		});
	})($,app,config);