// JavaScript Document
//获取商品
app.api.add("company_list_get","http://"+config.sour+":8888/",{model:"client",action:"companyListGet"},"get");