// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"buyListUc",
		par:["type"],
		fn:function(data){
			var tk="";
			var dealList=[];
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
				
				obj.model.get("#main","userCenterTemSimple","userCenterTem",function(model){
					model.reflash();
					model.show();
					obj.model.get("#UC","dealListUcForm","dealList",function(model){
						model.set({list:dealList,type:0});
					model.reflash();
					model.show();
					model.target.find("#cancel").unbind("click").bind("click",function(){
						obj.api.run("deal_cancel",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"取消成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					model.target.find("#pay").unbind("click").bind("click",function(){
						var that=this;
						$(".payPop #place").val("");
						$(".payPop #name").val("");
						$(".payPop #phone").val("");
						$(".payPop").show();
						$(".payPop #surePay").unbind("click").bind("click",function(){
							if(!$(".payPop #name").val()){
								obj.pop.on("alert",{text:"请输入联系人姓名"});
								return false;
							}
							if(!$(".payPop #phone").val()){
								obj.pop.on("alert",{text:"请输入联系人手机"});
								return false;
							}
							if(!$(".payPop #place").val()){
								obj.pop.on("alert",{text:"请输入送货地址"});
								return false;
							}
							obj.api.run("deal_pay",{
								tk:tk,id:$(that).attr("pid"),
								"dealName":$(".payPop #name").val(),
								"dealPhone":$(".payPop #phone").val(),
								"dealPlace":$(".payPop #place").val()
						},function(returnData){
								obj.pop.on("alert",{text:"支付成功"});
								window.location.reload();
							},function(e){
								obj.pop.on("alert",{text:(JSON.stringify(e))});
								$(".payPop #sureCancel").click();
							});
						});
						$(".payPop #sureCancel").unbind("click").bind("click",function(){
							$(".payPop #place").val("");
							$(".payPop #name").val("");
							$(".payPop #phone").val("");
							$(".payPop").hide();
						});
					});
					model.target.find("#check").unbind("click").bind("click",function(){
						obj.hash("confirmUc/"+$(this).attr("pid"));
					});
					model.target.find("#back").unbind("click").bind("click",function(){
						obj.api.run("deal_back",{tk:tk,id:$(this).attr("pid")},function(returnData){
							obj.pop.on("alert",{text:"申请成功"});
							window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
					});
					model.target.find("#common").unbind("click").bind("click",function(){
						obj.hash("comAddUc/"+$(this).attr("pid"));
					});
					});
					
					$("#UC").append('<div class="payPop">'+
						'<div class="payLeft">送货地址：</div>'+
						'<div class="payRight"><input id="place"/></div>'+
						'<div class="clear"></div>'+
						'<div class="payLeft">联系人姓名：</div>'+
						'<div class="payRight"><input id="name"/></div>'+
						'<div class="clear"></div>'+
						'<div class="payLeft">联系手机：</div>'+
						'<div class="payRight"><input id="phone"/></div>'+
						'<div class="clear"></div>'+
						'<div class="popButton" id="surePay">确认支付</div>'+
						'<div class="popButton" id="sureCancel">取消</div>'+
						'<div class="clear"></div>'+
						'</div>');
					$(".payPop").css({
						position: "fixed",
					    width: "40%",
					    top: "158px",
					    left: "30%",
					    "background-color": "#fff",
					    "z-index": "9",
					    border: "1px solid #C7C7C7",
					    "border-radius": "10px",
					    "padding-top":"20px",
					    "padding-bottom":"20px",
					    display:"none"
					});
					$(".payLeft").css({
						float: "left",
					    "text-indent": "20px",
					    "line-height": "50px",
					    width:"120px"
					});
					$(".payRight").css({
						float:"left",
					});
					$(".payRight input").css({
						border: "1px solid #CEC7C7",
					    height: "30px",
					    width: "600px",
					    "margin-top": "10px"
					});
					$(".popButton").css({
						width: "125px",
					    height: "38px",
					    "background-color": "#efc94c",
					    color: "#fff",
					    "border-radius": "5px",
					    behavior: "url(include/PIE.htc)",
					    float: "right",
					    "margin-right": "20px",
					    "margin-top": "20px",
					    "text-align": "center",
					    "line-height": "38px",
					    "font-size": "18px",
					    cursor: "pointer"
					});
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
					obj.api.run("deal_get",{tk:tk},function(returnData){
						if(data.type==="0"){
							dealList=returnData;
						}else if(data.type==="1"){
							dealList=_.groupBy(returnData,"state")[0];
						}
						if(data.type==="2"){
							dealList=[];
							$.each(returnData,function(i,n){
								if(n.state===1||n.state===2||n.state===3||n.state===4||n.state===6){
									dealList.push(n);
								}
							});
						}
						if(data.type==="3"){
							dealList=_.groupBy(returnData,"state")[5];
						}
						callbackfn();
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				//getList("wdcfv");
			obj.api.tk(getList);
			}
		});
	})($,app,config);