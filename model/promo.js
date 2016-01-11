// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"promo",
		css:["pomo_all"],
		html:["pomo_all","pomo_list"],
		fn:function(){
			var result={};
			var data={};
			var source=this;
			//init
			source.init=function(){
				source.target.html("");
				};
			source.relist=function(){
				var main=_.template(source.html[1])({promo:data});
				source.target.find(".list").html(main);
				source.target.find(".pointAdd").unbind("click").bind("click",function(){
					var newId=uuid();
					if(!data[$(this).attr("gid")].list){
						data[$(this).attr("gid")].list={};
					}
					data[$(this).attr("gid")].list[newId]={id:newId,img:"",link:""};
					source.relist();
				});
				source.target.find(".link").unbind("change").bind("change",function(){
					data[$(this).attr("gid")].list[$(this).attr("pid")].link=$(this).val();
				});
				source.target.find(".pointRemove").unbind("click").bind("click",function(){
					delete data[$(this).attr("gid")].list[$(this).attr("pid")];
					source.relist();
				});
				source.target.find("form").each(function(){
					var that=this;
					$(that).ajaxForm();
					$(this).find("input").unbind("change").bind("change",function(){
						$(that).ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								data[$(that).attr("gid")].list[$(that).attr("pid")].img=upReturn.data;
								source.relist();
								}
							});
						});
				});
			};
			source.reflash=function(){
				source.target.html(source.css[0]+source.html[0]);	
				source.relist();
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