// JavaScript Document
//获取商品
app.api.add("client_shopPass","http://"+config.sour+":8888/",{model:"client",action:"shopCheck"},"get");