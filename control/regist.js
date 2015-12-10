// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"regist",
		par:["introducer"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var productArry=[];
			var pomo=[];
			function headLayput(){
				obj.model.get("#head","headSimple","head",function(model){
				/*model.set({
				object:objArry,
				type:0
				});*/
				model.reflash();
				model.show();
				});
				}
			function footLayout(){
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});
				}
			function mainLayout(){
				obj.model.get("#main","navSimple","nav",function(model){
					model.show();
					model.reflash();
				});
				obj.model.get("#main","productAddForm","formInput",function(model){
						model.set({
					title:"注册",
					nav:[],
					list:[
					{name:"phone",title:"手机号",placeholder:"请填写手机号",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
					{name:"code",title:"验证码",placeholder:"请输入手机验证码",type:"buttonInput",value:"",valuelabel:"",option:{id:"getCode",text:"获取验证码"}},
					{name:"password",title:"密码",placeholder:"请填写密码",type:"password",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"sendRegist",text:"注册"}]
					});
					model.reflash();
					model.show();
						function layout(){
							model.target.find("#getCode").html("获取验证码");
							model.target.find("#getCode").unbind("click").bind("click",function(){
								var sendData=model.result();
								sendData.tk=tk;
								if(!sendData.phone){
									alert("请先输入手机号");
									return false;
								}
								obj.api.run("phoneCode_get",sendData,function(returnData){
									model.target.find("#getCode").unbind("click");
									var delayTime=30;
									var delayInter=setInterval(function(){
										delayTime--;
										model.target.find("#getCode").html(delayTime);
										if(!delayTime){
											clearInterval(delayInter);
											layout();
										}
									},1000);
								},function(e){
									obj.pop.on("alert",{text:(JSON.stringify(e))});
								});
							});
						}
						layout();
						model.target.find("#sendRegist").unbind("click").bind("click",function(){
							var sendData=model.result();
							sendData.tk=tk;
							if(data.introducer){
								sendData.introducer=data.introducer;
							}
							obj.api.run("regist",sendData,function(returnData){
								obj.hash("index");
							},function(e){
								obj.pop.on("alert",{text:(JSON.stringify(e))});
							});
						})
					});


				}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===1){
						headLayput();
				footLayout();
				mainLayout();
						}
					};
					callbackfn();
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);