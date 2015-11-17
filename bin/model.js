// JavaScript Document
;(function($,obj,config){
	var modelArry={};//class
	var idArry={};//obj
	function get(target,id,name,fn){/*进入get*/
			if(typeof(target)==="string"){
				target=$(target);
				}
			//function order(target,id){
				//idArry[id].target=$('#'+id).appendTo(target);
				//}	
				
					
		function runObj(){/*进入runobj*/
			function finish(){
								idArry[id].loaded=false;
								idArry[id].name=name;
								idArry[id].target=$('.model#'+id);
								idArry[id].id=id;
								idArry[id].html=modelArry[name].htmlArry;
								idArry[id].css=modelArry[name].cssArry;
								idArry[id].hide=function(){this.target.hide();};
								idArry[id].show=function(){this.target.show();};
								idArry[id].clean=function(){
									this.target.find(".model").hide();
									};
								idArry[id].remove=function(){
									target.find("#"+id).remove();
									delete idArry[id];
									};
								/*装配实例*/
								idArry[id].init();
								/*初始实例*/
								idArry[id].loaded=true;
								if(!idArry[id].callbackArry){
									idArry[id].callbackArry=[];
									}
								fn(idArry[id]);
								/*第一个回调*/
								$.each(idArry[id].callbackArry,function(i,n){
									//order(n.target,n.id);
									n.fn(idArry[id]);
									});
								/*序列回调*/				
					}
			if(idArry[id]){/*id已存在*/
				if(idArry[id].loaded){/*id已加载完成*/
				//order(target,id);
				if(!$('.model#'+id).length){
					target.append("<div class='model' id='"+id+"'></div>");
				}
				idArry[id].target=$('.model#'+id);
				fn(idArry[id]);
				}else{/*id没加载完成*/
					if(!idArry[id].callbackArry){
						idArry[id].callbackArry=[];
						}
					idArry[id].callbackArry.push({target:target,id:id,fn:fn});
					}
				}else{/*id不存在*/
				idArry[id]=	new modelArry[name].fn();
				/*创建实例*/
			//	var frame=$('<div class="model '+name+'" id="'+id+'"></div>').appendTo(target);
					/*加外框*/
					/*modelArry[name]*/
				
				if((modelArry[name].html.length||modelArry[name].css.length)&&(modelArry[name].htmlArry.length!==modelArry[name].html.length||modelArry[name].cssArry.length!==modelArry[name].css.length)){
					/*有参数*/
					var totalUrl=0;
				
				$.each(modelArry[name].css,function(i,n){	
						var urlNum=i;
						config.loadingOn();
						$.ajax({ 
							url:"css/"+n+".css",
							dataType:"text",
							cache:false,
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err));
								},
							success: function(data){							
							modelArry[name].cssArry[urlNum]="<style>"+data+"</style>";
							totalUrl++;
							/*加载完成*/
					if(totalUrl === modelArry[name].css.length+modelArry[name].html.length){
							finish();
							}
							}
						});
					});
				$.each(modelArry[name].html,function(i,n){	
						var urlNum=i;
						config.loadingOn();
						$.ajax({ 
							url:"html/"+n+".html",
							dataType:"html",
							cache:false,
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err));
								},
							success: function(data){							
							modelArry[name].htmlArry[urlNum]=data;
							totalUrl++;
							/*加载完成*/
					if(totalUrl === modelArry[name].css.length+modelArry[name].html.length){
							finish();
					}
							}
						});
					});
					}else{/*没参数*/
						finish();
						}
					}
			}
			/*******************************************************************************/
			if(!idArry[id]){
				$('<div class="model '+name+'" id="'+id+'"></div>').appendTo(target);
				}else{
					idArry[id].target=$('.model#'+id).appendTo(target);
					}
			/******************************************************************************/
		if(modelArry[name]){
			runObj();
			}else{
				config.loadingOn();
				$.ajax({ 
							url:"model/"+name+".js",
							dataType:"script",
							cache:false,
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err));
								window.location.hash="";
								},
							success: function(data){
								config.loadingOff();
								runObj();								
							}
						});	
				}
		}
	function set(data){
		modelArry[data.name]=data;
		modelArry[data.name].htmlArry=[];
		modelArry[data.name].cssArry=[];
		}
	obj.model.set=function(data){
		set(data);
		};
	obj.model.get=function(target,id,name,fn){/*get开始*/
		get(target,id,name,fn);
		};	
	})(window.$,window.app,window.config);