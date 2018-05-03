define("cc/function/ucFirst",["require","exports","module"],function(){"use strict";return function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}),define("cc/util/etpl",function(){function e(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n];return e}function t(){this.raw=[],this.length=0}function n(){return"___"+P++}function i(e,t){var n=new Function;n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}function r(e){return A[e]}function o(e){return'"'+e.replace(/\x5C/g,"\\\\").replace(/"/g,'\\"').replace(/\x0A/g,"\\n").replace(/\x09/g,"\\t").replace(/\x0D/g,"\\r")+'"'}function s(e){return e.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(e){return"\\"+e})}function a(e){var t=arguments;return e.replace(/\{([0-9]+)\}/g,function(e,n){return t[n-0+1]})}function u(e){return e=e.replace(/^\s*\*/,""),a('gv({0},["{1}"])',o(e),e.replace(/\[['"]?([^'"]+)['"]?\]/g,function(e,t){return"."+t}).split(".").join('","'))}function c(e,t,n,i,r,o){for(var s=n.length,a=e.split(t),u=0,c=[],f=0,l=a.length;l>f;f++){var p=a[f];if(f){var d=1;for(u++;;){var h=p.indexOf(n);if(0>h){c.push(u>1&&d?t:"",p);break}if(u=i?u-1:0,c.push(u>0&&d?t:"",p.slice(0,h),u>0?n:""),p=p.slice(h+s),d=0,0===u)break}if(0===u)r(c.join("")),o(p),c=[]}else p&&o(p)}if(u>0&&c.length>0)o(t),o(c.join(""))}function f(e,t,n){var i,r=[],s=t.options,a="",l="",p="",d="";if(n)a="ts(",l=")",p=q,d=j,i=s.defaultFilter;return c(e,s.variableOpen,s.variableClose,1,function(e){if(n&&e.indexOf("|")<0&&i)e+="|"+i;var o=e.indexOf("|"),s=(o>0?e.slice(0,o):e).replace(/^\s+/,"").replace(/\s+$/,""),c=o>0?e.slice(o+1):"",h=0===s.indexOf("*"),v=[h?"":a,u(s),h?"":l];if(c){c=f(c,t);for(var g=c.split("|"),y=0,m=g.length;m>y;y++){var $=g[y];if(/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test($)){if(v.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3)v.push(",",RegExp.$3);v.push(")")}}}r.push(p,v.join(""),d)},function(e){r.push(p,n?o(e):e,d)}),r.join("")}function l(e,t){this.value=e,this.engine=t}function p(e,t){this.value=e,this.engine=t,this.children=[],this.cloneProps=[]}function d(e,t){var n=e.stack,i=t?n.find(function(e){return e instanceof t}):n.bottom();if(i){for(var r;(r=n.top())!==i;){if(!r.autoClose)throw new Error(r.type+" must be closed manually: "+r.value);r.autoClose(e)}i.close(e)}return i}function h(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.master=RegExp.$3,this.name=RegExp.$1,p.call(this,e,t),this.blocks={}}function v(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=["name"]}function g(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=["name","state","blocks"],this.blocks={}}function y(e,t){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.expr=RegExp.$2,p.call(this,e,t),this.cloneProps=["name","expr"]}function m(e,t){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=["name","args"]}function $(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=["name","args"]}function x(e,t){var n=new RegExp(a("^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$",s(t.options.variableOpen),s(t.options.variableClose)),"i");if(!n.test(e))throw new Error("Invalid "+this.type+" syntax: "+e);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,p.call(this,e,t),this.cloneProps=["list","item","index"]}function w(e,t){p.call(this,e,t)}function E(e,t){w.call(this,e,t)}function b(e,t){p.call(this,e,t)}function C(e,t){t.target=e;var n=t.engine,i=e.name;if(n.targets[i])switch(n.options.namingConflict){case"override":n.targets[i]=e,t.targets.push(i);case"ignore":break;default:throw new Error("Target exists: "+i)}else n.targets[i]=e,t.targets.push(i)}function R(e,t){F[e]=t,t.prototype.type=e}function _(t){this.options={commandOpen:"<!--",commandClose:"-->",commandSyntax:/^\s*(\/)?([a-z]+)\s*(?::([\s\S]*))?$/,variableOpen:"${",variableClose:"}",defaultFilter:"html"},this.config(t),this.targets={},this.filters=e({},O)}function k(e,n){function i(){var e;if(h.length>0&&(e=h.join(""))){var t=new l(e,n);if(t.beforeAdd(f),u.top().addChild(t),h=[],n.options.strip&&f.current instanceof p)t.value=e.replace(/^[\x20\t\r]*\n/,"");f.current=t}}var r,o=n.options.commandOpen,s=n.options.commandClose,a=n.options.commandSyntax,u=new t,f={engine:n,targets:[],stack:u,target:null},h=[];return c(e,o,s,0,function(e){var t=a.exec(e);if(t&&(r=F[t[2].toLowerCase()])&&"function"==typeof r){i();var u=f.current;if(n.options.strip&&u instanceof l)u.value=u.value.replace(/\r?\n[\x20\t]*$/,"\n");if(t[1])u=d(f,r);else{if(u=new r(t[3],n),"function"==typeof u.beforeOpen)u.beforeOpen(f);u.open(f)}f.current=u}else if(!/^\s*\/\//.test(e))h.push(o,e,s);r=null},function(e){h.push(e)}),i(),d(f),f.targets}t.prototype={push:function(e){this.raw[this.length++]=e},pop:function(){if(this.length>0){var e=this.raw[--this.length];return this.raw.length=this.length,e}},top:function(){return this.raw[this.length-1]},bottom:function(){return this.raw[0]},find:function(e){for(var t=this.length;t--;){var n=this.raw[t];if(e(n))return n}}};var P=178245,A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},O={html:function(e){return e.replace(/[&<>"']/g,r)},url:encodeURIComponent,raw:function(e){return e}},S='var r="";',q="r+=",j=";",D="return r;";if("undefined"!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8)S="var r=[],ri=0;",q="r[ri++]=",D='return r.join("");';l.prototype={getRendererBody:function(){var e=this.value,t=this.engine.options;if(!e||t.strip&&/^\s*$/.test(e))return"";else return f(e,this.engine,1)},clone:function(){return this}},p.prototype={addChild:function(e){this.children.push(e)},open:function(e){var t=e.stack.top();t&&t.addChild(this),e.stack.push(this)},close:function(e){if(e.stack.top()===this)e.stack.pop()},getRendererBody:function(){for(var e=[],t=this.children,n=0;n<t.length;n++)e.push(t[n].getRendererBody());return e.join("")},clone:function(){for(var e=this.constructor,t=new e(this.value,this.engine),n=0,i=this.children.length;i>n;n++)t.addChild(this.children[n].clone());for(var n=0,i=this.cloneProps.length;i>n;n++){var r=this.cloneProps[n];t[r]=this[r]}return t}};var T='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(h,p),i(v,p),i(g,p),i(y,p),i(m,p),i($,p),i(x,p),i(w,p),i(E,w),i(b,w);var B={READING:1,READED:2,APPLIED:3,READY:4};g.prototype.applyMaster=h.prototype.applyMaster=function(e){function t(e){var i=e.children;if(i instanceof Array)for(var r=0,o=i.length;o>r;r++){var s=i[r];if(s instanceof v&&n[s.name])s=i[r]=n[s.name];t(s)}}if(this.state>=B.APPLIED)return 1;var n=this.blocks,i=this.engine.targets[e];if(i&&i.applyMaster(i.master))return this.children=i.clone().children,t(this),this.state=B.APPLIED,1;else return void 0},h.prototype.isReady=function(){function e(i){for(var r=0,o=i.children.length;o>r;r++){var s=i.children[r];if(s instanceof g){var a=t.targets[s.name];n=n&&a&&a.isReady(t)}else if(s instanceof p)e(s)}}if(this.state>=B.READY)return 1;var t=this.engine,n=1;if(this.applyMaster(this.master))return e(this),n&&(this.state=B.READY),n;else return void 0},h.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var e=new Function("data","engine",[T,S,this.getRendererBody(),D].join("\n")),t=this.engine;return this.renderer=function(n){return e(n,t)},this.renderer}return null},h.prototype.open=function(e){d(e),p.prototype.open.call(this,e),this.state=B.READING,C(this,e)},y.prototype.open=$.prototype.open=function(e){e.stack.top().addChild(this)},v.prototype.open=function(e){p.prototype.open.call(this,e),e.stack.find(function(e){return e.blocks}).blocks[this.name]=this},E.prototype.open=function(e){var t=new b;t.open(e);var n=d(e,w);n.addChild(this),e.stack.push(this)},b.prototype.open=function(e){var t=d(e,w);t.addChild(this),e.stack.push(this)},g.prototype.open=function(e){this.parent=e.stack.top(),this.target=e.target,p.prototype.open.call(this,e),this.state=B.READING},$.prototype.close=y.prototype.close=function(){},g.prototype.close=function(e){p.prototype.close.call(this,e),this.state=B.READED},h.prototype.close=function(e){p.prototype.close.call(this,e),this.state=this.master?B.READED:B.APPLIED,e.target=null},g.prototype.autoClose=function(e){var t=this.parent.children;t.push.apply(t,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(e)},$.prototype.beforeOpen=g.prototype.beforeOpen=y.prototype.beforeOpen=x.prototype.beforeOpen=m.prototype.beforeOpen=v.prototype.beforeOpen=w.prototype.beforeOpen=l.prototype.beforeAdd=function(e){if(!e.stack.bottom()){var t=new h(n(),e.engine);t.open(e)}},g.prototype.getRendererBody=function(){return this.applyMaster(this.name),p.prototype.getRendererBody.call(this)},$.prototype.getRendererBody=function(){return a("{0}engine.render({2},{{3}}){1}",q,j,o(this.name),f(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(e,t,n){return(t||"")+o(n)+":"}))},y.prototype.getRendererBody=function(){if(this.expr)return a("v[{0}]={1};",o(this.name),f(this.expr,this.engine));else return""},w.prototype.getRendererBody=function(){return a("if({0}){{1}}",f(this.value,this.engine),p.prototype.getRendererBody.call(this))},b.prototype.getRendererBody=function(){return a("}else{{0}",p.prototype.getRendererBody.call(this))},x.prototype.getRendererBody=function(){return a('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',n(),f(this.list,this.engine),o(this.index||n()),o(this.item),n(),n(),p.prototype.getRendererBody.call(this))},m.prototype.getRendererBody=function(){var e=this.args;return a("{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}",S,D,q,j,p.prototype.getRendererBody.call(this),o(this.name),e?","+f(e,this.engine):"")};var F={};R("target",h),R("block",v),R("import",g),R("use",$),R("var",y),R("for",x),R("if",w),R("elif",E),R("else",b),R("filter",m),_.prototype.config=function(t){e(this.options,t)},_.prototype.compile=_.prototype.parse=function(e){if(e){var t=k(e,this);if(t.length)return this.targets[t[0]].getRenderer()}return new Function('return ""')},_.prototype.getRenderer=function(e){var t=this.targets[e];if(t)return t.getRenderer();else return void 0},_.prototype.render=function(e,t){var n=this.getRenderer(e);if(n)return n(t);else return""},_.prototype.addFilter=function(e,t){if("function"==typeof t)this.filters[e]=t};var I=new _;return I.Engine=_,I}),define("cc/function/toString",["require","exports","module"],function(){"use strict";return function(e,t){var n=$.type(e);if("number"===n)e=""+e;else if("string"!==n){if(1===arguments.length)t="";e=t}return e}}),define("cc/function/offsetParent",["require","exports","module"],function(){"use strict";function e(e){return e.is("body")||"static"!==e.css("position")}return function(t){if(t.is("body"))return t;for(var n=t.parent();!e(n);)n=n.parent();return n}}),define("cc/function/guid",["require","exports","module"],function(){var e=0;return function(){return"cc_"+e++}}),define("cc/function/around",["require","exports","module"],function(){"use strict";return function(e,t,n,i){var r="string"===$.type(t),o=r?e[t]:e;if(!r)i=n,n=t;var s=function(){var e,t=$.makeArray(arguments);if($.isFunction(n))e=n.apply(this,t);if(e!==!1){if($.isFunction(o))e=o.apply(this,t);if($.isFunction(i)){t.push(e);var r=i.apply(this,t);if("undefined"!==$.type(r))e=r}return e}};return r?e[t]=s:s}}),define("cc/function/extend",["require","exports","module"],function(){"use strict";return function(e,t){if($.isPlainObject(t))$.each(t,function(t,n){if(!(t in e))e[t]=n})}}),define("cc/function/replaceWith",["require"],function(){"use strict";return function(e,t){e=e[0],t=t[0],e.parentNode.replaceChild(t,e)}}),define("cc/function/nextTick",["require","exports","module"],function(){"use strict";return function(e){var t=setTimeout(e,0);return function(){clearTimeout(t)}}}),define("cc/function/toBoolean",["require","exports","module"],function(){"use strict";return function(e,t){if("boolean"!==$.type(e)){if(1===arguments.length)t=!!e;e=t}return e}}),define("cc/function/createEvent",["require","exports","module"],function(){"use strict";return function(e){if(e&&!e[$.expando])e="string"===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event()}}),define("cc/util/event",["require","exports","module","../function/extend","../function/createEvent"],function(require,exports){"use strict";var e=require("../function/extend"),t=require("../function/createEvent"),n={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$},on:function(e,t,n){return this.get$().on(e,t,n),this},once:function(e,t,n){return this.get$().one(e,t,n),this},off:function(e,t){return this.get$().off(e,t),this},emit:function(e,n){return e=t(e),this.get$().trigger(e,n),e}};exports.extend=function(t){e(t,n)}}),define("cc/util/life",["require","exports","module","../function/guid","../function/around","../function/extend","../function/ucFirst","../function/nextTick","../function/toBoolean","../function/createEvent","../function/replaceWith","../function/offsetParent","./event"],function(require,exports){"use strict";function e(e,t,n,i,r){return function(a,u,c){var f=this;if($.isPlainObject(a))return c=u,void $.each(a,function(e,t){f[n](e,t,c)});c=c||{};var l=f[i](a),d=f.constructor[e+"Validator"];if(d)if($.isFunction(d[a]))u=d[a].call(f,u,c);if($.isFunction(r))u=r(f,u,c);if(l!==u||c.force)if(f[t][a]=u,!c.silent){var h={};o(h,c),h.newValue=u,h.oldValue=l;var v={};v[a]=h;var g=function(e){if(e&&e[a])f.execute(e[a],[u,l,h])};if(g(f.inner("watchSync")),g(f.option("watchSync")),c.sync)return g(f.constructor[e+"Updater"]),g(f.option("watch")),void f.emit(e+"change",v);var y=f.inner(e+"Changes");if(!y)y={},f.inner(e+"Changes",y);if($.extend(y,v),!f.inner(p))f.inner(p,s(function(){f.sync(p)}))}}}function t(){this.error("initStruct() can just call one time.")}function n(e,t,n,i,r){var o,s="before"===i?"_"+t:t+"_",a=e[s];if($.isFunction(a))if(o=a.apply(e,n),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var u=!1;if(o&&o.dispatch)u=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+t,e.emit(r,o),u)e.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0}var i=require("../function/guid"),r=require("../function/around"),o=require("../function/extend"),s=(require("../function/ucFirst"),require("../function/nextTick")),a=require("../function/toBoolean"),u=require("../function/createEvent"),c=require("../function/replaceWith"),f=(require("../function/offsetParent"),require("./event")),l={},p="__update_async__",d={},h={initStruct:function(){var e=this,n=e.option("mainElement"),i=e.option("mainTemplate");if("string"===$.type(i)){var r=e.option("share"),o=e.type+i;if(r)n=d[o];var s;if(!n){if(s=$(i),r)d[o]=s}else if(e.option("replace"))c(n,s=$(i));else n.html(i);if(s)n=s,e.option("mainElement",n)}var a=e.option("parentSelector");if(a&&!n.parent().is(a))n.appendTo(a);e.initStruct=t},warn:function(e){if("undefined"!=typeof console)console.warn(["[CC warn]",this.type,e].join(" "))},error:function(e){throw new Error(["[CC error]",this.type,e].join(" "))},live:function(e,t,n){var i=this,r=i.inner("main");if(r)r.on(e+i.namespace(),t,n);return i},emit:function(e,t){var n=this,i=n.option("context")||n;e=u(e),e.cc=i;var r=[e];if($.isPlainObject(t))r.push(t);e.type=e.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var s="on"+e.type;if(!e.isPropagationStopped()&&i.execute(s,r)===!1)e.preventDefault(),e.stopPropagation();return i.execute(s+"_",r),e},dispatch:function(e,t){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(e);if(n.type="dispatch",this.emit(n,t),n.isPropagationStopped())e.preventDefault(),e.stopPropagation()}},before:function(e,t){return this.on("before"+e.toLowerCase(),t)},after:function(e,t){return this.on("after"+e.toLowerCase(),t)},find:function(e){var t=this.inner("main");if(t){var n=t.find(e);if(n.length)return n}},appendTo:function(e){var t=this.inner("main");if(t)t.appendTo(e)},prependTo:function(e){var t=this.inner("main");if(t)t.prependTo(e)},execute:function(e,t){var n=this,i=e;if("string"===$.type(e))i=n.option(e);if($.isFunction(i)){var r=n.option("context")||n;if($.isArray(t))return i.apply(r,t);else return i.call(r,t)}},renderWith:function(e,t,n){var i=this;if(!t)if(t=i.option("renderTemplate"),!t)t=i.option("mainTemplate");if(!n)n=i.option("mainElement");var r=i.option("renderSelector");if(r)n=n.find(r);var o;if($.isPlainObject(e)||$.isArray(e))o=i.execute("render",[e,t]);else if("string"===$.type(e))o=e;n.html(o)},namespace:function(){return"."+this.guid},option:function(e,t){var n=this;if(1===arguments.length&&"string"===$.type(e))return n.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.option(e,t)});n.options[e]=t}},inner:function(e,t){var n=this,i=n.inners||{};if(1===arguments.length&&"string"===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.inner(e,t)});i[e]=t}},is:function(e){return this.states[e]},state:e("state","states","state","is",function(e,t){return a(t,!1)}),get:function(e){return this.properties[e]},set:e("property","properties","set","get")},v={sync:function(){var e=this,t=function(t,n,i){$.each(t,function(r,o){return e.execute(n[r],[o.newValue,o.oldValue,i?t:o])})};if($.each(["property","state"],function(n,i){var r=e.inner(i+"Changes");if(r){e.inner(i+"Changes",null);var o=e.constructor[i+"Updater"];if(o)t(r,o,!0);var s=e.option("watch");if(s)t(r,s);e.emit(i+"change",r)}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1)},_sync:function(){if(!this.inner(p))return!1;else return void 0},_init:function(){var e="initCalled";if(this.is(e))return!1;else return void this.state(e,!0)},_dispose:function(){var e="disposeCalled";if(this.is(e))return!1;else return void this.state(e,!0)}};exports.extend=function(e,t){o(e,v),$.each(e,function(i,o){var s=i.indexOf("_");if($.isFunction(o)&&0!==s&&s!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var a=function(e){return n(this,i,arguments,"before",e)},u=function(e){var t=this,r=arguments,s=function(){return n(t,i,r,"after",e)};if(o.length+1===r.length){var a=r[r.length-1];if(a&&$.isFunction(a.then))return void a.then(s)}s()};r(e,i,a,u)}}),o(e,h),f.extend(e)},exports.init=function(e,t){if(!t)t={};return o(t,e.constructor.defaultOptions),t.onafterinit_=function(){e.state("inited",!0)},t.onafterdispose_=function(){e.state("disposed",!0),e.off();var t=e.inner("main");if(e.option("removeOnDispose")&&t)t.remove();s(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null})},l[e.guid=i()]=e,e.properties={},e.options=t,e.states={},e.inners={},e.init(),e},exports.dispose=function(e){e.sync();var t=e.inner("main")||e.option("mainElement");if(t)t.off(e.namespace())}}),define("cc/ui/Tree",["require","exports","module","../function/toString","../util/life"],function(require){"use strict";function e(e){r.init(this,e)}function t(e,t){var n,i=e.inner("main");if(t.jquery)n=t;else{var r=e.option("idAttribute");if(t||0===t)n=i.find("["+r+'="'+t+'"]');else i.find("["+r+"]").each(function(){var e=$(this),t=e.attr(r);if(""===t)return n=e,!1;else return void 0})}if(n&&1===n.length)if(n=n.closest(e.option("nodeSelector")),1===n.length)return n}function n(e,t,i,r){var o=i(e,t);if(o!==!1){if($.isArray(e.children))$.each(e.children,function(t,s){return o=n(s,e,i,r)});if(o!==!1)o=r(e,t)}return o}var i=require("../function/toString"),r=require("../util/life"),o=e.prototype;return o.type="Tree",o.init=function(){var e=this;e.initStruct();var n=e.option("mainElement"),i="click"+e.namespace(),r=e.option("idAttribute"),o=e.option("labelSelector");if(o)n.on(i,o,function(){var n=t(e,$(this));e.select(n.attr(r))});var s=e.option("toggleSelector");if(s){var a=e.option("nodeExpandedClass");n.on(i,s,function(){var n=t(e,$(this));if(n){var i=n.attr(r);if(n.hasClass(a))e.collapse(i);else e.expand(i)}})}e.inner({main:n}),e.set({data:e.option("data"),value:e.option("value")})},o.render=function(e){var n=this,i="";if(n.walk({leave:function(t,r){var o="";if(t.children)$.each(t.children,function(e,t){o+=r[t.id].view});var s=r[t.id];if(s.view=n.execute("render",[{node:t,cache:s,childrenView:o},n.option("nodeTemplate")]),null==e){if(!s.level)i+=s.view}else if(e==t.id)return i+=s.view,!1}}),null==e)n.inner("main").html(i);else{var r=t(n,e);if(r)r.replaceWith(i)}},o.load=function(e){var t,n=this,i=$.Deferred();if(n.walk({enter:function(n){if(n.id==e)return t=n,!1;else return void 0}}),t)n.execute("load",[t,function(e,t){if(e)i.reject(e);else i.resolve(t)}]);else i.reject("node["+e+"] is not found.");return i},o.walk=function(e,t){var i=this;if(1===arguments.length)t=e,e=i.get("data");if(!$.isArray(e))e=[e];var r=t.enter||$.noop,o=t.leave||$.noop,s={};$.each(e,function(e,t){n(t,null,function(e,t){var n=t?s[t.id].level+1:0;return s[e.id]={level:n,parent:t},r(e,s)},function(e){return o(e,s)})})},o.grep=function(e){var t;return this.walk({enter:function(n){if(n.id==e)return t=n,!1;else return void 0}}),t},o.select=function(e){this.set("value",e)},o.unselect=function(){this.set("value","")},o.expand=function(e){var n=this;n.grep(e).expanded=!0,t(n,e).removeClass(n.option("nodeCollapsedClass")).addClass(n.option("nodeExpandedClass"))},o.collapse=function(e){var n=this;n.grep(e).expanded=!1,t(n,e).removeClass(n.option("nodeExpandedClass")).addClass(n.option("nodeCollapsedClass"))},o._select=o._expand=o._collapse=function(e){var n=this,i=n.grep(e);if(i&&t(n,e))return{node:i};else return!1},o._render=function(e){if(null!=e){var n=this.grep(e);if(n&&t(this,e))return{node:n};else return!1}},o.select_=o.expand_=o.collapse_=function(e){return{node:this.grep(e)}},o.render_=function(e){if(null!=e)return{node:this.grep(e)};else return void 0},o.dispose=function(){r.dispose(this)},r.extend(o),e.propertyUpdater={data:function(){this.render()},value:function(e,n){var i=this,r=i.option("nodeActiveClass");if(r){var o,s;if(n)if(o=i.grep(n),s=t(i,n),o&&s)o.active=!1,s.removeClass(r);if(e)if(o=i.grep(e),s=t(i,e),o&&s)o.active=!0,s.addClass(r)}}},e.propertyValidator={data:function(e){return $.isArray(e)?e:[]},value:function(e){return i(e)}},e}),define("pc/common/custom/ui/Tree",["require","exports","module","cc/ui/Tree","cc/util/etpl"],function(require){"use strict";var e=require("cc/ui/Tree"),t=require("cc/util/etpl"),n={};return e.defaultOptions={labelSelector:".tree-node > label",toggleSelector:".tree-node > .fa",nodeActiveClass:"active",nodeExpandedClass:"expanded",nodeCollapsedClass:"collapsed",nodeSelector:".tree",idAttribute:"data-id",nodeTemplate:'<div class="tree<!-- if: ${node.expanded} --> expanded<!-- /if --><!-- if: ${node.active} --> active<!-- /if --><!-- if: ${cache.parent} --> sub-tree" data-parent-id="${cache.parent.id}"<!-- else -->"<!-- /if --> data-id="${node.id}" data-level="${cache.level}"><div class="tree-node"><!-- if: !${node.children} || ${node.children.length} > 0 --><!-- if: ${node.expanded} --><i class="fa fa-minus-square${className}"></i><!-- else --><i class="fa fa-plus-square${className}"></i><!-- /if --><!-- /if --><label>${node.name}</label></div><!-- if: ${node.children} --><div class="tree-children">${childrenView|raw}</div><!-- /if --></div>',render:function(e,i){var r=n[i];if(!r)r=n[i]=t.compile(i);return r(e)},onbeforeexpand:function(e,t){var n=t.node.id;if(n){var i=this,r=i.grep(n);if(r){var o=i.find('[data-id="'+n+'"]'),s=o.find(".tree-children");if(!r.children){if(!s.length)s=$('<div class="tree-children"></div>'),o.append(s);s.html('<div class="tree-status">loading</div>'),i.load(n).then(function(e){r.children=e,i.render(n)})}else if(!r.children.length)s.html('<div class="tree-status">loading</div>')}}},onafterexpand:function(e,t){var n=t.node.id;if(n){var i=this,r=i.grep(n);if(r){var o=i.find('[data-id="'+n+'"]'),s=o.find(".fa-plus-square").eq(0);if(s.length)s.removeClass("fa-plus-square").addClass("fa-minus-square")}}},onaftercollapse:function(e,t){var n=t.node.id;if(n){var i=this,r=i.grep(n);if(r){var o=i.find('[data-id="'+n+'"]'),s=o.find(".fa-minus-square").eq(0);if(s.length)s.removeClass("fa-minus-square").addClass("fa-plus-square")}}}},e});