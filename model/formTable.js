// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"formTable",
		css:["form_table"],
		html:["form_table"],
		fn:function(){
			var result={};
			var data={};
			/*
			var data={
				title:"交易列表",
				button:[{id:"",text:""}],
				head:[
					{"title":"交易编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"产品编号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"账号","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"买入价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出价","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易份数","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"交易时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"卖出时间","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]},
					{"title":"状态","type":"simple","name":"","placeholder":"","option":[{"label":"","value":""}]}
					],
				list:[
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"],
					["REDSFDSFFDGGFD","REDSFDSFFDGGFD","REDSFDSFFDGGFD","99999999999.99","99999999999.99","99","2015.10.04","2015.10.04","卖出"]
				]
				};
				*/
			var source=this;
			//init
			source.init=function(){
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find("[D_type='input']").unbind("change").bind("change",function(){
					if(!result[$(this).attr("D_id")]){
						result[$(this).attr("D_id")]={id:$(this).attr("D_id")};
						}
					result[$(this).attr("D_id")][$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='longInput']").unbind("change").bind("change",function(){
					if(!result[$(this).attr("D_id")]){
						result[$(this).attr("D_id")]={id:$(this).attr("D_id")};
						}
					result[$(this).attr("D_id")][$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='textarea']").unbind("change").bind("change",function(){
					if(!result[$(this).attr("D_id")]){
						result[$(this).attr("D_id")]={id:$(this).attr("D_id")};
						}
					result[$(this).attr("D_id")][$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){
					if(!result[$(this).parents(".select").attr("D_id")]){
						result[$(this).parents(".select").attr("D_id")]={id:$(this).parents(".select").attr("D_id")};
						}
					result[$(this).parents(".select").attr("D_id")][$(this).parents(".select").attr("D_key")]=$(this).attr("value");
					$(this).parents(".select").find(".value").html($(this).html());
					});
				source.target.find("[D_type='number'] .add").unbind("click").bind("click",function(){
					if(!result[$(this).parents(".number").attr("D_id")]){
						result[$(this).parents(".number").attr("D_id")]={id:$(this).parents(".number").attr("D_id")};
						}
					var newValue=1;
					if(result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]){
						newValue=result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]+1;
						}
					result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .sub").unbind("click").bind("click",function(){
					if(!result[$(this).parents(".number").attr("D_id")]){
						result[$(this).parents(".number").attr("D_id")]={id:$(this).parents(".number").attr("D_id")};
						}
					var newValue=0;
					if(result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]&&result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]>0){
						newValue=result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]-1;
						}
					result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]=newValue;
					$(this).parents(".number").find(".value").val(newValue);
					});
				source.target.find("[D_type='number'] .value").unbind("change").bind("change",function(){
					if(!result[$(this).parents(".number").attr("D_id")]){
						result[$(this).parents(".number").attr("D_id")]={id:$(this).parents(".number").attr("D_id")};
						}
					result[$(this).parents(".number").attr("D_id")][$(this).parents(".number").attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='time']").each(function(){
					var that=this;
					if(!result[$(that).attr("D_id")]){
						result[$(that).attr("D_id")]={id:$(that).attr("D_id")};
						}
					$(this).datepicker({
						dateFormat: 'yy-mm-dd', 
						onSelect:function(){
							result[$(that).attr("D_id")][$(that).attr("D_key")]=Number(moment($(that).val(), "YYYY-MM-DD").format("x"));
							}
});
					});
				source.target.find("[D_type='pic'] form").each(function(){
					var that=this;
					if(!result[$(that).parents(".picFrame").attr("D_id")]){
						result[$(that).parents(".picFrame").attr("D_id")]={id:$(that).parents(".picFrame").attr("D_id")};
						}
					$(this).ajaxForm();
					$(this).find("input").unbind("change").bind("change",function(){
						$(that).ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								if(!result[$(that).parents(".picFrame").attr("D_id")][$(that).parents(".picFrame").attr("D_key")]){
									result[$(that).parents(".picFrame").attr("D_id")][$(that).parents(".picFrame").attr("D_key")]=[];
									}
								result[$(that).parents(".picFrame").attr("D_id")][$(that).parents(".picFrame").attr("D_key")].push(upReturn.data);
								$(that).parents(".addButton").before('<img src="'+upReturn.data+'"/>');
								}
							});
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