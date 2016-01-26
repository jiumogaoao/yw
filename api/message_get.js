// JavaScript Document
//获取商品
app.api.add("message_get","http://"+config.sour+":8888/",{model:"message",action:"get"},"get");