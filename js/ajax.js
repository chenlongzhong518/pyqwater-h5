"use strict";var baseUrl="http://www.easenhj.com";function urlLink(t){return{submitcustomized:{method:"post",url:"/zx_inc/zx_ajax.asp"}}[t]}function ajaxMethod(t,a){var r=urlLink(t),n={};return $.ajax({type:r.method,url:baseUrl+r.url,data:a,dataType:"json",async:!1,success:function(t){n=t},error:function(t){}}),n}