// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"indexPomo",
		css:["index_pomo"],
		html:["index_pomo"],
		fn:function(){
			var result={};
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(result);
				source.target.html(source.css[0]+main);
				if(result.pomo&&result.pomo["001"]&&result.pomo["001"].list&&result.pomo["001"].list.length){
					;(function(){
						var clock=0;
						var delay=setInterval(function(){
							if(clock!==result.pomo["001"].list.length-1){
								clock++;
								$(".index_pomo .top .centerR").animate({
									left:(clock*730)+"px"
								});
							}
						},1000);
					})();
				}
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
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