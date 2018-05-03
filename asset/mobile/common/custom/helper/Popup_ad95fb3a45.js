define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(n){return n.charAt(0).toUpperCase()+n.slice(1);};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(n){n.css('display');return'none'===n.css('display')||0==n.css('opacity')||'hidden'===n.css('visibility');};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(n,e){if(n=n.jquery?n[0]:n,e=e.jquery?e[0]:e,!n||!e)return!1;if(n===e)return!0;else return $.contains(n,e);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(n){var e=setTimeout(n,0);return function(){clearTimeout(e);};};}),define('cc/function/split',['require','exports','module'],function(){'use strict';return function(n,e){var t=[];if('number'===$.type(n))n=''+n;if(n&&'string'===$.type(n))$.each(n.split(e),function(n,e){if(e=$.trim(e))t.push(e);});return t;};}),define('cc/function/guid',['require','exports','module'],function(){var n=0;return function(){return'cc_'+n++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(n,e,t,i){var r='string'===$.type(e),o=r?n[e]:n;if(!r)i=t,t=e;var u=function(){var n,e=$.makeArray(arguments);if($.isFunction(t))n=t.apply(this,e);if(n!==!1){if($.isFunction(o))n=o.apply(this,e);if($.isFunction(i)){e.push(n);var r=i.apply(this,e);if('undefined'!==$.type(r))n=r;}return n;}};return r?n[e]=u:u;};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(n,e){if($.isPlainObject(e))$.each(e,function(e,t){if(!(e in n))n[e]=t;});};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function n(n){return n.is('body')||'static'!==n.css('position');}return function(e){if(e.is('body'))return e;for(var t=e.parent();!n(t);)t=t.parent();return t;};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(n,e){if('boolean'!==$.type(n)){if(1===arguments.length)e=!!n;n=e;}return n;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(n){if(n&&!n[$.expando])n='string'===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event();};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(n,e){n=n[0],e=e[0],n.parentNode.replaceChild(e,n);};}),define('cc/util/trigger',['require','exports','module','../function/split'],function(require,exports){'use strict';function n(n){return function(e){var i=n.delay,r=n.startDelay,o=n.endDelay,u=function(){n.handler.call(e.currentTarget,e);},c=function(){if(i>0&&r&&o){var e=function(){n[t]=setTimeout(function(){f(t);},i);},c=function(){clearTimeout(n[t]),o(f,n),n[t]=null;},f=function(e){if(n[t])c();if(t===e)u();};if(!n[t])r(f,n),e();}else u();},f=n.beforeHandler;if($.isFunction(f)){var a=f.call(e.currentTarget,e);if(a===!1)return;else if(a&&$.isFunction(a.then))return void a.then(c);}c();};}var e=require('../function/split'),t='delayTimer';return exports={focus:{type:'focusin',handler:n},blur:{type:'focusout',handler:n},click:{type:'click',handler:n},enter:{type:'mouseenter',handler:n},leave:{type:'mouseleave',handler:n},context:{type:'contextmenu',handler:n}},exports.parse=function(n,t){var i={};if(n)$.each(e(n,','),function(n,e){var r=exports[e];if(r)i[e]={type:r.type,handler:r.handler(t(e))};});return i;},exports;}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var n=require('../function/extend'),e=require('../function/createEvent'),t={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$;},on:function(n,e,t){return this.get$().on(n,e,t),this;},once:function(n,e,t){return this.get$().one(n,e,t),this;},off:function(n,e){return this.get$().off(n,e),this;},emit:function(n,t){return n=e(n),this.get$().trigger(n,t),n;}};exports.extend=function(e){n(e,t);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function n(n,e,t,i,r){return function(c,f,a){var s=this;if($.isPlainObject(c))return a=f,void $.each(c,function(n,e){s[t](n,e,a);});a=a||{};var l=s[i](c),d=s.constructor[n+'Validator'];if(d)if($.isFunction(d[c]))f=d[c].call(s,f,a);if($.isFunction(r))f=r(s,f,a);if(l!==f||a.force)if(s[e][c]=f,!a.silent){var h={};o(h,a),h.newValue=f,h.oldValue=l;var v={};v[c]=h;var y=function(n){if(n&&n[c])s.execute(n[c],[f,l,h]);};if(y(s.inner('watchSync')),y(s.option('watchSync')),a.sync)return y(s.constructor[n+'Updater']),y(s.option('watch')),void s.emit(n+'change',v);var g=s.inner(n+'Changes');if(!g)g={},s.inner(n+'Changes',g);if($.extend(g,v),!s.inner(p))s.inner(p,u(function(){s.sync(p);}));}};}function e(){this.error('initStruct() can just call one time.');}function t(n,e,t,i,r){var o,u='before'===i?'_'+e:e+'_',c=n[u];if($.isFunction(c))if(o=c.apply(n,t),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var f=!1;if(o&&o.dispatch)f=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+e,n.emit(r,o),f)n.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),f=require('../function/createEvent'),a=require('../function/replaceWith'),s=(require('../function/offsetParent'),require('./event')),l={},p='__update_async__',d={},h={initStruct:function(){var n=this,t=n.option('mainElement'),i=n.option('mainTemplate');if('string'===$.type(i)){var r=n.option('share'),o=n.type+i;if(r)t=d[o];var u;if(!t){if(u=$(i),r)d[o]=u;}else if(n.option('replace'))a(t,u=$(i));else t.html(i);if(u)t=u,n.option('mainElement',t);}var c=n.option('parentSelector');if(c&&!t.parent().is(c))t.appendTo(c);n.initStruct=e;},warn:function(n){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,n].join(' '));},error:function(n){throw new Error(['[CC error]',this.type,n].join(' '));},live:function(n,e,t){var i=this,r=i.inner('main');if(r)r.on(n+i.namespace(),e,t);return i;},emit:function(n,e){var t=this,i=t.option('context')||t;n=f(n),n.cc=i;var r=[n];if($.isPlainObject(e))r.push(e);n.type=n.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u='on'+n.type;if(!n.isPropagationStopped()&&i.execute(u,r)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+'_',r),n;},dispatch:function(n,e){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(n);if(t.type='dispatch',this.emit(t,e),t.isPropagationStopped())n.preventDefault(),n.stopPropagation();}},before:function(n,e){return this.on('before'+n.toLowerCase(),e);},after:function(n,e){return this.on('after'+n.toLowerCase(),e);},find:function(n){var e=this.inner('main');if(e){var t=e.find(n);if(t.length)return t;}},appendTo:function(n){var e=this.inner('main');if(e)e.appendTo(n);},prependTo:function(n){var e=this.inner('main');if(e)e.prependTo(n);},execute:function(n,e){var t=this,i=n;if('string'===$.type(n))i=t.option(n);if($.isFunction(i)){var r=t.option('context')||t;if($.isArray(e))return i.apply(r,e);else return i.call(r,e);}},renderWith:function(n,e,t){var i=this;if(!e)if(e=i.option('renderTemplate'),!e)e=i.option('mainTemplate');if(!t)t=i.option('mainElement');var r=i.option('renderSelector');if(r)t=t.find(r);var o;if($.isPlainObject(n)||$.isArray(n))o=i.execute('render',[n,e]);else if('string'===$.type(n))o=n;t.html(o);},namespace:function(){return'.'+this.guid;},option:function(n,e){var t=this;if(1===arguments.length&&'string'===$.type(n))return t.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.option(n,e);});t.options[n]=e;}},inner:function(n,e){var t=this,i=t.inners||{};if(1===arguments.length&&'string'===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.inner(n,e);});i[n]=e;}},is:function(n){return this.states[n];},state:n('state','states','state','is',function(n,e){return c(e,!1);}),get:function(n){return this.properties[n];},set:n('property','properties','set','get')},v={sync:function(){var n=this,e=function(e,t,i){$.each(e,function(r,o){return n.execute(t[r],[o.newValue,o.oldValue,i?e:o]);});};if($.each(['property','state'],function(t,i){var r=n.inner(i+'Changes');if(r){n.inner(i+'Changes',null);var o=n.constructor[i+'Updater'];if(o)e(r,o,!0);var u=n.option('watch');if(u)e(r,u);n.emit(i+'change',r);}}),arguments[0]!==p)n.execute(n.inner(p));n.inner(p,!1);},_sync:function(){if(!this.inner(p))return!1;else return void 0;},_init:function(){var n='initCalled';if(this.is(n))return!1;else return void this.state(n,!0);},_dispose:function(){var n='disposeCalled';if(this.is(n))return!1;else return void this.state(n,!0);}};exports.extend=function(n,e){o(n,v),$.each(n,function(i,o){var u=i.indexOf('_');if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var c=function(n){return t(this,i,arguments,'before',n);},f=function(n){var e=this,r=arguments,u=function(){return t(e,i,r,'after',n);};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u);}u();};r(n,i,c,f);}}),o(n,h),s.extend(n);},exports.init=function(n,e){if(!e)e={};return o(e,n.constructor.defaultOptions),e.onafterinit_=function(){n.state('inited',!0);},e.onafterdispose_=function(){n.state('disposed',!0),n.off();var e=n.inner('main');if(n.option('removeOnDispose')&&e)e.remove();u(function(){delete l[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null;});},l[n.guid=i()]=n,n.properties={},n.options=e,n.states={},n.inners={},n.init(),n;},exports.dispose=function(n){n.sync();var e=n.inner('main')||n.option('mainElement');if(e)e.off(n.namespace());};}),define('cc/helper/Popup',['require','exports','module','../function/isHidden','../function/contains','../function/nextTick','../util/life','../util/trigger','../util/instance'],function(require){'use strict';function n(n){v.init(this,n);}function e(n,e){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(e))if(!e.call(this,t))return;n.open(t);}};}function t(n,e){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(e))if(!e.call(this,t))return;n.close(t);var r=n.inner(b);if(r)n.sync(),r.resolve();}};}function i(n,e,t,i){if(n)n.on(e,i,t);}function r(n,e,t){if(n)n.off(e,t);}function o(n,e){var t=n.option('triggerElement'),r=n.option('triggerSelector');if(t||r)i(t||g.body,e.type,e.handler,r);}function u(n,e){r(n.option('triggerElement')||g.body,e.type,e.handler);}function c(n,e){i(g.document,e.type,e.handler);}function f(n,e){r(g.document,e.type,e.handler);}function a(n){return t(n,function(e){return!d(n.inner('layer'),e.target);});}function s(n,e){var t=n.option('triggerElement'),i=n.option('triggerSelector');if(t&&!i)return t;if(e)return $(e.currentTarget);else return void 0;}function l(n,e){var t=n.option('layerElement');if(t&&t.jquery&&t.length)return t;if(e&&$.isFunction(t)){if(t=n.execute(t,e),t&&t.tagName)t=$(t);return t;}}var p=require('../function/isHidden'),d=require('../function/contains'),h=require('../function/nextTick'),v=require('../util/life'),y=require('../util/trigger'),g=require('../util/instance'),m=n.prototype;m.type='Popup',m.init=function(){var n=this,e=function(e,t){if($.isFunction(e[t]))return e[t](n);else return void 0;},t=y.parse(n.option('showLayerTrigger'),function(t){var i=T.show[t];return{delay:n.option('showLayerDelay'),startDelay:e(i,'startDelay'),endDelay:e(i,'endDelay'),handler:e(i,'handler'),beforeHandler:function(e){var t=function(){n.inner({trigger:s(n,e),layer:l(n,e)});};if(n.is('opened')){var i=$.Deferred();return i.then(t),n.inner(b,i),i;}else t();}};}),i=y.parse(n.option('hideLayerTrigger'),function(t){var i=T.hide[t];return{delay:n.option('hideLayerDelay'),startDelay:e(i,'startDelay'),endDelay:e(i,'endDelay'),handler:e(i,'handler')};}),r=function(e){$.each(t,function(t,i){T.show[t][e](n,i);});},o=function(e){$.each(i,function(t,i){T.hide[t][e](n,i);});},u=!1,c=!1,f=function(){if(!u)r('on'),u=!0;},a=function(){if(u)r('off'),u=!1;},p=function(){if(!c)o('on'),c=!0;},d=function(){if(c)o('off'),c=!1;},v=function(e,t){var i=t.opened;if(i)if(i.newValue){if(!n.option('triggerSelector'))a();h(p);}else d(),f();};n.before('dispose',function(){n.off('statechange',v),a(),d(),n.close();}).on('statechange',v),n.inner({trigger:s(n),layer:l(n)}),n.state({opened:n.option('opened')});},m.open=function(){this.state('opened',!0);},m._open=function(n){var e=this;if(e.is('opened')){var t=e.inner('layer'),i=e.inner('trigger'),r=t.data(_);if(i&&r&&i[0]!==r[0])t.data(x).close(),h(function(){if(e.guid)e.open(n);});return!1;}return{dispatch:!0};},m.open_=function(){var n=this,e=n.inner('layer');if(e){var t={};t[_]=n.inner('trigger'),t[x]=n,e.data(t);}return{dispatch:!0};},m.close=function(){this.state('opened',!1);},m._close=function(){if(!this.is('opened'))return!1;else return{dispatch:!0};},m.close_=function(){var n=this,e=n.inner('layer');if(e)e.removeData(x).removeData(_);return{dispatch:!0};},m.dispose=function(){v.dispose(this);},v.extend(m),n.stateUpdater={opened:function(n){var e=this.inner('layer');if(e)this.execute(n?'showLayerAnimation':'hideLayerAnimation',{layerElement:e});}},n.stateValidator={opened:function(n){if('boolean'!==$.type(n)){var e=this.inner('layer');if(e)n=!p(e);}return n;}};var x='__prev_popup__',_='__trigger_element__',b='__hide_promise__',w=y.enter.type,E=y.leave.type,T={show:{focus:{on:o,off:u,handler:e},click:{on:o,off:u,handler:e},enter:{on:o,off:u,handler:e,startDelay:function(n){return function(e){i(n.inner('trigger'),E,e);};},endDelay:function(n){return function(e){r(n.inner('trigger'),E,e);};}},context:{on:o,off:u,handler:e}},hide:{blur:{on:o,off:u,handler:t},click:{on:c,off:f,handler:a},leave:{on:function(n,e){i(n.inner('trigger'),e.type,e.handler),i(n.inner('layer'),e.type,e.handler);},off:function(n,e){r(n.inner('trigger'),e.type,e.handler),r(n.inner('layer'),e.type,e.handler);},handler:t,startDelay:function(n){return function(e){i(n.inner('trigger'),w,e),i(n.inner('layer'),w,e);};},endDelay:function(n){return function(e){r(n.inner('trigger'),w,e),r(n.inner('layer'),w,e);};}},context:{on:c,off:f,handler:a}}};return n;}),define('mobile/common/custom/helper/Popup_ad95fb3a45',['require','exports','module','cc/helper/Popup'],function(require){'use strict';var n=require('cc/helper/Popup');return n.defaultOptions={showLayerTrigger:'click',hideLayerTrigger:'click',showLayerAnimation:function(n){n.layerElement.show();},hideLayerAnimation:function(n){n.layerElement.hide();}},n;});