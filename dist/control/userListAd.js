/*! This is uglify test - 2016-01-25 */!function(a,b,c){b.control.set({name:"userListAd",par:[],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show();var d=[];a.each(i,function(a,b){d.push({id:b.id,main:[b.id,b.userName,b.phone,b.email,j[b.realName],k[b.card],j[b.company],j[b.shop],b.balance,"详情"]})}),b.model.get("#UC","formTableSimple","formTable",function(c){c.set({title:"会员列表",button:[],head:[{title:"会员编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"用户名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"手机号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"邮箱",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"实名认证",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"绑定银行卡",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"企业信息认证",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"店铺信息认证",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"帐号余额",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"详情",type:"button",name:"",placeholder:"",option:[{label:"",value:""}]}],list:d}),c.reflash(),c.show(),c.target.find(".formButton").unbind("click").bind("click",function(){b.hash("userDetailAd/"+a(this).attr("D_id"))})})})}function g(a){h=a;var c=0,g=function(){c++,1===c&&(d(),e(),f())};b.api.run("client_get",{tk:h},function(a){i=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=["未通过","已通过"],k=["未绑定","已绑定"];b.api.tk(g)}})}($,app,config);