/*! This is uglify test - 2015-11-26 */!function(a,b,c){b.model.set({name:"formTable",css:["form_table"],html:["form_table"],fn:function(){var b={},c={},d=this;d.init=function(){},d.reflash=function(){var e=_.template(d.html[0])(c);d.target.html(d.css[0]+e),d.target.find("[D_type='input']").unbind("change").bind("change",function(){b[a(this).attr("D_id")]||(b[a(this).attr("D_id")]={id:a(this).attr("D_id")}),b[a(this).attr("D_id")][a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='longInput']").unbind("change").bind("change",function(){b[a(this).attr("D_id")]||(b[a(this).attr("D_id")]={id:a(this).attr("D_id")}),b[a(this).attr("D_id")][a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='textarea']").unbind("change").bind("change",function(){b[a(this).attr("D_id")]||(b[a(this).attr("D_id")]={id:a(this).attr("D_id")}),b[a(this).attr("D_id")][a(this).attr("D_key")]=a(this).val()}),d.target.find("[D_type='select'] .dropdownPoint").unbind("click").bind("click",function(){b[a(this).parents(".select").attr("D_id")]||(b[a(this).parents(".select").attr("D_id")]={id:a(this).parents(".select").attr("D_id")}),b[a(this).parents(".select").attr("D_id")][a(this).parents(".select").attr("D_key")]=a(this).attr("value"),a(this).parents(".select").find(".value").html(a(this).html())}),d.target.find("[D_type='number'] .add").unbind("click").bind("click",function(){b[a(this).parents(".number").attr("D_id")]||(b[a(this).parents(".number").attr("D_id")]={id:a(this).parents(".number").attr("D_id")});var c=1;b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]&&(c=b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]+1),b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]=c,a(this).parents(".number").find(".value").val(c)}),d.target.find("[D_type='number'] .sub").unbind("click").bind("click",function(){b[a(this).parents(".number").attr("D_id")]||(b[a(this).parents(".number").attr("D_id")]={id:a(this).parents(".number").attr("D_id")});var c=0;b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]&&b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]>0&&(c=b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]-1),b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]=c,a(this).parents(".number").find(".value").val(c)}),d.target.find("[D_type='number'] .value").unbind("change").bind("change",function(){b[a(this).parents(".number").attr("D_id")]||(b[a(this).parents(".number").attr("D_id")]={id:a(this).parents(".number").attr("D_id")}),b[a(this).parents(".number").attr("D_id")][a(this).parents(".number").attr("D_key")]=a(this).val()}),d.target.find("[D_type='time']").each(function(){var c=this;b[a(c).attr("D_id")]||(b[a(c).attr("D_id")]={id:a(c).attr("D_id")}),a(this).datepicker({dateFormat:"yy-mm-dd",onSelect:function(){b[a(c).attr("D_id")][a(c).attr("D_key")]=Number(moment(a(c).val(),"YYYY-MM-DD").format("x"))}})}),d.target.find("[D_type='pic'] form").each(function(){var c=this;b[a(c).parents(".picFrame").attr("D_id")]||(b[a(c).parents(".picFrame").attr("D_id")]={id:a(c).parents(".picFrame").attr("D_id")}),a(this).ajaxForm(),a(this).find("input").unbind("change").bind("change",function(){a(c).ajaxSubmit(function(d){d=JSON.parse(d),d.succeed&&(b[a(c).parents(".picFrame").attr("D_id")][a(c).parents(".picFrame").attr("D_key")]||(b[a(c).parents(".picFrame").attr("D_id")][a(c).parents(".picFrame").attr("D_key")]=[]),b[a(c).parents(".picFrame").attr("D_id")][a(c).parents(".picFrame").attr("D_key")].push(d.data),a(c).parents(".addButton").before('<img src="'+d.data+'"/>'))})})}),d.target.find("[D_type='checkbox']").unbind("click").bind("click",function(){var c=this;a(this).data("choose")?(a(this).data("choose",!1),a(this).removeClass("hl")):(a(this).data("choose",!0),a(this).addClass("hl")),b[a(c).attr("D_key")]=[],d.target.find("[D_key='"+a(c).attr("D_key")+"']").each(function(){a(this).data("choose")&&b[a(c).attr("D_key")].push(a(this).attr("D_id"))})})},d.set=function(a){c=a},d.setResult=function(a){b=a},d.result=function(){return b}}})}($,app,config);