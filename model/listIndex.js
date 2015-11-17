// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"listIndex",
		css:["index_list"],
		html:["index_list"],
		fn:function(){
			var data={};
			/*{
				list:[
					{name:"产权众筹",id:"a",list:[
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99},
					{"id":"yuu","title":"yy","subhead":"yyy","image":"http://","price":99,"payedCount":99,"payedMoney":99,"copy":99,"maxTime":99,"tax":99,"stratTime":99,"yearReturn":99,"more":99,"dsc":"gfff","change":0,"type":"a","object":"t","payedMember":99}
					]}
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
				source.target.find(".main .point").unbind("click").bind("click",function(){
					obj.hash("detail/"+$(this).attr("pid"));
					});
				source.target.find(".type .point").unbind("click").bind("click",function(){
					obj.hash("search/"+$(this).attr("oid")+"/"+$(this).attr("tid")+"/0/0");
					});
				source.target.find(".type .more").unbind("click").bind("click",function(){
					obj.hash("list/"+$(this).attr("oid"));
					});
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);