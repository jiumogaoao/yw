/*! This is uglify test - 2015-11-24 */!function(a,b,c){b.model.set({name:"banner",css:["banner_all"],html:["banner_all"],fn:function(){function c(){f.target.find(".roll").animate({left:"-"+(100*d+"%")})}var d=0,e={},f=this;f.setType=function(a){e.type=a},f.init=function(){setInterval(function(){3!==d?d++:d=0,c()},3e3)},f.reflash=function(){b.api.tk(function(g){var h=_.template(f.html[0])(e);f.target.html(f.css[0]+h),f.target.find("#login").unbind("click").bind("click",function(){b.model.get("#pop","login","login",function(a){a.type(0),a.callback=function(a){a.data.tk=g,b.api.run("login",a.data,function(a){window.location.reload()},function(a){alert(a)})},a.show(),app.pop.show()})}),f.target.find("#regist").unbind("click").bind("click",function(){b.model.get("#pop","login","login",function(a){a.type(1),a.callback=function(a){a.data.tk=g,b.api.run("register",a.data,function(){window.location.reload()},function(a){alert(a)})},a.show(),app.pop.show()})}),f.target.find("#userCenter").unbind("click").bind("click",function(){1===e.type&&b.hash("myAccount"),2===e.type&&b.hash("dealListAd")}),f.target.find("#esc").unbind("click").bind("click",function(){b.cookies("tk",null,!0),window.location.reload()}),f.target.find(".bottom .point").unbind("click").bind("click",function(){a(this).attr("oid")&&app.hash("list/"+a(this).attr("oid"))}),f.target.find(".left").unbind("click").bind("click",function(){3===d?d=0:d++,c()}),f.target.find(".right").unbind("click").bind("click",function(){0===d?d=3:d--,c()})})},f.set=function(a){e=a}}})}($,app,config);