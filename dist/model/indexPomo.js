/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.model.set({name:"indexPomo",css:["index_pomo"],html:["index_pomo"],fn:function(){var c={},d=this;d.init=function(){},d.reflash=function(){var e=_.template(d.html[0])(c);d.target.html(d.css[0]+e),c.pomo&&c.pomo["001"]&&c.pomo["001"].list&&!function(){var b=0;setInterval(function(){b!==d.target.find(".top .centerR img").length-1?b++:b=0,a(".index_pomo .top .centerR").animate({left:730*-b+"px"})},1e3)}(),d.target.find("[hash]").unbind("click").bind("click",function(){b.hash(a(this).attr("hash"))}),function(){var a=0,b=d.target.find(".bottom .rightR img").length/4;d.target.find(".pomoLeftButton").unbind("click").bind("click",function(){b-1>a?a++:a=0,d.target.find(".bottom .rightR").animate({left:100*-a+"%"})}),d.target.find(".pomoRightButton").unbind("click").bind("click",function(){a>0?a--:a=b-1,d.target.find(".bottom .rightR").animate({left:100*-a+"%"})})}()},d.set=function(a){},d.setResult=function(a){c=a}}})}($,app,config);