define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var n=setTimeout(e,0);return function(){clearTimeout(n);};};}),define('cc/function/split',['require','exports','module'],function(){'use strict';return function(e,n){var t=[];if('number'===$.type(e))e=''+e;if(e&&'string'===$.type(e))$.each(e.split(n),function(e,n){if(n=$.trim(n))t.push(n);});return t;};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(n){if(n.is('body'))return n;for(var t=n.parent();!e(t);)t=t.parent();return t;};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,n){e=e[0],n=n[0],e.parentNode.replaceChild(n,e);};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/function/decimalLength',['require','exports','module'],function(){'use strict';return function(e){var n=(''+e).split('.');return 2===n.length?n[1].length:0;};}),define('cc/function/float2Int',['require','exports','module'],function(){'use strict';return function(e,n){var t,i=(''+e).split('.');if(n>=0);else n=0;if(1===i.length)t=e+new Array(n+1).join('0');else n=Math.max(0,n-i[1].length),t=i.join('')+new Array(n+1).join('0');return+t;};}),define('cc/function/eventPage',['require','exports','module'],function(){'use strict';return function(e){var n=e.pageX,t=e.pageY;if('number'!==$.type(n)){var i=document.documentElement;n=e.clientX+i.scrollLeft,t=e.clientY+i.scrollTop;}return{x:n,y:t};};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,n){if('boolean'!==$.type(e)){if(1===arguments.length)n=!!e;e=n;}return e;};}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(e){e.css('display');return'none'===e.css('display')||0==e.css('opacity')||'hidden'===e.css('visibility');};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(e,n){if(e=e.jquery?e[0]:e,n=n.jquery?n[0]:n,!e||!n)return!1;if(e===n)return!0;else return $.contains(e,n);};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,n){if($.isPlainObject(n))$.each(n,function(n,t){if(!(n in e))e[n]=t;});};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,n,t,i){var r='string'===$.type(n),o=r?e[n]:e;if(!r)i=t,t=n;var u=function(){var e,n=$.makeArray(arguments);if($.isFunction(t))e=t.apply(this,n);if(e!==!1){if($.isFunction(o))e=o.apply(this,n);if($.isFunction(i)){n.push(e);var r=i.apply(this,n);if('undefined'!==$.type(r))e=r;}return e;}};return r?e[n]=u:u;};}),define('cc/util/trigger',['require','exports','module','../function/split'],function(require,exports){'use strict';function e(e){return function(n){var i=e.delay,r=e.startDelay,o=e.endDelay,u=function(){e.handler.call(n.currentTarget,n);},c=function(){if(i>0&&r&&o){var n=function(){e[t]=setTimeout(function(){f(t);},i);},c=function(){clearTimeout(e[t]),o(f,e),e[t]=null;},f=function(n){if(e[t])c();if(t===n)u();};if(!e[t])r(f,e),n();}else u();},f=e.beforeHandler;if($.isFunction(f)){var a=f.call(n.currentTarget,n);if(a===!1)return;else if(a&&$.isFunction(a.then))return void a.then(c);}c();};}var n=require('../function/split'),t='delayTimer';return exports={focus:{type:'focusin',handler:e},blur:{type:'focusout',handler:e},click:{type:'click',handler:e},enter:{type:'mouseenter',handler:e},leave:{type:'mouseleave',handler:e},context:{type:'contextmenu',handler:e}},exports.parse=function(e,t){var i={};if(e)$.each(n(e,','),function(e,n){var r=exports[n];if(r)i[n]={type:r.type,handler:r.handler(t(n))};});return i;},exports;}),define('cc/function/divide',['require','exports','module','./decimalLength','./float2Int'],function(require){'use strict';var e=require('./decimalLength'),n=require('./float2Int');return function(t,i){var r=Math.max(e(t),e(i));return t=n(t,r),i=n(i,r),t/ i;};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),n=require('../function/createEvent'),t={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,n,t){return this.get$().on(e,n,t),this;},once:function(e,n,t){return this.get$().one(e,n,t),this;},off:function(e,n){return this.get$().off(e,n),this;},emit:function(e,t){return e=n(e),this.get$().trigger(e,t),e;}};exports.extend=function(n){e(n,t);};}),define('cc/function/parsePercent',['require','exports','module','./divide'],function(require){'use strict';var e=require('./divide'),n=/(-?\d+(\.\d+)?)%/;return function(t){if(n.test(t))return e(RegExp.$1,100);else return void 0;};}),define('cc/function/pin',['require','exports','module','../util/instance','./parsePercent'],function(require){'use strict';function e(e){var n=r[e.x];if(null==n)n=e.x;if('string'===$.type(n)){var t=i(n);if(null!=t)n=t*(e.width||e.element.outerWidth());}return n;}function n(e){var n=r[e.y];if(null==n)n=e.y;if('string'===$.type(n)){var t=i(n);if(null!=t)n=t*(e.height||e.element.outerHeight());}return n;}var t=require('../util/instance'),i=require('./parsePercent'),r={left:0,top:0,center:'50%',middle:'50%',right:'100%',bottom:'100%'};return function(i){var r=i.element,o=i.attachment||{};if(!o.element)o.element=t.body;var u=o.element.offset(),c=u.left+e(o),f=u.top+n(o),a=c-e(i),s=f-n(i),l=i.offset;if(l){if('number'===$.type(l.x))a+=l.x;if('number'===$.type(l.y))s+=l.y;}var p={left:a,top:s},d=r.css('position');if('absolute'!==d&&'fixed'!==d)p.position='absolute';if(i.silent)return p;else r.css(p);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,n,t,i,r){return function(c,f,a){var s=this;if($.isPlainObject(c))return a=f,void $.each(c,function(e,n){s[t](e,n,a);});a=a||{};var l=s[i](c),d=s.constructor[e+'Validator'];if(d)if($.isFunction(d[c]))f=d[c].call(s,f,a);if($.isFunction(r))f=r(s,f,a);if(l!==f||a.force)if(s[n][c]=f,!a.silent){var h={};o(h,a),h.newValue=f,h.oldValue=l;var v={};v[c]=h;var m=function(e){if(e&&e[c])s.execute(e[c],[f,l,h]);};if(m(s.inner('watchSync')),m(s.option('watchSync')),a.sync)return m(s.constructor[e+'Updater']),m(s.option('watch')),void s.emit(e+'change',v);var y=s.inner(e+'Changes');if(!y)y={},s.inner(e+'Changes',y);if($.extend(y,v),!s.inner(p))s.inner(p,u(function(){s.sync(p);}));}};}function n(){this.error('initStruct() can just call one time.');}function t(e,n,t,i,r){var o,u='before'===i?'_'+n:n+'_',c=e[u];if($.isFunction(c))if(o=c.apply(e,t),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var f=!1;if(o&&o.dispatch)f=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+n,e.emit(r,o),f)e.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),f=require('../function/createEvent'),a=require('../function/replaceWith'),s=(require('../function/offsetParent'),require('./event')),l={},p='__update_async__',d={},h={initStruct:function(){var e=this,t=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var r=e.option('share'),o=e.type+i;if(r)t=d[o];var u;if(!t){if(u=$(i),r)d[o]=u;}else if(e.option('replace'))a(t,u=$(i));else t.html(i);if(u)t=u,e.option('mainElement',t);}var c=e.option('parentSelector');if(c&&!t.parent().is(c))t.appendTo(c);e.initStruct=n;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,n,t){var i=this,r=i.inner('main');if(r)r.on(e+i.namespace(),n,t);return i;},emit:function(e,n){var t=this,i=t.option('context')||t;e=f(e),e.cc=i;var r=[e];if($.isPlainObject(n))r.push(n);e.type=e.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u='on'+e.type;if(!e.isPropagationStopped()&&i.execute(u,r)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+'_',r),e;},dispatch:function(e,n){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(e);if(t.type='dispatch',this.emit(t,n),t.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,n){return this.on('before'+e.toLowerCase(),n);},after:function(e,n){return this.on('after'+e.toLowerCase(),n);},find:function(e){var n=this.inner('main');if(n){var t=n.find(e);if(t.length)return t;}},appendTo:function(e){var n=this.inner('main');if(n)n.appendTo(e);},prependTo:function(e){var n=this.inner('main');if(n)n.prependTo(e);},execute:function(e,n){var t=this,i=e;if('string'===$.type(e))i=t.option(e);if($.isFunction(i)){var r=t.option('context')||t;if($.isArray(n))return i.apply(r,n);else return i.call(r,n);}},renderWith:function(e,n,t){var i=this;if(!n)if(n=i.option('renderTemplate'),!n)n=i.option('mainTemplate');if(!t)t=i.option('mainElement');var r=i.option('renderSelector');if(r)t=t.find(r);var o;if($.isPlainObject(e)||$.isArray(e))o=i.execute('render',[e,n]);else if('string'===$.type(e))o=e;t.html(o);},namespace:function(){return'.'+this.guid;},option:function(e,n){var t=this;if(1===arguments.length&&'string'===$.type(e))return t.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.option(e,n);});t.options[e]=n;}},inner:function(e,n){var t=this,i=t.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.inner(e,n);});i[e]=n;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,n){return c(n,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},v={sync:function(){var e=this,n=function(n,t,i){$.each(n,function(r,o){return e.execute(t[r],[o.newValue,o.oldValue,i?n:o]);});};if($.each(['property','state'],function(t,i){var r=e.inner(i+'Changes');if(r){e.inner(i+'Changes',null);var o=e.constructor[i+'Updater'];if(o)n(r,o,!0);var u=e.option('watch');if(u)n(r,u);e.emit(i+'change',r);}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1);},_sync:function(){if(!this.inner(p))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,n){o(e,v),$.each(e,function(i,o){var u=i.indexOf('_');if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(n)&&$.inArray(i,n)>=0)){var c=function(e){return t(this,i,arguments,'before',e);},f=function(e){var n=this,r=arguments,u=function(){return t(n,i,r,'after',e);};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u);}u();};r(e,i,c,f);}}),o(e,h),s.extend(e);},exports.init=function(e,n){if(!n)n={};return o(n,e.constructor.defaultOptions),n.onafterinit_=function(){e.state('inited',!0);},n.onafterdispose_=function(){e.state('disposed',!0),e.off();var n=e.inner('main');if(e.option('removeOnDispose')&&n)n.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=n,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var n=e.inner('main')||e.option('mainElement');if(n)n.off(e.namespace());};}),define('cc/helper/Popup',['require','exports','module','../function/isHidden','../function/contains','../function/nextTick','../util/life','../util/trigger','../util/instance'],function(require){'use strict';function e(e){v.init(this,e);}function n(e,n){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(n))if(!n.call(this,t))return;e.open(t);}};}function t(e,n){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(n))if(!n.call(this,t))return;e.close(t);var r=e.inner(w);if(r)e.sync(),r.resolve();}};}function i(e,n,t,i){if(e)e.on(n,i,t);}function r(e,n,t){if(e)e.off(n,t);}function o(e,n){var t=e.option('triggerElement'),r=e.option('triggerSelector');if(t||r)i(t||y.body,n.type,n.handler,r);}function u(e,n){r(e.option('triggerElement')||y.body,n.type,n.handler);}function c(e,n){i(y.document,n.type,n.handler);}function f(e,n){r(y.document,n.type,n.handler);}function a(e){return t(e,function(n){return!d(e.inner('layer'),n.target);});}function s(e,n){var t=e.option('triggerElement'),i=e.option('triggerSelector');if(t&&!i)return t;if(n)return $(n.currentTarget);else return void 0;}function l(e,n){var t=e.option('layerElement');if(t&&t.jquery&&t.length)return t;if(n&&$.isFunction(t)){if(t=e.execute(t,n),t&&t.tagName)t=$(t);return t;}}var p=require('../function/isHidden'),d=require('../function/contains'),h=require('../function/nextTick'),v=require('../util/life'),m=require('../util/trigger'),y=require('../util/instance'),g=e.prototype;g.type='Popup',g.init=function(){var e=this,n=function(n,t){if($.isFunction(n[t]))return n[t](e);else return void 0;},t=m.parse(e.option('showLayerTrigger'),function(t){var i=q.show[t];return{delay:e.option('showLayerDelay'),startDelay:n(i,'startDelay'),endDelay:n(i,'endDelay'),handler:n(i,'handler'),beforeHandler:function(n){var t=function(){e.inner({trigger:s(e,n),layer:l(e,n)});};if(e.is('opened')){var i=$.Deferred();return i.then(t),e.inner(w,i),i;}else t();}};}),i=m.parse(e.option('hideLayerTrigger'),function(t){var i=q.hide[t];return{delay:e.option('hideLayerDelay'),startDelay:n(i,'startDelay'),endDelay:n(i,'endDelay'),handler:n(i,'handler')};}),r=function(n){$.each(t,function(t,i){q.show[t][n](e,i);});},o=function(n){$.each(i,function(t,i){q.hide[t][n](e,i);});},u=!1,c=!1,f=function(){if(!u)r('on'),u=!0;},a=function(){if(u)r('off'),u=!1;},p=function(){if(!c)o('on'),c=!0;},d=function(){if(c)o('off'),c=!1;},v=function(n,t){var i=t.opened;if(i)if(i.newValue){if(!e.option('triggerSelector'))a();h(p);}else d(),f();};e.before('dispose',function(){e.off('statechange',v),a(),d(),e.close();}).on('statechange',v),e.inner({trigger:s(e),layer:l(e)}),e.state({opened:e.option('opened')});},g.open=function(){this.state('opened',!0);},g._open=function(e){var n=this;if(n.is('opened')){var t=n.inner('layer'),i=n.inner('trigger'),r=t.data(b);if(i&&r&&i[0]!==r[0])t.data(x).close(),h(function(){if(n.guid)n.open(e);});return!1;}return{dispatch:!0};},g.open_=function(){var e=this,n=e.inner('layer');if(n){var t={};t[b]=e.inner('trigger'),t[x]=e,n.data(t);}return{dispatch:!0};},g.close=function(){this.state('opened',!1);},g._close=function(){if(!this.is('opened'))return!1;else return{dispatch:!0};},g.close_=function(){var e=this,n=e.inner('layer');if(n)n.removeData(x).removeData(b);return{dispatch:!0};},g.dispose=function(){v.dispose(this);},v.extend(g),e.stateUpdater={opened:function(e){var n=this.inner('layer');if(n)this.execute(e?'showLayerAnimation':'hideLayerAnimation',{layerElement:n});}},e.stateValidator={opened:function(e){if('boolean'!==$.type(e)){var n=this.inner('layer');if(n)e=!p(n);}return e;}};var x='__prev_popup__',b='__trigger_element__',w='__hide_promise__',E=m.enter.type,_=m.leave.type,q={show:{focus:{on:o,off:u,handler:n},click:{on:o,off:u,handler:n},enter:{on:o,off:u,handler:n,startDelay:function(e){return function(n){i(e.inner('trigger'),_,n);};},endDelay:function(e){return function(n){r(e.inner('trigger'),_,n);};}},context:{on:o,off:u,handler:n}},hide:{blur:{on:o,off:u,handler:t},click:{on:c,off:f,handler:a},leave:{on:function(e,n){i(e.inner('trigger'),n.type,n.handler),i(e.inner('layer'),n.type,n.handler);},off:function(e,n){r(e.inner('trigger'),n.type,n.handler),r(e.inner('layer'),n.type,n.handler);},handler:t,startDelay:function(e){return function(n){i(e.inner('trigger'),E,n),i(e.inner('layer'),E,n);};},endDelay:function(e){return function(n){r(e.inner('trigger'),E,n),r(e.inner('layer'),E,n);};}},context:{on:c,off:f,handler:a}}};return e;}),define('cc/ui/ContextMenu',['require','exports','module','../function/pin','../function/eventPage','../helper/Popup','../util/instance','../util/life'],function(require){'use strict';function e(e){o.init(this,e);}var n=require('../function/pin'),t=require('../function/eventPage'),i=require('../helper/Popup'),r=require('../util/instance').body,o=require('../util/life'),u=e.prototype;u.type='ContextMenu',u.init=function(){var e=this;e.initStruct();var o,u=e.option('mainElement'),f=e.namespace(),a=e.option('action');if(a)$.each(a,function(n,t){u.on('click'+f,n,function(){e.execute(t,o);});});var s=new i({opened:!1,layerElement:u,hideLayerTrigger:'click,context',showLayerAnimation:function(){e.execute('showAnimation',{mainElement:u});},hideLayerAnimation:function(){e.execute('hideAnimation',{mainElement:u});},watchSync:{opened:function(n){e.state('hidden',!n);}}}),l={beforeopen:'beforeshow',afteropen:'aftershow',beforeclose:'beforehide',afterclose:'afterhide'};s.on('dispatch',function(n,t){var i=n.originalEvent,r=l[i.type];if(r)i.type=r;e.dispatch(e.emit(i,t),t);}),e.inner({popup:s,main:u});var p=e.option('containerElement')||r;p.on('contextmenu'+f,function(i){if(c){var f=c.inner('popup');f.close(i),f.sync();}o=i,c=e,s.open(i),s.sync();var a=t(i);return n({element:u,x:0,y:0,attachment:{element:r,x:a.x,y:a.y}}),!1;});},u.show=function(){this.state('hidden',!1);},u.hide=function(){this.state('hidden',!0);},u.dispose=function(){var e=this;if(o.dispose(e),e.inner('popup').dispose(),e.option('containerElement').off(e.namespace()),c===e)c=null;},o.extend(u,['show','hide']),e.stateUpdater={hidden:function(e){var n=this.inner('popup');if(e)n.close();else n.open();}};var c;return e;}),define('mobile/common/custom/ui/ContextMenu_bd0b8951ad',['require','exports','module','cc/ui/ContextMenu'],function(require){'use strict';var e=require('cc/ui/ContextMenu');return e.defaultOptions={parentSelector:'body',showAnimation:function(e){e.mainElement.show();},hideAnimation:function(e){e.mainElement.hide();}},e;});