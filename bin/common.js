// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.model={};
	app.api={};
	app.heart={};
	app.hash=function(hash){
		window.location.hash=hash;
		};
	app.pop={
		on:function(view,data,fn){
			if(view){
				config.loadingOn();
				$.ajax({ 
							url:"html/"+view+".html",
							dataType:"html",
							cache:true,
							error:function(err){
								config.loadingOff();
								app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								},
							success: function(html){
								config.loadingOff();								
							var popHtml=_.template(html)(data||null);
							$("#pop").html(popHtml);
							$("#pop").show();
							$("#pop").css({
								"top":(($(window).height()-$("#pop").height())/2)+"px",
								"left":(($(window).width()-$("#pop").width())/2)+"px"
							});
							$("#popBG").show();
							if(fn){fn();}
							}
						});
				}		
			},
		off:function(){
			$("#pop").hide();
			$("#pop").empty();
			$("#popBG").hide();
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