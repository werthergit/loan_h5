define('cc/function/pageScrollTop',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop);};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('common/function/backTop_d7f3db7621',['require','exports','module','cc/function/pageScrollTop','cc/util/instance'],function(require){'use strict';var n=require('cc/function/pageScrollTop'),o=require('cc/util/instance');return function(e,c){var t=o.window,i=o.body,u='active',r=e.hasClass(u);if('number'!==$.type(c))c=20;t.on('scroll',function(){var o=n();if(o>c){if(!r)r=!0,e.addClass(u);}else if(r)r=!1,e.removeClass(u);}),e.on('click',function(){i.animate({scrollTop:0});});};});