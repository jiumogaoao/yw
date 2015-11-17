// JavaScript Document
//获取商品
app.api.add("promo_get","http://"+config.sour+":8888/",{model:"promotion",action:"get"},"get");