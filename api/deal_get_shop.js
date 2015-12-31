// JavaScript Document
//获取商品
app.api.add("deal_get_shop","http://"+config.sour+":8888/",{model:"deal",action:"shopList"},"get");