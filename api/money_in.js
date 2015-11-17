// JavaScript Document
//获取商品
app.api.add("money_in","http://"+config.sour+":8888/",{model:"client",action:"accountIn"},"get");