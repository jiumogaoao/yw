// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"adminCenterTem",
		css:["user_center_tem"],
		html:["admin_center_tem"],
		fn:function(){
			var data={
				object:[
					{id:"a",name:"产权众筹"},
					{id:"b",name:"经营权众筹"},
					{id:"c",name:"众筹建房"},
				]
				};
			var point="projectAddAd";
			function change(){
				source.target.find(".point_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").addClass("hl");
				source.target.find(".group_tem").removeClass("hl");
				source.target.find(".point_tem[pid='"+point+"']").parents(".group_tem").addClass("hl");
				}
			var source=this;
			//init
			source.init=function(){
				};
			source.reflash=function(){
				var tk="";
			var total=0;
			var product=0;
			var order=0;
			var user=[];
			function layout(){
				data.totalView=total;
				data.totalMember=user.length||0;
				data.balance=0;
				data.redpacket=0;
				$.each(user,function(i,n){
					data.balance+=n.balance;
					data.redpacket+=n.redpacket;
				});
				data.order=order;
				data.buy=product;
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				change();
				source.target.find(".group_tem").unbind("click").bind("click",function(){
					source.target.find(".group_tem").removeClass("hl");
					$(this).addClass("hl");
					});
				source.target.find(".point_tem").unbind("click").bind("click",function(){
					obj.hash($(this).attr("pid"));
					});
				source.callback();
			}
				function getBase(tka){
					tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===3){
						layout();
						}
					};
				obj.api.run("product_get",{tk:tk},function(returnData){
					var now=new Date().getTime();
					$.each(returnData,function(i,n){
						if(n.stratTime>now){
							order++;
						}else{
							product++;
						}
					});
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("client_get",{tk:tk},function(returnData){
					$.each(returnData,function(i,n){
						user.push(n);
					});
					callbackfn();
					},function(){});
				obj.api.run("total_view",{tk:tk},function(returnData){
					total=returnData.number;
					callbackfn();
					},function(){});
				}
				obj.api.tk(getBase);
				};
			source.change=function(id){
				point=id;
				change();
				};
			//set
			source.set=function(data){};
			source.callback=function(){};
			}
		});
	})($,app,config);