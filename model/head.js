// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"head",
		css:["head_all"],
		html:["head_all"],
		fn:function(){
			var data={};
			/*{
				object:[{id:"",name:"产权众筹"},{id:"",name:"经营权众筹"},{id:"",name:"众筹建房"}],
				type:0
				}*/
			var object="all";
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				
				obj.api.tk(function(tk){
					obj.api.run("tk_get",{tk:tk},function(returnData){
						data.type=returnData.user.type;
						var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.change(object);
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
				source.target.find(".point.object").unbind("click").bind("click",function(){
						app.hash("list/"+$(this).attr("oid"));
					});
				source.target.find("[oid='index']").unbind("click").bind("click",function(){
					app.hash("index");
					});
				source.target.find("#userCenter").unbind("click").bind("click",function(){
					if(data.type===1){
						app.hash("myAccount");
						}
					if(data.type===2){
						app.hash("dealListAd");
						}
					});
				source.target.find("#esc").unbind("click").bind("click",function(){
					obj.cookies("tk",null,true);
					app.hash("index");
					window.location.reload();
					});
						},function(e){alert(e);});
					});
				};
			source.change=function(id){
				source.target.find(".point").removeClass("hl");
				source.target.find(".point[oid='"+id+"']").addClass("hl");
				object=id;
				};
			source.center=function (center){
				data.center=center;
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);