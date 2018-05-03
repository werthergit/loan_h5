define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(n){if(n&&!n[$.expando])n="string"===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event()}}),define("cc/function/split",["require","exports","module"],function(){"use strict";return function(n,t){var e=[];if("number"===$.type(n))n=""+n;if(n&&"string"===$.type(n))$.each(n.split(t),function(n,t){if(t=$.trim(t))e.push(t)});return e}}),define("cc/util/keyboard",["require","exports","module"],function(require,exports){"use strict";function n(n){var t={};return $.each(n,function(n,e){t[e]=n}),t}var t={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"`":192,"-":173,"=":61,"[":219,"]":221,"\\":220,";":59,"'":222,",":188,".":190,"/":191,$0:96,$1:97,$2:98,$3:99,$4:100,$5:101,$6:102,$7:103,$8:104,$9:105,"$.":110,"$+":107,"$-":109,"$*":106,"$/":111,space:32,tab:9},e={backspace:8,"delete":46},i={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,enter:13,esc:27,capslock:20,insert:45,home:36,end:35,pageup:33,pagedown:34,left:37,right:39,up:38,down:40},r={shift:16,ctrl:17,meta:91,alt:18};$.extend(exports,t,e,i,r),exports.charKey=t,exports.deleteKey=e,exports.functionKey=i,exports.combinationKey=r,exports.isCharKey=function(e){return e in n(t)},exports.isDeleteKey=function(t){return t in n(e)},exports.isFunctionKey=function(t){return t in n(i)},exports.isCombinationKey=function(t){return t in n(r)}}),define("cc/function/guid",["require","exports","module"],function(){var n=0;return function(){return"cc_"+n++}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(n,t,e,i){var r="string"===$.type(t),o=r?n[t]:n;if(!r)i=e,e=t;var u=function(){var n,t=$.makeArray(arguments);if($.isFunction(e))n=e.apply(this,t);if(n!==!1){if($.isFunction(o))n=o.apply(this,t);if($.isFunction(i)){t.push(n);var r=i.apply(this,t);if("undefined"!==$.type(r))n=r}return n}};return r?n[t]=u:u}}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(n,t){if($.isPlainObject(t))$.each(t,function(t,e){if(!(t in n))n[t]=e})}}),define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(n){var t=setTimeout(n,0);return function(){clearTimeout(t)}}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(n,t){if("boolean"!==$.type(n)){if(1===arguments.length)t=!!n;n=t}return n}}),define("cc/function/toString",["require","exports","module"],function(){"use strict";return function(n,t){var e=$.type(n);if("number"===e)n=""+n;else if("string"!==e){if(1===arguments.length)t="";n=t}return n}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(n,t){n=n[0],t=t[0],n.parentNode.replaceChild(t,n)}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function n(n){return n.is("body")||"static"!==n.css("position")}return function(t){if(t.is("body"))return t;for(var e=t.parent();!n(e);)e=e.parent();return e}}),define("cc/function/supportInput",["require","exports","module"],function(){"use strict";return function(){var n=$('<input type="text" />')[0];return"oninput"in n}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var n=require("../function/extend"),t=require("../function/createEvent"),e={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$},on:function(n,t,e){return this.get$().on(n,t,e),this},once:function(n,t,e){return this.get$().one(n,t,e),this},off:function(n,t){return this.get$().off(n,t),this},emit:function(n,e){return n=t(n),this.get$().trigger(n,e),n}};exports.extend=function(t){n(t,e)}}),define("cc/util/input",["require","exports","module","../function/guid","../function/around","../function/supportInput"],function(require,exports){"use strict";function n(n){var t="."+e();n.data(o,t).on("input"+t,function(t){t.type=u,n.trigger(t)})}function t(n){var t=n.val(),r=!1,c="."+e();n.data(o,c).on("propertychange"+c,function(e){if(r)return void(r=!1);if("value"===e.originalEvent.propertyName){var i=n.val();if(i!==t)if(e.type=u,n.trigger(e),!e.isDefaultPrevented())t=i}}),i(n,"val",function(){if(0!==arguments.length)r=!0})}var e=require("../function/guid"),i=require("../function/around"),r=require("../function/supportInput"),o="cc-util-input",u="cc-input";exports.INPUT=u,exports.init=r()?n:t,exports.dispose=function(n){var t=n.data(o);if(t)n.removeData(o).off(t)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function n(n,t,e,i,r){return function(c,f,a){var s=this;if($.isPlainObject(c))return a=f,void $.each(c,function(n,t){s[e](n,t,a)});a=a||{};var p=s[i](c),d=s.constructor[n+"Validator"];if(d)if($.isFunction(d[c]))f=d[c].call(s,f,a);if($.isFunction(r))f=r(s,f,a);if(p!==f||a.force)if(s[t][c]=f,!a.silent){var h={};o(h,a),h.newValue=f,h.oldValue=p;var v={};v[c]=h;var y=function(n){if(n&&n[c])s.execute(n[c],[f,p,h])};if(y(s.inner("watchSync")),y(s.option("watchSync")),a.sync)return y(s.constructor[n+"Updater"]),y(s.option("watch")),void s.emit(n+"change",v);var m=s.inner(n+"Changes");if(!m)m={},s.inner(n+"Changes",m);if($.extend(m,v),!s.inner(l))s.inner(l,u(function(){s.sync(l)}))}}}function t(){this.error("initStruct() can just call one time.")}function e(n,t,e,i,r){var o,u="before"===i?"_"+t:t+"_",c=n[u];if($.isFunction(c))if(o=c.apply(n,e),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var f=!1;if(o&&o.dispatch)f=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+t,n.emit(r,o),f)n.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),c=require("../function/toBoolean"),f=require("../function/createEvent"),a=require("../function/replaceWith"),s=(require("../function/offsetParent"),require("./event")),p={},l="__update_async__",d={},h={initStruct:function(){var n=this,e=n.option("mainElement"),i=n.option("mainTemplate");if("string"===$.type(i)){var r=n.option("share"),o=n.type+i;if(r)e=d[o];var u;if(!e){if(u=$(i),r)d[o]=u}else if(n.option("replace"))a(e,u=$(i));else e.html(i);if(u)e=u,n.option("mainElement",e)}var c=n.option("parentSelector");if(c&&!e.parent().is(c))e.appendTo(c);n.initStruct=t},warn:function(n){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,n].join(" "))},error:function(n){throw new Error(["[CC error]",this.type,n].join(" "))},live:function(n,t,e){var i=this,r=i.inner("main");if(r)r.on(n+i.namespace(),t,e);return i},emit:function(n,t){var e=this,i=e.option("context")||e;n=f(n),n.cc=i;var r=[n];if($.isPlainObject(t))r.push(t);n.type=n.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u="on"+n.type;if(!n.isPropagationStopped()&&i.execute(u,r)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+"_",r),n},dispatch:function(n,t){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var e=$.Event(n);if(e.type="dispatch",this.emit(e,t),e.isPropagationStopped())n.preventDefault(),n.stopPropagation()}},before:function(n,t){return this.on("before"+n.toLowerCase(),t)},after:function(n,t){return this.on("after"+n.toLowerCase(),t)},find:function(n){var t=this.inner("main");if(t){var e=t.find(n);if(e.length)return e}},appendTo:function(n){var t=this.inner("main");if(t)t.appendTo(n)},prependTo:function(n){var t=this.inner("main");if(t)t.prependTo(n)},execute:function(n,t){var e=this,i=n;if("string"===$.type(n))i=e.option(n);if($.isFunction(i)){var r=e.option("context")||e;if($.isArray(t))return i.apply(r,t);else return i.call(r,t)}},renderWith:function(n,t,e){var i=this;if(!t)if(t=i.option("renderTemplate"),!t)t=i.option("mainTemplate");if(!e)e=i.option("mainElement");var r=i.option("renderSelector");if(r)e=e.find(r);var o;if($.isPlainObject(n)||$.isArray(n))o=i.execute("render",[n,t]);else if("string"===$.type(n))o=n;e.html(o)},namespace:function(){return"."+this.guid},option:function(n,t){var e=this;if(1===arguments.length&&"string"===$.type(n))return e.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,t){e.option(n,t)});e.options[n]=t}},inner:function(n,t){var e=this,i=e.inners||{};if(1===arguments.length&&"string"===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,t){e.inner(n,t)});i[n]=t}},is:function(n){return this.states[n]},state:n("state","states","state","is",function(n,t){return c(t,!1)}),get:function(n){return this.properties[n]},set:n("property","properties","set","get")},v={sync:function(){var n=this,t=function(t,e,i){$.each(t,function(r,o){return n.execute(e[r],[o.newValue,o.oldValue,i?t:o])})};if($.each(["property","state"],function(e,i){var r=n.inner(i+"Changes");if(r){n.inner(i+"Changes",null);var o=n.constructor[i+"Updater"];if(o)t(r,o,!0);var u=n.option("watch");if(u)t(r,u);n.emit(i+"change",r)}}),arguments[0]!==l)n.execute(n.inner(l));n.inner(l,!1)},_sync:function(){if(!this.inner(l))return!1;else return void 0},_init:function(){var n="initCalled";if(this.is(n))return!1;else return void this.state(n,!0)},_dispose:function(){var n="disposeCalled";if(this.is(n))return!1;else return void this.state(n,!0)}};exports.extend=function(n,t){o(n,v),$.each(n,function(i,o){var u=i.indexOf("_");if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var c=function(n){return e(this,i,arguments,"before",n)},f=function(n){var t=this,r=arguments,u=function(){return e(t,i,r,"after",n)};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u)}u()};r(n,i,c,f)}}),o(n,h),s.extend(n)},exports.init=function(n,t){if(!t)t={};return o(t,n.constructor.defaultOptions),t.onafterinit_=function(){n.state("inited",!0)},t.onafterdispose_=function(){n.state("disposed",!0),n.off();var t=n.inner("main");if(n.option("removeOnDispose")&&t)t.remove();u(function(){delete p[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null})},p[n.guid=i()]=n,n.properties={},n.options=t,n.states={},n.inners={},n.init(),n},exports.dispose=function(n){n.sync();var t=n.inner("main")||n.option("mainElement");if(t)t.off(n.namespace())}}),define("cc/helper/Keyboard",["require","exports","module","../function/split","../util/life","../util/keyboard"],function(require){"use strict";function n(n){i.init(this,n)}function t(n){var t=[];return $.each(n,function(n,i){var o=[],u="plus",c=e(n.replace(/\$\+/g,u),"+");if($.each(r.combinationKey,function(n){if($.inArray(n,c)<0)c.push("!"+n)}),$.each(c,function(n,t){var e=0===t.indexOf("!");if(e)t=t.substr(1);if(t===u)t="$+";if(r.combinationKey[t])o.push((e?"!":"")+"e."+t+"Key");else if(r[t])o.push("e.keyCode==="+r[t]);else return o.length=0,!1}),o.length>0)t.push({test:new Function("e","return "+o.join("&")),handler:i})}),t}var e=require("../function/split"),i=require("../util/life"),r=require("../util/keyboard"),o=n.prototype;return o.type="Keyboard",o.init=function(){var n=this,e=n.option("shortcut");if($.isPlainObject(e))e=t(e);var i,r=0,o=1,u=function(){return r>o},c=n.namespace();n.option("mainElement").on("keydown"+c,function(t){var c=t.keyCode;if(i===c&&r>0){if(r===o)n.emit("beforelongpress",{keyCode:c},!0);r++}else i=c,r=1;if(n.dispatch(n.emit(t)),e){var f={isLongPress:u()},a=[t,f];$.each(e,function(e,i){if(i.test(t))n.execute(i.handler,a)})}}).on("keyup"+c,function(t){if(u())n.emit("afterlongpress",{keyCode:t.keyCode},!0);r=0,i=null,n.dispatch(n.emit(t))})},o.dispose=function(){i.dispose(this)},i.extend(o),n}),define("cc/helper/Input",["require","exports","module","../function/toString","../util/life","../util/input","../util/keyboard","./Keyboard"],function(require){"use strict";function n(n){e.init(this,n)}var t=require("../function/toString"),e=require("../util/life"),i=require("../util/input"),r=require("../util/keyboard"),o=require("./Keyboard"),u=n.prototype;return u.type="Input",u.init=function(){var n=this,t=n.option("mainElement");i.init(t);var e,u=new o({mainElement:t,shortcut:n.option("shortcut")}),c=function(e){if("string"!==$.type(e))e=t.val();n.set("value",e)};u.on("dispatch",function(i,o){var u=i.originalEvent;switch(u.type){case"beforelongpress":e=!0;break;case"afterlongpress":e=!1;var f=o.keyCode;if(r.isCharKey(f)||r.isDeleteKey()||t.is("textarea")&&f===r.enter)c()}n.dispatch(n.emit(u,o),o)});var f=n.namespace();t.on("blur"+f,c).on(i.INPUT+f,function(){if(!e||!n.option("silentOnLongPress"))c()}),n.inner({keyboard:u,main:t}),c(n.option("value"))},u.dispose=function(){var n=this;e.dispose(n),i.dispose(n.inner("main")),n.inner("keyboard").dispose()},e.extend(u),n.propertyUpdater={value:function(n,t,e){var i=this.inner("main");if(i.val()!==n||e.value.force)i.val(n)}},n.propertyValidator={value:function(n){return t(n)}},n});