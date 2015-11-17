// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.model={};
	app.api={};
	app.hash=function(hash){
		window.location.hash=hash;
		};
	app.pop={
		show:function(){
			$("#pop").css({
				"top":($(window).height()-$("#pop").height())/2,
				"left":($(window).width()-$("#pop").width())/2
				});
			$("#pop").show();
			$("#popBG").show();
			},
		hide:function(){
			$("#pop").hide();
			$("#popBG").hide();
			$("#pop").find(".model").hide();
			}
		};
	app.cookies=function(key,value,remove){
		if(value&&typeof(value) ==="object"){
			Cookies("xz_"+key,JSON.stringify(value),{expires:24*3600*1000});
			}else if(Cookies("xz_"+key)){
				if(!remove){
					return JSON.parse(Cookies("xz_"+key));
					}else{
						Cookies("xz_"+key,null,{expires:-1});
						}	
				}else{
					return false;
					}
		};
	app.cache=function(key,value,remove){
		if(value&&typeof(value) ==="object"){
			localStorage.setItem("xz_"+key,JSON.stringify(value));
			}else if(localStorage.getItem("xz_"+key)){
				if(remove){
					localStorage.removeItem("xz_"+key);
					}else{
				return JSON.parse(localStorage.getItem("xz_"+key));		
						}
				}else{
					return false;
					}
		};
	})();