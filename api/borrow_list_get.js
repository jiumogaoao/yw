// JavaScript Document
//获取商品
app.api.add("borrow_list_get","http://"+config.sour+":8888/",{model:"borrow",action:"getList"},"get");