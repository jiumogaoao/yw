/*! This is uglify test - 2015-12-15 */!function(a,b,c){b.control.set({name:"companyListAd",par:[],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","adminCenterTemSimple","adminCenterTem",function(c){c.reflash(),c.show();var d=[];a.each(i,function(a,b){d.push({id:b.id,main:[b.id,b.name,b.linkMan,b.linkPhone,b.cardNumber,b.money,k[b.type],j[b.state],"详情"]})}),b.model.get("#UC","realNameSimple","formTable",function(a){a.set({title:"企业信息绑定列表",button:[],head:[{title:"会员编号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"公司名",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"联系人",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"联系电话",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"执照号",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"注册资金",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"企业类型",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"审核状态",type:"simple",name:"",placeholder:"",option:[{label:"",value:""}]},{title:"详情",type:"button",name:"",placeholder:"",option:[{label:"",value:""}]}],list:d}),a.reflash(),a.show()})})}function g(a){h=a;var c=0,g=function(){c++,1===c&&(d(),e(),f())};b.api.run("company_list_get",{tk:h},function(a){i=a,g()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=["未通过","已通过"],k=["国营","外资","合资","民营"];b.api.tk(g)}})}($,app,config);