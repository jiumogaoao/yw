// JavaScript Document
;(function($,obj,config){
	var routeArry={};
	function changePage(){
		$("#head").show();
		$("#spaceTop").show();
		var hash="index";
		if(window.location.href.split("#")[1]){
			hash=window.location.href.split("#")[1].split("?")[0];
			}
		var hashArry=hash.split("/");
		function runRoute(){	
				var dataObj={};
				if(routeArry[hashArry[0]].par.length){
					var dataArry=routeArry[hashArry[0]].par;
					for(var i=0;i<dataArry.length;i++){
				dataObj[dataArry[i]]=hashArry[i+1];
				}
					}
				routeArry[hashArry[0]].fn(dataObj);	
			}
		if(routeArry[hashArry[0]]){
			runRoute();
			}else{
				config.loadingOn();
				$.ajax({ 
							url:"control/"+hashArry[0]+".js",
							dataType:"script",
							cache:false,
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err));
								window.location.hash="";
								},
							success: function(data){
								config.loadingOff();								
								runRoute();
							}
						});
			
			}
		}
		
	window.onhashchange=function(){
		changePage();
		};
	var set=function(data){
		if(data&&data.name){
			routeArry[data.name]={
				par:data.par||"",
				tem:data.tem||[],
				fn:data.fn||function(){}
				};
			}
		};		
		
		obj.set=function(data){
			set(data);
			};
		obj.init=function(){
			changePage();
			};
	})(window.$,window.app.route,window.config);