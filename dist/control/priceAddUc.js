/*! This is uglify test - 2015-12-08 */!function(a,b,c){b.control.set({name:"priceAddUc",par:[],fn:function(a){function c(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function d(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function e(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()}),b.model.get("#main","userCenterTemSimple","userCenterTem",function(a){a.reflash(),a.show(),b.model.get("#UC","priceAddForm","formInput",function(a){a.set({title:"添加产品价格",nav:[],list:[{name:"title",title:"商品名",placeholder:"",type:"simple",value:"商品名",valuelabel:"",option:[{label:"",value:""}]},{name:"price",title:"商品图片",placeholder:"",type:"price",value:"",valuelabel:"",option:[[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"}],[{label:"D",value:"D"},{label:"E",value:"E"},{label:"F",value:"F"}],[{label:"G",value:"G"},{label:"H",value:"H"},{label:"I",value:"I"}]]}],button:[{id:"",text:"下一步添加价格"}]}),a.reflash(),a.show()})})}function f(a){g=a;var b=0,f=function(){b++,1===b&&(c(),d(),e())};f()}var g="";f("wdcfv")}})}($,app,config);