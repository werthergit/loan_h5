define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(n,e){if($.isPlainObject(e))$.each(e,function(e,t){if(!(e in n))n[e]=t})}}),define("cc/util/instance",["require","exports","module"],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body)}),define("cc/util/Timer",["require","exports","module"],function(){"use strict";function n(n){$.extend(this,n)}var e=n.prototype;return e.start=function(){var n=this;n.stop();var e=n.timeout,t=n.interval,i=function(){if(n.count++,n.task()!==!1)n.timer=setTimeout(i,t);else n.stop()};if(null==e)e=t;n.timer=setTimeout(i,e)},e.stop=function(){var n=this;if(n.timer)clearTimeout(n.timer),n.timer=null,n.count=0},e.dispose=function(){var n=this;n.stop(),n.task=n.timeout=n.interval=null},n}),define("cc/function/decimalLength",["require","exports","module"],function(){"use strict";return function(n){var e=(""+n).split(".");return 2===e.length?e[1].length:0}}),define("cc/function/float2Int",["require","exports","module"],function(){"use strict";return function(n,e){var t,i=(""+n).split(".");if(e>=0);else e=0;if(1===i.length)t=n+new Array(e+1).join("0");else e=Math.max(0,e-i[1].length),t=i.join("")+new Array(e+1).join("0");return+t}}),define("cc/util/keyboard",["require","exports","module"],function(require,exports){"use strict";function n(n){var e={};return $.each(n,function(n,t){e[t]=n}),e}var e={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"`":192,"-":173,"=":61,"[":219,"]":221,"\\":220,";":59,"'":222,",":188,".":190,"/":191,$0:96,$1:97,$2:98,$3:99,$4:100,$5:101,$6:102,$7:103,$8:104,$9:105,"$.":110,"$+":107,"$-":109,"$*":106,"$/":111,space:32,tab:9},t={backspace:8,"delete":46},i={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,enter:13,esc:27,capslock:20,insert:45,home:36,end:35,pageup:33,pagedown:34,left:37,right:39,up:38,down:40},r={shift:16,ctrl:17,meta:91,alt:18};$.extend(exports,e,t,i,r),exports.charKey=e,exports.deleteKey=t,exports.functionKey=i,exports.combinationKey=r,exports.isCharKey=function(t){return t in n(e)},exports.isDeleteKey=function(e){return e in n(t)},exports.isFunctionKey=function(e){return e in n(i)},exports.isCombinationKey=function(e){return e in n(r)}}),define("cc/function/toNumber",["require","exports","module"],function(){"use strict";var n={"int":parseInt,"float":parseFloat};return function(e,t,i){if("number"!==$.type(e)){var r=n[i];if(r)e=r(e,10);else if($.isNumeric(e))e=+e;else e=0/0}return isNaN(e)?t:e}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function n(n){return n.is("body")||"static"!==n.css("position")}return function(e){if(e.is("body"))return e;for(var t=e.parent();!n(t);)t=t.parent();return t}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(n,e){n=n[0],e=e[0],n.parentNode.replaceChild(e,n)}}),define("cc/function/split",["require","exports","module"],function(){"use strict";return function(n,e){var t=[];if("number"===$.type(n))n=""+n;if(n&&"string"===$.type(n))$.each(n.split(e),function(n,e){if(e=$.trim(e))t.push(e)});return t}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(n){if(n&&!n[$.expando])n="string"===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event()}}),define("cc/function/guid",["require","exports","module"],function(){var n=0;return function(){return"cc_"+n++}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(n,e,t,i){var r="string"===$.type(e),o=r?n[e]:n;if(!r)i=t,t=e;var u=function(){var n,e=$.makeArray(arguments);if($.isFunction(t))n=t.apply(this,e);if(n!==!1){if($.isFunction(o))n=o.apply(this,e);if($.isFunction(i)){e.push(n);var r=i.apply(this,e);if("undefined"!==$.type(r))n=r}return n}};return r?n[e]=u:u}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(n,e){if("boolean"!==$.type(n)){if(1===arguments.length)e=!!n;n=e}return n}}),define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(n){var e=setTimeout(n,0);return function(){clearTimeout(e)}}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var n=require("../function/extend"),e=require("../function/createEvent"),t={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$},on:function(n,e,t){return this.get$().on(n,e,t),this},once:function(n,e,t){return this.get$().one(n,e,t),this},off:function(n,e){return this.get$().off(n,e),this},emit:function(n,t){return n=e(n),this.get$().trigger(n,t),n}};exports.extend=function(e){n(e,t)}}),define("cc/function/divide",["require","exports","module","./decimalLength","./float2Int"],function(require){"use strict";var n=require("./decimalLength"),e=require("./float2Int");return function(t,i){var r=Math.max(n(t),n(i));return t=e(t,r),i=e(i,r),t/i}}),define("cc/function/plus",["require","exports","module","./decimalLength","./float2Int"],function(require){"use strict";var n=require("./decimalLength"),e=require("./float2Int");return function(t,i){var r=Math.max(n(t),n(i));return t=e(t,r),i=e(i,r),(t+i)/Math.pow(10,r)}}),define("cc/function/minus",["require","exports","module","./decimalLength","./float2Int"],function(require){"use strict";var n=require("./decimalLength"),e=require("./float2Int");return function(t,i){var r=Math.max(n(t),n(i));return t=e(t,r),i=e(i,r),(t-i)/Math.pow(10,r)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function n(n,e,t,i,r){return function(s,c,a){var f=this;if($.isPlainObject(s))return a=c,void $.each(s,function(n,e){f[t](n,e,a)});a=a||{};var p=f[i](s),d=f.constructor[n+"Validator"];if(d)if($.isFunction(d[s]))c=d[s].call(f,c,a);if($.isFunction(r))c=r(f,c,a);if(p!==c||a.force)if(f[e][s]=c,!a.silent){var m={};o(m,a),m.newValue=c,m.oldValue=p;var h={};h[s]=m;var v=function(n){if(n&&n[s])f.execute(n[s],[c,p,m])};if(v(f.inner("watchSync")),v(f.option("watchSync")),a.sync)return v(f.constructor[n+"Updater"]),v(f.option("watch")),void f.emit(n+"change",h);var x=f.inner(n+"Changes");if(!x)x={},f.inner(n+"Changes",x);if($.extend(x,h),!f.inner(l))f.inner(l,u(function(){f.sync(l)}))}}}function e(){this.error("initStruct() can just call one time.")}function t(n,e,t,i,r){var o,u="before"===i?"_"+e:e+"_",s=n[u];if($.isFunction(s))if(o=s.apply(n,t),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var c=!1;if(o&&o.dispatch)c=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+e,n.emit(r,o),c)n.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),s=require("../function/toBoolean"),c=require("../function/createEvent"),a=require("../function/replaceWith"),f=(require("../function/offsetParent"),require("./event")),p={},l="__update_async__",d={},m={initStruct:function(){var n=this,t=n.option("mainElement"),i=n.option("mainTemplate");if("string"===$.type(i)){var r=n.option("share"),o=n.type+i;if(r)t=d[o];var u;if(!t){if(u=$(i),r)d[o]=u}else if(n.option("replace"))a(t,u=$(i));else t.html(i);if(u)t=u,n.option("mainElement",t)}var s=n.option("parentSelector");if(s&&!t.parent().is(s))t.appendTo(s);n.initStruct=e},warn:function(n){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,n].join(" "))},error:function(n){throw new Error(["[CC error]",this.type,n].join(" "))},live:function(n,e,t){var i=this,r=i.inner("main");if(r)r.on(n+i.namespace(),e,t);return i},emit:function(n,e){var t=this,i=t.option("context")||t;n=c(n),n.cc=i;var r=[n];if($.isPlainObject(e))r.push(e);n.type=n.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u="on"+n.type;if(!n.isPropagationStopped()&&i.execute(u,r)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+"_",r),n},dispatch:function(n,e){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(n);if(t.type="dispatch",this.emit(t,e),t.isPropagationStopped())n.preventDefault(),n.stopPropagation()}},before:function(n,e){return this.on("before"+n.toLowerCase(),e)},after:function(n,e){return this.on("after"+n.toLowerCase(),e)},find:function(n){var e=this.inner("main");if(e){var t=e.find(n);if(t.length)return t}},appendTo:function(n){var e=this.inner("main");if(e)e.appendTo(n)},prependTo:function(n){var e=this.inner("main");if(e)e.prependTo(n)},execute:function(n,e){var t=this,i=n;if("string"===$.type(n))i=t.option(n);if($.isFunction(i)){var r=t.option("context")||t;if($.isArray(e))return i.apply(r,e);else return i.call(r,e)}},renderWith:function(n,e,t){var i=this;if(!e)if(e=i.option("renderTemplate"),!e)e=i.option("mainTemplate");if(!t)t=i.option("mainElement");var r=i.option("renderSelector");if(r)t=t.find(r);var o;if($.isPlainObject(n)||$.isArray(n))o=i.execute("render",[n,e]);else if("string"===$.type(n))o=n;t.html(o)},namespace:function(){return"."+this.guid},option:function(n,e){var t=this;if(1===arguments.length&&"string"===$.type(n))return t.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.option(n,e)});t.options[n]=e}},inner:function(n,e){var t=this,i=t.inners||{};if(1===arguments.length&&"string"===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,e){t.inner(n,e)});i[n]=e}},is:function(n){return this.states[n]},state:n("state","states","state","is",function(n,e){return s(e,!1)}),get:function(n){return this.properties[n]},set:n("property","properties","set","get")},h={sync:function(){var n=this,e=function(e,t,i){$.each(e,function(r,o){return n.execute(t[r],[o.newValue,o.oldValue,i?e:o])})};if($.each(["property","state"],function(t,i){var r=n.inner(i+"Changes");if(r){n.inner(i+"Changes",null);var o=n.constructor[i+"Updater"];if(o)e(r,o,!0);var u=n.option("watch");if(u)e(r,u);n.emit(i+"change",r)}}),arguments[0]!==l)n.execute(n.inner(l));n.inner(l,!1)},_sync:function(){if(!this.inner(l))return!1;else return void 0},_init:function(){var n="initCalled";if(this.is(n))return!1;else return void this.state(n,!0)},_dispose:function(){var n="disposeCalled";if(this.is(n))return!1;else return void this.state(n,!0)}};exports.extend=function(n,e){o(n,h),$.each(n,function(i,o){var u=i.indexOf("_");if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var s=function(n){return t(this,i,arguments,"before",n)},c=function(n){var e=this,r=arguments,u=function(){return t(e,i,r,"after",n)};if(o.length+1===r.length){var s=r[r.length-1];if(s&&$.isFunction(s.then))return void s.then(u)}u()};r(n,i,s,c)}}),o(n,m),f.extend(n)},exports.init=function(n,e){if(!e)e={};return o(e,n.constructor.defaultOptions),e.onafterinit_=function(){n.state("inited",!0)},e.onafterdispose_=function(){n.state("disposed",!0),n.off();var e=n.inner("main");if(n.option("removeOnDispose")&&e)e.remove();u(function(){delete p[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null})},p[n.guid=i()]=n,n.properties={},n.options=e,n.states={},n.inners={},n.init(),n},exports.dispose=function(n){n.sync();var e=n.inner("main")||n.option("mainElement");if(e)e.off(n.namespace())}}),define("cc/helper/Keyboard",["require","exports","module","../function/split","../util/life","../util/keyboard"],function(require){"use strict";function n(n){i.init(this,n)}function e(n){var e=[];return $.each(n,function(n,i){var o=[],u="plus",s=t(n.replace(/\$\+/g,u),"+");if($.each(r.combinationKey,function(n){if($.inArray(n,s)<0)s.push("!"+n)}),$.each(s,function(n,e){var t=0===e.indexOf("!");if(t)e=e.substr(1);if(e===u)e="$+";if(r.combinationKey[e])o.push((t?"!":"")+"e."+e+"Key");else if(r[e])o.push("e.keyCode==="+r[e]);else return o.length=0,!1}),o.length>0)e.push({test:new Function("e","return "+o.join("&")),handler:i})}),e}var t=require("../function/split"),i=require("../util/life"),r=require("../util/keyboard"),o=n.prototype;return o.type="Keyboard",o.init=function(){var n=this,t=n.option("shortcut");if($.isPlainObject(t))t=e(t);var i,r=0,o=1,u=function(){return r>o},s=n.namespace();n.option("mainElement").on("keydown"+s,function(e){var s=e.keyCode;if(i===s&&r>0){if(r===o)n.emit("beforelongpress",{keyCode:s},!0);r++}else i=s,r=1;if(n.dispatch(n.emit(e)),t){var c={isLongPress:u()},a=[e,c];$.each(t,function(t,i){if(i.test(e))n.execute(i.handler,a)})}}).on("keyup"+s,function(e){if(u())n.emit("afterlongpress",{keyCode:e.keyCode},!0);r=0,i=null,n.dispatch(n.emit(e))})},o.dispose=function(){i.dispose(this)},i.extend(o),n}),define("cc/helper/Iterator",["require","exports","module","../function/plus","../function/minus","../function/toNumber","../util/Timer","../util/life"],function(require){"use strict";function n(n){o.init(this,n)}var e=require("../function/plus"),t=require("../function/minus"),i=require("../function/toNumber"),r=require("../util/Timer"),o=require("../util/life"),u=n.prototype;return u.init=function(){var n=this;n.set({index:n.option("index"),minIndex:n.option("minIndex"),maxIndex:n.option("maxIndex")})},u.start=function(n){var e=this,t=e.inner("timer");if(t)t.dispose();var i=n?e.prev:e.next,o=e.option("timeout"),u=e.option("interval");if("number"!==$.type(u))e.error("interval must be a number.");t=new r({task:$.proxy(i,e),timeout:o,interval:u}),t.start(),e.inner("timer",t)},u.pause=function(){this.inner("timer").dispose(),this.inner("timer",null)},u._pause=function(){if(!this.inner("timer"))return!1;else return void 0},u.stop=function(){var n=this;n.pause(),n.set("index",n.option("defaultIndex"))},u.prev=function(){var n=this,e=t(n.get("index"),n.option("step")),r=n.get("minIndex"),o=n.get("maxIndex");if(!$.isNumeric(e)||r>e||e>o)e=o;n.set("index",i(e,0))},u._prev=function(){var n=this;if(!n.option("loop")&&t(n.get("index"),n.option("step"))<n.get("minIndex"))return!1;else return void 0},u.next=function(){var n=this,t=e(n.get("index"),n.option("step")),r=n.get("minIndex"),o=n.get("maxIndex");if(!$.isNumeric(t)||t>o||r>t)t=r;n.set("index",i(t,0))},u._next=function(){var n=this;if(!n.option("loop")&&e(n.get("index"),n.option("step"))>n.get("maxIndex"))return!1;else return void 0},u.dispose=u.stop,o.extend(u),n.propertyValidator={index:function(n){if(n=i(n,null),null==n)n=this.option("defaultIndex");return n}},n}),define("cc/helper/KeyboardIterator",["require","exports","module","./Keyboard","./Iterator","../util/life","../util/keyboard"],function(require){"use strict";function n(n){i.init(this,n)}var e=require("./Keyboard"),t=require("./Iterator"),i=require("../util/life"),r=require("../util/keyboard"),o=n.prototype;o.init=function(){var n=this,i=new t({index:n.option("index"),minIndex:n.option("minIndex"),maxIndex:n.option("maxIndex"),defaultIndex:n.option("defaultIndex"),timeout:n.option("timeout"),interval:n.option("interval"),step:n.option("step"),loop:n.option("loop"),watchSync:{index:function(e){n.set("index",e)},minIndex:function(e){n.set("minIndex",e)},maxIndex:function(e){n.set("maxIndex",e)}}}),o=function(e,t){n.emit(e,t)};$.each(u,function(n,e){i.before(e,o).after(e,o)});var s=n.option("prevKey"),c=n.option("nextKey"),a={};a[s]=function(n,e){if(!e.isLongPress)i.prev()},a[c]=function(n,e){if(!e.isLongPress)i.next()};var f=n.option("mainElement"),p=new e({mainElement:f,shortcut:a});if(n.option("autoOnLongPress")){var l=!1;p.before("longpress",function(e,t){var i,o=t.keyCode;if(o===r[s])i=!0;else if(o===r[c])i=!1;if(null!=i)l=!0,n.start(i)}).after("longpress",function(){if(l)l=!1,n.pause()})}if(f.is('input[type="text"]'))p.on("keydown",function(n){if(n.keyCode===r.up)return!1;else return void 0});n.inner({iterator:i,keyboard:p})},o.start=function(n){this.inner("iterator").start(n)},o.pause=function(){this.inner("iterator").pause()},o.stop=function(){this.inner("iterator").stop()},o.prev=function(){this.inner("iterator").prev()},o.next=function(){this.inner("iterator").next()},o.dispose=function(){this.inner("iterator").dispose(),this.inner("keyboard").dispose()};var u=["start","pause","stop","prev","next"];return i.extend(o,u),n.propertyUpdater={index:function(n){this.inner("iterator").set("index",n)},minIndex:function(n){this.inner("iterator").set("minIndex",n)},maxIndex:function(n){this.inner("iterator").set("maxIndex",n)}},n}),define("cc/ui/SpinBox",["require","exports","module","../function/minus","../function/divide","../function/toNumber","../helper/KeyboardIterator","../util/life","../util/instance"],function(require){"use strict";function n(n){r.init(this,n)}var e=require("../function/minus"),t=(require("../function/divide"),require("../function/toNumber")),i=require("../helper/KeyboardIterator"),r=require("../util/life"),o=require("../util/instance").document,u=n.prototype;return u.type="SpinBox",u.init=function(){var n=this;n.initStruct();var e=n.option("mainElement"),t=e.find(n.option("inputSelector")),r=new i({mainElement:t,index:n.option("value"),minIndex:n.option("minValue"),maxIndex:n.option("maxValue"),timeout:n.option("timeout"),interval:n.option("interval"),autoOnLongPress:!0,step:n.option("step"),prevKey:"down",nextKey:"up",watchSync:{index:function(e){n.set("value",e,{action:"press"})},minIndex:function(e){n.set("minValue",e)},maxIndex:function(e){n.set("maxValue",e)}}}),u=n.namespace(),s=n.option("upSelector"),c=n.option("downSelector"),a="mousedown"+u,f="mouseup"+u,p="focusout"+u,l=function(){r.pause(),o.off(u)};e.on(a,s,function(){r.next(),r.start(!1),o.on(f,l)}).on(a,c,function(){r.prev(),r.start(!0),o.on(f,l)}).on(p,function(){var e=$.trim(t.val());n.set("value",e,{action:"blur"})}),n.inner({main:e,input:t,iterator:r})},u.dispose=function(){var n=this;r.dispose(n),n.inner("iterator").dispose(),o.off(n.namespace())},r.extend(u),n.propertyUpdater={value:function(n){this.inner("input").val(n),this.inner("iterator").set("index",n)},minValue:function(n){this.inner("iterator").set("minIndex",n)},maxValue:function(n){this.inner("iterator").set("maxIndex",n)}},n.propertyValidator={value:function(n,i){var r=n,o=!1,u=this,s=u.get("minValue"),c=u.get("maxValue");if(n=t(n,""),n>=s&&c>=n){var a=u.option("step");if(e(n,s)%a===0)o=!0}if(!o){var f=u.option("defaultValue");if("number"===$.type(f))n=f,i.force=!0;else n=r}return n},minValue:function(n){if(n=t(n,null),null==n)this.error("minValue must be a number.");return n},maxValue:function(n){if(n=t(n,null),null==n)this.error("maxValue must be a number.");return n}},n}),define("mobile/common/custom/ui/SpinBox",["require","exports","module","cc/ui/SpinBox"],function(require){"use strict";var n=require("cc/ui/SpinBox");return n.defaultOptions={step:1,interval:100,inputSelector:'input[type="text"]',upSelector:".icon-caret-up",downSelector:".icon-caret-down"},n});