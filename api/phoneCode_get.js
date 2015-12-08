// JavaScript Document
//获取商品
app.api.add("phoneCode_get","http://"+config.sour+":8888/",{model:"client",action:"getPhoneCode"},"get");