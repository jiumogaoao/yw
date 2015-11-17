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
				source.target.find("[D_type='checkbox']").unbind("click").bind("click",function(){
					var that=this;
					if($(this).data("choose")){
						$(this).data("choose",false);
						$(this).removeClass("hl");
						}else{
							$(this).data("choose",true);
							$(this).addClass("hl");
							}
						result[$(that).attr("D_key")]=[];
						source.target.find("[D_key='"+$(that).attr("D_key")+"']").each(function(){
							if($(this).data("choose")){
							result[$(that).attr("D_key")].push($(this).attr("D_id"));	
								}
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