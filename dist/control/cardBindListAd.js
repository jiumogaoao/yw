/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"cardBindListAd",par:[],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show();var d=[];a.each(i,function(a,b){d.push({id:b.id,main:[b.id,b.name,b.number,b.place,b.bank,j[b.state],"详情"]})}),b.model.get("#UC","realNameSimple","formTable",function(c){c.set({title:"银行卡绑定列表",button:[],head:[{title:"会员编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"开户名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"银行卡号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"开户城市",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"开户支行",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"审核状态",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"详情",type:"button",name:"",placeholder:"",option:[{label:"",value:""}]}],list:d}),c.reflash(),c.show(),c.target.find(".formButton").unbind("click").bind("click",function(){b.hash("cardBindDetailAd/"+a(this).attr("D_id"))})})})}function g(a){h=a;var c=0,g=function(){c++,1===c&&(d(),e(),f())};b.api.run("cardBind_list_get",{tk:h},function(a){i=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=["未通过","已通过"];b.api.tk(g)}})}($,app,config);