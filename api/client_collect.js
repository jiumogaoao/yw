// JavaScript Document
//获取商品
app.api.add("client_collect","http://"+config.sour+":8888/",{model:"client",action:"collectEdit"},"get");