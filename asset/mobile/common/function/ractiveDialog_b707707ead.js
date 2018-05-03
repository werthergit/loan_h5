define('cc/function/restrain',['require','exports','module'],function(){'use strict';return function(e,n,t){if(n>e)e=n;else if(e>t)e=t;return e;};}),define('cc/function/eventOffset',['require','exports','module'],function(){'use strict';return function(e){var n=e.offsetX,t=e.offsetY;if('number'!==$.type(n)){var i=e.target.getBoundingClientRect();n=e.clientX-i.left,t=e.clientY-i.top;}return{x:n,y:t};};}),define('cc/function/eventPage',['require','exports','module'],function(){'use strict';return function(e){var n=e.pageX,t=e.pageY;if('number'!==$.type(n)){var i=document.documentElement;n=e.clientX+i.scrollLeft,t=e.clientY+i.scrollTop;}return{x:n,y:t};};}),define('cc/function/contains',['require','exports','module'],function(){'use strict';return function(e,n){if(e=e.jquery?e[0]:e,n=n.jquery?n[0]:n,!e||!n)return!1;if(e===n)return!0;else return $.contains(e,n);};}),define('cc/function/debounce',['require','exports','module'],function(){'use strict';return function(e,n,t){function i(t){r=setTimeout(function(){r=null,o=$.now(),e.apply(null,$.makeArray(t));},n);}n='number'===$.type(n)?n:50;var o,r;return function(){if(t&&o>0&&$.now()-o<n)clearTimeout(r),r=null;if(!r)i(arguments);};};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,n){e=e[0],n=n[0],e.parentNode.replaceChild(n,e);};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/util/instance',['require','exports','module'],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body);}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,n){if('boolean'!==$.type(e)){if(1===arguments.length)n=!!e;e=n;}return e;};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var n=setTimeout(e,0);return function(){clearTimeout(n);};};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,n){if($.isPlainObject(n))$.each(n,function(n,t){if(!(n in e))e[n]=t;});};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,n,t,i){var o='string'===$.type(n),r=o?e[n]:e;if(!o)i=t,t=n;var u=function(){var e,n=$.makeArray(arguments);if($.isFunction(t))e=t.apply(this,n);if(e!==!1){if($.isFunction(r))e=r.apply(this,n);if($.isFunction(i)){n.push(e);var o=i.apply(this,n);if('undefined'!==$.type(o))e=o;}return e;}};return o?e[n]=u:u;};}),define('cc/function/decimalLength',['require','exports','module'],function(){'use strict';return function(e){var n=(''+e).split('.');return 2===n.length?n[1].length:0;};}),define('cc/function/float2Int',['require','exports','module'],function(){'use strict';return function(e,n){var t,i=(''+e).split('.');if(n>=0);else n=0;if(1===i.length)t=e+new Array(n+1).join('0');else n=Math.max(0,n-i[1].length),t=i.join('')+new Array(n+1).join('0');return+t;};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/viewportWidth',['require','exports','module'],function(){'use strict';return function(){return window.innerWidth||document.documentElement.clientWidth;};}),define('cc/function/viewportHeight',['require','exports','module'],function(){'use strict';return function(){return window.innerHeight||document.documentElement.clientHeight;};}),define('cc/function/pageScrollLeft',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);};}),define('cc/function/pageScrollTop',['require','exports','module'],function(){'use strict';return function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop);};}),define('cc/function/disableSelection',['require','exports','module'],function(){'use strict';if(document.selection)return function(){document.body.onselectstart=function(){return!1;};};else return $.noop;}),define('cc/function/enableSelection',['require','exports','module'],function(){'use strict';if(document.selection)return function(){document.body.onselectstart=null;};else return $.noop;}),define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var e={'int':parseInt,'float':parseFloat};return function(n,t,i){if('number'!==$.type(n)){var o=e[i];if(o)n=o(n,10);else if($.isNumeric(n))n=+n;else n=0/0;}return isNaN(n)?t:n;};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(n){if(n.is('body'))return n;for(var t=n.parent();!e(t);)t=t.parent();return t;};}),define('cc/function/position',['require','exports','module','./offsetParent'],function(require){'use strict';var e=require('./offsetParent');return function(n){var t=e(n),i=n.css('position'),o=parseInt(n.css('left'),10),r=parseInt(n.css('top'),10),u=isNaN(o),c=isNaN(r);if(u||c)if(1===t.length){var f=n.offset(),s=t.offset();if(u)o=f.left-s.left-(parseInt(t.css('border-left-width'),10)||0);if(c)r=f.top-s.top-(parseInt(t.css('border-top-width'),10)||0);}else o=r=0;if(!i||'static'===i)i='absolute';return{position:i,left:o,top:r};};}),define('cc/function/outerOffset',['require','exports','module','./toNumber'],function(require){'use strict';var e=require('./toNumber');return function(n){var t=n.offset(),i=e(n.css('margin-left'),0,'int'),o=e(n.css('margin-top'),0,'int');return{x:t.left-i,y:t.top-o};};}),define('cc/function/innerOffset',['require','exports','module','./toNumber'],function(require){'use strict';var e=require('./toNumber');return function(n){var t=n.offset(),i=n.css('border-left-width'),o=n.css('border-top-width');return{x:t.left+e(i,0,'int'),y:t.top+e(o,0,'int')};};}),define('cc/function/page',['require','exports','module','../util/instance'],function(require){'use strict';var e=require('../util/instance');return function(){if(e.body.prop('clientHeight')<e.html.prop('clientHeight'))return e.html;else return e.body;};}),define('cc/function/viewport',['require','exports','module','../util/instance'],function(require){'use strict';var e=require('../util/instance');return function(){if(e.body.prop('clientHeight')>e.html.prop('clientHeight'))return e.html;else return e.body;};}),define('cc/util/touch',['require','exports','module','../function/eventPage','../function/eventOffset'],function(require){'use strict';function n(e){return e.originalEvent.changedTouches[0];}var t=require('../function/eventPage'),i=require('../function/eventOffset'),o=document.createElement('div'),r={support:'ontouchend'in o,click:'touchstart',down:'touchstart',move:'touchmove',up:'touchend',page:function(e){var t=n(e);return{x:t.pageX,y:t.pageY};},client:function(e){var t=n(e);return{x:t.clientX,y:t.clientY};},offset:function(e){var t=n(e);return{x:t.offsetX,y:t.offsetY};}},u={support:'onclick'in o,click:'click',down:'mousedown',move:'mousemove',up:'mouseup',page:function(e){return t(e);},client:function(e){return{x:e.clientX,y:e.clientY};},offset:function(){return i(e);}};return o=null,{touch:r,mouse:u};}),define('cc/function/pageHeight',['require','exports','module','./page'],function(require){'use strict';var e=require('./page');return function(){var n=e()[0];return Math.max(n.scrollHeight,n.clientHeight);};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),n=require('../function/createEvent'),t={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,n,t){return this.get$().on(e,n,t),this;},once:function(e,n,t){return this.get$().one(e,n,t),this;},off:function(e,n){return this.get$().off(e,n),this;},emit:function(e,t){return e=n(e),this.get$().trigger(e,t),e;}};exports.extend=function(n){e(n,t);};}),define('cc/function/divide',['require','exports','module','./decimalLength','./float2Int'],function(require){'use strict';var e=require('./decimalLength'),n=require('./float2Int');return function(t,i){var o=Math.max(e(t),e(i));return t=n(t,o),i=n(i,o),t/ i;};}),define('cc/function/testTarget',['require','exports','module','../util/instance','./contains'],function(require){'use strict';var e=require('../util/instance'),n=require('./contains');return function(t,i,o){var r=!1;if($.isArray(i))i=i.join(',');if(!o)o=e.document;return o.find(i).each(function(){if(r=n(this,t))return!1;else return void 0;}),r;};}),define('cc/function/pageWidth',['require','exports','module','./page'],function(require){'use strict';var e=require('./page');return function(){var n=e()[0];return Math.max(n.scrollWidth,n.clientWidth);};}),define('cc/function/parsePercent',['require','exports','module','./divide'],function(require){'use strict';var e=require('./divide'),n=/(-?\d+(\.\d+)?)%/;return function(t){if(n.test(t))return e(RegExp.$1,100);else return void 0;};}),define('cc/function/pin',['require','exports','module','../util/instance','./parsePercent'],function(require){'use strict';function e(e){var n=o[e.x];if(null==n)n=e.x;if('string'===$.type(n)){var t=i(n);if(null!=t)n=t*(e.width||e.element.outerWidth());}return n;}function n(e){var n=o[e.y];if(null==n)n=e.y;if('string'===$.type(n)){var t=i(n);if(null!=t)n=t*(e.height||e.element.outerHeight());}return n;}var t=require('../util/instance'),i=require('./parsePercent'),o={left:0,top:0,center:'50%',middle:'50%',right:'100%',bottom:'100%'};return function(i){var o=i.element,r=i.attachment||{};if(!r.element)r.element=t.body;var u=r.element.offset(),c=u.left+e(r),f=u.top+n(r),s=c-e(i),a=f-n(i),l=i.offset;if(l){if('number'===$.type(l.x))s+=l.x;if('number'===$.type(l.y))a+=l.y;}var d={left:s,top:a},p=o.css('position');if('absolute'!==p&&'fixed'!==p)d.position='absolute';if(i.silent)return d;else o.css(d);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,n,t,i,o){return function(c,f,s){var a=this;if($.isPlainObject(c))return s=f,void $.each(c,function(e,n){a[t](e,n,s);});s=s||{};var l=a[i](c),p=a.constructor[e+'Validator'];if(p)if($.isFunction(p[c]))f=p[c].call(a,f,s);if($.isFunction(o))f=o(a,f,s);if(l!==f||s.force)if(a[n][c]=f,!s.silent){var m={};r(m,s),m.newValue=f,m.oldValue=l;var h={};h[c]=m;var v=function(e){if(e&&e[c])a.execute(e[c],[f,l,m]);};if(v(a.inner('watchSync')),v(a.option('watchSync')),s.sync)return v(a.constructor[e+'Updater']),v(a.option('watch')),void a.emit(e+'change',h);var g=a.inner(e+'Changes');if(!g)g={},a.inner(e+'Changes',g);if($.extend(g,h),!a.inner(d))a.inner(d,u(function(){a.sync(d);}));}};}function n(){this.error('initStruct() can just call one time.');}function t(e,n,t,i,o){var r,u='before'===i?'_'+n:n+'_',c=e[u];if($.isFunction(c))if(r=c.apply(e,t),r!==!1&&!$.isPlainObject(r))r=null;if(r===!1)return!1;var f=!1;if(r&&r.dispatch)f=!0,delete r.dispatch;if(o=$.Event(o),o.type=i+n,e.emit(o,r),f)e.dispatch(o,r);if(o.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),o=require('../function/around'),r=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),f=require('../function/createEvent'),s=require('../function/replaceWith'),a=(require('../function/offsetParent'),require('./event')),l={},d='__update_async__',p={},m={initStruct:function(){var e=this,t=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var o=e.option('share'),r=e.type+i;if(o)t=p[r];var u;if(!t){if(u=$(i),o)p[r]=u;}else if(e.option('replace'))s(t,u=$(i));else t.html(i);if(u)t=u,e.option('mainElement',t);}var c=e.option('parentSelector');if(c&&!t.parent().is(c))t.appendTo(c);e.initStruct=n;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,n,t){var i=this,o=i.inner('main');if(o)o.on(e+i.namespace(),n,t);return i;},emit:function(e,n){var t=this,i=t.option('context')||t;e=f(e),e.cc=i;var o=[e];if($.isPlainObject(n))o.push(n);e.type=e.type.toLowerCase();var r=i.get$();r.trigger.apply(r,o);var u='on'+e.type;if(!e.isPropagationStopped()&&i.execute(u,o)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+'_',o),e;},dispatch:function(e,n){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(e);if(t.type='dispatch',this.emit(t,n),t.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,n){return this.on('before'+e.toLowerCase(),n);},after:function(e,n){return this.on('after'+e.toLowerCase(),n);},find:function(e){var n=this.inner('main');if(n){var t=n.find(e);if(t.length)return t;}},appendTo:function(e){var n=this.inner('main');if(n)n.appendTo(e);},prependTo:function(e){var n=this.inner('main');if(n)n.prependTo(e);},execute:function(e,n){var t=this,i=e;if('string'===$.type(e))i=t.option(e);if($.isFunction(i)){var o=t.option('context')||t;if($.isArray(n))return i.apply(o,n);else return i.call(o,n);}},renderWith:function(e,n,t){var i=this;if(!n)if(n=i.option('renderTemplate'),!n)n=i.option('mainTemplate');if(!t)t=i.option('mainElement');var o=i.option('renderSelector');if(o)t=t.find(o);var r;if($.isPlainObject(e)||$.isArray(e))r=i.execute('render',[e,n]);else if('string'===$.type(e))r=e;t.html(r);},namespace:function(){return'.'+this.guid;},option:function(e,n){var t=this;if(1===arguments.length&&'string'===$.type(e))return t.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.option(e,n);});t.options[e]=n;}},inner:function(e,n){var t=this,i=t.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.inner(e,n);});i[e]=n;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,n){return c(n,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},h={sync:function(){var e=this,n=function(n,t,i){$.each(n,function(o,r){return e.execute(t[o],[r.newValue,r.oldValue,i?n:r]);});};if($.each(['property','state'],function(t,i){var o=e.inner(i+'Changes');if(o){e.inner(i+'Changes',null);var r=e.constructor[i+'Updater'];if(r)n(o,r,!0);var u=e.option('watch');if(u)n(o,u);e.emit(i+'change',o);}}),arguments[0]!==d)e.execute(e.inner(d));e.inner(d,!1);},_sync:function(){if(!this.inner(d))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,n){r(e,h),$.each(e,function(i,r){var u=i.indexOf('_');if($.isFunction(r)&&0!==u&&u!==i.length-1)if(!($.isArray(n)&&$.inArray(i,n)>=0)){var c=function(e){return t(this,i,arguments,'before',e);},f=function(e){var n=this,o=arguments,u=function(){return t(n,i,o,'after',e);};if(r.length+1===o.length){var c=o[o.length-1];if(c&&$.isFunction(c.then))return void c.then(u);}u();};o(e,i,c,f);}}),r(e,m),a.extend(e);},exports.init=function(e,n){if(!n)n={};return r(n,e.constructor.defaultOptions),n.onafterinit_=function(){e.state('inited',!0);},n.onafterdispose_=function(){e.state('disposed',!0),e.off();var n=e.inner('main');if(e.option('removeOnDispose')&&n)n.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=n,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var n=e.inner('main')||e.option('mainElement');if(n)n.off(e.namespace());};}),define('cc/function/pinGlobal',['require','exports','module','./pin','./viewport','./viewportWidth','./viewportHeight','./pageScrollLeft','./pageScrollTop'],function(require){'use strict';var e=require('./pin'),n=require('./viewport'),t=require('./viewportWidth'),i=require('./viewportHeight'),o=require('./pageScrollLeft'),r=require('./pageScrollTop');return function(u){var c={silent:!0,element:u.element,x:'50%'===u.x?'50%':0,y:'50%'===u.y?'50%':0,attachment:{element:n(),width:t(),height:i(),x:u.x,y:u.y}};if(!u.fixed)c.offset={x:o(),y:r()};return e(c);};}),define('cc/helper/Draggable',['require','exports','module','../function/page','../function/restrain','../function/position','../function/contains','../function/testTarget','../function/innerOffset','../function/outerOffset','../function/pageScrollLeft','../function/pageScrollTop','../function/viewportWidth','../function/viewportHeight','../function/enableSelection','../function/disableSelection','../util/life','../util/touch','../util/instance'],function(require){'use strict';function e(e){m.init(this,e);}var n=require('../function/page'),t=require('../function/restrain'),i=require('../function/position'),o=require('../function/contains'),r=require('../function/testTarget'),u=require('../function/innerOffset'),c=require('../function/outerOffset'),f=require('../function/pageScrollLeft'),s=require('../function/pageScrollTop'),a=require('../function/viewportWidth'),l=require('../function/viewportHeight'),d=require('../function/enableSelection'),p=require('../function/disableSelection'),m=require('../util/life'),h=require('../util/touch'),v=require('../util/instance').body,g=e.prototype;g.type='Draggable',g.init=function(){var e=this,m=e.option('mainElement'),h=e.option('mainSelector');e.inner({main:m});var g=e.option('containerElement');if(!g)g=n();var C,O=e.option('draggingClass'),T=e.option('containerDraggingClass'),k=e.option('bodyDraggingClass')||'dragging',P=function(n){var d;w=h?$(n.currentTarget):m;var p=n[$.expando];if(p){var v=e.option('includeSelector'),O=e.option('excludeSelector'),T=n.target;if(v&&!r(T,v,w)||O&&r(T,O,w))return;$.each(q,function(e,t){if(0===n.type.indexOf(e))return d=t,!1;else return void 0;});}else if(n.type)d=q[n.type];if(!d)d=q.mouse;e.emit('pick',{mainElement:w}),C=i(w),E.left=C.left,E.top=C.top;var k=g.is('html,body'),P=!0;if(!k)P=o(g,w);var D,H,A=c(w),W=u(g);if(p)D=d.absoluteX(n)-A.x,H=d.absoluteY(n)-A.y;else D=n.offsetX,H=n.offsetY;if(P){if(!k)D-=g.scrollLeft(),H-=g.scrollTop();D+=W.x,H+=W.y;}var j,_,F,L,N=a(),X=l(),Y=s(),I=f(),M=I+N,B=Y+X,V='fixed'===C.position;if(V)if(k)j=0,_=0;else j=t(W.x,I,M),_=t(W.y,Y,B);else if(k)j=-1*W.x,_=-1*W.y;else if(P)j=0,_=0;else j=W.x,_=W.y;if(null==F)if(!k&&P)F=g.prop('scrollWidth'),L=g.prop('scrollHeight');else F=g.innerWidth(),L=g.innerHeight();if(k){if(N>F)F=N;if(X>L)L=X;}if(V){if(j+F>M)F=M-j;if(_+L>B)L=B-_;}F=Math.max(0,F-w.outerWidth(!0)),L=Math.max(0,L-w.outerHeight(!0));var z=e.option('axis');return x='y'===z?S.constant(C.left):S.variable(d[V?'fixedX':'absoluteX'],D,j,j+F),y='x'===z?S.constant(C.top):S.variable(d[V?'fixedY':'absoluteY'],H,_,_+L),b=0,!0;},D=function(n){if(null!=b){E.left=x(n),E.top=y(n);var t;if(0===b){if(C)w.css(C),C=null;if(t=e.emit('beforedrag',$.extend({},E)),t.isDefaultPrevented())return;if(p(),O)w.addClass(O);if(T)g.addClass(T);if(k)v.addClass(k);}if(b++,t=e.emit('drag',$.extend({},E)),!t.isDefaultPrevented())e.execute('dragAnimation',{mainElement:w,mainStyle:E});}},H=function(){if(null!=b){if(b>0){if(d(),O)w.removeClass(O);if(T)g.removeClass(T);if(k)v.removeClass(k);e.emit('afterdrag',$.extend({},E));}e.emit('drop',{mainElement:w}),b=x=y=C=w=null;}};e.execute('init',{mainElement:m,mainSelector:h,namespace:e.namespace(),downHandler:P,moveHandler:D,upHandler:H});},g.dispose=function(){m.dispose(this);},m.extend(g);var x,y,b,w,E={},S={constant:function(e){return function(){return e;};},variable:function(e,n,i,o){return function(r){return t(e(r)-n,i,o);};}},q={};return $.each(h,function(e,n){if(n.support)q[e]={absoluteX:function(e){return n.client(e).x+f();},absoluteY:function(e){return n.client(e).y+s();},fixedX:function(e){return n.client(e).x;},fixedY:function(e){return n.client(e).y;}};}),e;}),define('cc/function/dragGlobal',['require','exports','module','../helper/Draggable','../util/instance'],function(require){'use strict';var e=require('../helper/Draggable'),n=require('../util/instance');return function(t){return new e({mainElement:t.element,containerElement:n.body,mainDraggingClass:t.draggingClass,includeSelector:t.includeSelector,excludeSelector:t.excludeSelector,dragAnimation:t.dragAnimation,init:function(e){var t=e.namespace;e.mainElement.on('mousedown'+t,function(i){if(e.downHandler(i))n.document.off(t).on('mousemove'+t,e.moveHandler).on('mouseup'+t,function(i){e.upHandler(i),n.document.off(t);});});}});};}),define('cc/ui/Dialog',['require','exports','module','../function/contains','../function/debounce','../function/pageWidth','../function/pageHeight','../function/pinGlobal','../function/dragGlobal','../util/life','../util/instance'],function(require){'use strict';function e(e){c.init(this,e);}var n=require('../function/contains'),t=require('../function/debounce'),i=require('../function/pageWidth'),o=require('../function/pageHeight'),r=require('../function/pinGlobal'),u=require('../function/dragGlobal'),c=require('../util/life'),f=require('../util/instance').window,s=e.prototype;return s.type='Dialog',s.init=function(){var e=this;e.initStruct();var t=e.option('mainElement'),i=e.option('maskElement');if(e.option('modal')){if(!i)i=$(e.option('maskTemplate'));if(!n(i,t))t.before(i);}else if(i)i=null;var o=[],r=e.option('skinClass');if(r)o.push(r);var u=e.option('draggableClass');if(e.option('draggable')&&u)o.push(u);if(o.length>0)t.addClass(o.join(' '));var c=e.option('removeOnEmpty');$.each(['content','footer'],function(n,i){var o=e.option(i),r=e.option(i+'Selector');if(o)t.find(r).html(o);else if(c)t.find(r).remove();});var f=e.option('title');if(f)t.find(e.option('titleSelector')).html(f);else if(c)t.find(e.option('headerSelector')).remove();var s=e.option('closeSelector');if(e.option('removeClose'))t.find(s).remove();var a={},l=e.option('width');switch($.type(l)){case'string':case'number':a.width=l;}var d=e.option('fixed')?'fixed':'absolute';if(t.css('position')!==d)a.position=d;if(i){var p='z-index',m=e.option('zIndex');if(!$.isNumeric(m))if(m=i.css(p),!$.isNumeric(m))m='auto';i.css(p,m),a[p]=m;}t.css(a);var h='click'+e.namespace();if(s)t.on(h,s,$.proxy(e.hide,e));if(e.option('disposeOnHide'))e.on('statechange',function(n,t){var i=t.hidden;if(i&&i.newValue===!0&&i.oldValue===!1)e.dispose();});if(i){if(e.option('hideOnClickMask'))i.on(h,function(i){if(!n(t,i.target))e.hide();});if(e.option('removeOnDispose'))e.after('dispose',function(){i.remove();});}e.inner({main:t,mask:i});var v=e.option('hidden');if(v)e.hide();else e.show();},s.show=function(){this.state('hidden',!1);},s._show=function(){if(this.is('hidden')===!1)return!1;else return void 0;},s.hide=function(){this.state('hidden',!0);},s._hide=function(){if(this.is('hidden')===!0)return!1;else return void 0;},s.refresh=function(){var e=this,n={},t=e.inner('main');n.mainElement=t,n.mainStyle=r({element:t,x:e.option('x'),y:e.option('y'),fixed:e.option('fixed')});var u=e.inner('mask');if(u)n.maskElement=u,n.maskStyle={width:i(),height:o()};e.execute(arguments[0]?'resizeWindowAnimation':'refreshAnimation',n);},s.dispose=function(){var e=this;if(c.dispose(e),!e.is('hidden'))e.hide();var n=e.inner('mask');if(n)n.off(e.namespace());},c.extend(s),e.stateUpdater={hidden:function(e){var n=this,i=n.namespace();f.off(i);var o=n.inner('dragger');if(o)o.dispose(),o=null;var r=n.inner('main'),c=n.inner('mask'),s={mainElement:r};if(c)s.maskElement=c;if(e)n.execute('hideAnimation',s);else{if(f.on('resize'+i,t(function(){n.refresh(!0);},50)),n.option('draggable'))o=u({element:r,includeSelector:n.option('draggableIncludeSelector'),excludeSelector:n.option('draggableExcludeSelector'),draggingClass:n.option('draggingClass'),dragAnimation:n.option('dragAnimation')});n.execute('showAnimation',s),n.refresh();}n.inner('dragger',o);}},e;}),define('mobile/common/custom/ui/Dialog_315abb274f',['require','exports','module','cc/ui/Dialog'],function(require){'use strict';var e=require('cc/ui/Dialog');return e.defaultOptions={x:'50%',y:'50%',modal:!0,fixed:!0,hidden:!1,draggable:!0,removeOnEmpty:!1,disposeOnHide:!0,removeOnDispose:!0,positionOnResize:!0,hideOnClickMask:!1,draggableClass:'draggable',draggableIncludeSelector:'> .header',draggableExcludeSelector:['> .header > .title','> .close'],parentSelector:'#app',headerSelector:'> .header',titleSelector:'> .header > .title',contentSelector:'> .body',footerSelector:'> .footer',mainTemplate:'<div class="dialog"><div class="header"><div class="title"></div></div><div class="body"></div><div class="footer"></div></div>',maskTemplate:'<div class="mask"></div>',showAnimation:function(e){if(e.mainElement.show(),e.maskElement)e.maskElement.show();},hideAnimation:function(e){if(e.mainElement.hide(),e.maskElement)e.maskElement.hide();},dragAnimation:function(){},refreshAnimation:function(){},resizeWindowAnimation:function(){}},e;}),define('mobile/common/function/ractiveDialog_b707707ead',['require','exports','module','../custom/ui/Dialog_315abb274f'],function(require){'use strict';var e=require('../custom/ui/Dialog_315abb274f');return function(n,t,i){var o,r;if(!$.isPlainObject(t))t={};var u=t.onbeforedispose;if(t.onbeforedispose=function(){if($.isFunction(u))u.apply(this,arguments);r.teardown();},$.isFunction(n))t.content=' ',t.removeOnEmpty=!0,o=new e(t),r=new Ractive({el:o.find('> .body')[0],data:{options:i},template:'<DialogBodyComponent options="{{options}}" />',components:{DialogBodyComponent:n}}),r=r.findComponent('DialogBodyComponent');else if($.isPlainObject(n)){var c=n.template,f=$(c);t.mainElement=f,t.mainTemplate=null,o=new e(t);var s=c.indexOf('>'),a=c.lastIndexOf('<');n.template=c.substring(s+1,a),n.el=f[0],r=new Ractive(n);}return r.getElement=function(){return r.el;},r.closeDialog=function(){o.hide();},o.ractive=r,o;};});