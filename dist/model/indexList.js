/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.model.set({name:"indexList",css:["index_list"],html:["index_list"],fn:function(){var c=[],d=this;d.init=function(){},d.reflash=function(){var e=_.template(d.html[0])(c);d.target.html(d.css[0]+e),d.target.find("[hash]").unbind("click").bind("click",function(){b.hash(a(this).attr("hash"))})},d.setResult=function(a){c=a},d.set=function(a){}}})}($,app,config);