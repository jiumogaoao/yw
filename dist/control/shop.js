/*! This is uglify test - 2016-01-12 */!function(a,b,c){b.control.set({name:"shop",par:["id"],fn:function(c){function d(){b.model.get("#head","headSimple","head",function(a){a.reflash(),a.show()})}function e(){b.model.get("#foot","footSimple","foot",function(a){a.show()})}function f(){b.model.get("#main","navSimple","nav",function(a){a.show(),a.reflash()});var c={};a.each(l.shopType,function(a,b){c[b.id]=b,c[b.id].list=[]}),a.each(k,function(a,b){c[b.shopType]&&c[b.shopType].list.push(b)}),a.each(c,function(a,c){b.model.get("#main","productTitleSimple"+a,"productTitle",function(a){a.setResult(c),a.show(),a.reflash()}),b.model.get("#main","productListSimple"+a,"productList",function(a){a.setResult(c.list),a.show(),a.reflash()})})}function g(a){h=a;var g=0,m=function(){g++,4===g&&(d(),e(),f())};b.api.run("type_get",{tk:h},function(a){j=a,m()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("obj_get",{tk:h},function(a){i=_.groupBy(a,"parentId"),m()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("product_get",{tk:h},function(a){k=_.groupBy(a,"shopId")[c.id],m()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("client_getShop",{tk:h,id:c.id},function(a){l=a,m()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var h="",i=[],j=[],k=[],l={};b.api.tk(g)}})}($,app,config);