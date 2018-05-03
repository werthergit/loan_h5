define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,n){if($.isPlainObject(n))$.each(n,function(n,t){if(!(n in e))e[n]=t;});};}),define('pc/common/component/Select_html',function(){return'<div class="dropdown{{#if options.className}} {{options.className}}{{/if}}{{#if options.hidden}} hidden{{/if}}"><div class="button secondary"{{#if options.disabled}} disabled{{/if}}><i class="icon icon-caret-down"></i><span class="text">{{{options.defaultText}}}</span></div><ul class="menu"></ul><input type="hidden" name="{{options.name}}" /><div class="tooltip error right" data-error-for="{{options.name}}"></div></div>';}),define('cc/form/common',['require','exports','module'],function(require,exports){'use strict';exports.prop=function(e,n,t){if($.isPlainObject(n))$.each(n,function(n,t){exports.prop(e,n,t);});else{var i=e.inner('native');if(2===arguments.length)return i.prop(n);else{if(i.prop(n)!==t)i.prop(n,t);if('value'===n)i.trigger('change');}}},exports.setClass=function(e,n,t){var i=e.option(n);if(i)e.option('mainElement')[t+'Class'](i);},exports.findNative=function(e,n){var t=e.option('mainElement').find(n);if(0===t.length)e.error('form/'+e.type+' 必须包含一个 ['+n+'].');return t.eq(0);},exports.validateName=function(e,n){if('string'!==$.type(n))if(n=exports.prop(e,'name'),!n||'string'!==$.type(n))e.error('name attribute is missing.');return n;},exports.validateValue=function(e,n){var t=$.type(n);if('number'===t)n=''+n;else if('string'!==t)n=exports.prop(e,'value')||'';return n;};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/toString',['require','exports','module'],function(){'use strict';return function(e,n){var t=$.type(e);if('number'===t)e=''+e;else if('string'!==t){if(1===arguments.length)n='';e=n;}return e;};}),define('cc/function/split',['require','exports','module'],function(){'use strict';return function(e,n){var t=[];if('number'===$.type(e))e=''+e;if(e&&'string'===$.type(e))$.each(e.split(n),function(e,n){if(n=$.trim(n))t.push(n);});return t;};}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(e){e.css('display');return'none'===e.css('display')||0==e.css('opacity')||'hidden'===e.css('visibility');};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(e,n){if(e=e.jquery?e[0]:e,n=n.jquery?n[0]:n,!e||!n)return!1;if(e===n)return!0;else return $.contains(e,n);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var n=setTimeout(e,0);return function(){clearTimeout(n);};};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(n){if(n.is('body'))return n;for(var t=n.parent();!e(t);)t=t.parent();return t;};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,n,t,i){var r='string'===$.type(n),o=r?e[n]:e;if(!r)i=t,t=n;var u=function(){var e,n=$.makeArray(arguments);if($.isFunction(t))e=t.apply(this,n);if(e!==!1){if($.isFunction(o))e=o.apply(this,n);if($.isFunction(i)){n.push(e);var r=i.apply(this,n);if('undefined'!==$.type(r))e=r;}return e;}};return r?e[n]=u:u;};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,n){e=e[0],n=n[0],e.parentNode.replaceChild(n,e);};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,n){if('boolean'!==$.type(e)){if(1===arguments.length)n=!!e;e=n;}return e;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/util/trigger',['require','exports','module','../function/split'],function(require,exports){'use strict';function e(e){return function(n){var i=e.delay,r=e.startDelay,o=e.endDelay,u=function(){e.handler.call(n.currentTarget,n);},a=function(){if(i>0&&r&&o){var n=function(){e[t]=setTimeout(function(){c(t);},i);},a=function(){clearTimeout(e[t]),o(c,e),e[t]=null;},c=function(n){if(e[t])a();if(t===n)u();};if(!e[t])r(c,e),n();}else u();},c=e.beforeHandler;if($.isFunction(c)){var s=c.call(n.currentTarget,n);if(s===!1)return;else if(s&&$.isFunction(s.then))return void s.then(a);}a();};}var n=require('../function/split'),t='delayTimer';return exports={focus:{type:'focusin',handler:e},blur:{type:'focusout',handler:e},click:{type:'click',handler:e},enter:{type:'mouseenter',handler:e},leave:{type:'mouseleave',handler:e},context:{type:'contextmenu',handler:e}},exports.parse=function(e,t){var i={};if(e)$.each(n(e,','),function(e,n){var r=exports[n];if(r)i[n]={type:r.type,handler:r.handler(t(n))};});return i;},exports;}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),n=require('../function/createEvent'),t={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,n,t){return this.get$().on(e,n,t),this;},once:function(e,n,t){return this.get$().one(e,n,t),this;},off:function(e,n){return this.get$().off(e,n),this;},emit:function(e,t){return e=n(e),this.get$().trigger(e,t),e;}};exports.extend=function(n){e(n,t);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,n,t,i,r){return function(a,c,s){var f=this;if($.isPlainObject(a))return s=c,void $.each(a,function(e,n){f[t](e,n,s);});s=s||{};var l=f[i](a),d=f.constructor[e+'Validator'];if(d)if($.isFunction(d[a]))c=d[a].call(f,c,s);if($.isFunction(r))c=r(f,c,s);if(l!==c||s.force)if(f[n][a]=c,!s.silent){var h={};o(h,s),h.newValue=c,h.oldValue=l;var m={};m[a]=h;var v=function(e){if(e&&e[a])f.execute(e[a],[c,l,h]);};if(v(f.inner('watchSync')),v(f.option('watchSync')),s.sync)return v(f.constructor[e+'Updater']),v(f.option('watch')),void f.emit(e+'change',m);var g=f.inner(e+'Changes');if(!g)g={},f.inner(e+'Changes',g);if($.extend(g,m),!f.inner(p))f.inner(p,u(function(){f.sync(p);}));}};}function n(){this.error('initStruct() can just call one time.');}function t(e,n,t,i,r){var o,u='before'===i?'_'+n:n+'_',a=e[u];if($.isFunction(a))if(o=a.apply(e,t),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var c=!1;if(o&&o.dispatch)c=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+n,e.emit(r,o),c)e.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),a=require('../function/toBoolean'),c=require('../function/createEvent'),s=require('../function/replaceWith'),f=(require('../function/offsetParent'),require('./event')),l={},p='__update_async__',d={},h={initStruct:function(){var e=this,t=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var r=e.option('share'),o=e.type+i;if(r)t=d[o];var u;if(!t){if(u=$(i),r)d[o]=u;}else if(e.option('replace'))s(t,u=$(i));else t.html(i);if(u)t=u,e.option('mainElement',t);}var a=e.option('parentSelector');if(a&&!t.parent().is(a))t.appendTo(a);e.initStruct=n;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,n,t){var i=this,r=i.inner('main');if(r)r.on(e+i.namespace(),n,t);return i;},emit:function(e,n){var t=this,i=t.option('context')||t;e=c(e),e.cc=i;var r=[e];if($.isPlainObject(n))r.push(n);e.type=e.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u='on'+e.type;if(!e.isPropagationStopped()&&i.execute(u,r)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+'_',r),e;},dispatch:function(e,n){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(e);if(t.type='dispatch',this.emit(t,n),t.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,n){return this.on('before'+e.toLowerCase(),n);},after:function(e,n){return this.on('after'+e.toLowerCase(),n);},find:function(e){var n=this.inner('main');if(n){var t=n.find(e);if(t.length)return t;}},appendTo:function(e){var n=this.inner('main');if(n)n.appendTo(e);},prependTo:function(e){var n=this.inner('main');if(n)n.prependTo(e);},execute:function(e,n){var t=this,i=e;if('string'===$.type(e))i=t.option(e);if($.isFunction(i)){var r=t.option('context')||t;if($.isArray(n))return i.apply(r,n);else return i.call(r,n);}},renderWith:function(e,n,t){var i=this;if(!n)if(n=i.option('renderTemplate'),!n)n=i.option('mainTemplate');if(!t)t=i.option('mainElement');var r=i.option('renderSelector');if(r)t=t.find(r);var o;if($.isPlainObject(e)||$.isArray(e))o=i.execute('render',[e,n]);else if('string'===$.type(e))o=e;t.html(o);},namespace:function(){return'.'+this.guid;},option:function(e,n){var t=this;if(1===arguments.length&&'string'===$.type(e))return t.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.option(e,n);});t.options[e]=n;}},inner:function(e,n){var t=this,i=t.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.inner(e,n);});i[e]=n;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,n){return a(n,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},m={sync:function(){var e=this,n=function(n,t,i){$.each(n,function(r,o){return e.execute(t[r],[o.newValue,o.oldValue,i?n:o]);});};if($.each(['property','state'],function(t,i){var r=e.inner(i+'Changes');if(r){e.inner(i+'Changes',null);var o=e.constructor[i+'Updater'];if(o)n(r,o,!0);var u=e.option('watch');if(u)n(r,u);e.emit(i+'change',r);}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1);},_sync:function(){if(!this.inner(p))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,n){o(e,m),$.each(e,function(i,o){var u=i.indexOf('_');if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(n)&&$.inArray(i,n)>=0)){var a=function(e){return t(this,i,arguments,'before',e);},c=function(e){var n=this,r=arguments,u=function(){return t(n,i,r,'after',e);};if(o.length+1===r.length){var a=r[r.length-1];if(a&&$.isFunction(a.then))return void a.then(u);}u();};r(e,i,a,c);}}),o(e,h),f.extend(e);},exports.init=function(e,n){if(!n)n={};return o(n,e.constructor.defaultOptions),n.onafterinit_=function(){e.state('inited',!0);},n.onafterdispose_=function(){e.state('disposed',!0),e.off();var n=e.inner('main');if(e.option('removeOnDispose')&&n)n.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=n,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var n=e.inner('main')||e.option('mainElement');if(n)n.off(e.namespace());};}),define('cc/helper/Popup',['require','exports','module','../function/isHidden','../function/contains','../function/nextTick','../util/life','../util/trigger','../util/instance'],function(require){'use strict';function e(e){m.init(this,e);}function n(e,n){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(n))if(!n.call(this,t))return;e.open(t);}};}function t(e,n){return function(t){var i=$(this);if('disabled'!==i.attr('disabled')){if($.isFunction(n))if(!n.call(this,t))return;e.close(t);var r=e.inner(w);if(r)e.sync(),r.resolve();}};}function i(e,n,t,i){if(e)e.on(n,i,t);}function r(e,n,t){if(e)e.off(n,t);}function o(e,n){var t=e.option('triggerElement'),r=e.option('triggerSelector');if(t||r)i(t||g.body,n.type,n.handler,r);}function u(e,n){r(e.option('triggerElement')||g.body,n.type,n.handler);}function a(e,n){i(g.document,n.type,n.handler);}function c(e,n){r(g.document,n.type,n.handler);}function s(e){return t(e,function(n){return!d(e.inner('layer'),n.target);});}function f(e,n){var t=e.option('triggerElement'),i=e.option('triggerSelector');if(t&&!i)return t;if(n)return $(n.currentTarget);else return void 0;}function l(e,n){var t=e.option('layerElement');if(t&&t.jquery&&t.length)return t;if(n&&$.isFunction(t)){if(t=e.execute(t,n),t&&t.tagName)t=$(t);return t;}}var p=require('../function/isHidden'),d=require('../function/contains'),h=require('../function/nextTick'),m=require('../util/life'),v=require('../util/trigger'),g=require('../util/instance'),y=e.prototype;y.type='Popup',y.init=function(){var e=this,n=function(n,t){if($.isFunction(n[t]))return n[t](e);else return void 0;},t=v.parse(e.option('showLayerTrigger'),function(t){var i=S.show[t];return{delay:e.option('showLayerDelay'),startDelay:n(i,'startDelay'),endDelay:n(i,'endDelay'),handler:n(i,'handler'),beforeHandler:function(n){var t=function(){e.inner({trigger:f(e,n),layer:l(e,n)});};if(e.is('opened')){var i=$.Deferred();return i.then(t),e.inner(w,i),i;}else t();}};}),i=v.parse(e.option('hideLayerTrigger'),function(t){var i=S.hide[t];return{delay:e.option('hideLayerDelay'),startDelay:n(i,'startDelay'),endDelay:n(i,'endDelay'),handler:n(i,'handler')};}),r=function(n){$.each(t,function(t,i){S.show[t][n](e,i);});},o=function(n){$.each(i,function(t,i){S.hide[t][n](e,i);});},u=!1,a=!1,c=function(){if(!u)r('on'),u=!0;},s=function(){if(u)r('off'),u=!1;},p=function(){if(!a)o('on'),a=!0;},d=function(){if(a)o('off'),a=!1;},m=function(n,t){var i=t.opened;if(i)if(i.newValue){if(!e.option('triggerSelector'))s();h(p);}else d(),c();};e.before('dispose',function(){e.off('statechange',m),s(),d(),e.close();}).on('statechange',m),e.inner({trigger:f(e),layer:l(e)}),e.state({opened:e.option('opened')});},y.open=function(){this.state('opened',!0);},y._open=function(e){var n=this;if(n.is('opened')){var t=n.inner('layer'),i=n.inner('trigger'),r=t.data(b);if(i&&r&&i[0]!==r[0])t.data(x).close(),h(function(){if(n.guid)n.open(e);});return!1;}return{dispatch:!0};},y.open_=function(){var e=this,n=e.inner('layer');if(n){var t={};t[b]=e.inner('trigger'),t[x]=e,n.data(t);}return{dispatch:!0};},y.close=function(){this.state('opened',!1);},y._close=function(){if(!this.is('opened'))return!1;else return{dispatch:!0};},y.close_=function(){var e=this,n=e.inner('layer');if(n)n.removeData(x).removeData(b);return{dispatch:!0};},y.dispose=function(){m.dispose(this);},m.extend(y),e.stateUpdater={opened:function(e){var n=this.inner('layer');if(n)this.execute(e?'showLayerAnimation':'hideLayerAnimation',{layerElement:n});}},e.stateValidator={opened:function(e){if('boolean'!==$.type(e)){var n=this.inner('layer');if(n)e=!p(n);}return e;}};var x='__prev_popup__',b='__trigger_element__',w='__hide_promise__',E=v.enter.type,T=v.leave.type,S={show:{focus:{on:o,off:u,handler:n},click:{on:o,off:u,handler:n},enter:{on:o,off:u,handler:n,startDelay:function(e){return function(n){i(e.inner('trigger'),T,n);};},endDelay:function(e){return function(n){r(e.inner('trigger'),T,n);};}},context:{on:o,off:u,handler:n}},hide:{blur:{on:o,off:u,handler:t},click:{on:a,off:c,handler:s},leave:{on:function(e,n){i(e.inner('trigger'),n.type,n.handler),i(e.inner('layer'),n.type,n.handler);},off:function(e,n){r(e.inner('trigger'),n.type,n.handler),r(e.inner('layer'),n.type,n.handler);},handler:t,startDelay:function(e){return function(n){i(e.inner('trigger'),E,n),i(e.inner('layer'),E,n);};},endDelay:function(e){return function(n){r(e.inner('trigger'),E,n),r(e.inner('layer'),E,n);};}},context:{on:a,off:c,handler:s}}};return e;}),define('cc/ui/ComboBox',['require','exports','module','../function/toString','../helper/Popup','../util/life'],function(require){'use strict';function e(e){i.init(this,e);}var n=require('../function/toString'),t=require('../helper/Popup'),i=require('../util/life'),r=e.prototype;return r.type='ComboBox',r.init=function(){var e=this;e.initStruct();var n=e.option('buttonElement'),i=e.option('menuElement'),r=new t({triggerElement:n,layerElement:i,showLayerTrigger:e.option('showMenuTrigger'),showLayerDelay:e.option('showMenuDelay'),hideLayerTrigger:e.option('hideMenuTrigger'),hideLayerDelay:e.option('hideMenuDelay'),showLayerAnimation:function(){e.execute('showMenuAnimation',{menuElement:i});},hideLayerAnimation:function(){e.execute('hideMenuAnimation',{menuElement:i});},watchSync:{opened:function(n){e.state('opened',n);}}});r.on('dispatch',function(n,t){var i=e.emit(n.originalEvent,t);e.dispatch(i,t);});var o=e.option('mainElement'),u=e.option('menuActiveClass');if(u){var a=o||i;r.after('open',function(){a.addClass(u);}).after('close',function(){a.removeClass(u);});}var c=e.option('itemSelector'),s=e.option('valueAttribute');i.on('click'+e.namespace(),c,function(n){if(e.is('opened'))e.close(n);if(!n.isDefaultPrevented()){e.set('value',$(this).attr(s));var t=$.Event(n.originalEvent);t.type='select',e.dispatch(e.emit(t));}}),e.inner({main:o,popup:r}),e.set({data:e.option('data'),value:e.option('value')});},r.render=function(){var e=this;e.renderWith(e.get('data'),e.option('menuTemplate'),e.option('menuElement'));},r._render=function(){if(!this.get('data'))return!1;else return void 0;},r.open=function(){this.state('opened',!0);},r.close=function(){this.state('opened',!1);},r.dispose=function(){var e=this;i.dispose(e),e.inner('popup').dispose(),e.option('menuElement').off(e.namespace());},i.extend(r,['open','close']),e.propertyUpdater={},e.propertyUpdater.data=e.propertyUpdater.value=function(e,t,i){var r=this,o=r.option('menuElement'),u=r.option('itemActiveClass'),a=r.option('textAttribute'),c=r.option('valueAttribute');if(i.data)this.render();else if(i.value&&u)o.find('.'+u).removeClass(u);var s,f=n(r.get('value'),null);if(null!=f){var l=function(e){if(s=e.attr(a),null==s)s=e.html();return s;};if(''!==f){var p=o.find('['+c+'="'+f+'"]');switch(p.length){case 1:if(u)p.addClass(u);s=l(p);break;case 0:break;default:r.error('value repeated.');}}else o.find('['+c+']').each(function(){var e=$(this),n=e.attr(c);if(''===n)return s=l(e),!1;else return void 0;});}return r.execute('setText',{buttonElement:r.option('buttonElement'),text:s||r.option('defaultText')}),!1;},e.propertyValidator={value:function(e){var n=this,t=n.option('itemActiveClass');if(null==e&&t){var i=n.option('menuElement').find('.'+t);if(1===i.length)e=i.attr(n.option('valueAttribute'));}return e;}},e.stateUpdater={opened:function(e){var n=this.inner('popup');if(e)n.open();else n.close();}},e;}),define('cc/form/Select',['require','exports','module','../ui/ComboBox','../util/life','./common'],function(require){'use strict';function e(e){t.init(this,e);}var n=require('../ui/ComboBox'),t=require('../util/life'),i=require('./common'),r=e.prototype;return r.type='Select',r.init=function(){var e=this;e.initStruct();var t=e.option('mainElement'),r=new n({mainElement:t,data:e.option('data'),value:e.option('value'),defaultText:e.option('defaultText'),buttonElement:t.find(e.option('buttonSelector')),menuElement:t.find(e.option('menuSelector')),menuTemplate:e.option('menuTemplate'),renderSelector:e.option('renderSelector'),renderTemplate:e.option('renderTemplate'),showMenuTrigger:e.option('showMenuTrigger'),showMenuDelay:e.option('showMenuDelay'),hideMenuTrigger:e.option('hideMenuTrigger'),hideMenuDelay:e.option('hideMenuDelay'),itemSelector:e.option('itemSelector'),itemActiveClass:e.option('itemActiveClass'),menuActiveClass:e.option('menuActiveClass'),textAttribute:e.option('textAttribute'),valueAttribute:e.option('valueAttribute'),showMenuAnimation:function(n){e.execute('showMenuAnimation',n);},hideMenuAnimation:function(n){e.execute('hideMenuAnimation',n);},render:function(n,t){return e.execute('render',[n,t]);},setText:function(n){var i=e.option('labelSelector');t.find(i).html(n.text);}});e.once('aftersync',function(){r.option('watchSync',{value:function(n){e.set('value',n);},opened:function(n){e.state('opened',n);}}),r.set('value',e.get('value')),e.state('opened',r.is('opened'));});var o=i.findNative(e,'input[type="hidden"]');r.on('dispatch',function(n,t){var i=n.originalEvent;switch(i.type){case'afteropen':o.trigger('focusin');break;case'afterclose':o.trigger('focusout');}e.dispatch(e.emit(i,t),t);}),e.inner({main:t,'native':o,combobox:r}),e.set({data:e.option('data'),name:e.option('name'),value:e.option('value')});},r.open=function(){this.state('opened',!0);},r.close=function(){this.state('opened',!1);},r.dispose=function(){t.dispose(this),this.inner('combobox').dispose();},t.extend(r,['open','close']),e.propertyUpdater={name:function(e){i.prop(this,'name',e);}},e.propertyUpdater.data=e.propertyUpdater.value=function(e,n,t){var r=this,o={},u=t.value;if(u){var a=u.newValue;i.prop(r,'value',a),o.value=a;}var c=t.data;if(c)o.data=c.newValue;return r.inner('combobox').set(o),!1;},e.propertyValidator={name:function(e){return i.validateName(this,e);},value:function(e){return i.validateValue(this,e);}},e.stateUpdater={opened:function(e){var n=this.inner('combobox');if(e)n.open();else n.close();}},e;}),define('pc/common/custom/form/Select_9def9f7ff8',['require','exports','module','cc/form/Select'],function(require){'use strict';var e=require('cc/form/Select');return e.defaultOptions={buttonSelector:'> .button',menuSelector:'> .menu',labelSelector:'> .button > .text',itemSelector:'li',itemActiveClass:'active',textAttribute:'data-text',valueAttribute:'data-value',defaultText:'- 请选择 -',menuActiveClass:'opened',showMenuTrigger:'click',hideMenuTrigger:'click',showMenuAnimation:function(e){e.menuElement.show();},hideMenuAnimation:function(e){e.menuElement.hide();},render:function(e){var n=[];return $.each(e,function(e,t){var i=[];$.each(t,function(e,n){if('text'!==e&&null!=n)i.push('data-'+e+'="'+n+'"');});var r=i.join(' ');if(r)r=' '+r;n.push('<li class="item"'+r+'>'+t.text+'</li>');}),n.join('');}},e;}),define('pc/common/component/Select_70ddee24ee',['require','exports','module','../custom/form/Select_9def9f7ff8','./Select_html'],function(require){'use strict';var e=require('../custom/form/Select_9def9f7ff8');return Ractive.extend({template:require('./Select_html'),data:function(){return{options:{name:'',className:'',defaultText:'请选择',data:null,value:'',disabled:!1,hidden:!1,onselect:$.noop}};},onrender:function(){var n=this,t=n.select=new e({mainElement:$(n.getElement()),data:n.get('options.data'),value:n.get('options.value'),defaultText:n.get('options.defaultText'),onselect:n.get('options.onselect'),watch:{value:function(e){if(e!=n.get('options.value'))n.set('options.value',e);}}});n.observe('options.value',function(e){t.set('value',e);}),n.observe('options.data',function(e){t.set('data',e);});},onteardown:function(){this.select.dispose();}});});