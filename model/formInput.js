// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formInput",
		css:["form_input"],
		html:["form_input","form_inputFrame"],
		fn:function(){
			/*
			{
					title:"",
					nav:[{id:"",title:""}],
					list:[
					{name:"",title:"",placeholder:"",type:"",value:"",valuelabel:"",option:[{label:"",value:""}]}
					],
					button:[{id:"",text:""}]
					};
			*/
			var result={};
			var data={};
			var source=this;
			//init
			source.init=function(){
				source.target.html("");
				};
			source.reList=function(){
				data.result=result;
				var main=_.template(source.html[0])(data);
				source.target.find(".list").html(main);
				source.target.find("[D_type='input']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='longInput']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='buttonInput'] .input").unbind("change").bind("change",function(){
					result[$(this).parents(".buttonInput").attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='textarea']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){
					result[$(this).parents(".select").attr("D_key")]=$(this).attr("value");
					$(this).parents(".select").find(".value").html($(this).html());
					});
				source.target.find("[D_type='number'] .add").unbind("click").bind("click",function(){
					var newValue=1;
					if(result[$(this).parents(".number").attr("D_key")]){
						newValue=result[$(this).parents(".number").attr("D_key")]+1;
						}
					result[$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .sub").unbind("click").bind("click",function(){
					var newValue=0;
					if(result[$(this).parents(".number").attr("D_key")]&&result[$(this).parents(".number").attr("D_key")]>0){
						newValue=result[$(this).parents(".number").attr("D_key")]-1;
						}
					result[$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .value").unbind("change").bind("change",function(){
					result[$(this).parents(".number").attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='time']").each(function(){
					var that=this;
					$(this).datepicker({
						dateFormat: 'yy-mm-dd', 
						onSelect:function(){
							result[$(that).attr("D_key")]=Number(moment($(that).val(), "YYYY-MM-DD").format("x"));
							}
});
					});
				source.target.find("[D_type='pic'] form").each(function(){
					var that=this;
					$(this).ajaxForm();
					$(this).find("input").unbind("change").bind("change",function(){
						$(that).ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								if(!result[$(that).parents(".picFrame").attr("D_key")]){
									result[$(that).parents(".picFrame").attr("D_key")]=[];
									}
								result[$(that).parents(".picFrame").attr("D_key")].push(upReturn.data);
								$(that).parents(".addButton").before('<img src="'+upReturn.data+'"/>');
								}
							});
						});
					});	
				source.target.find("[D_type='singlePic'] form").each(function(){
					var that=this;
					$(this).ajaxForm();
					$(this).find("input").unbind("change").bind("change",function(){
						$(that).ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								result[$(that).parents(".singlePic").attr("D_key")]=upReturn.data;
								$(that).parents(".singlePic").find("img").attr("src",upReturn.data);
								}
							});
						});
					});	
				source.target.find("[D_type='state']").each(function(){
					var that=this;
					$(that).find(".addState").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({title:"",list:[],id:uuid()});
						source.reList();
					});
					$(that).find(".stateTitle input").unbind("change").bind("change",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].title=$(this).val();
					});
					$(that).find(".stateRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].splice($(this).attr("gid"),1);
						source.reList();
					});
					$(that).find(".addStatePoint").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].list.push({id:uuid(),img:"",name:""});
						source.reList();
					});
					$(that).find(".statePointRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].list.splice($(this).attr("pid"),1);
						source.reList();
					});
					$(that).find("form").each(function(){
						$(this).ajaxForm();
					});
					$(that).find("form input").unbind("change").bind("change",function(){
						var sendTarget=this;
						$(this).parent().ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								result[$(that).attr("D_key")][$(sendTarget).attr("gid")].list[$(sendTarget).attr("pid")].img=upReturn.data;
								source.reList();
								}
							});
					});
					$(that).find(".statePointName").unbind("change").bind("change",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].list[$(this).attr("pid")].name=$(this).val();
					});
				});
				source.target.find("[D_type='keyValue']").each(function(){
					var that=this;
					$(that).find(".addState").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({id:uuid(),key:"",value:""});
						source.reList();
					});
					$(that).find(".pointRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].splice($(this).attr("gid"),1);
						source.reList();
					});
					$(that).find(".pointKey").unbind("change").bind("change",function(){
						result[$(that).attr("D_key")][$(this).attr("pid")].key=$(this).val();
					});
					$(that).find(".pointValue").unbind("change").bind("change",function(){
						result[$(that).attr("D_key")][$(this).attr("pid")].value=$(this).val();
					});
				});
				source.target.find("[D_type='richWord']").each(function(){
					var that=this;
					var um = UM.getEditor($(that).attr("id"));
					if(result[$(that).attr("D_key")]){
						um.setContent(result[$(that).attr("D_key")]);
					}
					um.addListener("contentChange",function(){
						result[$(that).attr("D_key")]=um.getContent();
					});
				});
				source.target.find("[D_type='linkage']").each(function(){
					var that=this;
					var dataNumber=$(that).attr("num");
					var pointCount=0;
					function linkagePoint(num){
						var pointKey="";
							if(num&&result[data.list[dataNumber].name]&&result[data.list[dataNumber].name][num-1]){
								pointKey=result[data.list[dataNumber].name][num-1];
							}else if(!num){pointKey="all";}
						if(data.list[dataNumber].option&&data.list[dataNumber].option[pointKey]&&pointKey){
							

							if(!num||pointKey!=="all"){
								var newPoint=$('<div class="select linkageSelect">'+
				                        	'<div class="value"></div>'+
				                            '<div class="dropdownFrame">'+
				         
				                            '</div>'+
				                            '<div class="drop"><span class="fa fa-triangle-down"></span></div>'+
				                         '</div>').appendTo($(that));
								$.each(data.list[dataNumber].option[pointKey],function(selectNum,point){
									if(result[data.list[dataNumber].name]&&point.value===result[data.list[dataNumber].name][num]){
										newPoint.find(".value").html(point.label);
									}
									var newSelection=$('<div class="dropdownPoint" value="'+point.value+'" num="'+num+'">'+point.label+'</div>').appendTo(newPoint.find(".dropdownFrame"));
									newSelection.unbind("click").bind("click",function(){
										if(!result[$(that).attr("D_key")]){
											result[$(that).attr("D_key")]=[];
										}
										result[$(that).attr("D_key")][$(this).attr("num")]=$(this).attr("value");
										result[$(that).attr("D_key")].splice(Number($(this).attr("num"))+1,result[$(that).attr("D_key")].length-1-Number($(this).attr("num")));
										source.reList();
									});
								});
							}
								
						linkagePoint(num+1);	
						}
					}
					linkagePoint(0);
					$(that).append('<div class="clear"></div>');
				});
				source.target.find("[D_type='linkageSimple']").each(function(){
					var that=this;
					var dataNumber=$(that).attr("num");
					var pointCount=0;
					function linkagePoint(num){
						var pointKey="";
							if(num&&result[data.list[dataNumber].name]&&result[data.list[dataNumber].name][num-1]){
								pointKey=result[data.list[dataNumber].name][num-1];
							}else if(!num){pointKey="all";}
						if(data.list[dataNumber].option&&data.list[dataNumber].option[pointKey]&&pointKey){
							

							if(!num||pointKey!=="all"){
								var newPoint=$('<div class="select linkageSelect">'+
				                        	'<div class="value"></div>'+
				                         '</div>').appendTo($(that));
								$.each(data.list[dataNumber].option[pointKey],function(selectNum,point){
									if(result[data.list[dataNumber].name]&&point.value===result[data.list[dataNumber].name][num]){
										newPoint.find(".value").html(point.label);
									}
								});
							}
								
						linkagePoint(num+1);	
						}
					}
					linkagePoint(0);
					$(that).append('<div class="clear"></div>');
				});
				source.target.find("[D_type='price']").each(function(){
					var that=this;
					$(that).find(".addState").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({id:uuid(),state:{},price:0,count:0});
						source.reList();
					});
					$(that).find(".dropdownPoint").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("pNum")].state[$(this).attr("oId")]=$(this).attr("value");
						source.reList();
					});
					$(that).find(".add").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("pNum")][$(this).attr("D_key")]++;
						source.reList();
					});
					$(that).find(".sub").unbind("click").bind("click",function(){
						if(result[$(that).attr("D_key")][$(this).attr("pNum")][$(this).attr("D_key")]>=1){
							result[$(that).attr("D_key")][$(this).attr("pNum")][$(this).attr("D_key")]--;
							source.reList();
						}
					});
					$(that).find("input").unbind("change").bind("change",function(){
						if(Number($(this).val())){
							result[$(that).attr("D_key")][$(this).attr("pNum")][$(this).attr("D_key")]=Number($(this).val());
						}
						source.reList();
					});
				});
				source.target.find("[D_type='tree']").each(function(){
					var that=this;
					var resultGroup={};
					function treeRoll(id,num){
						if(!resultGroup[id]){
							return false;
						}
						if(id==="all"){
							$.each(resultGroup.all,function(pointNum,point){
								var newPoint=$('<div class="treePoint" pid="'+point.id+'" paid="'+point.parentId+'">'+
                                    '<input class="input value" value="'+(point.name||"")+'"/>'+
                                    '<div class="addChild">+</div>'+
                                    '<div class="removeChild">x</div>'+
                                    '<div class="clear"></div>'+
                                '</div>').appendTo($(that).find(".pointFrame"));
                                treeRoll(point.id,num+1);
							});
						}else{
							resultGroup[id].reverse();
							$.each(resultGroup[id],function(pointNum,point){
								var newPoint=$('<div class="treePoint" pid="'+point.id+'" paid="'+point.parentId+'" style="left:'+(num*20)+'px;">'+
                                    '<input class="input value" value="'+(point.name||"")+'"/>'+
                                    '<div class="lineX"></div>'+
                                    '<div class="lineY"></div>'+
                                    '<div class="addChild">+</div>'+
                                    '<div class="removeChild">x</div>'+
                                    '<div class="clear"></div>'+
                                '</div>').insertAfter($(that).find("[pid='"+point.parentId+"']"));
                                treeRoll(point.id,num+1);
							});
						}
						$(that).find(".treePoint").each(function(){
							if($(this).attr("paid")!=="all"){
								var pH=$(that).find(".treePoint[pid='"+$(this).attr("paid")+"']").offset().top;
								var sH=$(this).offset().top;
								var lH=sH-pH-17;
								$(this).find(".lineY").height(lH+"px");
							}
						});
					}
					if(result[$(that).attr("D_key")]&&result[$(that).attr("D_key")].length){
						resultGroup=_.groupBy(result[$(that).attr("D_key")],"parentId");
						treeRoll("all",0);
					}
					$(that).find(".addRoot").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({id:uuid(),name:"",parentId:"all"});
						source.reList();
					});
					$(that).find(".addChild").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].push({id:uuid(),name:"",parentId:$(this).parents(".treePoint").attr("pid")});
						source.reList();
					});
					$(that).find(".removeChild").unbind("click").bind("click",function(){
						var pDom=this;
						var removeNum=0;
						$.each(result[$(that).attr("D_key")],function(poinNum,point){
							if(point.id===$(pDom).parents(".treePoint").attr("pid")){
								removeNum=poinNum;
							}
						});

						result[$(that).attr("D_key")].splice(removeNum,1);
						source.reList();
					});
					$(that).find(".value").unbind("change").bind("change",function(){
						var pDom=this;
						var editNum=0;
						$.each(result[$(that).attr("D_key")],function(poinNum,point){
							if(point.id===$(pDom).parents(".treePoint").attr("pid")){
								editNum=poinNum;
							}
						});

						result[$(that).attr("D_key")][editNum].name=$(pDom).val();
						source.reList();
					});
				});
				source.target.find("[D_type='checkbox']").each(function(){
					var that=this;
					$(that).find(".checkPoint").unbind("click").bind("click",function(){
						if($(this).attr("check")==="0"){
							$(this).attr("check","1");
							$(this).addClass("hl");
							if(!result[$(that).attr("D_key")]){
								result[$(that).attr("D_key")]=[];
							}
							result[$(that).attr("D_key")].push($(this).attr("pid"));
						}else{
							$(this).attr("check","0");
							$(this).removeClass("hl");
							var removePoint=$(this).attr("pid");
							var newArry=[];
							$.each(result[$(that).attr("D_key")],function(i,n){
								if(n!==removePoint){
									newArry.push(n);
								}
							});
							result[$(that).attr("D_key")]=newArry;
						}
					});
				});
				source.target.find("[D_type='optionAdd']").each(function(){
					var that=this;
					$(that).find(".addOption").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({id:uuid(),name:""});
						source.reList();
					});
					$(that).find(".input").unbind("change").bind("change",function(){
						result[$(that).attr("D_key")][$(this).attr("oNum")].name=$(this).val();
						source.reList();
					});
					$(that).find(".optionRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].splice($(this).attr("oNum"),1);
						source.reList();
					});
				});
			};
			source.reflash=function(){
				var mainA=_.template(source.html[1])(data);
				source.target.html(source.css[0]+mainA);
				source.reList();
					
				};
			//set
			source.set=function(setData){
				data=setData;
				};
			source.setResult=function(setData){
				result=setData;
				};
			source.result=function(){
				return result;
				};
			}
		});
	})($,app,config);