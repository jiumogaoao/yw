// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealManage",
		par:["object"],
		fn:function(data){
			var tk="";
			var objArry=[];
			var typeArry=[];
			var product=[];
			var deal=[];
			function page(sg){
				var showList=[];
				$.each(deal,function(i,n){
					if(product[n.productId]){
						showList.push({id:n.id,main:[n.id,product[n.productId].title,n.productId,n.buyPrice,product[n.productId].price,n.count,product[n.productId].price*n.count,n.startTime,'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>']});
					}
				});
				obj.model.get("#ucMain","dealManage"+data.object,"formTable",function(model){
					model.set({
				title:"交易列表",
				button:[],
				head:[
					{"title":"交易编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品名","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"现价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"资金总额","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"操作","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:showList
				});
					model.reflash();
					model.target.find(".fa-exit").unbind("click").bind("click",function(){
						var that=this;
						obj.model.get("#pop","sale","pop",function(model){
							model.set({
							title:"卖出确认",
							button:[{id:"sellSend",text:"卖出确认"}],
							list:[
								{name:"",title:"交易编码",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[0],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品编码",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[2],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品名",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[1],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入价",placeholder:"",type:"simple",value:"￥"+showList[$(that).parents(".simple").attr("y")].main[3],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"卖出价",placeholder:"",type:"simple",value:"￥"+showList[$(that).parents(".simple").attr("y")].main[4],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入份数",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[5],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入时间",placeholder:"",type:"simple",value:moment(showList[$(that).parents(".simple").attr("y")].main[7],"x").format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"卖出时间",placeholder:"",type:"simple",value:moment().format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"合计金额",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[6],valuelabel:"",option:[{label:"",value:""}]},
							]
							});
							model.reflash();
							model.target.find("#sellSend").unbind("click").bind("click",function(){
								var sendData=deal[$(that).parents(".simple").attr("D_id")];
								sendData.tk=tk;
								sendData.endTime=new Date().getTime();
								sendData.sellPrice=showList[$(that).parents(".simple").attr("y")].main[4];
								obj.api.run("sell",sendData,function(){
									alert("卖出成功");
									window.location.reload();
								},function(e){alert(e);});
							});
							model.show();
							app.pop.show();
						});
					});
					model.target.find(".fa-loop").unbind("click").bind("click",function(){
						var that=this;
						var changePay=product[deal[$(that).parents(".simple").attr("D_id")].productId].change;
						obj.model.get("#pop","change","pop",function(model){
							model.set({
							title:"转让确认",
							button:[{id:"changeSend",text:"确认转让"}],
							list:[
								{name:"",title:"交易编码",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[0],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品编码",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[2],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"商品名",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[1],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入价",placeholder:"",type:"simple",value:"￥"+showList[$(that).parents(".simple").attr("y")].main[3],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"现价",placeholder:"",type:"simple",value:"￥"+showList[$(that).parents(".simple").attr("y")].main[4],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入份数",placeholder:"",type:"simple",value:showList[$(that).parents(".simple").attr("y")].main[5],valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"买入时间",placeholder:"",type:"simple",value:moment(showList[$(that).parents(".simple").attr("y")].main[7],"x"),valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"卖出时间",placeholder:"",type:"simple",value:moment().format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},
								{name:"phone",title:"转让账号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"手续费",placeholder:"",type:"simple",value:"￥"+changePay,valuelabel:"",option:[{label:"",value:""}]},
								{name:"",title:"合计金额",placeholder:"",type:"simple",value:"￥"+(changePay*showList[$(that).parents(".simple").attr("y")].main[5]),valuelabel:"",option:[{label:"",value:""}]}
							]
							});
							model.reflash();
							model.target.find("#changeSend").unbind("click").bind("click",function(){
								var sendData=deal[$(that).parents(".simple").attr("D_id")];
								sendData.tk=tk;
								sendData.buyPrice=showList[$(that).parents(".simple").attr("y")].main[4];
								sendData.phone=model.target.find("[D_key='phone']").val();
								obj.api.run("change",sendData,function(){
									alert("转让成功");
									window.location.reload();
								},function(e){alert(e);});
							});
							model.show();
							app.pop.show();
						});
					});
				model.show();
				$('img').load(function(){
				sg.reflash();
				});
				});
				}
				function headLayout(){
				obj.model.get("#head","headSimple","head",function(model){
				model.set({
				object:objArry,
				type:2
				});
				model.reflash();
				model.show();
				});	
					}
				function footLayout(){
				obj.model.get("#foot","footPromo","footPromo",function(model){
				model.show();
				});
			obj.model.get("#foot","footSimple","foot",function(model){
				model.show();
				});	
					}
				function mainLayout(){
					obj.model.get("#main","seguesOne","segues",function(model){
				model.show();
				model.goto("pageTwo",function(target,fn){target.clean();
					var count=0;
					function callback(){
						count++;
						if(count===1){
							fn();
							}
						}
					obj.model.get(target,"userCenterTem","userCenterTem",function(modelA){
						modelA.callback=function(){
							modelA.change("dealManage/"+data.object);
						modelA.clean();
						page(model);
						modelA.show();
					callback();
						};
						modelA.set({
							object:objArry
						});
						modelA.reflash();
						});
					},{w:"100%"});
					
				});
					}
			
			function getList(tka){
				tk=tka;
				var callbackcount=0;
				var callbackfn=function(){
					callbackcount++;
					if(callbackcount===4){
						headLayout();
				footLayout();
				mainLayout();
						}
					};
				obj.api.run("obj_get",{tk:tk},function(returnData){
					objArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("type_get",{tk:tk},function(returnData){
					typeArry=_.indexBy(returnData,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("product_get",{tk:tk},function(returnData){
					var now=new Date().getTime();
					$.each(returnData,function(i,n){
						if(n.stratTime<=now&&n.payedCount>=n.passNumber&&n.payedCount<n.copy){
							product.push(n);
						}
					});
					product=_.groupBy(product,"object")[data.object];
					product=_.indexBy(product,"id");
					callbackfn();
					},function(e){alert(e);});
				obj.api.run("deal_get",{tk:tk},function(returnData){
					$.each(returnData,function(i,n){
						if(!n.endTime){
							deal.push(n);
						}	
					});
					deal=_.indexBy(deal,"id");
					callbackfn();
					},function(){});
				}
			obj.api.tk(getList);
			}
		});
	})($,app,config);