// JavaScript Document
//获取商品
app.api.add("client_getShop","http://"+config.sour+":8888/",{model:"client",action:"getShop"},"get");