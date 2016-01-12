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
				if(result.pomo&&result.pomo["001"]&&result.pomo["001"].list){
					;(function(){
						var clock=0;
						var delay=setInterval(function(){
							if(clock!==source.target.find(".top .centerR img").length-1){
								clock++;
							}else{
								clock=0;
							}
							$(".index_pomo .top .centerR").animate({
									left:(-clock*730)+"px"
								});
						},1000);
					})();
				}
				source.target.find("[hash]").unbind("click").bind("click",function(){
					obj.hash($(this).attr("hash"));
				});
				;(function(){
					var clock=0;
					var maxNum=source.target.find(".bottom .rightR img").length/4;
					source.target.find(".pomoLeftButton").unbind("click").bind("click",function(){
						if(clock<maxNum-1){
							clock++;
						}else{
							clock=0;
						}
						source.target.find(".bottom .rightR").animate({
							"left":(-clock*100)+"%"
						});
					});
					source.target.find(".pomoRightButton").unbind("click").bind("click",function(){
						if(clock>0){
							clock--;
						}else{
							clock=maxNum-1;
						}
						source.target.find(".bottom .rightR").animate({
							"left":(-clock*100)+"%"
						});
					});
				})();
			};
			//set
			source.set=function(data){};
			source.setResult=function(data){
				result=data;
			};
			}
		});
	})($,app,config);