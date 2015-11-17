// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"detailAll",
		css:["detail_all"],
		html:["detail_all"],
		fn:function(){
			var clock=0;
			var data={};
			/*{"id":"",
		"title":"星星花园",
		"subhead":"第一期",
		"image":["img/pic.jpg","img/pic.jpg","img/pic.jpg","img/pic.jpg"],
		"price":9999,
		"copy":100,
		"payedCount":9,
		"payedMoney":99,
		"payedMember":3,
		"maxTime":1024,
		"tax":1,
		"stratTime":1024,
		"yearReturn":10,
		"more":10,
		"dsc":"",
		"change":10,
		"invite":"",
		"inviteMoney":"",
		"object":"",
		"type":"",
		"tag":"0",
		"orderTime":2233,
		"passNumber":3443,
		"place":"广东广州",
		"buildtype":"住宅",
		"buildState":"在建",
		"detail":"img/detail.jpg",
		"com":[
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			},
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			},
			{
				productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试",child:[
					{productId:"",comId:"",parent:"",userId:"",name:"Steven",icon:"img/user.jpg",time:"2015-0917 15:57:05",main:"怎么收益率那么高，我要试一试"}
				]
			}
			],
		"member":[
			{userId:"",productId:"",name:"毛**",number:"400***************14",copy:"1,000.00",time:"2015-10-01 14:48:21",state:"支付成功"}
		],
		"balance":999,
		"reckpacket":99
		};*/
		
			var source=this;
		function runFn(){
				source.target.find(".imgRoll").animate({"left":"-"+((clock*100)+"%")});
			}	
			//init
			source.init=function(){
				var setIn=setInterval(function(){
					if(data&&data.image&&data.image.length){
						if(clock!==data.image.length-1){
						clock++;
					}else{
						clock=0;
					}
					runFn();
					}
					
				},3000);
				};
			source.refalsh=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find(".nav .point").unbind("click").bind("click",function(){
					source.target.find(".desc,.com,.member").hide();
					source.target.find("."+$(this).attr("pid")).show();
					source.target.find(".nav .point").removeClass("hl");
					$(this).addClass("hl");
					});
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);