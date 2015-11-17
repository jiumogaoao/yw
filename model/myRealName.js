// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"myRealName",
		css:["form_input"],
		html:["my_real_name"],
		fn:function(){
			var data={
					"id":"",/*id*/
					"name":"",/*真实姓名*/
					"sex":"",/*性别*/
					"cardType":"",/*证件类型*/
					"place":"",/*地区*/
					"birthday":"",/*生日*/
					"cardNumber":"",/*证件号*/
					"startTime":"",/*开始时间*/
					"endTime":"",/*结束时间*/
					"image":""
				};
			var source=this;
			//init
			source.typeChange=function(){};
			source.init=function(){
				
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find(".typeButton").unbind("click").bind("click",function(){
					data.cardType=$(this).attr("type");
					if($(this).attr("type")==="1"){
						source.target.find(".listOther").show();
						}else{
							source.target.find(".listOther").hide();
							}
					source.typeChange();
					});
				source.target.find("#baseDetail").unbind("click").bind("click",function(){
					obj.hash("myDetail");
					});
				source.target.find("#cardbind").unbind("click").bind("click",function(){
					obj.hash("myCardBind");
					});
				source.target.find("[D_type='input']").unbind("change").bind("change",function(){
					data[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='longInput']").unbind("change").bind("change",function(){
					data[$(this).attr("D_key")]=$(this).val();
					});
				source.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){
					data[$(this).parents(".select").attr("D_key")]=$(this).attr("value");
					$(this).parents(".select").find(".value").html($(this).html());
					});
				source.target.find("[D_type='time']").each(function(){
					var that=this;
					$(this).datepicker({
						dateFormat: 'yy-mm-dd', 
						onSelect:function(){
							data[$(that).attr("D_key")]=Number(moment($(that).val(), "YYYY-MM-DD").format("x"));
							}
});
					});
				source.target.find("[D_type='singlePic'] form").each(function(){
					var that=this;
					$(this).ajaxForm();
					$(this).find("input").unbind("change").bind("change",function(){
						$(that).ajaxSubmit(function(upReturn){
							upReturn=JSON.parse(upReturn);
							if(upReturn.succeed){
								data[$(that).parents(".singlePic").attr("D_key")]=upReturn.data;
								$(that).parents(".singlePic").find("img").attr("src",upReturn.data);
								}
							});
						});
					});	
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			source.result=function(){
				return data;
				};
			}
		});
	})($,app,config);