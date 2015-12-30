// JavaScript Document
//获取商品
app.api.add("client_shopMessage","http://"+config.sour+":8888/",{model:"client",action:"getShopList"},"get");