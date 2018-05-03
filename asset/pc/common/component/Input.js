define('cc/function/replaceWith',['require'],function(){'use strict';return function(n,e){n=n[0],e=e[0],n.parentNode.replaceChild(e,n);};}),define('pc/common/component/Input_css',function(){return'.input{width:180px}';}),define('pc/common/component/Input_html',function(){return'<div class="input{{#if options.className}} {{options.className}}{{/if}}"><div class="placeholder"></div>{{#if options.multiple}}<textarea name="{{options.name}}" value="{{options.value}}" on-focus="focus" on-blur="blur" on-keydown="keydown"{{#if options.lazy}}{{#if options.lazy === true}} lazy{{else}} lazy="{{options.lazy}}"{{/if}}{{/if}}{{#if options.disabled}} disabled{{/if}}{{#if options.readonly}} readonly{{/if}}{{#if options.autofocus}} autofocus{{/if}}></textarea>{{else}}<input type="{{#if options.type}}{{options.type}}{{else}}text{{/if}}" name="{{options.name}}" value="{{options.value}}" on-focus="focus" on-blur="blur" on-keydown="keydown"{{#if options.lazy}}{{#if options.lazy === true}} lazy{{else}} lazy="{{options.lazy}}"{{/if}}{{/if}}{{#if options.disabled}} disabled{{/if}}{{#if options.readonly}} readonly{{/if}}{{#if options.autofocus}} autofocus{{/if}}/>{{/if}}<div class="tooltip error right" data-error-for="{{options.name}}"></div><style>{{style}}</style></div>';}),define('cc/form/common',['require','exports','module'],function(require,exports){'use strict';exports.prop=function(n,e,t){if($.isPlainObject(e))$.each(e,function(e,t){exports.prop(n,e,t);});else{var i=n.inner('native');if(2===arguments.length)return i.prop(e);else{if(i.prop(e)!==t)i.prop(e,t);if('value'===e)i.trigger('change');}}},exports.setClass=function(n,e,t){var i=n.option(e);if(i)n.option('mainElement')[t+'Class'](i);},exports.findNative=function(n,e){var t=n.option('mainElement').find(e);if(0===t.length)n.error('form/'+n.type+' 必须包含一个 ['+e+'].');return t.eq(0);},exports.validateName=function(n,e){if('string'!==$.type(e))if(e=exports.prop(n,'name'),!e||'string'!==$.type(e))n.error('name attribute is missing.');return e;},exports.validateValue=function(n,e){var t=$.type(e);if('number'===t)e=''+e;else if('string'!==t)e=exports.prop(n,'value')||'';return e;};}),define('cc/function/toString',['require','exports','module'],function(){'use strict';return function(n,e){var t=$.type(n);if('number'===t)n=''+n;else if('string'!==t){if(1===arguments.length)e='';n=e;}return n;};}),define('cc/function/supportPlaceholder',['require','exports','module'],function(){'use strict';return function(){var n=$('<input type="text" />')[0];return'placeholder'in n;};}),define('cc/function/guid',['require','exports','module'],function(){var n=0;return function(){return'cc_'+n++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(n,e,t,i){var o='string'===$.type(e),r=o?n[e]:n;if(!o)i=t,t=e;var u=function(){var n,e=$.makeArray(arguments);if($.isFunction(t))n=t.apply(this,e);if(n!==!1){if($.isFunction(r))n=r.apply(this,e);if($.isFunction(i)){e.push(n);var o=i.apply(this,e);if('undefined'!==$.type(o))n=o;}return n;}};return o?n[e]=u:u;};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(n,e){if($.isPlainObject(e))$.each(e,function(e,t){if(!(e in n))n[e]=t;});};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(n){return n.charAt(0).toUpperCase()+n.slice(1);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(n){var e=setTimeout(n,0);return function(){clearTimeout(e);};};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(n,e){if('boolean'!==$.type(n)){if(1===arguments.length)e=!!n;n=e;}return n;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(n){if(n&&!n[$.expando])n='string'===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event();};}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(n){n.css('display');return'none'===n.css('display')||0==n.css('opacity')||'hidden'===n.css('visibility');};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function n(n){return n.is('body')||'static'!==n.css('position');}return function(e){if(e.is('body'))return e;for(var t=e.parent();!n(t);)t=t.parent();return t;};}),define('cc/function/split',['require','exports','module'],function(){'use strict';return function(n,e){var t=[];if('number'===$.type(n))n=''+n;if(n&&'string'===$.type(n))$.each(n.split(e),function(n,e){if(e=$.trim(e))t.push(e);});return t;};}),define('cc/util/keyboard',['require','exports','module'],function(require,exports){'use strict';function n(n){var e={};return $.each(n,function(n,t){e[t]=n;}),e;}var e={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,'`':192,'-':173,'=':61,'[':219,']':221,'\\':220,';':59,"'":222,',':188,'.':190,'/':191,$0:96,$1:97,$2:98,$3:99,$4:100,$5:101,$6:102,$7:103,$8:104,$9:105,'$.':110,'$+':107,'$-':109,'$*':106,'$/':111,space:32,tab:9},t={backspace:8,'delete':46},i={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,enter:13,esc:27,capslock:20,insert:45,home:36,end:35,pageup:33,pagedown:34,left:37,right:39,up:38,down:40},o={shift:16,ctrl:17,meta:91,alt:18};$.extend(exports,e,t,i,o),exports.charKey=e,exports.deleteKey=t,exports.functionKey=i,exports.combinationKey=o,exports.isCharKey=function(t){return t in n(e);},exports.isDeleteKey=function(e){return e in n(t);},exports.isFunctionKey=function(e){return e in n(i);},exports.isCombinationKey=function(e){return e in n(o);};}),define('cc/function/supportInput',['require','exports','module'],function(){'use strict';return function(){var n=$('<input type="text" />')[0];return'oninput'in n;};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var n=require('../function/extend'),e=require('../function/createEvent'),t={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$;},on:function(n,e,t){return this.get$().on(n,e,t),this;},once:function(n,e,t){return this.get$().one(n,e,t),this;},off:function(n,e){return this.get$().off(n,e),this;},emit:function(n,t){return n=e(n),this.get$().trigger(n,t),n;}};exports.extend=function(e){n(e,t);};}),define('cc/util/input',['require','exports','module','../function/guid','../function/around','../function/supportInput'],function(require,exports){'use strict';function n(n){var e='.'+t();n.data(r,e).on('input'+e,function(e){e.type=u,n.trigger(e);});}function e(n){var e=n.val(),o=!1,a='.'+t();n.data(r,a).on('propertychange'+a,function(t){if(o)return void(o=!1);if('value'===t.originalEvent.propertyName){var i=n.val();if(i!==e)if(t.type=u,n.trigger(t),!t.isDefaultPrevented())e=i;}}),i(n,'val',function(){if(0!==arguments.length)o=!0;});}var t=require('../function/guid'),i=require('../function/around'),o=require('../function/supportInput'),r='cc-util-input',u='cc-input';exports.INPUT=u,exports.init=o()?n:e,exports.dispose=function(n){var e=n.data(r);if(e)n.removeData(r).off(e);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function n(n,e,t,i,o){return function(a,c,s){var f=this;if($.isPlainObject(a))return s=c,void $.each(a,function(n,e){f[t](n,e,s);});s=s||{};var p=f[i](a),d=f.constructor[n+'Validator'];if(d)if($.isFunction(d[a]))c=d[a].call(f,c,s);if($.isFunction(o))c=o(f,c,s);if(p!==c||s.force)if(f[e][a]=c,!s.silent){var h={};r(h,s),h.newValue=c,h.oldValue=p;var v={};v[a]=h;var m=function(n){if(n&&n[a])f.execute(n[a],[c,p,h]);};if(m(f.inner('watchSync')),m(f.option('watchSync')),s.sync)return m(f.constructor[n+'Updater']),m(f.option('watch')),void f.emit(n+'change',v);var y=f.inner(n+'Changes');if(!y)y={},f.inner(n+'Changes',y);if($.extend(y,v),!f.inner(l))f.inner(l,u(function(){f.sync(l);}));}};}function e(){this.error('initStruct() can just call one time.');}function t(n,e,t,i,o){var r,u='before'===i?'_'+e:e+'_',a=n[u];if($.isFunction(a))if(r=a.apply(n,t),r!==!1&&!$.isPlainObject(r))r=null;if(r===!1)return!1;var c=!1;if(r&&r.dispatch)c=!0,delete r.dispatch;if(o=$.Event(o),o.type=i+e,n.emit(o,r),c)n.dispatch(o,r);if(o.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),o=require('../function/around'),r=require('../function/extend'),u=(require('../function/ucFirst'),require('../function/nextTick')),a=require('../function/toBoolean'),c=require('../function/createEvent'),s=require('../function/replaceWith'),f=(require('../function/offsetParent'),require('./event')),p={},l='__update_async__',d={},h={initStruct:function(){var n=this,t=n.option('mainElement'),i=n.option('mainTemplate');if('string'===$.type(i)){var o=n.option('share'),r=n.type+i;if(o)t=d[r];var u;if(!t){if(u=$(i),o)d[r]=u;}else if(n.option('replace'))s(t,u=$(i));else t.html(i);if(u)t=u,n.option('mainElement',t);}var a=n.option('parentSelector');if(a&&!t.parent().is(a))t.appendTo(a);n.initStruct=e;},warn:function(n){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,n].join(' '));},error:function(n){throw new Error(['[CC error]',this.type,n].join(' '));},live:function(n,e,t){var i=this,o=i.inner('main');if(o)o.on(n+i.namespace(),e,t);return i;},emit:function(n,e){var t=this,i=t.option('context')||t;n=c(n),n.cc=i;var o=[n];if($.isPlainObject(e))o.push(e);n.type=n.type.toLowerCase();var r=i.get$();r.trigger.apply(r,o);var u='on'+n.type;if(!n.isPropagationStopped()&&i.execute(u,o)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+'_',o),n;},dispatch:function(n,e){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(n);if(t.type='dispatch',this.emit(t,e),t.isPropagationStopped())n.preventDefault(),n.stopPropagation();}},before:function(n,e){return this.on('before'+n.toLowerCase(),e);},after:function(n,e){return this.on('after'+n.toLowerCase(),e);},find:function(n){var e=this.inner('main');if(e){var t=e.find(n);if(t.length)return t;}},appendTo:function(n){var e=this.inner('main');if(e)e.appendTo(n);},prependTo:function(n){var e=this.inner('main');if(e)e.prependTo(n);},execute:function(n,e){var t=this,i=n;if('string'===$.type(n))i=t.option(n);if($.isFunction(i)){var o=t.option('context')||t;if($.isArray(e))return i.apply(o,e);else return i.call(o,e);}},renderWith:function(n,e,t){var i=this;if(!e)if(e=i.option('renderTemplate'),!e)e=i.option('mainTemplate');if(!t)t=i.option('mainElement');var o=i.option('renderSelector');if(o)t=t.find(o);var r;if($.isPlainObject(n)||$.isArray(n))r=i.execute('render',[n,e]);else if('string'===$.type(n))r=n;t.html(r);},namespace:function(){return'.'+this.guid;},option:function(n,e){var t=this;if(1===arguments.length&&'string'===$.type(n))return t.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.option(n,e);});t.options[n]=e;}},inner:function(n,e){var t=this,i=t.inners||{};if(1===arguments.length&&'string'===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.inner(n,e);});i[n]=e;}},is:function(n){return this.states[n];},state:n('state','states','state','is',function(n,e){return a(e,!1);}),get:function(n){return this.properties[n];},set:n('property','properties','set','get')},v={sync:function(){var n=this,e=function(e,t,i){$.each(e,function(o,r){return n.execute(t[o],[r.newValue,r.oldValue,i?e:r]);});};if($.each(['property','state'],function(t,i){var o=n.inner(i+'Changes');if(o){n.inner(i+'Changes',null);var r=n.constructor[i+'Updater'];if(r)e(o,r,!0);var u=n.option('watch');if(u)e(o,u);n.emit(i+'change',o);}}),arguments[0]!==l)n.execute(n.inner(l));n.inner(l,!1);},_sync:function(){if(!this.inner(l))return!1;else return void 0;},_init:function(){var n='initCalled';if(this.is(n))return!1;else return void this.state(n,!0);},_dispose:function(){var n='disposeCalled';if(this.is(n))return!1;else return void this.state(n,!0);}};exports.extend=function(n,e){r(n,v),$.each(n,function(i,r){var u=i.indexOf('_');if($.isFunction(r)&&0!==u&&u!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var a=function(n){return t(this,i,arguments,'before',n);},c=function(n){var e=this,o=arguments,u=function(){return t(e,i,o,'after',n);};if(r.length+1===o.length){var a=o[o.length-1];if(a&&$.isFunction(a.then))return void a.then(u);}u();};o(n,i,a,c);}}),r(n,h),f.extend(n);},exports.init=function(n,e){if(!e)e={};return r(e,n.constructor.defaultOptions),e.onafterinit_=function(){n.state('inited',!0);},e.onafterdispose_=function(){n.state('disposed',!0),n.off();var e=n.inner('main');if(n.option('removeOnDispose')&&e)e.remove();u(function(){delete p[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null;});},p[n.guid=i()]=n,n.properties={},n.options=e,n.states={},n.inners={},n.init(),n;},exports.dispose=function(n){n.sync();var e=n.inner('main')||n.option('mainElement');if(e)e.off(n.namespace());};}),define('cc/helper/Keyboard',['require','exports','module','../function/split','../util/life','../util/keyboard'],function(require){'use strict';function n(n){i.init(this,n);}function e(n){var e=[];return $.each(n,function(n,i){var r=[],u='plus',a=t(n.replace(/\$\+/g,u),'+');if($.each(o.combinationKey,function(n){if($.inArray(n,a)<0)a.push('!'+n);}),$.each(a,function(n,e){var t=0===e.indexOf('!');if(t)e=e.substr(1);if(e===u)e='$+';if(o.combinationKey[e])r.push((t?'!':'')+'e.'+e+'Key');else if(o[e])r.push('e.keyCode==='+o[e]);else return r.length=0,!1;}),r.length>0)e.push({test:new Function('e','return '+r.join('&')),handler:i});}),e;}var t=require('../function/split'),i=require('../util/life'),o=require('../util/keyboard'),r=n.prototype;return r.type='Keyboard',r.init=function(){var n=this,t=n.option('shortcut');if($.isPlainObject(t))t=e(t);var i,o=0,r=1,u=function(){return o>r;},a=n.namespace();n.option('mainElement').on('keydown'+a,function(e){var a=e.keyCode;if(i===a&&o>0){if(o===r)n.emit('beforelongpress',{keyCode:a},!0);o++;}else i=a,o=1;if(n.dispatch(n.emit(e)),t){var c={isLongPress:u()},s=[e,c];$.each(t,function(t,i){if(i.test(e))n.execute(i.handler,s);});}}).on('keyup'+a,function(e){if(u())n.emit('afterlongpress',{keyCode:e.keyCode},!0);o=0,i=null,n.dispatch(n.emit(e));});},r.dispose=function(){i.dispose(this);},i.extend(r),n;}),define('cc/helper/Placeholder',['require','exports','module','../function/isHidden','../function/toString','../function/supportPlaceholder','../util/life','../util/input'],function(require){'use strict';function n(n){r.init(this,n);}function e(n,e){var t=n.inner('proxy'),i=t[e];if(i)return i(n);else return void 0;}var t=require('../function/isHidden'),i=require('../function/toString'),o=require('../function/supportPlaceholder')(),r=require('../util/life'),u=require('../util/input'),a=n.prototype;a.type='Placeholder',a.init=function(){var n=this;n.initStruct(),n.inner({proxy:n.option('nativeFirst')&&o?c:s}),e(n,'init'),n.set({value:n.option('value')}),n.state({hidden:n.option('hidden')});},a.show=function(){this.state('hidden',!1);},a._show=function(){if(!this.is('hidden'))return!1;else return void 0;},a.hide=function(){this.state('hidden',!0);},a._hide=function(){if(this.is('hidden'))return!1;else return void 0;},a.render=function(){e(this,'render');},a.dispose=function(){e(this,'dispose'),r.dispose(this);},r.extend(a),n.propertyUpdater={value:function(){this.render();}},n.propertyValidator={value:function(n){if(n=i(n,null),null==n)n=this.inner('input').attr('placeholder');return n||'';}},n.stateUpdater={hidden:function(n){e(this,n?'hide':'show');}},n.stateValidator={hidden:function(n){if('boolean'!==$.type(n))n=e(this,'isHidden');return n;}};var c={init:function(n){var e=n.option('mainElement'),t=n.option('inputSelector'),i=e.prop('tagName');n.inner({main:e,input:'INPUT'===i||'TEXTAREA'===i?e:e.find(t)});},render:function(n){n.inner('input').attr('placeholder',n.get('value'));},isHidden:function(n){return n.inner('input').val().length>0;}},s={init:function(n){var e=n.option('mainElement'),t=n.option('inputSelector'),i=n.option('labelSelector'),o=e.find(t),r=e.find(i);o.removeAttr('placeholder'),n.inner({main:e,input:o,label:r}),u.init(o);var a=$.proxy(n.render,n);a();var c=n.namespace();e.on('click'+c,i,function(){o.focus();}).on('change'+c,t,a).on(u.INPUT+c,t,a);},show:function(n){n.execute('showAnimation',{labelElement:n.inner('label')});},hide:function(n){n.execute('hideAnimation',{labelElement:n.inner('label')});},render:function(n){var e=n.inner('input');n.inner('label').html(n.get('value'));var t=e.val();if(n.option('autoTrim'))t=$.trim(t);if(t)n.hide();else n.show();},dispose:function(n){u.dispose(n.inner('input'));},isHidden:function(n){return t(n.inner('label'));}};return n;}),define('cc/helper/Input',['require','exports','module','../function/toString','../util/life','../util/input','../util/keyboard','./Keyboard'],function(require){'use strict';function n(n){t.init(this,n);}var e=require('../function/toString'),t=require('../util/life'),i=require('../util/input'),o=require('../util/keyboard'),r=require('./Keyboard'),u=n.prototype;return u.type='Input',u.init=function(){var n=this,e=n.option('mainElement');i.init(e);var t,u=new r({mainElement:e,shortcut:n.option('shortcut')}),a=function(t){if('string'!==$.type(t))t=e.val();n.set('value',t);};u.on('dispatch',function(i,r){var u=i.originalEvent;switch(u.type){case'beforelongpress':t=!0;break;case'afterlongpress':t=!1;var c=r.keyCode;if(o.isCharKey(c)||o.isDeleteKey()||e.is('textarea')&&c===o.enter)a();}n.dispatch(n.emit(u,r),r);});var c=n.namespace();e.on('blur'+c,a).on(i.INPUT+c,function(){if(!t||!n.option('silentOnLongPress'))a();}),n.inner({keyboard:u,main:e}),a(n.option('value'));},u.dispose=function(){var n=this;t.dispose(n),i.dispose(n.inner('main')),n.inner('keyboard').dispose();},t.extend(u),n.propertyUpdater={value:function(n,e,t){var i=this.inner('main');if(i.val()!==n||t.value.force)i.val(n);}},n.propertyValidator={value:function(n){return e(n);}},n;}),define('cc/form/Text',['require','exports','../helper/Input','../helper/Placeholder','../util/life','./common'],function(require){'use strict';function n(n){i.init(this,n);}var e=require('../helper/Input'),t=require('../helper/Placeholder'),i=require('../util/life'),o=require('./common'),r=n.prototype;return r.type='Text',r.init=function(){var n=this;n.initStruct();var i=new t({mainElement:n.option('mainElement'),value:n.option('placeholder'),hidden:!0,autoTrim:n.option('autoTrim'),nativeFirst:n.option('nativeFirst'),inputSelector:n.option('inputSelector'),labelSelector:n.option('labelSelector'),showAnimation:n.option('showPlaceholderAnimation'),hideAnimation:n.option('hidePlaceholderAnimation')});i.sync();var o=i.inner('input'),r=new e({mainElement:o,shortcut:n.option('shortcut'),value:n.option('value')});r.sync(),i.option('watchSync',{value:function(e){n.set('placeholder',e);}}),r.option('watchSync',{value:function(e){n.set('value',e);}}),n.inner({main:i.inner('main'),'native':o,input:r,placeholder:i}),n.set({name:n.option('name'),value:r.get('value'),placeholder:i.get('value')});},r.dispose=function(){var n=this;i.dispose(n),n.inner('input').dispose(),n.inner('placeholder').dispose();},i.extend(r),n.propertyUpdater={name:function(n){o.prop(this,'name',n);},value:function(n){var e=this.inner('input');e.set('value',n),e.sync(),this.inner('placeholder').render();},placeholder:function(n){this.inner('placeholder').set('value',n);}},n.propertyValidator={name:function(n){return o.validateName(this,n);}},n;}),define('pc/common/custom/form/Text_d67ad8996b',['require','exports','module','cc/form/Text'],function(require){'use strict';var n=require('cc/form/Text');return n.defaultOptions={nativeFirst:!0,inputSelector:'input,textarea',labelSelector:'.placeholder',showPlaceholderAnimation:function(n){n.labelElement.fadeIn(500);},hidePlaceholderAnimation:function(n){n.labelElement.hide();}},n;}),define('pc/common/component/Input',['require','exports','module','../custom/form/Text_d67ad8996b','cc/util/keyboard','./Input_html','./Input_css'],function(require){'use strict';var n=require('../custom/form/Text_d67ad8996b'),e=require('cc/util/keyboard');return Ractive.extend({template:require('./Input_html'),data:function(){return{style:require('./Input_css'),options:{name:'',value:'',type:'',placeholder:'',className:'',multiple:!1,lazy:!1,disabled:!1,readonly:!1,autofocus:!1}};},onrender:function(){var t=this,i=$(t.getElement()),o=i.find(':text,textarea'),r=t.formText=new n({mainElement:i,nativeFirst:!1,watch:{value:function(n){if(n!==t.get('options.value'))t.set('options.value',n);}}});t.observe('options.name',function(n){r.set('name',n);}),t.observe('options.value',function(n){r.set('value',n);}),t.observe('options.placeholder',function(n){r.set('placeholder',n);}),t.observe('options.focus',function(n){if(n)o.focus();}),t.observe('options.blur',function(n){if(n)o.blur();}),t.on('focus',function(){t.set({'options.focus':!0,'options.blur':!1});}),t.on('blur',function(){t.set({'options.focus':!1,'options.blur':!0});}),t.on('keydown',function(n){var i={};i[e.enter]='enter';var o=i[n.original.keyCode];if(o)t.fire(o,n);});},onteardown:function(){this.formText.dispose();}});});