define("cc/function/simplifyDate",["require","exports","module"],function(){"use strict";return function(t){if(t){if("number"===$.type(t))t=new Date(t);return{year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),day:t.getDay()}}}}),define("cc/function/split",["require","exports","module"],function(){"use strict";return function(t,e){var n=[];if("number"===$.type(t))t=""+t;if(t&&"string"===$.type(t))$.each(t.split(e),function(t,e){if(e=$.trim(e))n.push(e)});return n}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function t(t){return t.is("body")||"static"!==t.css("position")}return function(e){if(e.is("body"))return e;for(var n=e.parent();!t(n);)n=n.parent();return n}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(t,e){t=t[0],e=e[0],t.parentNode.replaceChild(e,t)}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(t){if(t&&!t[$.expando])t="string"===$.type(t)||t.type?$.Event(t):$.Event(null,t);return t||$.Event()}}),define("cc/function/offsetSecond",["require","exports","module"],function(){"use strict";return function(t,e){if("date"===$.type(t))t=t.getTime();return new Date(t+1e3*e)}}),define("cc/function/offsetMonth",["require","exports","module"],function(){"use strict";return function(t,e){if("date"===$.type(t))t=t.getTime();return t=new Date(t),t.setDate(1),t.setMonth(t.getMonth()+e),t}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(t,e){if("boolean"!==$.type(t)){if(1===arguments.length)e=!!t;t=e}return t}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(t){var e=setTimeout(t,0);return function(){clearTimeout(e)}}}),define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(t,e){if($.isPlainObject(e))$.each(e,function(e,n){if(!(e in t))t[e]=n})}}),define("cc/function/isValidDate",["require","exports","module"],function(){"use strict";return function(t){if("date"!==$.type(t))return!1;var e=t.getTime();if("number"===$.type(e))return(""+e).length>8;else return!1}}),define("cc/function/parseDate",["require","exports","module"],function(){"use strict";return function(t,e,n){var i=!1;if($.isNumeric(t)&&$.isNumeric(e)&&$.isNumeric(n))i=!0;else if(1===arguments.length){if($.isPlainObject(t))i=!0,n=t.date,e=t.month,t=t.year}else if(2===arguments.length)if("string"===$.type(t)){i=!0;var r=t.split(e||"-");t=r[0],e=r[1],n=r[2]}if(i)if(4===String(t).length&&e>=1&&12>=e&&n>=1&&31>=n)return new Date(t,e-1,n)}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(t,e,n,i){var r="string"===$.type(e),o=r?t[e]:t;if(!r)i=n,n=e;var u=function(){var t,e=$.makeArray(arguments);if($.isFunction(n))t=n.apply(this,e);if(t!==!1){if($.isFunction(o))t=o.apply(this,e);if($.isFunction(i)){e.push(t);var r=i.apply(this,e);if("undefined"!==$.type(r))t=r}return t}};return r?t[e]=u:u}}),define("cc/function/guid",["require","exports","module"],function(){var t=0;return function(){return"cc_"+t++}}),define("cc/function/offsetMinute",["require","exports","module","./offsetSecond"],function(require){"use strict";var t=require("./offsetSecond");return function(e,n){return t(e,60*n)}}),define("cc/util/Value",["require","exports","module","../function/split"],function(require){"use strict";function t(e){$.extend(this,t.defaultOptions,e),this.init()}var e=require("../function/split"),n=t.prototype;return n.init=function(){this.list=[]},n.get=function(){return this.list.join(this.sep)},n.set=function(t){var n=this;n.list.length=0,$.each(e(t,n.sep),function(t,e){n.add(e)})},n.add=function(t){var e=this,n=e.list,i=$.inArray(t,n);if(0>i){if(!e.validate||e.validate(t))n.push(t);else return;if(n.length>1)if(!e.multiple)n[0]=n.pop(),n.length=1;else if(e.sort)n.sort(e.sort);return!0}else;},n.remove=function(t){var e=this.list,n=$.inArray(t,e);if(n>=0)return e.splice(n,1),!0;else return void 0},n.has=function(t){return $.inArray(t,this.list)>=0},n.each=function(t){$.each(this.list,function(e,n){return t(n,e)})},n.dispose=function(){this.list=null},t.defaultOptions={sep:",",sort:function(t,e){if(t>e)return 1;else if(e>t)return-1;else return 0}},t}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var t=require("../function/extend"),e=require("../function/createEvent"),n={get$:function(){var t=this;if(!t.$)t.$=$({});return t.$},on:function(t,e,n){return this.get$().on(t,e,n),this},once:function(t,e,n){return this.get$().one(t,e,n),this},off:function(t,e){return this.get$().off(t,e),this},emit:function(t,n){return t=e(t),this.get$().trigger(t,n),t}};exports.extend=function(e){t(e,n)}}),define("cc/function/offsetHour",["require","exports","module","./offsetMinute"],function(require){"use strict";var t=require("./offsetMinute");return function(e,n){return t(e,60*n)}}),define("cc/function/offsetDate",["require","exports","module","./offsetHour"],function(require){"use strict";var t=require("./offsetHour");return function(e,n){return t(e,24*n)}}),define("cc/function/firstDateInMonth",["require","exports","module","./offsetDate"],function(require){"use strict";var t=require("./offsetDate");return function(e){if("number"===$.type(e))e=new Date(e);return t(e,1-e.getDate())}}),define("cc/function/firstDateInWeek",["require","exports","module","./offsetDate"],function(require){"use strict";var t=require("./offsetDate");return function(e,n){if("number"===$.type(e))e=new Date(e);var i=e.getDay();return i=i>=n?i:i+7,t(e,-1*(i-n))}}),define("cc/function/offsetWeek",["require","exports","module","./offsetDate"],function(require){"use strict";var t=require("./offsetDate");return function(e,n){return t(e,7*n)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function t(t,e,n,i,r){return function(f,a,s){var c=this;if($.isPlainObject(f))return s=a,void $.each(f,function(t,e){c[n](t,e,s)});s=s||{};var p=c[i](f),d=c.constructor[t+"Validator"];if(d)if($.isFunction(d[f]))a=d[f].call(c,a,s);if($.isFunction(r))a=r(c,a,s);if(p!==a||s.force)if(c[e][f]=a,!s.silent){var v={};o(v,s),v.newValue=a,v.oldValue=p;var h={};h[f]=v;var m=function(t){if(t&&t[f])c.execute(t[f],[a,p,v])};if(m(c.inner("watchSync")),m(c.option("watchSync")),s.sync)return m(c.constructor[t+"Updater"]),m(c.option("watch")),void c.emit(t+"change",h);var g=c.inner(t+"Changes");if(!g)g={},c.inner(t+"Changes",g);if($.extend(g,h),!c.inner(l))c.inner(l,u(function(){c.sync(l)}))}}}function e(){this.error("initStruct() can just call one time.")}function n(t,e,n,i,r){var o,u="before"===i?"_"+e:e+"_",f=t[u];if($.isFunction(f))if(o=f.apply(t,n),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var a=!1;if(o&&o.dispatch)a=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+e,t.emit(r,o),a)t.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),f=require("../function/toBoolean"),a=require("../function/createEvent"),s=require("../function/replaceWith"),c=(require("../function/offsetParent"),require("./event")),p={},l="__update_async__",d={},v={initStruct:function(){var t=this,n=t.option("mainElement"),i=t.option("mainTemplate");if("string"===$.type(i)){var r=t.option("share"),o=t.type+i;if(r)n=d[o];var u;if(!n){if(u=$(i),r)d[o]=u}else if(t.option("replace"))s(n,u=$(i));else n.html(i);if(u)n=u,t.option("mainElement",n)}var f=t.option("parentSelector");if(f&&!n.parent().is(f))n.appendTo(f);t.initStruct=e},warn:function(t){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,t].join(" "))},error:function(t){throw new Error(["[CC error]",this.type,t].join(" "))},live:function(t,e,n){var i=this,r=i.inner("main");if(r)r.on(t+i.namespace(),e,n);return i},emit:function(t,e){var n=this,i=n.option("context")||n;t=a(t),t.cc=i;var r=[t];if($.isPlainObject(e))r.push(e);t.type=t.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var u="on"+t.type;if(!t.isPropagationStopped()&&i.execute(u,r)===!1)t.preventDefault(),t.stopPropagation();return i.execute(u+"_",r),t},dispatch:function(t,e){if(!t.isPropagationStopped()){if(!t.originalEvent)t.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(t);if(n.type="dispatch",this.emit(n,e),n.isPropagationStopped())t.preventDefault(),t.stopPropagation()}},before:function(t,e){return this.on("before"+t.toLowerCase(),e)},after:function(t,e){return this.on("after"+t.toLowerCase(),e)},find:function(t){var e=this.inner("main");if(e){var n=e.find(t);if(n.length)return n}},appendTo:function(t){var e=this.inner("main");if(e)e.appendTo(t)},prependTo:function(t){var e=this.inner("main");if(e)e.prependTo(t)},execute:function(t,e){var n=this,i=t;if("string"===$.type(t))i=n.option(t);if($.isFunction(i)){var r=n.option("context")||n;if($.isArray(e))return i.apply(r,e);else return i.call(r,e)}},renderWith:function(t,e,n){var i=this;if(!e)if(e=i.option("renderTemplate"),!e)e=i.option("mainTemplate");if(!n)n=i.option("mainElement");var r=i.option("renderSelector");if(r)n=n.find(r);var o;if($.isPlainObject(t)||$.isArray(t))o=i.execute("render",[t,e]);else if("string"===$.type(t))o=t;n.html(o)},namespace:function(){return"."+this.guid},option:function(t,e){var n=this;if(1===arguments.length&&"string"===$.type(t))return n.options[t];else{if($.isPlainObject(t))return void $.each(t,function(t,e){n.option(t,e)});n.options[t]=e}},inner:function(t,e){var n=this,i=n.inners||{};if(1===arguments.length&&"string"===$.type(t))return i[t];else{if($.isPlainObject(t))return void $.each(t,function(t,e){n.inner(t,e)});i[t]=e}},is:function(t){return this.states[t]},state:t("state","states","state","is",function(t,e){return f(e,!1)}),get:function(t){return this.properties[t]},set:t("property","properties","set","get")},h={sync:function(){var t=this,e=function(e,n,i){$.each(e,function(r,o){return t.execute(n[r],[o.newValue,o.oldValue,i?e:o])})};if($.each(["property","state"],function(n,i){var r=t.inner(i+"Changes");if(r){t.inner(i+"Changes",null);var o=t.constructor[i+"Updater"];if(o)e(r,o,!0);var u=t.option("watch");if(u)e(r,u);t.emit(i+"change",r)}}),arguments[0]!==l)t.execute(t.inner(l));t.inner(l,!1)},_sync:function(){if(!this.inner(l))return!1;else return void 0},_init:function(){var t="initCalled";if(this.is(t))return!1;else return void this.state(t,!0)},_dispose:function(){var t="disposeCalled";if(this.is(t))return!1;else return void this.state(t,!0)}};exports.extend=function(t,e){o(t,h),$.each(t,function(i,o){var u=i.indexOf("_");if($.isFunction(o)&&0!==u&&u!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var f=function(t){return n(this,i,arguments,"before",t)},a=function(t){var e=this,r=arguments,u=function(){return n(e,i,r,"after",t)};if(o.length+1===r.length){var f=r[r.length-1];if(f&&$.isFunction(f.then))return void f.then(u)}u()};r(t,i,f,a)}}),o(t,v),c.extend(t)},exports.init=function(t,e){if(!e)e={};return o(e,t.constructor.defaultOptions),e.onafterinit_=function(){t.state("inited",!0)},e.onafterdispose_=function(){t.state("disposed",!0),t.off();var e=t.inner("main");if(t.option("removeOnDispose")&&e)e.remove();u(function(){delete p[t.guid],t.properties=t.options=t.changes=t.states=t.inners=t.guid=null})},p[t.guid=i()]=t,t.properties={},t.options=e,t.states={},t.inners={},t.init(),t},exports.dispose=function(t){t.sync();var e=t.inner("main")||t.option("mainElement");if(e)e.off(t.namespace())}}),define("cc/function/lastDateInWeek",["require","exports","module","./firstDateInWeek","./offsetDate"],function(require){"use strict";var t=require("./firstDateInWeek"),e=require("./offsetDate");return function(n,i){return e(t(n,i),6)}}),define("cc/function/lastDateInMonth",["require","exports","module","./offsetDate","./offsetMonth","./firstDateInMonth"],function(require){"use strict";var t=require("./offsetDate"),e=require("./offsetMonth"),n=require("./firstDateInMonth");return function(i){return t(n(e(i,1)),-1)}}),define("cc/ui/Calendar",["require","../function/offsetWeek","../function/offsetMonth","../function/firstDateInWeek","../function/lastDateInWeek","../function/firstDateInMonth","../function/lastDateInMonth","../function/isValidDate","../function/parseDate","../function/simplifyDate","../util/life","../util/Value"],function(require){"use strict";function t(t){v.init(this,t)}function e(t,e){var i,r,u=t.option("firstDay"),f=o(t.get("today")),l=t.option("mode")===g;if(l)i=a(c(e),u),r=s(p(e),u);else i=a(e,u),r=s(e,u);if(i=o(i),r=o(r),l&&t.option("stable")){var v=r-i,h=x-v;if(h>0)r+=h}var m={};t.inner("value").each(function(e){if(e){var n=t.execute("parse",e);m[o(n)]=1}});var y=n(i,r,f,m);return $.extend(d(e),{start:y[0],end:y[y.length-1],list:y})}function n(t,e,n,i){for(var r,o=[],u=t;e>=u;u+=y){if(r=d(u),u>n)r.phase="future";else if(n>u)r.phase="past";else r.phase="today";if(i[u])r.active=!0;o.push(r)}return o}function i(t,e,n){if(!n)return!1;var i,r;if(t.option("mode")===g)i=c(n),r=p(n);else{var o=t.option("firstDay");i=a(n,o),r=s(n,o)}return e>=i&&e<r.getTime()+y}function r(t,n){var i=t.get("date");i=t.option("mode")===g?f(i,n):u(i,n),t.set({date:i,data:e(t,i)})}function o(t){return t.setHours(0,0,0,0)}var u=require("../function/offsetWeek"),f=require("../function/offsetMonth"),a=require("../function/firstDateInWeek"),s=require("../function/lastDateInWeek"),c=require("../function/firstDateInMonth"),p=require("../function/lastDateInMonth"),l=require("../function/isValidDate"),d=(require("../function/parseDate"),require("../function/simplifyDate")),v=require("../util/life"),h=require("../util/Value"),m=t.prototype;m.type="Calendar",m.init=function(){var t=this;t.initStruct();var e=t.option("mainElement"),n="click"+t.namespace(),r=t.option("itemSelector");if(r){var o=t.option("valueAttribute");if(!o)t.error("valueAttribute is missing.");e.on(n,r,function(){var e,n,r=$(this).attr(o),u=t.inner("value");if(u.has(r)){if(t.option("toggle"))e="valuedel",u.remove(r)}else if(e="valueadd",u.add(r))if(t.option("renderOnClickAdjacency"))if(n=t.execute("parse",r),i(t,n,t.get("date")))n=null;if(e)if(e=t.emit(e,{value:r}),!e.isDefaultPrevented()){var f={value:u.get()};if(n)f.date=n;t.set(f),t.sync()}})}var u=t.option("prevSelector");if(u)e.on(n,u,$.proxy(t.prev,t));var f=t.option("nextSelector");if(f)e.on(n,f,$.proxy(t.next,t));t.inner({main:e,value:new h({multiple:t.option("multiple"),validate:function(e){return l(t.execute("parse",e))}})});var a=t.option("today")||new Date;t.set({today:a,date:t.option("date")||a,value:t.option("value")})},m.prev=function(){r(this,-1)},m.next=function(){r(this,1)},m.render=function(){this.renderWith(this.get("data"))},m._render=function(){if(!this.get("data"))return!1;else return void 0},m.dispose=function(){var t=this;v.dispose(t),t.inner("value").dispose()},v.extend(m),t.propertyUpdater={},t.propertyUpdater.data=t.propertyUpdater.date=t.propertyUpdater.value=function(t,n,i){var r,o=this,u=function(t){r=!0,o.set("data",e(o,t),{silent:!0})};if(i.data)r=i.data.newValue;if(!r&&i.date)u(i.date.newValue);if(!r&&!o.get("data"))u(o.get("date"));if(r)return void o.render();else if(!i.value)return;var f=o.option("valueAttribute"),a=o.option("itemActiveClass");if(f&&a){var s=o.inner("main");return s.find("."+a).removeClass(a),o.inner("value").each(function(t){if(t)s.find("["+f+'="'+t+'"]').addClass(a)}),!1}},t.propertyValidator={value:function(t){var e=this.inner("value");return e.set(t),e.get()}};var g="month",y=864e5,x=41*y;return t});