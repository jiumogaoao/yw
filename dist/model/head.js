/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.model.set({name:"head",css:["head_all"],html:["head_all"],fn:function(){var c={},d=this,e="",f={user:{},type:[],config:{},message:0};d.init=function(){},d.reData=function(){var c=_.template(d.html[0])(f);d.target.html(d.css[0]+c),d.target.find("[hash]").unbind("click").bind("click",function(){b.hash(a(this).attr("hash"))}),d.target.find("#ext").unbind("click").bind("click",function(){app.cookies("tk",null,!0),b.hash("index"),window.location.reload()})},d.reflash=function(){function c(c){e=c;var g=0,h=function(){g++,3===g&&d.reData()};b.api.run("tk_get",{tk:e},function(c){f.user=c.user,f.user.id?b.api.run("message_get",{tk:e},function(b){a.each(b,function(a,b){b.to!==f.user.id||b.readed||f.message++}),h()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}):h()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("type_get",{tk:e},function(a){f.type=a,h()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("config_get",{tk:e},function(a){f.config=a,h()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}d.reData(),b.api.tk(c)},d.change=function(a){},d.center=function(a){},d.set=function(a){c=a}}})}($,app,config);