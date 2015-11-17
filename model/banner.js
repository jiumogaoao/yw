// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"banner",
		css:["banner_all"],
		html:["banner_all"],
		fn:function(){
			var clock=0;
			var data={};
			/*{
				image:[{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}],
				object:[{id:"a",name:"产权众筹"},{id:"b",name:"经营权众筹"},{id:"c",name:"众筹建房"}],
				type:0
				};*/
			var source=this;
			source.setType=function(type){
				data.type=type;
				};
			//init
			function runFn(){
				source.target.find(".roll").animate({"left":"-"+((clock*100)+"%")});
			}
			source.init=function(){
				var setIn=setInterval(function(){
					if(clock!==3){
						clock++;
					}else{
						clock=0;
					}
					runFn();
				},3000);
				};
			source.reflash=function(){
				obj.api.tk(function(tk){
					var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find("#login").unbind("click").bind("click",function(){
							obj.model.get("#pop","login","login",function(modelB){
								modelB.type(0);
								modelB.callback=function(result){
									result.data.tk=tk;
									obj.api.run("login",result.data,function(returnData){
									window.location.reload();
										},function(e){alert(e);});
									
									};
						modelB.show();
						app.pop.show();
						});
							});
				source.target.find("#regist").unbind("click").bind("click",function(){
							obj.model.get("#pop","login","login",function(model){
								model.type(1);
								model.callback=function(result){
									result.data.tk=tk;
									obj.api.run("register",result.data,function(){
										window.location.reload();
										},function(e){alert(e);});
									
									};
						model.show();
						app.pop.show();
						});
							});
				source.target.find("#userCenter").unbind("click").bind("click",function(){
					if(data.type===1){
						obj.hash("myAccount");
						}
					if(data.type===2){
						obj.hash("dealListAd");
						}
					});
				source.target.find("#esc").unbind("click").bind("click",function(){
					obj.cookies("tk",null,true);
					window.location.reload();
					});
				source.target.find(".bottom .point").unbind("click").bind("click",function(){
					if($(this).attr("oid")){
						app.hash("list/"+$(this).attr("oid"));
						}
					});
				source.target.find(".left").unbind("click").bind("click",function(){
					if(clock===3){
						clock=0;
					}else{
						clock++;
					}
					runFn();
				});
				source.target.find(".right").unbind("click").bind("click",function(){
					if(clock===0){
						clock=3;
					}else{
						clock--;
					}
					runFn();
				});
					});
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);