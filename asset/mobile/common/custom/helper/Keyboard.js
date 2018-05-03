define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}),define("cc/util/keyboard",["require","exports","module"],function(require,exports){"use strict";function n(n){var e={};return $.each(n,function(n,t){e[t]=n}),e}var e={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"`":192,"-":173,"=":61,"[":219,"]":221,"\\":220,";":59,"'":222,",":188,".":190,"/":191,$0:96,$1:97,$2:98,$3:99,$4:100,$5:101,$6:102,$7:103,$8:104,$9:105,"$.":110,"$+":107,"$-":109,"$*":106,"$/":111,space:32,tab:9},t={backspace:8,"delete":46},i={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,enter:13,esc:27,capslock:20,insert:45,home:36,end:35,pageup:33,pagedown:34,left:37,right:39,up:38,down:40},r={shift:16,ctrl:17,meta:91,alt:18};$.extend(exports,e,t,i,r),exports.charKey=e,exports.deleteKey=t,exports.functionKey=i,exports.combinationKey=r,exports.isCharKey=function(t){return t in n(e)},exports.isDeleteKey=function(e){return e in n(t)},exports.isFunctionKey=function(e){return e in n(i)},exports.isCombinationKey=function(e){return e in n(r)}}),define("cc/function/split",["require","exports","module"],function(){"use strict";return function(n,e){var t=[];if("number"===$.type(n))n=""+n;if(n&&"string"===$.type(n))$.each(n.split(e),function(n,e){if(e=$.trim(e))t.push(e)});return t}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function n(n){return n.is("body")||"static"!==n.css("position")}return function(e){if(e.is("body"))return e;for(var t=e.parent();!n(t);)t=t.parent();return t}}),define("cc/function/guid",["require","exports","module"],function(){var n=0;return function(){return"cc_"+n++}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(n,e,t,i){var r="string"===$.type(e),o=r?n[e]:n;if(!r)i=t,t=e;var u=function(){var n,e=$.makeArray(arguments);if($.isFunction(t))n=t.apply(this,e);if(n!==!1){if($.isFunction(o))n=o.apply(this,e);if($.isFunction(i)){e.push(n);var r=i.apply(this,e);if("undefined"!==$.type(r))n=r}return n}};return r?n[e]=u:u}}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(n,e){if($.isPlainObject(e))$.each(e,function(e,t){if(!(e in n))n[e]=t})}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(n,e){n=n[0],e=e[0],n.parentNode.replaceChild(e,n)}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(n){var e=setTimeout(n,0);return function(){clearTimeout(e)}}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(n,e){if("boolean"!==$.type(n)){if(1===arguments.length)e=!!n;n=e}return n}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(n){if(n&&!n[$.expando])n="string"===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event()}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var n=require("../function/extend"),e=require("../function/createEvent"),t={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$},on:function(n,e,t){return this.get$().on(n,e,t),this},once:function(n,e,t){return this.get$().one(n,e,t),this},off:function(n,e){return this.get$().off(n,e),this},emit:function(n,t){return n=e(n),this.get$().trigger(n,t),n}};exports.extend=function(e){n(e,t)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function n(n,e,t,i,r){return function(c,f,s){var a=this;if($.isPlainObject(c))return s=f,void $.each(c,function(n,e){a[t](n,e,s)});s=s||{};var p=a[i](c),d=a.constructor[n+"Validator"];if(d)if($.isFunction(d[c]))f=d[c].call(a,f,s);if($.isFunction(r))f=r(a,f,s);if(p!==f||s.force)if(a[e][c]=f,!s.silent){var h={};o(h,s),h.newValue=f,h.oldValue=p;var v={};v[c]=h;var m=function(n){if(n&&n[c])a.execute(n[c],[f,p,h])};if(m(a.inner("watchSync")),m(a.option("watchSync")),s.sync)return m(a.constructor[n+"Updater"]),m(a.option("watch")),void a.emit(n+"change",v);var y=a.inner(n+"Changes");if(!y)y={},a.inner(n+"Changes",y);if($.extend(y,v),!a.inner(l))a.inner(l,u(function(){a.sync(l)}))}}}function e(){this.error("initStruct() can just call one time.")}function t(n,e,t,i,r){var o,u="before"===i?"_"+e:e+"_",c=n[u];if($.isFunction(c))if(o=c.apply(n,t),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var f=!1;if(o&&o.dispatch)f=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+e,n.emit(r,o),f)n.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),c=require("../function/toBoolean"),f=require("../function/createEvent"),s=require("../function/replaceWith"),a=(require("../function/offsetParent"),require("./event")),p={},l="__update_async__",d={},h={initStruct:function(){var n=this,t=n.option("mainElement"),i=n.option("mainTemplate");if("string"===$.type(i)){var r=n.option("share"),o=n.type+i;if(r)t=d[o];var u;if(!t){if(u=$(i),r)d[o]=u}else if(n.option("replace"))s(t,u=$(i));else t.html(i);if(u)t=u,n.option("mainElement",t)}var c=n.option("parentSelector");if(c&&!t.parent().is(c))t.appendTo(c);n.initStruct=e},warn:function(n){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,n].join(" "))},error:function(n){throw new Error(["[CC error]",this.type,n].join(" "))},live:function(n,e,t){var i=this,r=i.inner("main");if(r)r.on(n+i.namespace(),e,t);return i},emit:function(n,e){var t=this,i=t.option("context")||t;n=f(n),n.cc=i;var r=[n];if($.isPlainObject(e))r.push(e);n.type=n.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u="on"+n.type;if(!n.isPropagationStopped()&&i.execute(u,r)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+"_",r),n},dispatch:function(n,e){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(n);if(t.type="dispatch",this.emit(t,e),t.isPropagationStopped())n.preventDefault(),n.stopPropagation()}},before:function(n,e){return this.on("before"+n.toLowerCase(),e)},after:function(n,e){return this.on("after"+n.toLowerCase(),e)},find:function(n){var e=this.inner("main");if(e){var t=e.find(n);if(t.length)return t}},appendTo:function(n){var e=this.inner("main");if(e)e.appendTo(n)},prependTo:function(n){var e=this.inner("main");if(e)e.prependTo(n)},execute:function(n,e){var t=this,i=n;if("string"===$.type(n))i=t.option(n);if($.isFunction(i)){var r=t.option("context")||t;if($.isArray(e))return i.apply(r,e);else return i.call(r,e)}},renderWith:function(n,e,t){var i=this;if(!e)if(e=i.option("renderTemplate"),!e)e=i.option("mainTemplate");if(!t)t=i.option("mainElement");var r=i.option("renderSelector");if(r)t=t.find(r);var o;if($.isPlainObject(n)||$.isArray(n))o=i.execute("render",[n,e]);else if("string"===$.type(n))o=n;t.html(o)},namespace:function(){return"."+this.guid},option:function(n,e){var t=this;if(1===arguments.length&&"string"===$.type(n))return t.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.option(n,e)});t.options[n]=e}},inner:function(n,e){var t=this,i=t.inners||{};if(1===arguments.length&&"string"===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.inner(n,e)});i[n]=e}},is:function(n){return this.states[n]},state:n("state","states","state","is",function(n,e){return c(e,!1)}),get:function(n){return this.properties[n]},set:n("property","properties","set","get")},v={sync:function(){var n=this,e=function(e,t,i){$.each(e,function(r,o){return n.execute(t[r],[o.newValue,o.oldValue,i?e:o])})};if($.each(["property","state"],function(t,i){var r=n.inner(i+"Changes");if(r){n.inner(i+"Changes",null);var o=n.constructor[i+"Updater"];if(o)e(r,o,!0);var u=n.option("watch");if(u)e(r,u);n.emit(i+"change",r)}}),arguments[0]!==l)n.execute(n.inner(l));n.inner(l,!1)},_sync:function(){if(!this.inner(l))return!1;else return void 0},_init:function(){var n="initCalled";if(this.is(n))return!1;else return void this.state(n,!0)},_dispose:function(){var n="disposeCalled";if(this.is(n))return!1;else return void this.state(n,!0)}};exports.extend=function(n,e){o(n,v),$.each(n,function(i,o){var u=i.indexOf("_");if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var c=function(n){return t(this,i,arguments,"before",n)},f=function(n){var e=this,r=arguments,u=function(){return t(e,i,r,"after",n)};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u)}u()};r(n,i,c,f)}}),o(n,h),a.extend(n)},exports.init=function(n,e){if(!e)e={};return o(e,n.constructor.defaultOptions),e.onafterinit_=function(){n.state("inited",!0)},e.onafterdispose_=function(){n.state("disposed",!0),n.off();var e=n.inner("main");if(n.option("removeOnDispose")&&e)e.remove();u(function(){delete p[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null})},p[n.guid=i()]=n,n.properties={},n.options=e,n.states={},n.inners={},n.init(),n},exports.dispose=function(n){n.sync();var e=n.inner("main")||n.option("mainElement");if(e)e.off(n.namespace())}}),define("cc/helper/Keyboard",["require","exports","module","../function/split","../util/life","../util/keyboard"],function(require){"use strict";function n(n){i.init(this,n)}function e(n){var e=[];return $.each(n,function(n,i){var o=[],u="plus",c=t(n.replace(/\$\+/g,u),"+");if($.each(r.combinationKey,function(n){if($.inArray(n,c)<0)c.push("!"+n)}),$.each(c,function(n,e){var t=0===e.indexOf("!");if(t)e=e.substr(1);if(e===u)e="$+";if(r.combinationKey[e])o.push((t?"!":"")+"e."+e+"Key");else if(r[e])o.push("e.keyCode==="+r[e]);else return o.length=0,!1}),o.length>0)e.push({test:new Function("e","return "+o.join("&")),handler:i})}),e}var t=require("../function/split"),i=require("../util/life"),r=require("../util/keyboard"),o=n.prototype;return o.type="Keyboard",o.init=function(){var n=this,t=n.option("shortcut");if($.isPlainObject(t))t=e(t);var i,r=0,o=1,u=function(){return r>o},c=n.namespace();n.option("mainElement").on("keydown"+c,function(e){var c=e.keyCode;if(i===c&&r>0){if(r===o)n.emit("beforelongpress",{keyCode:c},!0);r++}else i=c,r=1;if(n.dispatch(n.emit(e)),t){var f={isLongPress:u()},s=[e,f];$.each(t,function(t,i){if(i.test(e))n.execute(i.handler,s)})}}).on("keyup"+c,function(e){if(u())n.emit("afterlongpress",{keyCode:e.keyCode},!0);r=0,i=null,n.dispatch(n.emit(e))})},o.dispose=function(){i.dispose(this)},i.extend(o),n}),define("mobile/common/custom/helper/Keyboard",["require","exports","module","cc/helper/Keyboard"],function(require){"use strict";var n=require("cc/helper/Keyboard");return n.defaultOption={},n});