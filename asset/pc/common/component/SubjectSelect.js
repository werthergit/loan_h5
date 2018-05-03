define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('pc/common/component/Select_html',function(){return'<div class="dropdown{{#if options.className}} {{options.className}}{{/if}}{{#if options.hidden}} hidden{{/if}}"><div class="button secondary"{{#if options.disabled}} disabled{{/if}}><i class="icon icon-caret-down"></i><span class="text">{{{options.defaultText}}}</span></div><ul class="menu"></ul><input type="hidden" name="{{options.name}}" /><div class="tooltip error right" data-error-for="{{options.name}}"></div></div>';}),define('cc/util/json',['require','exports','module'],function(require,exports,module){if('object'!=typeof JSON)JSON={};return function(){'use strict';function f(e){return 10>e?'0'+e:e;}function this_value(){return this.valueOf();}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return'string'==typeof t?t:'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+e+'"';}function str(e,t){var n,i,o,r,u,a=gap,c=t[e];if(c&&'object'==typeof c&&'function'==typeof c.toJSON)c=c.toJSON(e);if('function'==typeof rep)c=rep.call(t,e,c);switch(typeof c){case'string':return quote(c);case'number':return isFinite(c)?String(c):'null';case'boolean':case'null':return String(c);case'object':if(!c)return'null';if(gap+=indent,u=[],'[object Array]'===Object.prototype.toString.apply(c)){for(r=c.length,n=0;r>n;n+=1)u[n]=str(n,c)||'null';return o=0===u.length?'[]':gap?'[\n'+gap+u.join(',\n'+gap)+'\n'+a+']':'['+u.join(',')+']',gap=a,o;}if(rep&&'object'==typeof rep){for(r=rep.length,n=0;r>n;n+=1)if('string'==typeof rep[n])if(i=rep[n],o=str(i,c))u.push(quote(i)+(gap?': ':':')+o);}else for(i in c)if(Object.prototype.hasOwnProperty.call(c,i))if(o=str(i,c))u.push(quote(i)+(gap?': ':':')+o);return o=0===u.length?'{}':gap?'{\n'+gap+u.join(',\n'+gap)+'\n'+a+'}':'{'+u.join(',')+'}',gap=a,o;}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if('function'!=typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value;var gap,indent,meta,rep;if('function'!=typeof JSON.stringify)meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},JSON.stringify=function(e,t,n){var i;if(gap='',indent='','number'==typeof n)for(i=0;n>i;i+=1)indent+=' ';else if('string'==typeof n)indent=n;if(rep=t,t&&'function'!=typeof t&&('object'!=typeof t||'number'!=typeof t.length))throw new Error('JSON.stringify');return str('',{'':e});};if('function'!=typeof JSON.parse)JSON.parse=function(text,reviver){function walk(e,t){var n,i,o=e[t];if(o&&'object'==typeof o)for(n in o)if(Object.prototype.hasOwnProperty.call(o,n))if(i=walk(o,n),void 0!==i)o[n]=i;else delete o[n];return reviver.call(e,t,o);}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text))text=text.replace(rx_dangerous,function(e){return'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);});if(rx_one.test(text.replace(rx_two,'@').replace(rx_three,']').replace(rx_four,'')))return j=eval('('+text+')'),'function'==typeof reviver?walk({'':j},''):j;throw new SyntaxError('JSON.parse');};}(),JSON;}),define('pc/common/component/SubjectSelect_html',function(){return'<div class="dropdowns tight{{#if options.className}} {{options.className}}{{/if}}"><Select options={{options.subject1}} /><Select options={{options.subject2}} /><Select options={{options.subject3}} /></div>';}),define('cc/form/common',['require','exports','module'],function(require,exports){'use strict';exports.prop=function(e,t,n){if($.isPlainObject(t))$.each(t,function(t,n){exports.prop(e,t,n);});else{var i=e.inner('native');if(2===arguments.length)return i.prop(t);else{if(i.prop(t)!==n)i.prop(t,n);if('value'===t)i.trigger('change');}}},exports.setClass=function(e,t,n){var i=e.option(t);if(i)e.option('mainElement')[n+'Class'](i);},exports.findNative=function(e,t){var n=e.option('mainElement').find(t);if(0===n.length)e.error('form/'+e.type+' 必须包含一个 ['+t+'].');return n.eq(0);},exports.validateName=function(e,t){if('string'!==$.type(t))if(t=exports.prop(e,'name'),!t||'string'!==$.type(t))e.error('name attribute is missing.');return t;},exports.validateValue=function(e,t){var n=$.type(t);if('number'===n)t=''+t;else if('string'!==n)t=exports.prop(e,'value')||'';return t;};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/split',['require','exports','module'],function(){'use strict';return function(e,t){var n=[];if('number'===$.type(e))e=''+e;if(e&&'string'===$.type(e))$.each(e.split(t),function(e,t){if(t=$.trim(t))n.push(t);});return n;};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(t){if(t.is('body'))return t;for(var n=t.parent();!e(n);)n=n.parent();return n;};}),define('cc/function/toString',['require','exports','module'],function(){'use strict';return function(e,t){var n=$.type(e);if('number'===n)e=''+e;else if('string'!==n){if(1===arguments.length)t='';e=t;}return e;};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,t){e=e[0],t=t[0],e.parentNode.replaceChild(t,e);};}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(e){e.css('display');return'none'===e.css('display')||0==e.css('opacity')||'hidden'===e.css('visibility');};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(e,t){if(e=e.jquery?e[0]:e,t=t.jquery?t[0]:t,!e||!t)return!1;if(e===t)return!0;else return $.contains(e,t);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var t=setTimeout(e,0);return function(){clearTimeout(t);};};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,t){if('boolean'!==$.type(e)){if(1===arguments.length)t=!!e;e=t;}return e;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,t,n,i){var o='string'===$.type(t),r=o?e[t]:e;if(!o)i=n,n=t;var u=function(){var e,t=$.makeArray(arguments);if($.isFunction(n))e=n.apply(this,t);if(e!==!1){if($.isFunction(r))e=r.apply(this,t);if($.isFunction(i)){t.push(e);var o=i.apply(this,t);if('undefined'!==$.type(o))e=o;}return e;}};return o?e[t]=u:u;};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,t){if($.isPlainObject(t))$.each(t,function(t,n){if(!(t in e))e[t]=n;});};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('common/service_b196638392',['require','exports','module','cc/util/json'],function(require,exports){'use strict';function e(e,t,r){t=t||{};var u=$.Deferred();return r=$.extend({},o,r),$.ajax({url:n+e,data:r.stringify?i.stringify(t):t,method:'post',dataType:'json',timeout:r.timeout,async:!r.sync,beforeSend:function(e){var t=i.parse(sessionStorage.getItem('userInfo'))||{};if(e.setRequestHeader('X-ZXFQ-INNER-TOKEN',t.token),e.setRequestHeader('X-ZXFQ-INNER-OPENID',t.openid),r.stringify)e.setRequestHeader('Content-Type','application/json;charset=UTF-8');}}).then(function(e){var t=e.code,n=0;if(null==t)t=e.status,n=200;if(t===n)u.resolve(e);else{var i=e.msg;if(i&&!r.preventError)alert({title:'提示',content:i});u.reject(e);}}),u;}function t(e,t){return $.ajax({url:n+e,data:t,dataType:'jsonp'});}var n='http://www.zhixinfenqi.com/loanOne',i=require('cc/util/json'),o={timeout:60000,sync:!1,stringify:!1,preventError:!1};exports.post=e,exports.jsonp=t,exports.baseUrl=n;}),define('cc/util/trigger',['require','exports','module','../function/split'],function(require,exports){'use strict';function e(e){return function(t){var i=e.delay,o=e.startDelay,r=e.endDelay,u=function(){e.handler.call(t.currentTarget,t);},a=function(){if(i>0&&o&&r){var t=function(){e[n]=setTimeout(function(){c(n);},i);},a=function(){clearTimeout(e[n]),r(c,e),e[n]=null;},c=function(t){if(e[n])a();if(n===t)u();};if(!e[n])o(c,e),t();}else u();},c=e.beforeHandler;if($.isFunction(c)){var s=c.call(t.currentTarget,t);if(s===!1)return;else if(s&&$.isFunction(s.then))return void s.then(a);}a();};}var t=require('../function/split'),n='delayTimer';return exports={focus:{type:'focusin',handler:e},blur:{type:'focusout',handler:e},click:{type:'click',handler:e},enter:{type:'mouseenter',handler:e},leave:{type:'mouseleave',handler:e},context:{type:'contextmenu',handler:e}},exports.parse=function(e,n){var i={};if(e)$.each(t(e,','),function(e,t){var o=exports[t];if(o)i[t]={type:o.type,handler:o.handler(n(t))};});return i;},exports;}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),t=require('../function/createEvent'),n={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,t,n){return this.get$().on(e,t,n),this;},once:function(e,t,n){return this.get$().one(e,t,n),this;},off:function(e,t){return this.get$().off(e,t),this;},emit:function(e,n){return e=t(e),this.get$().trigger(e,n),e;}};exports.extend=function(t){e(t,n);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,t,n,i,o){return function(a,c,s){var f=this;if($.isPlainObject(a))return s=c,void $.each(a,function(e,t){f[n](e,t,s);});s=s||{};var l=f[i](a),d=f.constructor[e+'Validator'];if(d)if($.isFunction(d[a]))c=d[a].call(f,c,s);if($.isFunction(o))c=o(f,c,s);if(l!==c||s.force)if(f[t][a]=c,!s.silent){var h={};r(h,s),h.newValue=c,h.oldValue=l;var v={};v[a]=h;var m=function(e){if(e&&e[a])f.execute(e[a],[c,l,h]);};if(m(f.inner('watchSync')),m(f.option('watchSync')),s.sync)return m(f.constructor[e+'Updater']),m(f.option('watch')),void f.emit(e+'change',v);var g=f.inner(e+'Changes');if(!g)g={},f.inner(e+'Changes',g);if($.extend(g,v),!f.inner(p))f.inner(p,u(function(){f.sync(p);}));}};}function t(){this.error('initStruct() can just call one time.');}function n(e,t,n,i,o){var r,u='before'===i?'_'+t:t+'_',a=e[u];if($.isFunction(a))if(r=a.apply(e,n),r!==!1&&!$.isPlainObject(r))r=null;if(r===!1)return!1;var c=!1;if(r&&r.dispatch)c=!0,delete r.dispatch;if(o=$.Event(o),o.type=i+t,e.emit(o,r),c)e.dispatch(o,r);if(o.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),o=require('../function/around'),r=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),a=require('../function/toBoolean'),c=require('../function/createEvent'),s=require('../function/replaceWith'),f=(require('../function/offsetParent'),require('./event')),l={},p='__update_async__',d={},h={initStruct:function(){var e=this,n=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var o=e.option('share'),r=e.type+i;if(o)n=d[r];var u;if(!n){if(u=$(i),o)d[r]=u;}else if(e.option('replace'))s(n,u=$(i));else n.html(i);if(u)n=u,e.option('mainElement',n);}var a=e.option('parentSelector');if(a&&!n.parent().is(a))n.appendTo(a);e.initStruct=t;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,t,n){var i=this,o=i.inner('main');if(o)o.on(e+i.namespace(),t,n);return i;},emit:function(e,t){var n=this,i=n.option('context')||n;e=c(e),e.cc=i;var o=[e];if($.isPlainObject(t))o.push(t);e.type=e.type.toLowerCase();var r=i.get$();r.trigger.apply(r,o);var u='on'+e.type;if(!e.isPropagationStopped()&&i.execute(u,o)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+'_',o),e;},dispatch:function(e,t){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(e);if(n.type='dispatch',this.emit(n,t),n.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,t){return this.on('before'+e.toLowerCase(),t);},after:function(e,t){return this.on('after'+e.toLowerCase(),t);},find:function(e){var t=this.inner('main');if(t){var n=t.find(e);if(n.length)return n;}},appendTo:function(e){var t=this.inner('main');if(t)t.appendTo(e);},prependTo:function(e){var t=this.inner('main');if(t)t.prependTo(e);},execute:function(e,t){var n=this,i=e;if('string'===$.type(e))i=n.option(e);if($.isFunction(i)){var o=n.option('context')||n;if($.isArray(t))return i.apply(o,t);else return i.call(o,t);}},renderWith:function(e,t,n){var i=this;if(!t)if(t=i.option('renderTemplate'),!t)t=i.option('mainTemplate');if(!n)n=i.option('mainElement');var o=i.option('renderSelector');if(o)n=n.find(o);var r;if($.isPlainObject(e)||$.isArray(e))r=i.execute('render',[e,t]);else if('string'===$.type(e))r=e;n.html(r);},namespace:function(){return'.'+this.guid;},option:function(e,t){var n=this;if(1===arguments.length&&'string'===$.type(e))return n.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.option(e,t);});n.options[e]=t;}},inner:function(e,t){var n=this,i=n.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.inner(e,t);});i[e]=t;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,t){return a(t,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},v={sync:function(){var e=this,t=function(t,n,i){$.each(t,function(o,r){return e.execute(n[o],[r.newValue,r.oldValue,i?t:r]);});};if($.each(['property','state'],function(n,i){var o=e.inner(i+'Changes');if(o){e.inner(i+'Changes',null);var r=e.constructor[i+'Updater'];if(r)t(o,r,!0);var u=e.option('watch');if(u)t(o,u);e.emit(i+'change',o);}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1);},_sync:function(){if(!this.inner(p))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,t){r(e,v),$.each(e,function(i,r){var u=i.indexOf('_');if($.isFunction(r)&&0!==u&&u!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var a=function(e){return n(this,i,arguments,'before',e);},c=function(e){var t=this,o=arguments,u=function(){return n(t,i,o,'after',e);};if(r.length+1===o.length){var a=o[o.length-1];if(a&&$.isFunction(a.then))return void a.then(u);}u();};o(e,i,a,c);}}),r(e,h),f.extend(e);},exports.init=function(e,t){if(!t)t={};return r(t,e.constructor.defaultOptions),t.onafterinit_=function(){e.state('inited',!0);},t.onafterdispose_=function(){e.state('disposed',!0),e.off();var t=e.inner('main');if(e.option('removeOnDispose')&&t)t.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=t,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var t=e.inner('main')||e.option('mainElement');if(t)t.off(e.namespace());};}),define('cc/helper/Popup',['require','exports','module','../function/isHidden','../function/contains','../function/nextTick','../util/life','../util/trigger','../util/instance'],function(require){'use strict';function e(e){v.init(this,e);}function t(e,t){return function(n){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(t))if(!t.call(this,n))return;e.open(n);}};}function n(e,t){return function(n){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(t))if(!t.call(this,n))return;e.close(n);var o=e.inner(S);if(o)e.sync(),o.resolve();}};}function i(e,t,n,i){if(e)e.on(t,i,n);}function o(e,t,n){if(e)e.off(t,n);}function r(e,t){var n=e.option('triggerElement'),o=e.option('triggerSelector');if(n||o)i(n||g.body,t.type,t.handler,o);}function u(e,t){o(e.option('triggerElement')||g.body,t.type,t.handler);}function a(e,t){i(g.document,t.type,t.handler);}function c(e,t){o(g.document,t.type,t.handler);}function s(e){return n(e,function(t){return!d(e.inner('layer'),t.target);});}function f(e,t){var n=e.option('triggerElement'),i=e.option('triggerSelector');if(n&&!i)return n;if(t)return $(t.currentTarget);else return void 0;}function l(e,t){var n=e.option('layerElement');if(n&&n.jquery&&n.length)return n;if(t&&$.isFunction(n)){if(n=e.execute(n,t),n&&n.tagName)n=$(n);return n;}}var p=require('../function/isHidden'),d=require('../function/contains'),h=require('../function/nextTick'),v=require('../util/life'),m=require('../util/trigger'),g=require('../util/instance'),y=e.prototype;y.type='Popup',y.init=function(){var e=this,t=function(t,n){if($.isFunction(t[n]))return t[n](e);else return void 0;},n=m.parse(e.option('showLayerTrigger'),function(n){var i=T.show[n];return{delay:e.option('showLayerDelay'),startDelay:t(i,'startDelay'),endDelay:t(i,'endDelay'),handler:t(i,'handler'),beforeHandler:function(t){var n=function(){e.inner({trigger:f(e,t),layer:l(e,t)});};if(e.is('opened')){var i=$.Deferred();return i.then(n),e.inner(S,i),i;}else n();}};}),i=m.parse(e.option('hideLayerTrigger'),function(n){var i=T.hide[n];return{delay:e.option('hideLayerDelay'),startDelay:t(i,'startDelay'),endDelay:t(i,'endDelay'),handler:t(i,'handler')};}),o=function(t){$.each(n,function(n,i){T.show[n][t](e,i);});},r=function(t){$.each(i,function(n,i){T.hide[n][t](e,i);});},u=!1,a=!1,c=function(){if(!u)o('on'),u=!0;},s=function(){if(u)o('off'),u=!1;},p=function(){if(!a)r('on'),a=!0;},d=function(){if(a)r('off'),a=!1;},v=function(t,n){var i=n.opened;if(i)if(i.newValue){if(!e.option('triggerSelector'))s();h(p);}else d(),c();};e.before('dispose',function(){e.off('statechange',v),s(),d(),e.close();}).on('statechange',v),e.inner({trigger:f(e),layer:l(e)}),e.state({opened:e.option('opened')});},y.open=function(){this.state('opened',!0);},y._open=function(e){var t=this;if(t.is('opened')){var n=t.inner('layer'),i=t.inner('trigger'),o=n.data(b);if(i&&o&&i[0]!==o[0])n.data(x).close(),h(function(){if(t.guid)t.open(e);});return!1;}return{dispatch:!0};},y.open_=function(){var e=this,t=e.inner('layer');if(t){var n={};n[b]=e.inner('trigger'),n[x]=e,t.data(n);}return{dispatch:!0};},y.close=function(){this.state('opened',!1);},y._close=function(){if(!this.is('opened'))return!1;else return{dispatch:!0};},y.close_=function(){var e=this,t=e.inner('layer');if(t)t.removeData(x).removeData(b);return{dispatch:!0};},y.dispose=function(){v.dispose(this);},v.extend(y),e.stateUpdater={opened:function(e){var t=this.inner('layer');if(t)this.execute(e?'showLayerAnimation':'hideLayerAnimation',{layerElement:t});}},e.stateValidator={opened:function(e){if('boolean'!==$.type(e)){var t=this.inner('layer');if(t)e=!p(t);}return e;}};var x='__prev_popup__',b='__trigger_element__',S='__hide_promise__',w=m.enter.type,j=m.leave.type,T={show:{focus:{on:r,off:u,handler:t},click:{on:r,off:u,handler:t},enter:{on:r,off:u,handler:t,startDelay:function(e){return function(t){i(e.inner('trigger'),j,t);};},endDelay:function(e){return function(t){o(e.inner('trigger'),j,t);};}},context:{on:r,off:u,handler:t}},hide:{blur:{on:r,off:u,handler:n},click:{on:a,off:c,handler:s},leave:{on:function(e,t){i(e.inner('trigger'),t.type,t.handler),i(e.inner('layer'),t.type,t.handler);},off:function(e,t){o(e.inner('trigger'),t.type,t.handler),o(e.inner('layer'),t.type,t.handler);},handler:n,startDelay:function(e){return function(t){i(e.inner('trigger'),w,t),i(e.inner('layer'),w,t);};},endDelay:function(e){return function(t){o(e.inner('trigger'),w,t),o(e.inner('layer'),w,t);};}},context:{on:a,off:c,handler:s}}};return e;}),define('cc/ui/ComboBox',['require','exports','module','../function/toString','../helper/Popup','../util/life'],function(require){'use strict';function e(e){i.init(this,e);}var t=require('../function/toString'),n=require('../helper/Popup'),i=require('../util/life'),o=e.prototype;return o.type='ComboBox',o.init=function(){var e=this;e.initStruct();var t=e.option('buttonElement'),i=e.option('menuElement'),o=new n({triggerElement:t,layerElement:i,showLayerTrigger:e.option('showMenuTrigger'),showLayerDelay:e.option('showMenuDelay'),hideLayerTrigger:e.option('hideMenuTrigger'),hideLayerDelay:e.option('hideMenuDelay'),showLayerAnimation:function(){e.execute('showMenuAnimation',{menuElement:i});},hideLayerAnimation:function(){e.execute('hideMenuAnimation',{menuElement:i});},watchSync:{opened:function(t){e.state('opened',t);}}});o.on('dispatch',function(t,n){var i=e.emit(t.originalEvent,n);e.dispatch(i,n);});var r=e.option('mainElement'),u=e.option('menuActiveClass');if(u){var a=r||i;o.after('open',function(){a.addClass(u);}).after('close',function(){a.removeClass(u);});}var c=e.option('itemSelector'),s=e.option('valueAttribute');i.on('click'+e.namespace(),c,function(t){if(e.is('opened'))e.close(t);if(!t.isDefaultPrevented()){e.set('value',$(this).attr(s));var n=$.Event(t.originalEvent);n.type='select',e.dispatch(e.emit(n));}}),e.inner({main:r,popup:o}),e.set({data:e.option('data'),value:e.option('value')});},o.render=function(){var e=this;e.renderWith(e.get('data'),e.option('menuTemplate'),e.option('menuElement'));},o._render=function(){if(!this.get('data'))return!1;else return void 0;},o.open=function(){this.state('opened',!0);},o.close=function(){this.state('opened',!1);},o.dispose=function(){var e=this;i.dispose(e),e.inner('popup').dispose(),e.option('menuElement').off(e.namespace());},i.extend(o,['open','close']),e.propertyUpdater={},e.propertyUpdater.data=e.propertyUpdater.value=function(e,n,i){var o=this,r=o.option('menuElement'),u=o.option('itemActiveClass'),a=o.option('textAttribute'),c=o.option('valueAttribute');if(i.data)this.render();else if(i.value&&u)r.find('.'+u).removeClass(u);var s,f=t(o.get('value'),null);if(null!=f){var l=function(e){if(s=e.attr(a),null==s)s=e.html();return s;};if(''!==f){var p=r.find('['+c+'="'+f+'"]');switch(p.length){case 1:if(u)p.addClass(u);s=l(p);break;case 0:break;default:o.error('value repeated.');}}else r.find('['+c+']').each(function(){var e=$(this),t=e.attr(c);if(''===t)return s=l(e),!1;else return void 0;});}return o.execute('setText',{buttonElement:o.option('buttonElement'),text:s||o.option('defaultText')}),!1;},e.propertyValidator={value:function(e){var t=this,n=t.option('itemActiveClass');if(null==e&&n){var i=t.option('menuElement').find('.'+n);if(1===i.length)e=i.attr(t.option('valueAttribute'));}return e;}},e.stateUpdater={opened:function(e){var t=this.inner('popup');if(e)t.open();else t.close();}},e;}),define('cc/form/Select',['require','exports','module','../ui/ComboBox','../util/life','./common'],function(require){'use strict';function e(e){n.init(this,e);}var t=require('../ui/ComboBox'),n=require('../util/life'),i=require('./common'),o=e.prototype;return o.type='Select',o.init=function(){var e=this;e.initStruct();var n=e.option('mainElement'),o=new t({mainElement:n,data:e.option('data'),value:e.option('value'),defaultText:e.option('defaultText'),buttonElement:n.find(e.option('buttonSelector')),menuElement:n.find(e.option('menuSelector')),menuTemplate:e.option('menuTemplate'),renderSelector:e.option('renderSelector'),renderTemplate:e.option('renderTemplate'),showMenuTrigger:e.option('showMenuTrigger'),showMenuDelay:e.option('showMenuDelay'),hideMenuTrigger:e.option('hideMenuTrigger'),hideMenuDelay:e.option('hideMenuDelay'),itemSelector:e.option('itemSelector'),itemActiveClass:e.option('itemActiveClass'),menuActiveClass:e.option('menuActiveClass'),textAttribute:e.option('textAttribute'),valueAttribute:e.option('valueAttribute'),showMenuAnimation:function(t){e.execute('showMenuAnimation',t);},hideMenuAnimation:function(t){e.execute('hideMenuAnimation',t);},render:function(t,n){return e.execute('render',[t,n]);},setText:function(t){var i=e.option('labelSelector');n.find(i).html(t.text);}});e.once('aftersync',function(){o.option('watchSync',{value:function(t){e.set('value',t);},opened:function(t){e.state('opened',t);}}),o.set('value',e.get('value')),e.state('opened',o.is('opened'));});var r=i.findNative(e,'input[type="hidden"]');o.on('dispatch',function(t,n){var i=t.originalEvent;switch(i.type){case'afteropen':r.trigger('focusin');break;case'afterclose':r.trigger('focusout');}e.dispatch(e.emit(i,n),n);}),e.inner({main:n,'native':r,combobox:o}),e.set({data:e.option('data'),name:e.option('name'),value:e.option('value')});},o.open=function(){this.state('opened',!0);},o.close=function(){this.state('opened',!1);},o.dispose=function(){n.dispose(this),this.inner('combobox').dispose();},n.extend(o,['open','close']),e.propertyUpdater={name:function(e){i.prop(this,'name',e);}},e.propertyUpdater.data=e.propertyUpdater.value=function(e,t,n){var o=this,r={},u=n.value;if(u){var a=u.newValue;i.prop(o,'value',a),r.value=a;}var c=n.data;if(c)r.data=c.newValue;return o.inner('combobox').set(r),!1;},e.propertyValidator={name:function(e){return i.validateName(this,e);},value:function(e){return i.validateValue(this,e);}},e.stateUpdater={opened:function(e){var t=this.inner('combobox');if(e)t.open();else t.close();}},e;}),define('pc/common/custom/form/Select_9def9f7ff8',['require','exports','module','cc/form/Select'],function(require){'use strict';var e=require('cc/form/Select');return e.defaultOptions={buttonSelector:'> .button',menuSelector:'> .menu',labelSelector:'> .button > .text',itemSelector:'li',itemActiveClass:'active',textAttribute:'data-text',valueAttribute:'data-value',defaultText:'- 请选择 -',menuActiveClass:'opened',showMenuTrigger:'click',hideMenuTrigger:'click',showMenuAnimation:function(e){e.menuElement.show();},hideMenuAnimation:function(e){e.menuElement.hide();},render:function(e){var t=[];return $.each(e,function(e,n){var i=[];$.each(n,function(e,t){if('text'!==e&&null!=t)i.push('data-'+e+'="'+t+'"');});var o=i.join(' ');if(o)o=' '+o;t.push('<li class="item"'+o+'>'+n.text+'</li>');}),t.join('');}},e;}),define('pc/common/component/Select_70ddee24ee',['require','exports','module','../custom/form/Select_9def9f7ff8','./Select_html'],function(require){'use strict';var e=require('../custom/form/Select_9def9f7ff8');return Ractive.extend({template:require('./Select_html'),data:function(){return{options:{name:'',className:'',defaultText:'请选择',data:null,value:'',disabled:!1,hidden:!1,onselect:$.noop}};},onrender:function(){var t=this,n=t.select=new e({mainElement:$(t.getElement()),data:t.get('options.data'),value:t.get('options.value'),defaultText:t.get('options.defaultText'),onselect:t.get('options.onselect'),watch:{value:function(e){if(e!=t.get('options.value'))t.set('options.value',e);}}});t.observe('options.value',function(e){n.set('value',e);}),t.observe('options.data',function(e){n.set('data',e);});},onteardown:function(){this.select.dispose();}});}),define('pc/common/component/SubjectSelect',['require','exports','module','common/service_b196638392','./SubjectSelect_html','./Select_70ddee24ee'],function(require){'use strict';function e(e,n){return t.getSubjectList({id:e}).done(function(e){if(0===e.code){var t=$.map(e.data.list,function(e){return{text:e.name,value:e.id};});n(t);}});}var t=require('common/service_b196638392');return Ractive.extend({template:require('./SubjectSelect_html'),data:function(){return{options:{className:'',subject1:{name:'',value:0,data:null,defaultText:'请选择'},subject2:{name:'',value:0,data:null,defaultText:'请选择'},subject3:{name:'',value:0,data:null,defaultText:'请选择'}}};},components:{Select:require('./Select_70ddee24ee')},oninit:function(){var t=this;t.set('options.subject1.onselect',function(){t.set({'options.subject2.value':'','options.subject3.value':'','options.subject3.data':[]});}),t.set('options.subject2.onselect',function(){t.set('options.subject3.value','');}),e(null,function(e){t.set('options.subject1.data',e);});},onrender:function(){var t=this;t.observe('options.subject1.value',function(n){if(n)e(n,function(e){t.set('options.subject2.data',e);});}),t.observe('options.subject2.value',function(n){if(n)e(n,function(e){t.set('options.subject3.data',e);});});}});});