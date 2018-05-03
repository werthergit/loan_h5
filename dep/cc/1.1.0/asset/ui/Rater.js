define("cc/function/around",["require","exports","module"],function(){"use strict";return function(n,t,e,i){var r="string"===$.type(t),o=r?n[t]:n;if(!r)i=e,e=t;var u=function(){var n,t=$.makeArray(arguments);if($.isFunction(e))n=e.apply(this,t);if(n!==!1){if($.isFunction(o))n=o.apply(this,t);if($.isFunction(i)){t.push(n);var r=i.apply(this,t);if("undefined"!==$.type(r))n=r}return n}};return r?n[t]=u:u}}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(n,t){if($.isPlainObject(t))$.each(t,function(t,e){if(!(t in n))n[t]=e})}}),define("cc/function/toNumber",["require","exports","module"],function(){"use strict";var n={"int":parseInt,"float":parseFloat};return function(t,e,i){if("number"!==$.type(t)){var r=n[i];if(r)t=r(t,10);else if($.isNumeric(t))t=+t;else t=0/0}return isNaN(t)?e:t}}),define("cc/function/eventOffset",["require","exports","module"],function(){"use strict";return function(n){var t=n.offsetX,e=n.offsetY;if("number"!==$.type(t)){var i=n.target.getBoundingClientRect();t=n.clientX-i.left,e=n.clientY-i.top}return{x:t,y:e}}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function n(n){return n.is("body")||"static"!==n.css("position")}return function(t){if(t.is("body"))return t;for(var e=t.parent();!n(e);)e=e.parent();return e}}),define("cc/function/guid",["require","exports","module"],function(){var n=0;return function(){return"cc_"+n++}}),define("cc/function/restrain",["require","exports","module"],function(){"use strict";return function(n,t,e){if(t>n)n=t;else if(n>e)n=e;return n}}),define("cc/function/debounce",["require","exports","module"],function(){"use strict";return function(n,t,e){function i(e){o=setTimeout(function(){o=null,r=$.now(),n.apply(null,$.makeArray(e))},t)}t="number"===$.type(t)?t:50;var r,o;return function(){if(e&&r>0&&$.now()-r<t)clearTimeout(o),o=null;if(!o)i(arguments)}}}),define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(n){var t=setTimeout(n,0);return function(){clearTimeout(t)}}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(n,t){if("boolean"!==$.type(n)){if(1===arguments.length)t=!!n;n=t}return n}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(n){if(n&&!n[$.expando])n="string"===$.type(n)||n.type?$.Event(n):$.Event(null,n);return n||$.Event()}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(n,t){n=n[0],t=t[0],n.parentNode.replaceChild(t,n)}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var n=require("../function/extend"),t=require("../function/createEvent"),e={get$:function(){var n=this;if(!n.$)n.$=$({});return n.$},on:function(n,t,e){return this.get$().on(n,t,e),this},once:function(n,t,e){return this.get$().one(n,t,e),this},off:function(n,t){return this.get$().off(n,t),this},emit:function(n,e){return n=t(n),this.get$().trigger(n,e),n}};exports.extend=function(t){n(t,e)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function n(n,t,e,i,r){return function(c,f,a){var s=this;if($.isPlainObject(c))return a=f,void $.each(c,function(n,t){s[e](n,t,a)});a=a||{};var p=s[i](c),d=s.constructor[n+"Validator"];if(d)if($.isFunction(d[c]))f=d[c].call(s,f,a);if($.isFunction(r))f=r(s,f,a);if(p!==f||a.force)if(s[t][c]=f,!a.silent){var v={};o(v,a),v.newValue=f,v.oldValue=p;var m={};m[c]=v;var h=function(n){if(n&&n[c])s.execute(n[c],[f,p,v])};if(h(s.inner("watchSync")),h(s.option("watchSync")),a.sync)return h(s.constructor[n+"Updater"]),h(s.option("watch")),void s.emit(n+"change",m);var g=s.inner(n+"Changes");if(!g)g={},s.inner(n+"Changes",g);if($.extend(g,m),!s.inner(l))s.inner(l,u(function(){s.sync(l)}))}}}function t(){this.error("initStruct() can just call one time.")}function e(n,t,e,i,r){var o,u="before"===i?"_"+t:t+"_",c=n[u];if($.isFunction(c))if(o=c.apply(n,e),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var f=!1;if(o&&o.dispatch)f=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+t,n.emit(r,o),f)n.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),c=require("../function/toBoolean"),f=require("../function/createEvent"),a=require("../function/replaceWith"),s=(require("../function/offsetParent"),require("./event")),p={},l="__update_async__",d={},v={initStruct:function(){var n=this,e=n.option("mainElement"),i=n.option("mainTemplate");if("string"===$.type(i)){var r=n.option("share"),o=n.type+i;if(r)e=d[o];var u;if(!e){if(u=$(i),r)d[o]=u}else if(n.option("replace"))a(e,u=$(i));else e.html(i);if(u)e=u,n.option("mainElement",e)}var c=n.option("parentSelector");if(c&&!e.parent().is(c))e.appendTo(c);n.initStruct=t},warn:function(n){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,n].join(" "))},error:function(n){throw new Error(["[CC error]",this.type,n].join(" "))},live:function(n,t,e){var i=this,r=i.inner("main");if(r)r.on(n+i.namespace(),t,e);return i},emit:function(n,t){var e=this,i=e.option("context")||e;n=f(n),n.cc=i;var r=[n];if($.isPlainObject(t))r.push(t);n.type=n.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u="on"+n.type;if(!n.isPropagationStopped()&&i.execute(u,r)===!1)n.preventDefault(),n.stopPropagation();return i.execute(u+"_",r),n},dispatch:function(n,t){if(!n.isPropagationStopped()){if(!n.originalEvent)n.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var e=$.Event(n);if(e.type="dispatch",this.emit(e,t),e.isPropagationStopped())n.preventDefault(),n.stopPropagation()}},before:function(n,t){return this.on("before"+n.toLowerCase(),t)},after:function(n,t){return this.on("after"+n.toLowerCase(),t)},find:function(n){var t=this.inner("main");if(t){var e=t.find(n);if(e.length)return e}},appendTo:function(n){var t=this.inner("main");if(t)t.appendTo(n)},prependTo:function(n){var t=this.inner("main");if(t)t.prependTo(n)},execute:function(n,t){var e=this,i=n;if("string"===$.type(n))i=e.option(n);if($.isFunction(i)){var r=e.option("context")||e;if($.isArray(t))return i.apply(r,t);else return i.call(r,t)}},renderWith:function(n,t,e){var i=this;if(!t)if(t=i.option("renderTemplate"),!t)t=i.option("mainTemplate");if(!e)e=i.option("mainElement");var r=i.option("renderSelector");if(r)e=e.find(r);var o;if($.isPlainObject(n)||$.isArray(n))o=i.execute("render",[n,t]);else if("string"===$.type(n))o=n;e.html(o)},namespace:function(){return"."+this.guid},option:function(n,t){var e=this;if(1===arguments.length&&"string"===$.type(n))return e.options[n];else{if($.isPlainObject(n))return void $.each(n,function(n,t){e.option(n,t)});e.options[n]=t}},inner:function(n,t){var e=this,i=e.inners||{};if(1===arguments.length&&"string"===$.type(n))return i[n];else{if($.isPlainObject(n))return void $.each(n,function(n,t){e.inner(n,t)});i[n]=t}},is:function(n){return this.states[n]},state:n("state","states","state","is",function(n,t){return c(t,!1)}),get:function(n){return this.properties[n]},set:n("property","properties","set","get")},m={sync:function(){var n=this,t=function(t,e,i){$.each(t,function(r,o){return n.execute(e[r],[o.newValue,o.oldValue,i?t:o])})};if($.each(["property","state"],function(e,i){var r=n.inner(i+"Changes");if(r){n.inner(i+"Changes",null);var o=n.constructor[i+"Updater"];if(o)t(r,o,!0);var u=n.option("watch");if(u)t(r,u);n.emit(i+"change",r)}}),arguments[0]!==l)n.execute(n.inner(l));n.inner(l,!1)},_sync:function(){if(!this.inner(l))return!1;else return void 0},_init:function(){var n="initCalled";if(this.is(n))return!1;else return void this.state(n,!0)},_dispose:function(){var n="disposeCalled";if(this.is(n))return!1;else return void this.state(n,!0)}};exports.extend=function(n,t){o(n,m),$.each(n,function(i,o){var u=i.indexOf("_");if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var c=function(n){return e(this,i,arguments,"before",n)},f=function(n){var t=this,r=arguments,u=function(){return e(t,i,r,"after",n)};if(o.length+1===r.length){var c=r[r.length-1];if(c&&$.isFunction(c.then))return void c.then(u)}u()};r(n,i,c,f)}}),o(n,v),s.extend(n)},exports.init=function(n,t){if(!t)t={};return o(t,n.constructor.defaultOptions),t.onafterinit_=function(){n.state("inited",!0)},t.onafterdispose_=function(){n.state("disposed",!0),n.off();var t=n.inner("main");if(n.option("removeOnDispose")&&t)t.remove();u(function(){delete p[n.guid],n.properties=n.options=n.changes=n.states=n.inners=n.guid=null})},p[n.guid=i()]=n,n.properties={},n.options=t,n.states={},n.inners={},n.init(),n},exports.dispose=function(n){n.sync();var t=n.inner("main")||n.option("mainElement");if(t)t.off(n.namespace())}}),define("cc/ui/Rater",["require","exports","module","../function/debounce","../function/restrain","../function/toNumber","../function/eventOffset","../util/life"],function(require){"use strict";function n(n){c.init(this,n)}function t(n,t){var i=n.inner("main").find(n.option("itemSelector")),r=n.option("itemFullClass"),o=n.option("itemHalfClass"),u=n.option("itemEmptyClass");e(t,n.get("count"),function(n,t){var e=i.eq(n);if(r)e[1===t?"addClass":"removeClass"](r);if(o)e[.5===t?"addClass":"removeClass"](o);if(u)e[0===t?"addClass":"removeClass"](u)})}function e(n,t,e){for(var i,r,o=0;t>o;o++){if(i=n-(o+1),i>=0)r=1;else if(-1>=i)r=0;else r=.5;e(o,r)}}var i=require("../function/debounce"),r=require("../function/restrain"),o=require("../function/toNumber"),u=require("../function/eventOffset"),c=require("../util/life"),f=n.prototype;return f.type="Rater",f.init=function(){var n=this;n.initStruct();var t=n.option("mainElement");if(n.inner({main:t}),n.set({count:n.option("count"),value:n.option("value"),minValue:n.option("minValue"),maxValue:n.option("maxValue")}),!n.option("readOnly")){var e=n.option("itemSelector");if(!e)n.error("itemSelector is missing.");var o,c=n.option("half"),f=n.namespace(),a=function(t,e){var i=e.attr(n.option("valueAttribute"));if(c)if(u(t).x/e.width()<.5)i-=.5;return r(i,n.get("minValue"),n.get("maxValue"))},s=function(t){if(o)n.preview(a(t,o))};t.on("mouseenter"+f,e,function(t){if(o=$(this),c)o.on("mousemove"+f,i(s,50));n.preview(a(t,o))}).on("mouseleave"+f,e,function(){if(c)o.off(f);o=null,n.preview()}).on("click"+f,e,function(t){n.set("value",a(t,o||$(this)))})}},f.render=function(){var n=this,t=[],i=n.option("hint")||{},r={1:n.option("itemFullClass"),.5:n.option("itemHalfClass"),0:n.option("itemEmptyClass")};e(n.get("value"),n.get("count"),function(n,e){var o=r[e];e=n+1,t.push({value:e,className:o||"",hint:i[e]||""})}),n.renderWith({list:t})},f.preview=function(n){var e=this;if(e.inner("value",n),n=o(n,-1),0>n)n=e.get("value");t(e,n)},f.dispose=function(){c.dispose(this)},c.extend(f),n.propertyUpdater={},n.propertyUpdater.value=n.propertyUpdater.count=function(n,e,i){var r=this;if(i.count)r.render();else{var o=i.value;if(o)t(r,o.newValue)}return!1},n.propertyValidator={count:function(n){if(n=o(n,-1),0>n)this.error("count must be a number.");return n},value:function(n){return r(o(n,0),this.get("minValue"),this.get("maxValue"))},minValue:function(n){return n=o(n,-1),0>n?0:n},maxValue:function(n){var t=this.option("count");return n=o(n,t+1),n>t?t:n}},n});