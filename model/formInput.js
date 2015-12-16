// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formInput",
		css:["form_input"],
		html:["form_input"],
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
			source.reflash=function(){
				data.result=result;
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find("[D_type='input']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='longInput']").unbind("change").bind("change",function(){
					result[$(this).attr("D_key")]=$(this).val();
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
						result[$(that).attr("D_key")].push({title:"",list:[]});
						source.reflash();
					});
					$(that).find(".stateRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].splice($(this).attr("gid"),1);
						source.reflash();
					});
					$(that).find(".addStatePoint").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].list.push({id:uuid(),img:"",name:""});
						source.reflash();
					});
					$(that).find(".statePointRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("gid")].list.splice($(this).attr("pid"),1);
						source.reflash();
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
								source.reflash();
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
						source.reflash();
					});
					$(that).find(".pointRemove").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].splice($(this).attr("gid"),1);
						source.reflash();
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
						if(data.list[dataNumber].option&&data.list[dataNumber].option[num]){
							var pointKey="all";
							if(num&&result[data.list[dataNumber].name]&&result[data.list[dataNumber].name][num-1]){
								pointKey=result[data.list[dataNumber].name][num-1];
							}
							if(!num||pointKey!=="all"){
								var newPoint=$('<div class="select linkageSelect">'+
				                        	'<div class="value"></div>'+
				                            '<div class="dropdownFrame">'+
				         
				                            '</div>'+
				                            '<div class="drop"><span class="fa fa-triangle-down"></span></div>'+
				                         '</div>').appendTo($(that));
								$.each(data.list[dataNumber].option[num][pointKey],function(selectNum,point){
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
										source.reflash();
									});
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
						result[$(that).attr("D_key")].push({id:uuid(),state:[],price:0});
						source.reflash();
					});
					$(that).find(".dropdownPoint").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("pNum")].state[$(this).attr("oNum")]=$(this).attr("value");
						source.reflash();
					});
					$(that).find(".add").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")][$(this).attr("pNum")].price++;
						source.reflash();
					});
					$(that).find(".sub").unbind("click").bind("click",function(){
						if(result[$(that).attr("D_key")][$(this).attr("pNum")].price>=1){
							result[$(that).attr("D_key")][$(this).attr("pNum")].price--;
							source.reflash();
						}
					});
					$(that).find("input").unbind("change").bind("change",function(){
						if(Number($(this).val())){
							result[$(that).attr("D_key")][$(this).attr("pNum")].price=Number($(this).val());
						}
						source.reflash();
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
								var newPoint=$('<div class="point" pid="'+point.id+'" paid="'+point.parentId+'">'+
                                    '<input class="value" value="'+point.name||""+'"/>'+
                                    '<div class="addChild">+</div>'+
                                    '<div class="removeChild">x</div>'+
                                    '<div class="clear"></div>'+
                                '</div>').appendTo($(that).find(".pointFrame"));
                                treeRoll(point.id,num+1);
							});
						}else{
							resultGroup[id].reverse();
							$.each(resultGroup[id],function(pointNum,point){
								var newPoint=$('<div class="point" pid="'+point.id+'" paid="'+point.parentId+'" style="left:'+(num*10)+'px;">'+
                                    '<input class="value" value="'+point.name||""+'"/>'+
                                    '<div class="lineX"></div>'+
                                    '<div class="lineY"></div>'+
                                    '<div class="addChild">+</div>'+
                                    '<div class="removeChild">x</div>'+
                                    '<div class="clear"></div>'+
                                '</div>').insertAfter($(that).find("[pid='"+poin.parentId+"']"));
                                reeRoll(point.id,num+1);
							});
						}

					}
					if(result[$(that).attr("D_key")]&&result[$(that).attr("D_key")].length){
						resultGroup=_.groupby(result[$(that).attr("D_key")],"parentId");
						treeRoll("all",0);
					}
					$(that).find(".addRoot").unbind("click").bind("click",function(){
						if(!result[$(that).attr("D_key")]){
							result[$(that).attr("D_key")]=[];
						}
						result[$(that).attr("D_key")].push({id:uuid(),name:"",parentId:"all"});
						source.reflash();
					});
					$(that).find(".addChild").unbind("click").bind("click",function(){
						result[$(that).attr("D_key")].push({id:uuid(),name:"",parentId:$(this).parents(".point").attr("pid")});
						source.reflash();
					});
					$(that).find(".removeChild").unbind("click").bind("click",function(){
						var pDom=this;
						var removeNum=0;
						$.each(result[$(that).attr("D_key")],function(poinNum,point){
							if(point.id==$(pDom).parents(".point").attr("pid")){
								removeNum=poinNum;
							}
						});

						result[$(that).attr("D_key")].splice(removeNum,0);
						source.reflash();
					});
					$(that).find(".value").unbind("change").bind("change",function(){
						var pDom=this;
						var editNum=0;
						$.each(result[$(that).attr("D_key")],function(poinNum,point){
							if(point.id==$(pDom).parents(".point").attr("pid")){
								editNum=poinNum;
							}
						});

						result[$(that).attr("D_key")][editNum].name=$(pDom).val();
						source.reflash();
					});
				});
					
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