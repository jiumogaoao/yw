// JavaScript Document
//获取商品
app.api.add("config_get","http://"+config.sour+":8888/",{model:"config",action:"get"},"get");