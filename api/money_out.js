// JavaScript Document
//获取商品
app.api.add("money_out","http://"+config.sour+":8888/",{model:"client",action:"accountOut"},"get");