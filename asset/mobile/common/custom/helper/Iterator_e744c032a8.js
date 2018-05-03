define('cc/function/replaceWith',['require'],function(){'use strict';return function(t,n){t=t[0],n=n[0],t.parentNode.replaceChild(n,t);};}),define('cc/function/guid',['require','exports','module'],function(){var t=0;return function(){return'cc_'+t++;};}),define('cc/function/float2Int',['require','exports','module'],function(){'use strict';return function(t,n){var e,i=(''+t).split('.');if(n>=0);else n=0;if(1===i.length)e=t+new Array(n+1).join('0');else n=Math.max(0,n-i[1].length),e=i.join('')+new Array(n+1).join('0');return+e;};}),define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var t={'int':parseInt,'float':parseFloat};return function(n,e,i){if('number'!==$.type(n)){var r=t[i];if(r)n=r(n,10);else if($.isNumeric(n))n=+n;else n=0/0;}return isNaN(n)?e:n;};}),define('cc/util/Timer',['require','exports','module'],function(){'use strict';function t(t){$.extend(this,t);}var n=t.prototype;return n.start=function(){var t=this;t.stop();var n=t.timeout,e=t.interval,i=function(){if(t.count++,t.task()!==!1)t.timer=setTimeout(i,e);else t.stop();};if(null==n)n=e;t.timer=setTimeout(i,n);},n.stop=function(){var t=this;if(t.timer)clearTimeout(t.timer),t.timer=null,t.count=0;},n.dispose=function(){var t=this;t.stop(),t.task=t.timeout=t.interval=null;},t;}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function t(t){return t.is('body')||'static'!==t.css('position');}return function(n){if(n.is('body'))return n;for(var e=n.parent();!t(e);)e=e.parent();return e;};}),define('cc/function/decimalLength',['require','exports','module'],function(){'use strict';return function(t){var n=(''+t).split('.');return 2===n.length?n[1].length:0;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(t,n,e,i){var r='string'===$.type(n),o=r?t[n]:t;if(!r)i=e,e=n;var u=function(){var t,n=$.makeArray(arguments);if($.isFunction(e))t=e.apply(this,n);if(t!==!1){if($.isFunction(o))t=o.apply(this,n);if($.isFunction(i)){n.push(t);var r=i.apply(this,n);if('undefined'!==$.type(r))t=r;}return t;}};return r?t[n]=u:u;};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(t,n){if($.isPlainObject(n))$.each(n,function(n,e){if(!(n in t))t[n]=e;});};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(t){return t.charAt(0).toUpperCase()+t.slice(1);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(t){var n=setTimeout(t,0);return function(){clearTimeout(n);};};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(t,n){if('boolean'!==$.type(t)){if(1===arguments.length)n=!!t;t=n;}return t;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(t){if(t&&!t[$.expando])t='string'===$.type(t)||t.type?$.Event(t):$.Event(null,t);return t||$.Event();};}),define('cc/function/plus',['require','exports','module','./decimalLength','./float2Int'],function(require){'use strict';var t=require('./decimalLength'),n=require('./float2Int');return function(e,i){var r=Math.max(t(e),t(i));return e=n(e,r),i=n(i,r),(e+i)/Math.pow(10,r);};}),define('cc/function/minus',['require','exports','module','./decimalLength','./float2Int'],function(require){'use strict';var t=require('./decimalLength'),n=require('./float2Int');return function(e,i){var r=Math.max(t(e),t(i));return e=n(e,r),i=n(i,r),(e-i)/Math.pow(10,r);};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var t=require('../function/extend'),n=require('../function/createEvent'),e={get$:function(){var t=this;if(!t.$)t.$=$({});return t.$;},on:function(t,n,e){return this.get$().on(t,n,e),this;},once:function(t,n,e){return this.get$().one(t,n,e),this;},off:function(t,n){return this.get$().off(t,n),this;},emit:function(t,e){return t=n(t),this.get$().trigger(t,e),t;}};exports.extend=function(n){t(n,e);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function t(t,n,e,i,r){return function(c,s,f){var a=this;if($.isPlainObject(c))return f=s,void $.each(c,function(t,n){a[e](t,n,f);});f=f||{};var p=a[i](c),d=a.constructor[t+'Validator'];if(d)if($.isFunction(d[c]))s=d[c].call(a,s,f);if($.isFunction(r))s=r(a,s,f);if(p!==s||f.force)if(a[n][c]=s,!f.silent){var h={};o(h,f),h.newValue=s,h.oldValue=p;var m={};m[c]=h;var v=function(t){if(t&&t[c])a.execute(t[c],[s,p,h]);};if(v(a.inner('watchSync')),v(a.option('watchSync')),f.sync)return v(a.constructor[t+'Updater']),v(a.option('watch')),void a.emit(t+'change',m);var x=a.inner(t+'Changes');if(!x)x={},a.inner(t+'Changes',x);if($.extend(x,m),!a.inner(l))a.inner(l,u(function(){a.sync(l);}));}};}function n(){this.error('initStruct() can just call one time.');}function e(t,n,e,i,r){var o,u='before'===i?'_'+n:n+'_',c=t[u];if($.isFunction(c))if(o=c.apply(t,e),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var s=!1;if(o&&o.dispatch)s=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+n,t.emit(r,o),s)t.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),s=require('../function/createEvent'),f=require('../function/replaceWith'),a=(require('../function/offsetParent'),require('./event')),p={},l='__update_async__',d={},h={initStruct:function(){var t=this,e=t.option('mainElement'),i=t.option('mainTemplate');if('string'===$.type(i)){var r=t.option('share'),o=t.type+i;if(r)e=d[o];var u;if(!e){if(u=$(i),r)d[o]=u;}else if(t.option('replace'))f(e,u=$(i));else e.html(i);if(u)e=u,t.option('mainElement',e);}var c=t.option('parentSelector');if(c&&!e.parent().is(c))e.appendTo(c);t.initStruct=n;},warn:function(t){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,t].join(' '));},error:function(t){throw new Error(['[CC error]',this.type,t].join(' '));},live:function(t,n,e){var i=this,r=i.inner('main');if(r)r.on(t+i.namespace(),n,e);return i;},emit:function(t,n){var e=this,i=e.option('context')||e;t=s(t),t.cc=i;var r=[t];if($.isPlainObject(n))r.push(n);t.type=t.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u='on'+t.type;if(!t.isPropagationStopped()&&i.execute(u,r)===!1)t.preventDefault(),t.stopPropagation();return i.execute(u+'_',r),t;},dispatch:function(t,n){if(!t.isPropagationStopped()){if(!t.originalEvent)t.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var e=$.Event(t);if(e.type='dispatch',this.emit(e,n),e.isPropagationStopped())t.preventDefault(),t.stopPropagation();}},before:function(t,n){return this.on('before'+t.toLowerCase(),n);},after:function(t,n){return this.on('after'+t.toLowerCase(),n);},find:function(t){var n=this.inner('main');if(n){var e=n.find(t);if(e.length)return e;}},appendTo:function(t){var n=this.inner('main');if(n)n.appendTo(t);},prependTo:function(t){var n=this.inner('main');if(n)n.prependTo(t);},execute:function(t,n){var e=this,i=t;if('string'===$.type(t))i=e.option(t);if($.isFunction(i)){var r=e.option('context')||e;if($.isArray(n))return i.apply(r,n);else return i.call(r,n);}},renderWith:function(t,n,e){var i=this;if(!n)if(n=i.option('renderTemplate'),!n)n=i.option('mainTemplate');if(!e)e=i.option('mainElement');var r=i.option('renderSelector');if(r)e=e.find(r);var o;if($.isPlainObject(t)||$.isArray(t))o=i.execute('render',[t,n]);else if('string'===$.type(t))o=t;e.html(o);},namespace:function(){return'.'+this.guid;},option:function(t,n){var e=this;if(1===arguments.length&&'string'===$.type(t))return e.options[t];else{if($.isPlainObject(t))return void $.each(t,function(t,n){e.option(t,n);});e.options[t]=n;}},inner:function(t,n){var e=this,i=e.inners||{};if(1===arguments.length&&'string'===$.type(t))return i[t];else{if($.isPlainObject(t))return void $.each(t,function(t,n){e.inner(t,n);});i[t]=n;}},is:function(t){return this.states[t];},state:t('state','states','state','is',function(t,n){return c(n,!1);}),get:function(t){return this.properties[t];},set:t('property','properties','set','get')},m={sync:function(){var t=this,n=function(n,e,i){$.each(n,function(r,o){return t.execute(e[r],[o.newValue,o.oldValue,i?n:o]);});};if($.each(['property','state'],function(e,i){var r=t.inner(i+'Changes');if(r){t.inner(i+'Changes',null);var o=t.constructor[i+'Updater'];if(o)n(r,o,!0);var u=t.option('watch');if(u)n(r,u);t.emit(i+'change',r);}}),arguments[0]!==l)t.execute(t.inner(l));t.inner(l,!1);},_sync:function(){if(!this.inner(l))return!1;else return void 0;},_init:function(){var t='initCalled';if(this.is(t))return!1;else return void this.state(t,!0);},_dispose:function(){var t='disposeCalled';if(this.is(t))return!1;else return void this.state(t,!0);}};exports.extend=function(t,n){o(t,m),$.each(t,function(i,o){var u=i.indexOf('_');if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(n)&&$.inArray(i,n)>=0)){var c=function(t){return e(this,i,arguments,'before',t);},s=function(t){var n=this,r=arguments,u=function(){return e(n,i,r,'after',t);};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u);}u();};r(t,i,c,s);}}),o(t,h),a.extend(t);},exports.init=function(t,n){if(!n)n={};return o(n,t.constructor.defaultOptions),n.onafterinit_=function(){t.state('inited',!0);},n.onafterdispose_=function(){t.state('disposed',!0),t.off();var n=t.inner('main');if(t.option('removeOnDispose')&&n)n.remove();u(function(){delete p[t.guid],t.properties=t.options=t.changes=t.states=t.inners=t.guid=null;});},p[t.guid=i()]=t,t.properties={},t.options=n,t.states={},t.inners={},t.init(),t;},exports.dispose=function(t){t.sync();var n=t.inner('main')||t.option('mainElement');if(n)n.off(t.namespace());};}),define('cc/helper/Iterator',['require','exports','module','../function/plus','../function/minus','../function/toNumber','../util/Timer','../util/life'],function(require){'use strict';function t(t){o.init(this,t);}var n=require('../function/plus'),e=require('../function/minus'),i=require('../function/toNumber'),r=require('../util/Timer'),o=require('../util/life'),u=t.prototype;return u.init=function(){var t=this;t.set({index:t.option('index'),minIndex:t.option('minIndex'),maxIndex:t.option('maxIndex')});},u.start=function(t){var n=this,e=n.inner('timer');if(e)e.dispose();var i=t?n.prev:n.next,o=n.option('timeout'),u=n.option('interval');if('number'!==$.type(u))n.error('interval must be a number.');e=new r({task:$.proxy(i,n),timeout:o,interval:u}),e.start(),n.inner('timer',e);},u.pause=function(){this.inner('timer').dispose(),this.inner('timer',null);},u._pause=function(){if(!this.inner('timer'))return!1;else return void 0;},u.stop=function(){var t=this;t.pause(),t.set('index',t.option('defaultIndex'));},u.prev=function(){var t=this,n=e(t.get('index'),t.option('step')),r=t.get('minIndex'),o=t.get('maxIndex');if(!$.isNumeric(n)||r>n||n>o)n=o;t.set('index',i(n,0));},u._prev=function(){var t=this;if(!t.option('loop')&&e(t.get('index'),t.option('step'))<t.get('minIndex'))return!1;else return void 0;},u.next=function(){var t=this,e=n(t.get('index'),t.option('step')),r=t.get('minIndex'),o=t.get('maxIndex');if(!$.isNumeric(e)||e>o||r>e)e=r;t.set('index',i(e,0));},u._next=function(){var t=this;if(!t.option('loop')&&n(t.get('index'),t.option('step'))>t.get('maxIndex'))return!1;else return void 0;},u.dispose=u.stop,o.extend(u),t.propertyValidator={index:function(t){if(t=i(t,null),null==t)t=this.option('defaultIndex');return t;}},t;}),define('mobile/common/custom/helper/Iterator_e744c032a8',['require','exports','module','cc/helper/Iterator'],function(require){'use strict';var t=require('cc/helper/Iterator');return t.defaultOptions={step:1,minIndex:0,interval:100,defaultIndex:-1},t;});