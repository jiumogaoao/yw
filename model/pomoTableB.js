// JavaScript Document
;(function($,obj,config){
	obj.model.set({
		name:"pomoTableB",
		css:["pomo_table_B"],
		html:["pomo_table_B"],
		fn:function(){
			var data={};
			/*
			{image:[
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"},
			{"id":"","name":"","image":"img/pic.jpg","link":"img/pic.jpg"}
			]
			};*/
			var source=this;
			//init
			source.init=function(){
				
				};
			source.reflash=function(){
				var main=_.template(source.html[0])(data);
				source.target.html(source.css[0]+main);
				};
			//set
			source.set=function(dataSet){
				data=dataSet;
				};
			}
		});
	})($,app,config);