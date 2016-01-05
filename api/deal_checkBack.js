// JavaScript Document
//获取商品
app.api.add("deal_checkBack","http://"+config.sour+":8888/",{model:"deal",action:"backPay"},"get");