// JavaScript Document
var sourArry=["localhost",location.hostname];
var config={
	sour:sourArry[1],
	loadingOn:function(){},
	loadingOff:function(){}
	};
var uuid=function(){
		return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	        return (v.toString(16)).toUpperCase();
    	});
	};
var express=[
	{label:"澳大利亚邮政",value:"auspost"},
	{label:"AAE",value:"aae"},
	{label:"安信达",value:"anxindakuaixi"},
	{label:"百世汇通",value:"huitongkuaidi"},
	{label:"百福东方",value:"baifudongfang"},
	{label:"BHT",value:"bht"},
	{label:"包裹/平邮/挂号信",value:"youzhengguonei"},
	{label:"邦送物流",value:"bangsongwuliu"},
	{label:"希伊艾斯",value:"cces"},
	{label:"中国东方",value:"coe"},
	{label:"传喜物流",value:"chuanxiwuliu"},
	{label:"加拿大邮政",value:"canpost"},
	{label:"大田物流",value:"datianwuliu"},
	{label:"德邦物流",value:"debangwuliu"},
	{label:"DPEX",value:"dpex"},
	{label:"DHL",value:"dhl"},
	{label:"D速快递",value:"dsukuaidi"},
	{label:"递四方",value:"disifang"},
	{label:"EMS",value:"ems"},
	{label:"飞康达物流",value:"feikangda"},
	{label:"飞快达",value:"feikuaida"},
	{label:"凡客如风达",value:"rufengda"},
	{label:"风行天下",value:"fengxingtianxia"},
	{label:"飞豹快递",value:"feibaokuaidi"}
];