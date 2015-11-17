// JavaScript Document
//获取商品
app.api.add("product_detail","http://"+config.sour+":8888/",{model:"product",action:"detail"},"get");