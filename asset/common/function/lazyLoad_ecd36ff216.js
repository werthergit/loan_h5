define('cc/function/viewportHeight',['require','exports','module'],function(){'use strict';return function(){return window.innerHeight||document.documentElement.clientHeight;};}),define('cc/function/pageScrollTop',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop);};}),define('cc/function/debounce',['require','exports','module'],function(){'use strict';return function(e,n,t){function o(t){i=setTimeout(function(){i=null,r=$.now(),e.apply(null,$.makeArray(t));},n);}n='number'===$.type(n)?n:50;var r,i;return function(){if(t&&r>0&&$.now()-r<n)clearTimeout(i),i=null;if(!i)o(arguments);};};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('common/function/compressImage_1539d29a96',function(){function e(e,t,o,r,i){var u=0.05;if(r/ i/(o/t)>1+2*u)return'@1e_'+t+'w_1c_0i_1o_90Q_1x.'+e+'%7C0-'+u*t*i/r+'-'+t+'-'+o+'a.'+e.toLowerCase();else return n(e,t,o);}function n(e,n,t,o){return'@'+(o?0:1)+'e_'+n+'w_'+t+'h_1c_0i_1o_90Q_1x.'+e.toLowerCase();}return function(t){var o=t.url,r=o.split('.').pop();if('gif'===r)r='jpg';var i=t.width,u=t.height,c=t.rawWidth,f=t.rawHeight;if(i=Math.floor(i),u=Math.floor(u),null!=c&&null!=f)return c=Math.floor(c),f=Math.floor(f),o+e(r,i,u,c,f);else return o+n(r,i,u,t.noCrop);};}),define('cc/util/lazyLoader',['require','exports','module','../function/viewportHeight','../function/pageScrollTop','../function/debounce','../function/guid','./instance'],function(require,exports){'use strict';var e=require('../function/viewportHeight'),n=require('../function/pageScrollTop'),t=require('../function/debounce'),o=require('../function/guid'),r=require('./instance').window;exports.threshold=20,exports.getImageUrl=function(){return'';},exports.load=function(i,u,c){var f=i.find(u||'img'),l='.'+o(),d=c?function(e){return e.hasClass(c);}:function(e){return e.prop('src');},a=c?function(e){e.addClass(c);}:function(e){var n=e.data(),t=exports.getImageUrl({src:n.src,width:n.width,height:n.height}),o=exports.getImageUrl({src:n.src,width:2*n.width,height:2*n.height}),r={src:t};if(o!==t)r.srcset=o+' 2x';e.prop(r);},s=function(){var t=!0,o=n()+e();return f.each(function(){var e=$(this);if(!d(e)){var n=e.offset().top;if(n-exports.threshold<o)return void a(e);if(t)t=!1;}}),t;};if(!s())r.on('scroll'+l,t(function(){if(s())r.off(l);},100));};}),define('common/function/lazyLoad_ecd36ff216',['require','exports','module','cc/util/lazyLoader','./compressImage_1539d29a96'],function(require){'use strict';var e=require('cc/util/lazyLoader'),n=require('./compressImage_1539d29a96');return e.getImageUrl=function(e){if(e.width&&e.height)return n({url:e.src,width:e.width,height:e.height});else return e.src;},function(n,t,o){e.load(n,t,o);};});