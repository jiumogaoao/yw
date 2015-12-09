// JavaScript Document
//获取商品
app.api.add("company_pass","http://"+config.sour+":8888/",{model:"client",action:"companyCheck"},"get");