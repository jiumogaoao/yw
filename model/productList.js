// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"productList",
		css:["product_list"],
		html:["product_list"],
		fn:function(){
			var data={};
			/*{list:[		{"id":"yuu","title":"yy","subhead":"yyy","image":"img/pic.jpg","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99}
			],
			type:{
					"a":{name:"热门城市",id:"a"},"b":{name:"热门地区",id:"b"},"c":{name:"潜力地区",id:"c"}
				}
			}*/
			var source=this;
			//init
			source.init=function(){
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				source.target.find(".point").unbind("click").bind("click",function(){
					obj.hash("detail/"+$(this).attr("pid"));
					});
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);