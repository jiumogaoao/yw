/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.model.set({name:"userCenterTem",css:["user_center_tem"],html:["user_center_tem","base_message","base_nav"],fn:function(){function c(){i.target.find(".point_tem").removeClass("hl"),i.target.find(".point_tem[pid='"+e+"']").addClass("hl"),i.target.find(".group_tem").removeClass("hl"),i.target.find(".point_tem[pid='"+e+"']").parents(".group_tem").addClass("hl")}var d="",e="myAccount",f={},g=[],h=[],i=this;i.init=function(){},i.callback=function(){},i.reMessage=function(){f.allBuy=g.length,f.noPayBuy=_.groupBy(g,"state")[0]?_.groupBy(g,"state")[0].length:0,f.payBuy=_.groupBy(g,"state")[1]?_.groupBy(g,"state")[1].length:0,f.cancelBuy=_.groupBy(g,"state")[5]?_.groupBy(g,"state")[5].length:0,f.allDeal=h.length,f.noSendDeal=_.groupBy(h,"state")[1]?_.groupBy(h,"state")[1].length:0,f.sendDeal=_.groupBy(h,"state")[2]?_.groupBy(h,"state")[2].length:0,f.receiveDeal=_.groupBy(h,"state")[3]?_.groupBy(h,"state")[3].length:0,f.finishDeal=_.groupBy(h,"state")[4]?_.groupBy(h,"state")[4].length:0,f.backDeal=_.groupBy(h,"state")[6]?_.groupBy(h,"state")[6].length:0;var c=_.template(i.html[2])({user:f});i.target.find(".left_tem").html(c),i.target.find(".nav_tem[hash='"+window.location.hash.replace("#","")+"']").addClass("hl");var e=_.template(i.html[1])({user:f});i.target.find(".baseFrame_tem").html(e),i.target.find("[hash]").unbind("click").bind("click",function(){b.hash(a(this).attr("hash"))}),i.target.find("#open").unbind("click").bind("click",function(){f.wantOpen=1,f.tk=d,b.api.run("client_set",f,function(){window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})},i.reflash=function(){function a(a){d=a;var c=0,e=function(){c++,2===c&&i.reMessage()};b.api.run("tk_get",{tk:d},function(a){return a.user&&a.user.type&&2!==a.user.type?(f=a.user,void(3===f.type?b.api.run("deal_get_shop",{tk:d},function(a){h=a,e()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}):e())):(b.pop.on("alert",{text:"请先登录"}),b.hash("login"),!1)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("deal_get",{tk:d},function(a){g=a,e()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}i.target.html(i.css[0]+i.html[0]),i.reMessage(),b.api.tk(a)},i.change=function(a){e=a,c()},i.set=function(a){data=a}}})}($,app,config);