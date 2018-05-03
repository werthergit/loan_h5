define('cc/function/pageScrollLeft',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);};}),define('cc/util/json',['require','exports','module'],function(require,exports,module){if('object'!=typeof JSON)JSON={};return function(){'use strict';function f(e){return 10>e?'0'+e:e;}function this_value(){return this.valueOf();}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return'string'==typeof t?t:'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+e+'"';}function str(e,t){var n,i,o,r,u,c=gap,f=t[e];if(f&&'object'==typeof f&&'function'==typeof f.toJSON)f=f.toJSON(e);if('function'==typeof rep)f=rep.call(t,e,f);switch(typeof f){case'string':return quote(f);case'number':return isFinite(f)?String(f):'null';case'boolean':case'null':return String(f);case'object':if(!f)return'null';if(gap+=indent,u=[],'[object Array]'===Object.prototype.toString.apply(f)){for(r=f.length,n=0;r>n;n+=1)u[n]=str(n,f)||'null';return o=0===u.length?'[]':gap?'[\n'+gap+u.join(',\n'+gap)+'\n'+c+']':'['+u.join(',')+']',gap=c,o;}if(rep&&'object'==typeof rep){for(r=rep.length,n=0;r>n;n+=1)if('string'==typeof rep[n])if(i=rep[n],o=str(i,f))u.push(quote(i)+(gap?': ':':')+o);}else for(i in f)if(Object.prototype.hasOwnProperty.call(f,i))if(o=str(i,f))u.push(quote(i)+(gap?': ':':')+o);return o=0===u.length?'{}':gap?'{\n'+gap+u.join(',\n'+gap)+'\n'+c+'}':'{'+u.join(',')+'}',gap=c,o;}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if('function'!=typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value;var gap,indent,meta,rep;if('function'!=typeof JSON.stringify)meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},JSON.stringify=function(e,t,n){var i;if(gap='',indent='','number'==typeof n)for(i=0;n>i;i+=1)indent+=' ';else if('string'==typeof n)indent=n;if(rep=t,t&&'function'!=typeof t&&('object'!=typeof t||'number'!=typeof t.length))throw new Error('JSON.stringify');return str('',{'':e});};if('function'!=typeof JSON.parse)JSON.parse=function(text,reviver){function walk(e,t){var n,i,o=e[t];if(o&&'object'==typeof o)for(n in o)if(Object.prototype.hasOwnProperty.call(o,n))if(i=walk(o,n),void 0!==i)o[n]=i;else delete o[n];return reviver.call(e,t,o);}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text))text=text.replace(rx_dangerous,function(e){return'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);});if(rx_one.test(text.replace(rx_two,'@').replace(rx_three,']').replace(rx_four,'')))return j=eval('('+text+')'),'function'==typeof reviver?walk({'':j},''):j;throw new SyntaxError('JSON.parse');};}(),JSON;}),define('cc/util/Queue',['require','exports','module'],function(){'use strict';function e(e){$.extend(this,e),this.init();}var t=e.prototype;return t.init=function(){this.list=[];},t.add=function(e){var t=this,n=t.list;if(n.push(e),!$.isFunction(t.waiting)){var i=function(){t.waiting=null,o();},o=function(){if(t.list){var e=n.shift();if(e)t.waiting=i,t.task(e,i);}};o();}},t.size=function(){return this.list.length;},t.clear=function(){this.list.length=0;},t.dispose=function(){this.list=this.waiting=null;},e;}),define('cc/util/Timer',['require','exports','module'],function(){'use strict';function e(e){$.extend(this,e);}var t=e.prototype;return t.start=function(){var e=this;e.stop();var t=e.timeout,n=e.interval,i=function(){if(e.count++,e.task()!==!1)e.timer=setTimeout(i,n);else e.stop();};if(null==t)t=n;e.timer=setTimeout(i,t);},t.stop=function(){var e=this;if(e.timer)clearTimeout(e.timer),e.timer=null,e.count=0;},t.dispose=function(){var e=this;e.stop(),e.task=e.timeout=e.interval=null;},e;}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,t,n,i){var o='string'===$.type(t),r=o?e[t]:e;if(!o)i=n,n=t;var u=function(){var e,t=$.makeArray(arguments);if($.isFunction(n))e=n.apply(this,t);if(e!==!1){if($.isFunction(r))e=r.apply(this,t);if($.isFunction(i)){t.push(e);var o=i.apply(this,t);if('undefined'!==$.type(o))e=o;}return e;}};return o?e[t]=u:u;};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(e,t){if(e=e.jquery?e[0]:e,t=t.jquery?t[0]:t,!e||!t)return!1;if(e===t)return!0;else return $.contains(e,t);};}),define('cc/function/eventOffset',['require','exports','module'],function(){'use strict';return function(e){var t=e.offsetX,n=e.offsetY;if('number'!==$.type(t)){var i=e.target.getBoundingClientRect();t=e.clientX-i.left,n=e.clientY-i.top;}return{x:t,y:n};};}),define('cc/function/eventPage',['require','exports','module'],function(){'use strict';return function(e){var t=e.pageX,n=e.pageY;if('number'!==$.type(t)){var i=document.documentElement;t=e.clientX+i.scrollLeft,n=e.clientY+i.scrollTop;}return{x:t,y:n};};}),define('cc/function/debounce',['require','exports','module'],function(){'use strict';return function(e,t,n){function i(n){r=setTimeout(function(){r=null,o=$.now(),e.apply(null,$.makeArray(n));},t);}t='number'===$.type(t)?t:50;var o,r;return function(){if(n&&o>0&&$.now()-o<t)clearTimeout(r),r=null;if(!r)i(arguments);};};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,t){e=e[0],t=t[0],e.parentNode.replaceChild(t,e);};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,t){if('boolean'!==$.type(e)){if(1===arguments.length)t=!!e;e=t;}return e;};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var t=setTimeout(e,0);return function(){clearTimeout(t);};};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,t){if($.isPlainObject(t))$.each(t,function(t,n){if(!(t in e))e[t]=n;});};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/decimalLength',['require','exports','module'],function(){'use strict';return function(e){var t=(''+e).split('.');return 2===t.length?t[1].length:0;};}),define('cc/function/float2Int',['require','exports','module'],function(){'use strict';return function(e,t){var n,i=(''+e).split('.');if(t>=0);else t=0;if(1===i.length)n=e+new Array(t+1).join('0');else t=Math.max(0,t-i[1].length),n=i.join('')+new Array(t+1).join('0');return+n;};}),define('cc/function/disableSelection',['require','exports','module'],function(){'use strict';if(document.selection)return function(){document.body.onselectstart=function(){return!1;};};else return $.noop;}),define('cc/function/viewportWidth',['require','exports','module'],function(){'use strict';return function(){return window.innerWidth||document.documentElement.clientWidth;};}),define('cc/function/viewportHeight',['require','exports','module'],function(){'use strict';return function(){return window.innerHeight||document.documentElement.clientHeight;};}),define('cc/function/enableSelection',['require','exports','module'],function(){'use strict';if(document.selection)return function(){document.body.onselectstart=null;};else return $.noop;}),define('cc/function/pageScrollTop',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop);};}),define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var e={'int':parseInt,'float':parseFloat};return function(t,n,i){if('number'!==$.type(t)){var o=e[i];if(o)t=o(t,10);else if($.isNumeric(t))t=+t;else t=0/0;}return isNaN(t)?n:t;};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(t){if(t.is('body'))return t;for(var n=t.parent();!e(n);)n=n.parent();return n;};}),define('cc/function/restrain',['require','exports','module'],function(){'use strict';return function(e,t,n){if(t>e)e=t;else if(e>n)e=n;return e;};}),define('cc/function/position',['require','exports','module','./offsetParent'],function(require){'use strict';var e=require('./offsetParent');return function(t){var n=e(t),i=t.css('position'),o=parseInt(t.css('left'),10),r=parseInt(t.css('top'),10),u=isNaN(o),c=isNaN(r);if(u||c)if(1===n.length){var f=t.offset(),s=n.offset();if(u)o=f.left-s.left-(parseInt(n.css('border-left-width'),10)||0);if(c)r=f.top-s.top-(parseInt(n.css('border-top-width'),10)||0);}else o=r=0;if(!i||'static'===i)i='absolute';return{position:i,left:o,top:r};};}),define('cc/function/innerOffset',['require','exports','module','./toNumber'],function(require){'use strict';var e=require('./toNumber');return function(t){var n=t.offset(),i=t.css('border-left-width'),o=t.css('border-top-width');return{x:n.left+e(i,0,'int'),y:n.top+e(o,0,'int')};};}),define('cc/function/outerOffset',['require','exports','module','./toNumber'],function(require){'use strict';var e=require('./toNumber');return function(t){var n=t.offset(),i=e(t.css('margin-left'),0,'int'),o=e(t.css('margin-top'),0,'int');return{x:n.left-i,y:n.top-o};};}),define('common/service_b196638392',['require','exports','module','cc/util/json'],function(require,exports){'use strict';function e(e,t,r){t=t||{};var u=$.Deferred();return r=$.extend({},o,r),$.ajax({url:n+e,data:r.stringify?i.stringify(t):t,method:'post',dataType:'json',timeout:r.timeout,async:!r.sync,beforeSend:function(e){var t=i.parse(sessionStorage.getItem('userInfo'))||{};if(e.setRequestHeader('X-ZXFQ-INNER-TOKEN',t.token),e.setRequestHeader('X-ZXFQ-INNER-OPENID',t.openid),r.stringify)e.setRequestHeader('Content-Type','application/json;charset=UTF-8');}}).then(function(e){var t=e.code,n=0;if(null==t)t=e.status,n=200;if(t===n)u.resolve(e);else{var i=e.msg;if(i&&!r.preventError)alert({title:'提示',content:i});u.reject(e);}}),u;}function t(e,t){return $.ajax({url:n+e,data:t,dataType:'jsonp'});}var n='http://www.zhixinfenqi.com/loanOne',i=require('cc/util/json'),o={timeout:60000,sync:!1,stringify:!1,preventError:!1};exports.post=e,exports.jsonp=t,exports.baseUrl=n;}),define('cc/function/viewport',['require','exports','module','../util/instance'],function(require){'use strict';var e=require('../util/instance');return function(){if(e.body.prop('clientHeight')>e.html.prop('clientHeight'))return e.html;else return e.body;};}),define('cc/function/page',['require','exports','module','../util/instance'],function(require){'use strict';var e=require('../util/instance');return function(){if(e.body.prop('clientHeight')<e.html.prop('clientHeight'))return e.html;else return e.body;};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),t=require('../function/createEvent'),n={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,t,n){return this.get$().on(e,t,n),this;},once:function(e,t,n){return this.get$().one(e,t,n),this;},off:function(e,t){return this.get$().off(e,t),this;},emit:function(e,n){return e=t(e),this.get$().trigger(e,n),e;}};exports.extend=function(t){e(t,n);};}),define('cc/util/touch',['require','exports','module','../function/eventPage','../function/eventOffset'],function(require){'use strict';function t(e){return e.originalEvent.changedTouches[0];}var n=require('../function/eventPage'),i=require('../function/eventOffset'),o=document.createElement('div'),r={support:'ontouchend'in o,click:'touchstart',down:'touchstart',move:'touchmove',up:'touchend',page:function(e){var n=t(e);return{x:n.pageX,y:n.pageY};},client:function(e){var n=t(e);return{x:n.clientX,y:n.clientY};},offset:function(e){var n=t(e);return{x:n.offsetX,y:n.offsetY};}},u={support:'onclick'in o,click:'click',down:'mousedown',move:'mousemove',up:'mouseup',page:function(e){return n(e);},client:function(e){return{x:e.clientX,y:e.clientY};},offset:function(){return i(e);}};return o=null,{touch:r,mouse:u};}),define('cc/function/pageWidth',['require','exports','module','./page'],function(require){'use strict';var e=require('./page');return function(){var t=e()[0];return Math.max(t.scrollWidth,t.clientWidth);};}),define('cc/function/divide',['require','exports','module','./decimalLength','./float2Int'],function(require){'use strict';var e=require('./decimalLength'),t=require('./float2Int');return function(n,i){var o=Math.max(e(n),e(i));return n=t(n,o),i=t(i,o),n/ i;};}),define('cc/function/testTarget',['require','exports','module','../util/instance','./contains'],function(require){'use strict';var e=require('../util/instance'),t=require('./contains');return function(n,i,o){var r=!1;if($.isArray(i))i=i.join(',');if(!o)o=e.document;return o.find(i).each(function(){if(r=t(this,n))return!1;else return void 0;}),r;};}),define('cc/function/pageHeight',['require','exports','module','./page'],function(require){'use strict';var e=require('./page');return function(){var t=e()[0];return Math.max(t.scrollHeight,t.clientHeight);};}),define('cc/function/parsePercent',['require','exports','module','./divide'],function(require){'use strict';var e=require('./divide'),t=/(-?\d+(\.\d+)?)%/;return function(n){if(t.test(n))return e(RegExp.$1,100);else return void 0;};}),define('cc/function/pin',['require','exports','module','../util/instance','./parsePercent'],function(require){'use strict';function e(e){var t=o[e.x];if(null==t)t=e.x;if('string'===$.type(t)){var n=i(t);if(null!=n)t=n*(e.width||e.element.outerWidth());}return t;}function t(e){var t=o[e.y];if(null==t)t=e.y;if('string'===$.type(t)){var n=i(t);if(null!=n)t=n*(e.height||e.element.outerHeight());}return t;}var n=require('../util/instance'),i=require('./parsePercent'),o={left:0,top:0,center:'50%',middle:'50%',right:'100%',bottom:'100%'};return function(i){var o=i.element,r=i.attachment||{};if(!r.element)r.element=n.body;var u=r.element.offset(),c=u.left+e(r),f=u.top+t(r),s=c-e(i),a=f-t(i),l=i.offset;if(l){if('number'===$.type(l.x))s+=l.x;if('number'===$.type(l.y))a+=l.y;}var d={left:s,top:a},p=o.css('position');if('absolute'!==p&&'fixed'!==p)d.position='absolute';if(i.silent)return d;else o.css(d);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,t,n,i,o){return function(c,f,s){var a=this;if($.isPlainObject(c))return s=f,void $.each(c,function(e,t){a[n](e,t,s);});s=s||{};var l=a[i](c),p=a.constructor[e+'Validator'];if(p)if($.isFunction(p[c]))f=p[c].call(a,f,s);if($.isFunction(o))f=o(a,f,s);if(l!==f||s.force)if(a[t][c]=f,!s.silent){var m={};r(m,s),m.newValue=f,m.oldValue=l;var v={};v[c]=m;var h=function(e){if(e&&e[c])a.execute(e[c],[f,l,m]);};if(h(a.inner('watchSync')),h(a.option('watchSync')),s.sync)return h(a.constructor[e+'Updater']),h(a.option('watch')),void a.emit(e+'change',v);var g=a.inner(e+'Changes');if(!g)g={},a.inner(e+'Changes',g);if($.extend(g,v),!a.inner(d))a.inner(d,u(function(){a.sync(d);}));}};}function t(){this.error('initStruct() can just call one time.');}function n(e,t,n,i,o){var r,u='before'===i?'_'+t:t+'_',c=e[u];if($.isFunction(c))if(r=c.apply(e,n),r!==!1&&!$.isPlainObject(r))r=null;if(r===!1)return!1;var f=!1;if(r&&r.dispatch)f=!0,delete r.dispatch;if(o=$.Event(o),o.type=i+t,e.emit(o,r),f)e.dispatch(o,r);if(o.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),o=require('../function/around'),r=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),f=require('../function/createEvent'),s=require('../function/replaceWith'),a=(require('../function/offsetParent'),require('./event')),l={},d='__update_async__',p={},m={initStruct:function(){var e=this,n=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var o=e.option('share'),r=e.type+i;if(o)n=p[r];var u;if(!n){if(u=$(i),o)p[r]=u;}else if(e.option('replace'))s(n,u=$(i));else n.html(i);if(u)n=u,e.option('mainElement',n);}var c=e.option('parentSelector');if(c&&!n.parent().is(c))n.appendTo(c);e.initStruct=t;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,t,n){var i=this,o=i.inner('main');if(o)o.on(e+i.namespace(),t,n);return i;},emit:function(e,t){var n=this,i=n.option('context')||n;e=f(e),e.cc=i;var o=[e];if($.isPlainObject(t))o.push(t);e.type=e.type.toLowerCase();var r=i.get$();r.trigger.apply(r,o);var u='on'+e.type;if(!e.isPropagationStopped()&&i.execute(u,o)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+'_',o),e;},dispatch:function(e,t){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(e);if(n.type='dispatch',this.emit(n,t),n.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,t){return this.on('before'+e.toLowerCase(),t);},after:function(e,t){return this.on('after'+e.toLowerCase(),t);},find:function(e){var t=this.inner('main');if(t){var n=t.find(e);if(n.length)return n;}},appendTo:function(e){var t=this.inner('main');if(t)t.appendTo(e);},prependTo:function(e){var t=this.inner('main');if(t)t.prependTo(e);},execute:function(e,t){var n=this,i=e;if('string'===$.type(e))i=n.option(e);if($.isFunction(i)){var o=n.option('context')||n;if($.isArray(t))return i.apply(o,t);else return i.call(o,t);}},renderWith:function(e,t,n){var i=this;if(!t)if(t=i.option('renderTemplate'),!t)t=i.option('mainTemplate');if(!n)n=i.option('mainElement');var o=i.option('renderSelector');if(o)n=n.find(o);var r;if($.isPlainObject(e)||$.isArray(e))r=i.execute('render',[e,t]);else if('string'===$.type(e))r=e;n.html(r);},namespace:function(){return'.'+this.guid;},option:function(e,t){var n=this;if(1===arguments.length&&'string'===$.type(e))return n.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.option(e,t);});n.options[e]=t;}},inner:function(e,t){var n=this,i=n.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.inner(e,t);});i[e]=t;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,t){return c(t,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},v={sync:function(){var e=this,t=function(t,n,i){$.each(t,function(o,r){return e.execute(n[o],[r.newValue,r.oldValue,i?t:r]);});};if($.each(['property','state'],function(n,i){var o=e.inner(i+'Changes');if(o){e.inner(i+'Changes',null);var r=e.constructor[i+'Updater'];if(r)t(o,r,!0);var u=e.option('watch');if(u)t(o,u);e.emit(i+'change',o);}}),arguments[0]!==d)e.execute(e.inner(d));e.inner(d,!1);},_sync:function(){if(!this.inner(d))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,t){r(e,v),$.each(e,function(i,r){var u=i.indexOf('_');if($.isFunction(r)&&0!==u&&u!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var c=function(e){return n(this,i,arguments,'before',e);},f=function(e){var t=this,o=arguments,u=function(){return n(t,i,o,'after',e);};if(r.length+1===o.length){var c=o[o.length-1];if(c&&$.isFunction(c.then))return void c.then(u);}u();};o(e,i,c,f);}}),r(e,m),a.extend(e);},exports.init=function(e,t){if(!t)t={};return r(t,e.constructor.defaultOptions),t.onafterinit_=function(){e.state('inited',!0);},t.onafterdispose_=function(){e.state('disposed',!0),e.off();var t=e.inner('main');if(e.option('removeOnDispose')&&t)t.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=t,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var t=e.inner('main')||e.option('mainElement');if(t)t.off(e.namespace());};}),define('cc/function/pinGlobal',['require','exports','module','./pin','./viewport','./viewportWidth','./viewportHeight','./pageScrollLeft','./pageScrollTop'],function(require){'use strict';var e=require('./pin'),t=require('./viewport'),n=require('./viewportWidth'),i=require('./viewportHeight'),o=require('./pageScrollLeft'),r=require('./pageScrollTop');return function(u){var c={silent:!0,element:u.element,x:'50%'===u.x?'50%':0,y:'50%'===u.y?'50%':0,attachment:{element:t(),width:n(),height:i(),x:u.x,y:u.y}};if(!u.fixed)c.offset={x:o(),y:r()};return e(c);};}),define('cc/helper/Draggable',['require','exports','module','../function/page','../function/restrain','../function/position','../function/contains','../function/testTarget','../function/innerOffset','../function/outerOffset','../function/pageScrollLeft','../function/pageScrollTop','../function/viewportWidth','../function/viewportHeight','../function/enableSelection','../function/disableSelection','../util/life','../util/touch','../util/instance'],function(require){'use strict';function e(e){m.init(this,e);}var t=require('../function/page'),n=require('../function/restrain'),i=require('../function/position'),o=require('../function/contains'),r=require('../function/testTarget'),u=require('../function/innerOffset'),c=require('../function/outerOffset'),f=require('../function/pageScrollLeft'),s=require('../function/pageScrollTop'),a=require('../function/viewportWidth'),l=require('../function/viewportHeight'),d=require('../function/enableSelection'),p=require('../function/disableSelection'),m=require('../util/life'),v=require('../util/touch'),h=require('../util/instance').body,g=e.prototype;g.type='Draggable',g.init=function(){var e=this,m=e.option('mainElement'),v=e.option('mainSelector');e.inner({main:m});var g=e.option('containerElement');if(!g)g=t();var E,k=e.option('draggingClass'),T=e.option('containerDraggingClass'),j=e.option('bodyDraggingClass')||'dragging',C=function(t){var d;w=v?$(t.currentTarget):m;var p=t[$.expando];if(p){var h=e.option('includeSelector'),k=e.option('excludeSelector'),T=t.target;if(h&&!r(T,h,w)||k&&r(T,k,w))return;$.each(q,function(e,n){if(0===t.type.indexOf(e))return d=n,!1;else return void 0;});}else if(t.type)d=q[t.type];if(!d)d=q.mouse;e.emit('pick',{mainElement:w}),E=i(w),S.left=E.left,S.top=E.top;var j=g.is('html,body'),C=!0;if(!j)C=o(g,w);var N,_,A=c(w),H=u(g);if(p)N=d.absoluteX(t)-A.x,_=d.absoluteY(t)-A.y;else N=t.offsetX,_=t.offsetY;if(C){if(!j)N-=g.scrollLeft(),_-=g.scrollTop();N+=H.x,_+=H.y;}var P,D,F,W,I=a(),L=l(),X=s(),J=f(),Y=J+I,U=X+L,M='fixed'===E.position;if(M)if(j)P=0,D=0;else P=n(H.x,J,Y),D=n(H.y,X,U);else if(j)P=-1*H.x,D=-1*H.y;else if(C)P=0,D=0;else P=H.x,D=H.y;if(null==F)if(!j&&C)F=g.prop('scrollWidth'),W=g.prop('scrollHeight');else F=g.innerWidth(),W=g.innerHeight();if(j){if(I>F)F=I;if(L>W)W=L;}if(M){if(P+F>Y)F=Y-P;if(D+W>U)W=U-D;}F=Math.max(0,F-w.outerWidth(!0)),W=Math.max(0,W-w.outerHeight(!0));var z=e.option('axis');return x='y'===z?O.constant(E.left):O.variable(d[M?'fixedX':'absoluteX'],N,P,P+F),y='x'===z?O.constant(E.top):O.variable(d[M?'fixedY':'absoluteY'],_,D,D+W),b=0,!0;},N=function(t){if(null!=b){S.left=x(t),S.top=y(t);var n;if(0===b){if(E)w.css(E),E=null;if(n=e.emit('beforedrag',$.extend({},S)),n.isDefaultPrevented())return;if(p(),k)w.addClass(k);if(T)g.addClass(T);if(j)h.addClass(j);}if(b++,n=e.emit('drag',$.extend({},S)),!n.isDefaultPrevented())e.execute('dragAnimation',{mainElement:w,mainStyle:S});}},_=function(){if(null!=b){if(b>0){if(d(),k)w.removeClass(k);if(T)g.removeClass(T);if(j)h.removeClass(j);e.emit('afterdrag',$.extend({},S));}e.emit('drop',{mainElement:w}),b=x=y=E=w=null;}};e.execute('init',{mainElement:m,mainSelector:v,namespace:e.namespace(),downHandler:C,moveHandler:N,upHandler:_});},g.dispose=function(){m.dispose(this);},m.extend(g);var x,y,b,w,S={},O={constant:function(e){return function(){return e;};},variable:function(e,t,i,o){return function(r){return n(e(r)-t,i,o);};}},q={};return $.each(v,function(e,t){if(t.support)q[e]={absoluteX:function(e){return t.client(e).x+f();},absoluteY:function(e){return t.client(e).y+s();},fixedX:function(e){return t.client(e).x;},fixedY:function(e){return t.client(e).y;}};}),e;}),define('cc/function/dragGlobal',['require','exports','module','../helper/Draggable','../util/instance'],function(require){'use strict';var e=require('../helper/Draggable'),t=require('../util/instance');return function(n){return new e({mainElement:n.element,containerElement:t.body,mainDraggingClass:n.draggingClass,includeSelector:n.includeSelector,excludeSelector:n.excludeSelector,dragAnimation:n.dragAnimation,init:function(e){var n=e.namespace;e.mainElement.on('mousedown'+n,function(i){if(e.downHandler(i))t.document.off(n).on('mousemove'+n,e.moveHandler).on('mouseup'+n,function(i){e.upHandler(i),t.document.off(n);});});}});};}),define('cc/ui/Dialog',['require','exports','module','../function/contains','../function/debounce','../function/pageWidth','../function/pageHeight','../function/pinGlobal','../function/dragGlobal','../util/life','../util/instance'],function(require){'use strict';function e(e){c.init(this,e);}var t=require('../function/contains'),n=require('../function/debounce'),i=require('../function/pageWidth'),o=require('../function/pageHeight'),r=require('../function/pinGlobal'),u=require('../function/dragGlobal'),c=require('../util/life'),f=require('../util/instance').window,s=e.prototype;return s.type='Dialog',s.init=function(){var e=this;e.initStruct();var n=e.option('mainElement'),i=e.option('maskElement');if(e.option('modal')){if(!i)i=$(e.option('maskTemplate'));if(!t(i,n))n.before(i);}else if(i)i=null;var o=[],r=e.option('skinClass');if(r)o.push(r);var u=e.option('draggableClass');if(e.option('draggable')&&u)o.push(u);if(o.length>0)n.addClass(o.join(' '));var c=e.option('removeOnEmpty');$.each(['content','footer'],function(t,i){var o=e.option(i),r=e.option(i+'Selector');if(o)n.find(r).html(o);else if(c)n.find(r).remove();});var f=e.option('title');if(f)n.find(e.option('titleSelector')).html(f);else if(c)n.find(e.option('headerSelector')).remove();var s=e.option('closeSelector');if(e.option('removeClose'))n.find(s).remove();var a={},l=e.option('width');switch($.type(l)){case'string':case'number':a.width=l;}var d=e.option('fixed')?'fixed':'absolute';if(n.css('position')!==d)a.position=d;if(i){var p='z-index',m=e.option('zIndex');if(!$.isNumeric(m))if(m=i.css(p),!$.isNumeric(m))m='auto';i.css(p,m),a[p]=m;}n.css(a);var v='click'+e.namespace();if(s)n.on(v,s,$.proxy(e.hide,e));if(e.option('disposeOnHide'))e.on('statechange',function(t,n){var i=n.hidden;if(i&&i.newValue===!0&&i.oldValue===!1)e.dispose();});if(i){if(e.option('hideOnClickMask'))i.on(v,function(i){if(!t(n,i.target))e.hide();});if(e.option('removeOnDispose'))e.after('dispose',function(){i.remove();});}e.inner({main:n,mask:i});var h=e.option('hidden');if(h)e.hide();else e.show();},s.show=function(){this.state('hidden',!1);},s._show=function(){if(this.is('hidden')===!1)return!1;else return void 0;},s.hide=function(){this.state('hidden',!0);},s._hide=function(){if(this.is('hidden')===!0)return!1;else return void 0;},s.refresh=function(){var e=this,t={},n=e.inner('main');t.mainElement=n,t.mainStyle=r({element:n,x:e.option('x'),y:e.option('y'),fixed:e.option('fixed')});var u=e.inner('mask');if(u)t.maskElement=u,t.maskStyle={width:i(),height:o()};e.execute(arguments[0]?'resizeWindowAnimation':'refreshAnimation',t);},s.dispose=function(){var e=this;if(c.dispose(e),!e.is('hidden'))e.hide();var t=e.inner('mask');if(t)t.off(e.namespace());},c.extend(s),e.stateUpdater={hidden:function(e){var t=this,i=t.namespace();f.off(i);var o=t.inner('dragger');if(o)o.dispose(),o=null;var r=t.inner('main'),c=t.inner('mask'),s={mainElement:r};if(c)s.maskElement=c;if(e)t.execute('hideAnimation',s);else{if(f.on('resize'+i,n(function(){t.refresh(!0);},50)),t.option('draggable'))o=u({element:r,includeSelector:t.option('draggableIncludeSelector'),excludeSelector:t.option('draggableExcludeSelector'),draggingClass:t.option('draggingClass'),dragAnimation:t.option('dragAnimation')});t.execute('showAnimation',s),t.refresh();}t.inner('dragger',o);}},e;}),define('mobile/common/custom/ui/Dialog_315abb274f',['require','exports','module','cc/ui/Dialog'],function(require){'use strict';var e=require('cc/ui/Dialog');return e.defaultOptions={x:'50%',y:'50%',modal:!0,fixed:!0,hidden:!1,draggable:!0,removeOnEmpty:!1,disposeOnHide:!0,removeOnDispose:!0,positionOnResize:!0,hideOnClickMask:!1,draggableClass:'draggable',draggableIncludeSelector:'> .header',draggableExcludeSelector:['> .header > .title','> .close'],parentSelector:'#app',headerSelector:'> .header',titleSelector:'> .header > .title',contentSelector:'> .body',footerSelector:'> .footer',mainTemplate:'<div class="dialog"><div class="header"><div class="title"></div></div><div class="body"></div><div class="footer"></div></div>',maskTemplate:'<div class="mask"></div>',showAnimation:function(e){if(e.mainElement.show(),e.maskElement)e.maskElement.show();},hideAnimation:function(e){if(e.mainElement.hide(),e.maskElement)e.maskElement.hide();},dragAnimation:function(){},refreshAnimation:function(){},resizeWindowAnimation:function(){}},e;}),define('mobile/common/ui_a6cab00bb7',['require','exports','cc/util/Queue','cc/util/Timer','cc/function/around','cc/function/contains','./custom/ui/Dialog_315abb274f'],function(require,exports){'use strict';function e(e,t){var n=[];if($.each(e,function(e,t){var i=t.type||'';if(i)i=' '+i;n.push('<div class="button'+i+'">'+t.text+'</div>');}),n.length>0)return'<div class="buttons">'+n.join('')+(t||'')+'</div>';else return void 0;}function t(e,t){var n=document.activeElement;if(n&&!d(e.find('> .body'),n))if('INPUT'===n.tagName||'TEXTAREA'===n.tagName)n.blur();e.live('click','> .footer .button',function(){var n=$(this).index();t[n].action.call(e);});}function n(n,i){var o={title:i,content:n,draggable:!1,removeClose:!0,removeOnEmpty:!0,disposeOnHide:!0,removeOnDispose:!0};if($.isPlainObject(n))$.extend(o,n);var r;if('string'===$.type(o.type))r=o.type;o.skinClass=[r,'dialog-alert'].join(' ');var u=o.buttons;if(!u)u=[{text:'确定',type:r,action:function(){this.hide();}}];var c='';if(o.checkboxLabel){c='<label class="checkbox small"><input type="checkbox">'+o.checkboxLabel+'</label>';var f=o.onbeforehide;if($.isFunction(f))o.onbeforehide=function(){f.call(this,this.find('input[type="checkbox"]').prop('checked'));};}o.footer=e(u,c),m.add(function(e){o.onafterhide=function(){e();},t(new p(o),u);});}function i(n,i){var o={title:i,content:n,draggable:!1,removeClose:!0,removeOnEmpty:!0,disposeOnHide:!0,removeOnDispose:!0};if($.isPlainObject(n))$.extend(o,n);var r;if('string'===$.type(o.type))r=o.type;o.skinClass=[r,'dialog-confirm'].join(' ');var u=$.Deferred(),c=o.buttons;if(!c)c=[{text:'取消',action:function(){this.hide();}},{text:'确定',type:r,action:function(){this.hide();}}];var f='';if(o.checkboxLabel){f='<label class="checkbox small"><input type="checkbox">'+o.checkboxLabel+'</label>';var s=o.onbeforehide;if($.isFunction(s))o.onbeforehide=function(){s.call(this,this.find('input[type="checkbox"]').prop('checked'));};}return o.footer=e(c,f),m.add(function(e){o.onafterhide=function(){e();},$.each(c,function(e,t){var n;if(e)n=function(){u.resolve();};else n=function(){u.reject();};l(t,'action',null,n);}),t(new p(o),c);}),u;}function o(){if(f)clearTimeout(f),f=null;if(s)s.resolve();if(u)u.remove();if(c)c.remove();}function r(e){o(),s=$.Deferred();var t={modal:!1,duration:3000};e=$.extend(t,e);var n='<div class="tip">';if('success'===e.type)n+='<i class="icon-check-circle"></i>';else if('error'===e.type)n+='<i class="icon-times-circle"></i>';else if('loading'===e.type)n+='<div class="loader"><div class="loader-inner line-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';if(n+='<div class="text">'+e.content+'</div></div>',u=$(n).appendTo('#app'),e.modal){c=$('<div class="mask"></div>');var i=u.css('z-index');if(!$.isNumeric(i))i='auto';c.css('z-index',i),u.before(c);}else u.on('click',o);return f=setTimeout(o,e.duration),s;}var u,c,f,s,a=require('cc/util/Queue'),l=(require('cc/util/Timer'),require('cc/function/around')),d=require('cc/function/contains'),p=require('./custom/ui/Dialog_315abb274f'),m=new a({task:function(e,t){e(t);}});exports.init=function(){window.alert=n,window.confirm=i,window.tip=r,window.killTip=o,exports.init=$.noop;};}),define('mobile/common/service_f0cb652f55',['require','exports','module','./ui_a6cab00bb7','common/service_b196638392'],function(require){'use strict';return require('./ui_a6cab00bb7').init(),require('common/service_b196638392');}),define('mobile/test/service',['require','exports','module','../common/service_f0cb652f55'],function(require,exports){'use strict';var e=require('../common/service_f0cb652f55');exports.noAuth=function(){return e.post('/wx/fenqi/authApi/noAuth',null,{timeout:0});},exports.saveCourse=function(t){return e.post('/wx/course/fenqiCourseApi/save',t,{timeout:0});},exports.getOrgInfo=function(t){return e.post('/wx/fenqi/fenqiOrgInfoApi/get',t,{timeout:0});},exports.loginSeller=function(t){return e.post('/wx/seller/fenqiOrgSellerApi/login',t,{timeout:0});};});