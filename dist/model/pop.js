/*! This is uglify test - 2015-12-22 */!function(a,b,c){b.model.set({name:"pop",css:["pop_all"],html:["pop_all"],fn:function(){var b={},c={},d=this;d.init=function(){},d.reflash=function(){var e=_.template(d.html[0])(b);d.target.html(d.css[0]+e),d.target.find("[D_type='input']").unbind("change").bind("change",function(){c[a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='longInput']").unbind("change").bind("change",function(){c[a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='textarea']").unbind("change").bind("change",function(){c[a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){c[a(this).parents(".select").attr("D_key")]=a(this).attr("value"),a(this).parents(".select").find(".value").html(a(this).html())}),d.target.find("[D_type='number'] .add").unbind("click").bind("click",function(){var b=1;c[a(this).parents(".number").attr("D_key")]&&(b=c[a(this).parents(".number").attr("D_key")]+1),c[a(this).parents(".number").attr("D_key")]=b,a(this).parents(".number").find(".value").val(b)}),d.target.find("[D_type='number'] .sub").unbind("click").bind("click",function(){var b=0;c[a(this).parents(".number").attr("D_key")]&&c[a(this).parents(".number").attr("D_key")]>0&&(b=c[a(this).parents(".number").attr("D_key")]-1),c[a(this).parents(".number").attr("D_key")]=b,a(this).parents(".number").find(".value").val(b)}),d.target.find("[D_type='number'] .value").unbind("change").bind("change",function(){c[a(this).parents(".number").attr("D_key")]=a(this).val()}),d.target.find("[D_type='time']").each(function(){var b=this;a(this).datepicker({dateFormat:"yy-mm-dd",onSelect:function(){c[a(b).attr("D_key")]=Number(moment(a(b).val(),"YYYY-MM-DD").format("x"))}})}),d.target.find("[D_type='pic'] form").each(function(){var b=this;a(this).ajaxForm(),a(this).find("input").unbind("change").bind("change",function(){a(b).ajaxSubmit(function(d){d=JSON.parse(d),d.succeed&&(c[a(b).parents(".picFrame").attr("D_key")]||(c[a(b).parents(".picFrame").attr("D_key")]=[]),c[a(b).parents(".picFrame").attr("D_key")].push(d.data),a(b).parents(".addButton").before('<img src="'+d.data+'"/>'))})})}),d.target.find("[D_type='singlePic'] form").each(function(){var b=this;a(this).ajaxForm(),a(this).find("input").unbind("change").bind("change",function(){a(b).ajaxSubmit(function(d){d=JSON.parse(d),d.succeed&&(c[a(b).parents(".singlePic").attr("D_key")]=d.data,a(b).parents(".singlePic").find("img").attr("src",d.data))})})}),d.target.find("[D_type='checkbox']").unbind("click").bind("click",function(){var b=this;a(this).data("choose")?(a(this).data("choose",!1),a(this).removeClass("hl")):(a(this).data("choose",!0),a(this).addClass("hl")),c[a(b).attr("D_key")]=[],d.target.find("[D_key='"+a(b).attr("D_key")+"']").each(function(){a(this).data("choose")&&c[a(b).attr("D_key")].push(a(this).attr("D_id"))})}),d.target.find(".close").unbind("click").bind("click",function(){app.pop.hide()})},d.setResult=function(a){c=a},d.result=function(){return c},d.set=function(a){b=a}}})}($,app,config);