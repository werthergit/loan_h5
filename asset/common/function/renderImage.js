define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var t={'int':parseInt,'float':parseFloat};return function(e,r,o){if('number'!==$.type(e)){var i=t[o];if(i)e=i(e,10);else if($.isNumeric(e))e=+e;else e=0/0;}return isNaN(e)?r:e;};}),define('common/function/compressImage_1539d29a96',function(){function t(t,r,o,i,n){var a=0.05;if(i/n/(o/r)>1+2*a)return'@1e_'+r+'w_1c_0i_1o_90Q_1x.'+t+'%7C0-'+a*r*n/ i+'-'+r+'-'+o+'a.'+t.toLowerCase();else return e(t,r,o);}function e(t,e,r,o){return'@'+(o?0:1)+'e_'+e+'w_'+r+'h_1c_0i_1o_90Q_1x.'+t.toLowerCase();}return function(r){var o=r.url,i=o.split('.').pop();if('gif'===i)i='jpg';var n=r.width,a=r.height,u=r.rawWidth,c=r.rawHeight;if(n=Math.floor(n),a=Math.floor(a),null!=u&&null!=c)return u=Math.floor(u),c=Math.floor(c),o+t(i,n,a,u,c);else return o+e(i,n,a,r.noCrop);};}),define('common/function/renderImage',['require','exports','module','cc/function/toNumber','./compressImage_1539d29a96'],function(require){'use strict';var t=require('cc/function/toNumber'),e=require('./compressImage_1539d29a96');return function(r){'undefined'!=typeof window.devicePixelRatio?window.devicePixelRatio:1;$('img[data-src]',r).each(function(){var r=$(this),o=r.attr('data-src'),i=t(r.attr('data-width'),0),n=t(r.attr('data-height'),0),a=!t(r.attr('data-crop'),0);if(i>0&&n>0){var u=e({url:o,width:i,height:n,noCrop:a}),c=e({url:o,width:2*i,height:2*n,noCrop:a}),f=e({url:o,width:3*i,height:3*n,noCrop:a}),s=[c+' 2x',f+' 3x'];r.prop({src:u,srcset:s.join(',')}).removeAttr('data-src');}});};});