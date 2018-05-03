define("cc/function/viewportHeight",["require","exports","module"],function(){"use strict";return function(){return window.innerHeight||document.documentElement.clientHeight}}),define("cc/function/eventOffset",["require","exports","module"],function(){"use strict";return function(e){var n=e.offsetX,t=e.offsetY;if("number"!==$.type(n)){var i=e.target.getBoundingClientRect();n=e.clientX-i.left,t=e.clientY-i.top}return{x:n,y:t}}}),define("cc/function/eventPage",["require","exports","module"],function(){"use strict";return function(e){var n=e.pageX,t=e.pageY;if("number"!==$.type(n)){var i=document.documentElement;n=e.clientX+i.scrollLeft,t=e.clientY+i.scrollTop}return{x:n,y:t}}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(e,n){e=e[0],n=n[0],e.parentNode.replaceChild(n,e)}}),define("cc/util/instance",["require","exports","module"],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body)}),define("cc/function/restrain",["require","exports","module"],function(){"use strict";return function(e,n,t){if(n>e)e=n;else if(e>t)e=t;return e}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(e){if(e&&!e[$.expando])e="string"===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event()}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function e(e){return e.is("body")||"static"!==e.css("position")}return function(n){if(n.is("body"))return n;for(var t=n.parent();!e(t);)t=t.parent();return t}}),define("cc/function/contains",["require","exports","module"],function(){"use strict";return function(e,n){if(e=e.jquery?e[0]:e,n=n.jquery?n[0]:n,!e||!n)return!1;if(e===n)return!0;else return $.contains(e,n)}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(e,n){if("boolean"!==$.type(e)){if(1===arguments.length)n=!!e;e=n}return e}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(e){var n=setTimeout(e,0);return function(){clearTimeout(n)}}}),define("cc/function/toNumber",["require","exports","module"],function(){"use strict";var e={"int":parseInt,"float":parseFloat};return function(n,t,i){if("number"!==$.type(n)){var o=e[i];if(o)n=o(n,10);else if($.isNumeric(n))n=+n;else n=0/0}return isNaN(n)?t:n}}),define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}),define("cc/function/pageScrollLeft",["require","exports","module"],function(){"use strict";return function(){return Math.max(document.body.scrollLeft,document.documentElement.scrollLeft)}}),define("cc/function/pageScrollTop",["require","exports","module"],function(){"use strict";return function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop)}}),define("cc/function/viewportWidth",["require","exports","module"],function(){"use strict";return function(){return window.innerWidth||document.documentElement.clientWidth}}),define("cc/function/imageDimension",["require","exports","module"],function(){"use strict";var e=[];return function(n,t){var i=new Image,o=e.push(i);i.onload=function(){var n=i.height;if(null!=n&&n>0)t(i.width,n),delete e[o-1],i=null;else setTimeout(i.onload,10)},i.src=n}}),define("cc/function/enableSelection",["require","exports","module"],function(){"use strict";if(document.selection)return function(){document.body.onselectstart=null};else return $.noop}),define("cc/function/disableSelection",["require","exports","module"],function(){"use strict";if(document.selection)return function(){document.body.onselectstart=function(){return!1}};else return $.noop}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(e,n){if($.isPlainObject(n))$.each(n,function(n,t){if(!(n in e))e[n]=t})}}),define("cc/function/guid",["require","exports","module"],function(){var e=0;return function(){return"cc_"+e++}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(e,n,t,i){var o="string"===$.type(n),r=o?e[n]:e;if(!o)i=t,t=n;var u=function(){var e,n=$.makeArray(arguments);if($.isFunction(t))e=t.apply(this,n);if(e!==!1){if($.isFunction(r))e=r.apply(this,n);if($.isFunction(i)){n.push(e);var o=i.apply(this,n);if("undefined"!==$.type(o))e=o}return e}};return o?e[n]=u:u}}),define("cc/function/outerOffset",["require","exports","module","./toNumber"],function(require){"use strict";var e=require("./toNumber");return function(n){var t=n.offset(),i=e(n.css("margin-left"),0,"int"),o=e(n.css("margin-top"),0,"int");return{x:t.left-i,y:t.top-o}}}),define("cc/function/innerOffset",["require","exports","module","./toNumber"],function(require){"use strict";var e=require("./toNumber");return function(n){var t=n.offset(),i=n.css("border-left-width"),o=n.css("border-top-width");return{x:t.left+e(i,0,"int"),y:t.top+e(o,0,"int")}}}),define("cc/function/position",["require","exports","module","./offsetParent"],function(require){"use strict";var e=require("./offsetParent");return function(n){var t=e(n),i=n.css("position"),o=parseInt(n.css("left"),10),r=parseInt(n.css("top"),10),u=isNaN(o),c=isNaN(r);if(u||c)if(1===t.length){var f=n.offset(),s=t.offset();if(u)o=f.left-s.left-(parseInt(t.css("border-left-width"),10)||0);if(c)r=f.top-s.top-(parseInt(t.css("border-top-width"),10)||0)}else o=r=0;if(!i||"static"===i)i="absolute";return{position:i,left:o,top:r}}}),define("cc/function/page",["require","exports","module","../util/instance"],function(require){"use strict";var e=require("../util/instance");return function(){if(e.body.prop("clientHeight")<e.html.prop("clientHeight"))return e.html;else return e.body}}),define("cc/function/testTarget",["require","exports","module","../util/instance","./contains"],function(require){"use strict";var e=require("../util/instance"),n=require("./contains");return function(t,i,o){var r=!1;if($.isArray(i))i=i.join(",");if(!o)o=e.document;return o.find(i).each(function(){if(r=n(this,t))return!1;else return void 0}),r}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var e=require("../function/extend"),n=require("../function/createEvent"),t={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$},on:function(e,n,t){return this.get$().on(e,n,t),this},once:function(e,n,t){return this.get$().one(e,n,t),this},off:function(e,n){return this.get$().off(e,n),this},emit:function(e,t){return e=n(e),this.get$().trigger(e,t),e}};exports.extend=function(n){e(n,t)}}),define("cc/util/touch",["require","exports","module","../function/eventPage","../function/eventOffset"],function(require){"use strict";function n(e){return e.originalEvent.changedTouches[0]}var t=require("../function/eventPage"),i=require("../function/eventOffset"),o=document.createElement("div"),r={support:"ontouchend"in o,click:"touchstart",down:"touchstart",move:"touchmove",up:"touchend",page:function(e){var t=n(e);return{x:t.pageX,y:t.pageY}},client:function(e){var t=n(e);return{x:t.clientX,y:t.clientY}},offset:function(e){var t=n(e);return{x:t.offsetX,y:t.offsetY}}},u={support:"onclick"in o,click:"click",down:"mousedown",move:"mousemove",up:"mouseup",page:function(e){return t(e)},client:function(e){return{x:e.clientX,y:e.clientY}},offset:function(){return i(e)}};return o=null,{touch:r,mouse:u}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function e(e,n,t,i,o){return function(c,f,s){var a=this;if($.isPlainObject(c))return s=f,void $.each(c,function(e,n){a[t](e,n,s)});s=s||{};var l=a[i](c),d=a.constructor[e+"Validator"];if(d)if($.isFunction(d[c]))f=d[c].call(a,f,s);if($.isFunction(o))f=o(a,f,s);if(l!==f||s.force)if(a[n][c]=f,!s.silent){var m={};r(m,s),m.newValue=f,m.oldValue=l;var v={};v[c]=m;var h=function(e){if(e&&e[c])a.execute(e[c],[f,l,m])};if(h(a.inner("watchSync")),h(a.option("watchSync")),s.sync)return h(a.constructor[e+"Updater"]),h(a.option("watch")),void a.emit(e+"change",v);var g=a.inner(e+"Changes");if(!g)g={},a.inner(e+"Changes",g);if($.extend(g,v),!a.inner(p))a.inner(p,u(function(){a.sync(p)}))}}}function n(){this.error("initStruct() can just call one time.")}function t(e,n,t,i,o){var r,u="before"===i?"_"+n:n+"_",c=e[u];if($.isFunction(c))if(r=c.apply(e,t),r!==!1&&!$.isPlainObject(r))r=null;if(r===!1)return!1;var f=!1;if(r&&r.dispatch)f=!0,delete r.dispatch;if(o=$.Event(o),o.type=i+n,e.emit(o,r),f)e.dispatch(o,r);if(o.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),o=require("../function/around"),r=require("../function/extend"),u=(require("../function/ucFirst"),require("../function/nextTick")),c=require("../function/toBoolean"),f=require("../function/createEvent"),s=require("../function/replaceWith"),a=(require("../function/offsetParent"),require("./event")),l={},p="__update_async__",d={},m={initStruct:function(){var e=this,t=e.option("mainElement"),i=e.option("mainTemplate");if("string"===$.type(i)){var o=e.option("share"),r=e.type+i;if(o)t=d[r];var u;if(!t){if(u=$(i),o)d[r]=u}else if(e.option("replace"))s(t,u=$(i));else t.html(i);if(u)t=u,e.option("mainElement",t)}var c=e.option("parentSelector");if(c&&!t.parent().is(c))t.appendTo(c);e.initStruct=n},warn:function(e){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,e].join(" "))},error:function(e){throw new Error(["[CC error]",this.type,e].join(" "))},live:function(e,n,t){var i=this,o=i.inner("main");if(o)o.on(e+i.namespace(),n,t);return i},emit:function(e,n){var t=this,i=t.option("context")||t;e=f(e),e.cc=i;var o=[e];if($.isPlainObject(n))o.push(n);e.type=e.type.toLowerCase();var r=i.get$();r.trigger.apply(r,o);var u="on"+e.type;if(!e.isPropagationStopped()&&i.execute(u,o)===!1)e.preventDefault(),e.stopPropagation();return i.execute(u+"_",o),e},dispatch:function(e,n){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var t=$.Event(e);if(t.type="dispatch",this.emit(t,n),t.isPropagationStopped())e.preventDefault(),e.stopPropagation()}},before:function(e,n){return this.on("before"+e.toLowerCase(),n)},after:function(e,n){return this.on("after"+e.toLowerCase(),n)},find:function(e){var n=this.inner("main");if(n){var t=n.find(e);if(t.length)return t}},appendTo:function(e){var n=this.inner("main");if(n)n.appendTo(e)},prependTo:function(e){var n=this.inner("main");if(n)n.prependTo(e)},execute:function(e,n){var t=this,i=e;if("string"===$.type(e))i=t.option(e);if($.isFunction(i)){var o=t.option("context")||t;if($.isArray(n))return i.apply(o,n);else return i.call(o,n)}},renderWith:function(e,n,t){var i=this;if(!n)if(n=i.option("renderTemplate"),!n)n=i.option("mainTemplate");if(!t)t=i.option("mainElement");var o=i.option("renderSelector");if(o)t=t.find(o);var r;if($.isPlainObject(e)||$.isArray(e))r=i.execute("render",[e,n]);else if("string"===$.type(e))r=e;t.html(r)},namespace:function(){return"."+this.guid},option:function(e,n){var t=this;if(1===arguments.length&&"string"===$.type(e))return t.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.option(e,n)});t.options[e]=n}},inner:function(e,n){var t=this,i=t.inners||{};if(1===arguments.length&&"string"===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,n){t.inner(e,n)});i[e]=n}},is:function(e){return this.states[e]},state:e("state","states","state","is",function(e,n){return c(n,!1)}),get:function(e){return this.properties[e]},set:e("property","properties","set","get")},v={sync:function(){var e=this,n=function(n,t,i){$.each(n,function(o,r){return e.execute(t[o],[r.newValue,r.oldValue,i?n:r])})};if($.each(["property","state"],function(t,i){var o=e.inner(i+"Changes");if(o){e.inner(i+"Changes",null);var r=e.constructor[i+"Updater"];if(r)n(o,r,!0);var u=e.option("watch");if(u)n(o,u);e.emit(i+"change",o)}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1)},_sync:function(){if(!this.inner(p))return!1;else return void 0},_init:function(){var e="initCalled";if(this.is(e))return!1;else return void this.state(e,!0)},_dispose:function(){var e="disposeCalled";if(this.is(e))return!1;else return void this.state(e,!0)}};exports.extend=function(e,n){r(e,v),$.each(e,function(i,r){var u=i.indexOf("_");if($.isFunction(r)&&0!==u&&u!==i.length-1)if(!($.isArray(n)&&$.inArray(i,n)>=0)){var c=function(e){return t(this,i,arguments,"before",e)},f=function(e){var n=this,o=arguments,u=function(){return t(n,i,o,"after",e)};if(r.length+1===o.length){var c=o[o.length-1];if(c&&$.isFunction(c.then))return void c.then(u)}u()};o(e,i,c,f)}}),r(e,m),a.extend(e)},exports.init=function(e,n){if(!n)n={};return r(n,e.constructor.defaultOptions),n.onafterinit_=function(){e.state("inited",!0)},n.onafterdispose_=function(){e.state("disposed",!0),e.off();var n=e.inner("main");if(e.option("removeOnDispose")&&n)n.remove();u(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null})},l[e.guid=i()]=e,e.properties={},e.options=n,e.states={},e.inners={},e.init(),e},exports.dispose=function(e){e.sync();var n=e.inner("main")||e.option("mainElement");if(n)n.off(e.namespace())}}),define("cc/helper/Draggable",["require","exports","module","../function/page","../function/restrain","../function/position","../function/contains","../function/testTarget","../function/innerOffset","../function/outerOffset","../function/pageScrollLeft","../function/pageScrollTop","../function/viewportWidth","../function/viewportHeight","../function/enableSelection","../function/disableSelection","../util/life","../util/touch","../util/instance"],function(require){"use strict";function e(e){m.init(this,e)}var n=require("../function/page"),t=require("../function/restrain"),i=require("../function/position"),o=require("../function/contains"),r=require("../function/testTarget"),u=require("../function/innerOffset"),c=require("../function/outerOffset"),f=require("../function/pageScrollLeft"),s=require("../function/pageScrollTop"),a=require("../function/viewportWidth"),l=require("../function/viewportHeight"),p=require("../function/enableSelection"),d=require("../function/disableSelection"),m=require("../util/life"),v=require("../util/touch"),h=require("../util/instance").body,g=e.prototype;g.type="Draggable",g.init=function(){var e=this,m=e.option("mainElement"),v=e.option("mainSelector");e.inner({main:m});var g=e.option("containerElement");if(!g)g=n();var T,C=e.option("draggingClass"),P=e.option("containerDraggingClass"),O=e.option("bodyDraggingClass")||"dragging",H=function(n){var p;w=v?$(n.currentTarget):m;var d=n[$.expando];if(d){var h=e.option("includeSelector"),C=e.option("excludeSelector"),P=n.target;if(h&&!r(P,h,w)||C&&r(P,C,w))return;$.each(S,function(e,t){if(0===n.type.indexOf(e))return p=t,!1;else return void 0})}else if(n.type)p=S[n.type];if(!p)p=S.mouse;e.emit("pick",{mainElement:w}),T=i(w),E.left=T.left,E.top=T.top;var O=g.is("html,body"),H=!0;if(!O)H=o(g,w);var D,F,X=c(w),Y=u(g);if(d)D=p.absoluteX(n)-X.x,F=p.absoluteY(n)-X.y;else D=n.offsetX,F=n.offsetY;if(H){if(!O)D-=g.scrollLeft(),F-=g.scrollTop();D+=Y.x,F+=Y.y}var _,j,A,N,W=a(),k=l(),L=s(),V=f(),I=V+W,B=L+k,M="fixed"===T.position;if(M)if(O)_=0,j=0;else _=t(Y.x,V,I),j=t(Y.y,L,B);else if(O)_=-1*Y.x,j=-1*Y.y;else if(H)_=0,j=0;else _=Y.x,j=Y.y;if(null==A)if(!O&&H)A=g.prop("scrollWidth"),N=g.prop("scrollHeight");else A=g.innerWidth(),N=g.innerHeight();if(O){if(W>A)A=W;if(k>N)N=k}if(M){if(_+A>I)A=I-_;if(j+N>B)N=B-j}A=Math.max(0,A-w.outerWidth(!0)),N=Math.max(0,N-w.outerHeight(!0));var U=e.option("axis");return x="y"===U?q.constant(T.left):q.variable(p[M?"fixedX":"absoluteX"],D,_,_+A),y="x"===U?q.constant(T.top):q.variable(p[M?"fixedY":"absoluteY"],F,j,j+N),b=0,!0},D=function(n){if(null!=b){E.left=x(n),E.top=y(n);var t;if(0===b){if(T)w.css(T),T=null;if(t=e.emit("beforedrag",$.extend({},E)),t.isDefaultPrevented())return;if(d(),C)w.addClass(C);if(P)g.addClass(P);if(O)h.addClass(O)}if(b++,t=e.emit("drag",$.extend({},E)),!t.isDefaultPrevented())e.execute("dragAnimation",{mainElement:w,mainStyle:E})}},F=function(){if(null!=b){if(b>0){if(p(),C)w.removeClass(C);if(P)g.removeClass(P);if(O)h.removeClass(O);e.emit("afterdrag",$.extend({},E))}e.emit("drop",{mainElement:w}),b=x=y=T=w=null}};e.execute("init",{mainElement:m,mainSelector:v,namespace:e.namespace(),downHandler:H,moveHandler:D,upHandler:F})},g.dispose=function(){m.dispose(this)},m.extend(g);var x,y,b,w,E={},q={constant:function(e){return function(){return e}},variable:function(e,n,i,o){return function(r){return t(e(r)-n,i,o)}}},S={};return $.each(v,function(e,n){if(n.support)S[e]={absoluteX:function(e){return n.client(e).x+f()},absoluteY:function(e){return n.client(e).y+s()},fixedX:function(e){return n.client(e).x},fixedY:function(e){return n.client(e).y}}}),e}),define("cc/ui/Zoom",["require","exports","module","../function/imageDimension","../helper/Draggable","../util/instance","../util/life"],function(require){"use strict";function e(e){o.init(this,e)}var n=require("../function/imageDimension"),t=require("../helper/Draggable"),i=require("../util/instance").document,o=require("../util/life"),r=e.prototype;return r.type="Zoom",r.init=function(){var e=this,o=e.option("thumbnailElement");if(!o.is("img"))e.error("thumbnailElement must be a <img />.");var r,u,c,f=e.option("viewportElement"),s=e.option("finderElement"),a=o.prop("width"),l=o.prop("height"),p=s.outerWidth(),d=s.outerHeight(),m=function(){var t=e.option("imageUrl");n(t,function(e,n){r=a/e,u=l/n,f.css({width:p/r,height:d/u,background:"url("+t+") no-repeat"})})},v=e.namespace();if(!a&&!l)o.one("load"+v,function(){a=this.width,l=this.height,m()});else m();var h=new t({mainElement:s,containerElement:o,dragAnimation:function(e){s.css(e.mainStyle)},init:function(e){var n,t="mouseenter"+v,r="mouseleave"+v,u=function(){if(n)clearTimeout(n),n=null},f=function(){n=setTimeout(function(){n=null,e.upHandler(),i.off(v)},50)};o.on(t,function(){if(n)return void u();var t={offsetX:p/2,offsetY:d/2};if(e.downHandler(t))c=o.position(),i.off(v).on("mousemove"+v,e.moveHandler)}).on(r,f),s.on(t,u).on(r,f)},onbeforedrag:function(){e.execute("showFinderAnimation",{finderElement:s}),e.execute("showViewportAnimation",{viewportElement:f})},onafterdrag:function(){e.execute("hideFinderAnimation",{finderElement:s}),e.execute("hideViewportAnimation",{viewportElement:f})},ondrag:function(e,n){var t=(n.left-c.left)/r,i=(n.top-c.top)/u;f.css({"background-position":"-"+t+"px -"+i+"px"})}});e.inner({dragger:h})},r.dispose=function(){var e=this;o.dispose(e),e.inner("dragger").dispose();var n=e.namespace();i.off(n),e.option("thumbnailElement").off(n),e.option("finderElement").off(n)},o.extend(r),e});