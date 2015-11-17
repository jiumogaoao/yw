// JavaScript Document
//获取商品
app.api.add("product_get","http://"+config.sour+":8888/",{model:"product",action:"get"},"get");