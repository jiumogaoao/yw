/*! This is uglify test - 2015-11-08 */!function(a,b,c){b.control.set({name:"dealManage",par:["object"],fn:function(c){function d(d){var e=[];a.each(m,function(a,b){l[b.productId]&&e.push({id:b.id,main:[b.id,l[b.productId].title,b.productId,b.buyPrice,l[b.productId].price,b.count,l[b.productId].price*b.count,b.startTime,'<span class="fa fa-exit"></span><span class="fa fa-loop"></span>']})}),b.model.get("#ucMain","dealManage"+c.object,"formTable",function(c){c.set({title:"交易列表",button:[],head:[{title:"交易编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"产品名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"产品编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"现价",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易份数",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"资金总额",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"交易时间",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"操作",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]}],list:e}),c.reflash(),c.target.find(".fa-exit").unbind("click").bind("click",function(){var c=this;b.model.get("#pop","sale","pop",function(d){d.set({title:"卖出确认",button:[{id:"sellSend",text:"卖出确认"}],list:[{name:"",title:"交易编码",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[0],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"商品编码",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[2],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"商品名",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[1],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入价",placeholder:"",type:"simple",value:"￥"+e[a(c).parents(".simple").attr("y")].main[3],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"卖出价",placeholder:"",type:"simple",value:"￥"+e[a(c).parents(".simple").attr("y")].main[4],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入份数",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[5],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入时间",placeholder:"",type:"simple",value:moment(e[a(c).parents(".simple").attr("y")].main[7],"x").format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"卖出时间",placeholder:"",type:"simple",value:moment().format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"合计金额",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[6],valuelabel:"",option:[{label:"",value:""}]}]}),d.reflash(),d.target.find("#sellSend").unbind("click").bind("click",function(){var d=m[a(c).parents(".simple").attr("D_id")];d.tk=i,d.endTime=(new Date).getTime(),d.sellPrice=e[a(c).parents(".simple").attr("y")].main[4],b.api.run("sell",d,function(){alert("卖出成功"),window.location.reload()},function(a){alert(a)})}),d.show(),app.pop.show()})}),c.target.find(".fa-loop").unbind("click").bind("click",function(){var c=this,d=l[m[a(c).parents(".simple").attr("D_id")].productId].change;b.model.get("#pop","change","pop",function(f){f.set({title:"转让确认",button:[{id:"changeSend",text:"确认转让"}],list:[{name:"",title:"交易编码",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[0],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"商品编码",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[2],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"商品名",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[1],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入价",placeholder:"",type:"simple",value:"￥"+e[a(c).parents(".simple").attr("y")].main[3],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"现价",placeholder:"",type:"simple",value:"￥"+e[a(c).parents(".simple").attr("y")].main[4],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入份数",placeholder:"",type:"simple",value:e[a(c).parents(".simple").attr("y")].main[5],valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"买入时间",placeholder:"",type:"simple",value:moment(e[a(c).parents(".simple").attr("y")].main[7],"x"),valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"卖出时间",placeholder:"",type:"simple",value:moment().format("YYYY-MM-DD"),valuelabel:"",option:[{label:"",value:""}]},{name:"phone",title:"转让账号",placeholder:"",type:"input",value:"",valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"手续费",placeholder:"",type:"simple",value:"￥"+d,valuelabel:"",option:[{label:"",value:""}]},{name:"",title:"合计金额",placeholder:"",type:"simple",value:"￥"+d*e[a(c).parents(".simple").attr("y")].main[5],valuelabel:"",option:[{label:"",value:""}]}]}),f.reflash(),f.target.find("#changeSend").unbind("click").bind("click",function(){var d=m[a(c).parents(".simple").attr("D_id")];d.tk=i,d.buyPrice=e[a(c).parents(".simple").attr("y")].main[4],d.phone=f.target.find("[D_key='phone']").val(),b.api.run("change",d,function(){alert("转让成功"),window.location.reload()},function(a){alert(a)})}),f.show(),app.pop.show()})}),c.show(),a("img").load(function(){d.reflash()})})}function e(){b.model.get("#head","headSimple","head",function(a){a.set({object:j,type:2}),a.reflash(),a.show()})}function f(){b.model.get("#foot","footPromo","footPromo",function(a){a.show()}),b.model.get("#foot","footSimple","foot",function(a){a.show()})}function g(){b.model.get("#main","seguesOne","segues",function(a){a.show(),a["goto"]("pageTwo",function(e,f){function g(){h++,1===h&&f()}e.clean();var h=0;b.model.get(e,"userCenterTem","userCenterTem",function(b){b.callback=function(){b.change("dealManage/"+c.object),b.clean(),d(a),b.show(),g()},b.set({object:j}),b.reflash()})},{w:"100%"})})}function h(d){i=d;var h=0,n=function(){h++,4===h&&(e(),f(),g())};b.api.run("obj_get",{tk:i},function(a){j=_.indexBy(a,"id"),n()},function(a){alert(a)}),b.api.run("type_get",{tk:i},function(a){k=_.indexBy(a,"id"),n()},function(a){alert(a)}),b.api.run("product_get",{tk:i},function(b){var d=(new Date).getTime();a.each(b,function(a,b){b.stratTime<=d&&b.payedCount>=b.passNumber&&b.payedCount<b.copy&&l.push(b)}),l=_.groupBy(l,"object")[c.object],l=_.indexBy(l,"id"),n()},function(a){alert(a)}),b.api.run("deal_get",{tk:i},function(b){a.each(b,function(a,b){b.endTime||m.push(b)}),m=_.indexBy(m,"id"),n()},function(){})}var i="",j=[],k=[],l=[],m=[];b.api.tk(h)}})}($,app,config);