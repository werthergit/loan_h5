define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,t,n,i){var r='string'===$.type(t),o=r?e[t]:e;if(!r)i=n,n=t;var s=function(){var e,t=$.makeArray(arguments);if($.isFunction(n))e=n.apply(this,t);if(e!==!1){if($.isFunction(o))e=o.apply(this,t);if($.isFunction(i)){t.push(e);var r=i.apply(this,t);if('undefined'!==$.type(r))e=r;}return e;}};return r?e[t]=s:s;};}),define('cc/util/etpl',function(){function e(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n];return e;}function t(){this.raw=[],this.length=0;}function n(){return'___'+O++;}function i(e,t){var n=new Function();n.prototype=t.prototype,e.prototype=new n(),e.prototype.constructor=e;}function r(e){return C[e];}function o(e){return'"'+e.replace(/\x5C/g,'\\\\').replace(/"/g,'\\"').replace(/\x0A/g,'\\n').replace(/\x09/g,'\\t').replace(/\x0D/g,'\\r')+'"';}function s(e){return e.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(e){return'\\'+e;});}function u(e){var t=arguments;return e.replace(/\{([0-9]+)\}/g,function(e,n){return t[n-0+1];});}function a(e){return e=e.replace(/^\s*\*/,''),u('gv({0},["{1}"])',o(e),e.replace(/\[['"]?([^'"]+)['"]?\]/g,function(e,t){return'.'+t;}).split('.').join('","'));}function c(e,t,n,i,r,o){for(var s=n.length,u=e.split(t),a=0,c=[],f=0,l=u.length;l>f;f++){var p=u[f];if(f){var h=1;for(a++;;){var d=p.indexOf(n);if(0>d){c.push(a>1&&h?t:'',p);break;}if(a=i?a-1:0,c.push(a>0&&h?t:'',p.slice(0,d),a>0?n:''),p=p.slice(d+s),h=0,0===a)break;}if(0===a)r(c.join('')),o(p),c=[];}else p&&o(p);}if(a>0&&c.length>0)o(t),o(c.join(''));}function f(e,t,n){var i,r=[],s=t.options,u='',l='',p='',h='';if(n)u='ts(',l=')',p=F,h=j,i=s.defaultFilter;return c(e,s.variableOpen,s.variableClose,1,function(e){if(n&&e.indexOf('|')<0&&i)e+='|'+i;var o=e.indexOf('|'),s=(o>0?e.slice(0,o):e).replace(/^\s+/,'').replace(/\s+$/,''),c=o>0?e.slice(o+1):'',d=0===s.indexOf('*'),v=[d?'':u,a(s),d?'':l];if(c){c=f(c,t);for(var g=c.split('|'),m=0,y=g.length;y>m;m++){var $=g[m];if(/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test($)){if(v.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3)v.push(',',RegExp.$3);v.push(')');}}}r.push(p,v.join(''),h);},function(e){r.push(p,n?o(e):e,h);}),r.join('');}function l(e,t){this.value=e,this.engine=t;}function p(e,t){this.value=e,this.engine=t,this.children=[],this.cloneProps=[];}function h(e,t){var n=e.stack,i=t?n.find(function(e){return e instanceof t;}):n.bottom();if(i){for(var r;(r=n.top())!==i;){if(!r.autoClose)throw new Error(r.type+' must be closed manually: '+r.value);r.autoClose(e);}i.close(e);}return i;}function d(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.master=RegExp.$3,this.name=RegExp.$1,p.call(this,e,t),this.blocks={};}function v(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=['name'];}function g(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.name=RegExp.$1,p.call(this,e,t),this.cloneProps=['name','state','blocks'],this.blocks={};}function m(e,t){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.name=RegExp.$1,this.expr=RegExp.$2,p.call(this,e,t),this.cloneProps=['name','expr'];}function y(e,t){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=['name','args'];}function $(e,t){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.name=RegExp.$1,this.args=RegExp.$3,p.call(this,e,t),this.cloneProps=['name','args'];}function x(e,t){var n=new RegExp(u('^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$',s(t.options.variableOpen),s(t.options.variableClose)),'i');if(!n.test(e))throw new Error('Invalid '+this.type+' syntax: '+e);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,p.call(this,e,t),this.cloneProps=['list','item','index'];}function E(e,t){p.call(this,e,t);}function b(e,t){E.call(this,e,t);}function w(e,t){p.call(this,e,t);}function R(e,t){t.target=e;var n=t.engine,i=e.name;if(n.targets[i])switch(n.options.namingConflict){case'override':n.targets[i]=e,t.targets.push(i);case'ignore':break;default:throw new Error('Target exists: '+i);}else n.targets[i]=e,t.targets.push(i);}function P(e,t){S[e]=t,t.prototype.type=e;}function k(t){this.options={commandOpen:'<!--',commandClose:'-->',commandSyntax:/^\s*(\/)?([a-z]+)\s*(?::([\s\S]*))?$/,variableOpen:'${',variableClose:'}',defaultFilter:'html'},this.config(t),this.targets={},this.filters=e({},q);}function A(e,n){function i(){var e;if(d.length>0&&(e=d.join(''))){var t=new l(e,n);if(t.beforeAdd(f),a.top().addChild(t),d=[],n.options.strip&&f.current instanceof p)t.value=e.replace(/^[\x20\t\r]*\n/,'');f.current=t;}}var r,o=n.options.commandOpen,s=n.options.commandClose,u=n.options.commandSyntax,a=new t(),f={engine:n,targets:[],stack:a,target:null},d=[];return c(e,o,s,0,function(e){var t=u.exec(e);if(t&&(r=S[t[2].toLowerCase()])&&'function'==typeof r){i();var a=f.current;if(n.options.strip&&a instanceof l)a.value=a.value.replace(/\r?\n[\x20\t]*$/,'\n');if(t[1])a=h(f,r);else{if(a=new r(t[3],n),'function'==typeof a.beforeOpen)a.beforeOpen(f);a.open(f);}f.current=a;}else if(!/^\s*\/\//.test(e))d.push(o,e,s);r=null;},function(e){d.push(e);}),i(),h(f),f.targets;}t.prototype={push:function(e){this.raw[this.length++]=e;},pop:function(){if(this.length>0){var e=this.raw[--this.length];return this.raw.length=this.length,e;}},top:function(){return this.raw[this.length-1];},bottom:function(){return this.raw[0];},find:function(e){for(var t=this.length;t--;){var n=this.raw[t];if(e(n))return n;}}};var O=178245,C={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},q={html:function(e){return e.replace(/[&<>"']/g,r);},url:encodeURIComponent,raw:function(e){return e;}},_='var r="";',F='r+=',j=';',D='return r;';if('undefined'!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8)_='var r=[],ri=0;',F='r[ri++]=',D='return r.join("");';l.prototype={getRendererBody:function(){var e=this.value,t=this.engine.options;if(!e||t.strip&&/^\s*$/.test(e))return'';else return f(e,this.engine,1);},clone:function(){return this;}},p.prototype={addChild:function(e){this.children.push(e);},open:function(e){var t=e.stack.top();t&&t.addChild(this),e.stack.push(this);},close:function(e){if(e.stack.top()===this)e.stack.pop();},getRendererBody:function(){for(var e=[],t=this.children,n=0;n<t.length;n++)e.push(t[n].getRendererBody());return e.join('');},clone:function(){for(var e=this.constructor,t=new e(this.value,this.engine),n=0,i=this.children.length;i>n;n++)t.addChild(this.children[n].clone());for(var n=0,i=this.cloneProps.length;i>n;n++){var r=this.cloneProps[n];t[r]=this[r];}return t;}};var B='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(d,p),i(v,p),i(g,p),i(m,p),i(y,p),i($,p),i(x,p),i(E,p),i(b,E),i(w,E);var T={READING:1,READED:2,APPLIED:3,READY:4};g.prototype.applyMaster=d.prototype.applyMaster=function(e){function t(e){var i=e.children;if(i instanceof Array)for(var r=0,o=i.length;o>r;r++){var s=i[r];if(s instanceof v&&n[s.name])s=i[r]=n[s.name];t(s);}}if(this.state>=T.APPLIED)return 1;var n=this.blocks,i=this.engine.targets[e];if(i&&i.applyMaster(i.master))return this.children=i.clone().children,t(this),this.state=T.APPLIED,1;else return void 0;},d.prototype.isReady=function(){function e(i){for(var r=0,o=i.children.length;o>r;r++){var s=i.children[r];if(s instanceof g){var u=t.targets[s.name];n=n&&u&&u.isReady(t);}else if(s instanceof p)e(s);}}if(this.state>=T.READY)return 1;var t=this.engine,n=1;if(this.applyMaster(this.master))return e(this),n&&(this.state=T.READY),n;else return void 0;},d.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var e=new Function('data','engine',[B,_,this.getRendererBody(),D].join('\n')),t=this.engine;return this.renderer=function(n){return e(n,t);},this.renderer;}return null;},d.prototype.open=function(e){h(e),p.prototype.open.call(this,e),this.state=T.READING,R(this,e);},m.prototype.open=$.prototype.open=function(e){e.stack.top().addChild(this);},v.prototype.open=function(e){p.prototype.open.call(this,e),e.stack.find(function(e){return e.blocks;}).blocks[this.name]=this;},b.prototype.open=function(e){var t=new w();t.open(e);var n=h(e,E);n.addChild(this),e.stack.push(this);},w.prototype.open=function(e){var t=h(e,E);t.addChild(this),e.stack.push(this);},g.prototype.open=function(e){this.parent=e.stack.top(),this.target=e.target,p.prototype.open.call(this,e),this.state=T.READING;},$.prototype.close=m.prototype.close=function(){},g.prototype.close=function(e){p.prototype.close.call(this,e),this.state=T.READED;},d.prototype.close=function(e){p.prototype.close.call(this,e),this.state=this.master?T.READED:T.APPLIED,e.target=null;},g.prototype.autoClose=function(e){var t=this.parent.children;t.push.apply(t,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(e);},$.prototype.beforeOpen=g.prototype.beforeOpen=m.prototype.beforeOpen=x.prototype.beforeOpen=y.prototype.beforeOpen=v.prototype.beforeOpen=E.prototype.beforeOpen=l.prototype.beforeAdd=function(e){if(!e.stack.bottom()){var t=new d(n(),e.engine);t.open(e);}},g.prototype.getRendererBody=function(){return this.applyMaster(this.name),p.prototype.getRendererBody.call(this);},$.prototype.getRendererBody=function(){return u('{0}engine.render({2},{{3}}){1}',F,j,o(this.name),f(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(e,t,n){return(t||'')+o(n)+':';}));},m.prototype.getRendererBody=function(){if(this.expr)return u('v[{0}]={1};',o(this.name),f(this.expr,this.engine));else return'';},E.prototype.getRendererBody=function(){return u('if({0}){{1}}',f(this.value,this.engine),p.prototype.getRendererBody.call(this));},w.prototype.getRendererBody=function(){return u('}else{{0}',p.prototype.getRendererBody.call(this));},x.prototype.getRendererBody=function(){return u('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',n(),f(this.list,this.engine),o(this.index||n()),o(this.item),n(),n(),p.prototype.getRendererBody.call(this));},y.prototype.getRendererBody=function(){var e=this.args;return u('{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}',_,D,F,j,p.prototype.getRendererBody.call(this),o(this.name),e?','+f(e,this.engine):'');};var S={};P('target',d),P('block',v),P('import',g),P('use',$),P('var',m),P('for',x),P('if',E),P('elif',b),P('else',w),P('filter',y),k.prototype.config=function(t){e(this.options,t);},k.prototype.compile=k.prototype.parse=function(e){if(e){var t=A(e,this);if(t.length)return this.targets[t[0]].getRenderer();}return new Function('return ""');},k.prototype.getRenderer=function(e){var t=this.targets[e];if(t)return t.getRenderer();else return void 0;},k.prototype.render=function(e,t){var n=this.getRenderer(e);if(n)return n(t);else return'';},k.prototype.addFilter=function(e,t){if('function'==typeof t)this.filters[e]=t;};var I=new k();return I.Engine=k,I;}),define('cc/function/isHidden',['require','exports','module'],function(){'use strict';return function(e){e.css('display');return'none'===e.css('display')||0==e.css('opacity')||'hidden'===e.css('visibility');};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var t=setTimeout(e,0);return function(){clearTimeout(t);};};}),define('cc/function/debounce',['require','exports','module'],function(){'use strict';return function(e,t,n){function i(n){o=setTimeout(function(){o=null,r=$.now(),e.apply(null,$.makeArray(n));},t);}t='number'===$.type(t)?t:50;var r,o;return function(){if(n&&r>0&&$.now()-r<t)clearTimeout(o),o=null;if(!o)i(arguments);};};}),define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var e={'int':parseInt,'float':parseFloat};return function(t,n,i){if('number'!==$.type(t)){var r=e[i];if(r)t=r(t,10);else if($.isNumeric(t))t=+t;else t=0/0;}return isNaN(t)?n:t;};}),define('cc/function/keys',['require','exports','module'],function(){'use strict';return function(e){if(Object.keys)return Object.keys(e);var t=[];return $.each(e,function(e){t.push(e);}),t;};}),define('cc/function/allPromises',['require','exports','module'],function(){'use strict';return function(e){var t=$.Deferred();return $.when.apply($,e).then(function(){t.resolve($.makeArray(arguments));},function(){t.reject($.makeArray(arguments));}),t;};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(t){if(t.is('body'))return t;for(var n=t.parent();!e(n);)n=n.parent();return n;};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,t){e=e[0],t=t[0],e.parentNode.replaceChild(t,e);};}),define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,t){if($.isPlainObject(t))$.each(t,function(t,n){if(!(t in e))e[t]=n;});};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,t){if('boolean'!==$.type(e)){if(1===arguments.length)t=!!e;e=t;}return e;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/function/waitPromises',['require','exports','module','./allPromises'],function(require){'use strict';var e=require('./allPromises');return function(t,n){var i=[],r=[];if($.each(t,function(e,t){if($.isFunction(t.then))i.push(t),r.push(e);}),i.length>0)return e(i).then(function(e){$.each(e,function(e,n){t[r[e]]=n;}),n();});else return n();};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),t=require('../function/createEvent'),n={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,t,n){return this.get$().on(e,t,n),this;},once:function(e,t,n){return this.get$().one(e,t,n),this;},off:function(e,t){return this.get$().off(e,t),this;},emit:function(e,n){return e=t(e),this.get$().trigger(e,n),e;}};exports.extend=function(t){e(t,n);};}),define('cc/util/validator',['require','exports','module','../function/allPromises','../function/keys'],function(require,exports){'use strict';function e(e){var t={};return $.each(e,function(e,n){if(n.name)t[n.name]=n;}),t;}var t=require('../function/allPromises'),n=require('../function/keys'),i={required:function(e,t){if(0===e.value||e.value)return!0;var n=t.required;if(n===!0)return!1;else return void 0;},pattern:function(e,t){var n=t.pattern;if('string'===$.type(n))n=exports.buildInPatterns[n];if(n instanceof RegExp)return n.test(e.value);else return void 0;},minlength:function(e,t){var n=t.minlength;if($.isNumeric(n))return e.value.length>=+n;else return void 0;},maxlength:function(e,t){var n=t.maxlength;if($.isNumeric(n))return e.value.length<=+n;else return void 0;},min:function(e,t){var n=t.min;if($.isNumeric(n))return e.value>=+n;else return void 0;},max:function(e,t){var n=t.max;if($.isNumeric(n))return e.value<=+n;else return void 0;},step:function(e,t){var n=t.min,i=t.step;if($.isNumeric(n)&&$.isNumeric(i))return(e.value-n)%i===0;else return void 0;},equals:function(e,t,n){var i=t.equals;if('string'===$.type(i))return e.value===n[i].value;else return void 0;}};exports.buildInPatterns={},exports.validate=function(r,o,s){var u=[],a=[];if(!$.isArray(s))s=n(r);if($.each(s,function(s,c){var f=r[c],l=o[c];if(l){var p=$.extend({name:c},f);if($.isFunction(l.before)&&l.before(r,e(u))===!1)return void u.push(p);var h,d=l.rules,v=[],g=[],m=d.required;if($.isFunction(m))m=m(f,d,r);if(''!==f.value||m===!0){var y=function(e,t){if(t===!1)h=e;else if(t&&$.isFunction(t.then))t.then(y),v.push(e),g.push(t);else if('boolean'!==$.type(t))t=!1;return t;},x=function(e,t){if(!$.isFunction(t))t=i[e];if($.isFunction(t))return y(e,t(f,d,r));else return void 0;},E=$.isArray(l.sequence)?l.sequence:n(d);$.each(E,function(e,t){return x(t,d[t]);});}var s,b=function(){if(h){p.rule=h;var t=l.errors[h];if($.isFunction(t))t=t(f,d,r);p.error=t;}if($.isFunction(l.after))l.after(p,e(u));};if(g.length){var w=t(g).then(function(e){$.each(e,function(e,t){if(t===!1)return h=v[e],!1;else return void 0;}),b(),u[s-1]=p;});s=u.push(w),a.push(w);}else b(),u.push(p);}}),a.length)return t(a).then(function(){return u;});else return u;};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,t,n,i,r){return function(u,a,c){var f=this;if($.isPlainObject(u))return c=a,void $.each(u,function(e,t){f[n](e,t,c);});c=c||{};var l=f[i](u),h=f.constructor[e+'Validator'];if(h)if($.isFunction(h[u]))a=h[u].call(f,a,c);if($.isFunction(r))a=r(f,a,c);if(l!==a||c.force)if(f[t][u]=a,!c.silent){var d={};o(d,c),d.newValue=a,d.oldValue=l;var v={};v[u]=d;var g=function(e){if(e&&e[u])f.execute(e[u],[a,l,d]);};if(g(f.inner('watchSync')),g(f.option('watchSync')),c.sync)return g(f.constructor[e+'Updater']),g(f.option('watch')),void f.emit(e+'change',v);var m=f.inner(e+'Changes');if(!m)m={},f.inner(e+'Changes',m);if($.extend(m,v),!f.inner(p))f.inner(p,s(function(){f.sync(p);}));}};}function t(){this.error('initStruct() can just call one time.');}function n(e,t,n,i,r){var o,s='before'===i?'_'+t:t+'_',u=e[s];if($.isFunction(u))if(o=u.apply(e,n),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var a=!1;if(o&&o.dispatch)a=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+t,e.emit(r,o),a)e.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),s=(require('../function/ucFirst'),require('../function/nextTick')),u=require('../function/toBoolean'),a=require('../function/createEvent'),c=require('../function/replaceWith'),f=(require('../function/offsetParent'),require('./event')),l={},p='__update_async__',h={},d={initStruct:function(){var e=this,n=e.option('mainElement'),i=e.option('mainTemplate');if('string'===$.type(i)){var r=e.option('share'),o=e.type+i;if(r)n=h[o];var s;if(!n){if(s=$(i),r)h[o]=s;}else if(e.option('replace'))c(n,s=$(i));else n.html(i);if(s)n=s,e.option('mainElement',n);}var u=e.option('parentSelector');if(u&&!n.parent().is(u))n.appendTo(u);e.initStruct=t;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,t,n){var i=this,r=i.inner('main');if(r)r.on(e+i.namespace(),t,n);return i;},emit:function(e,t){var n=this,i=n.option('context')||n;e=a(e),e.cc=i;var r=[e];if($.isPlainObject(t))r.push(t);e.type=e.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var s='on'+e.type;if(!e.isPropagationStopped()&&i.execute(s,r)===!1)e.preventDefault(),e.stopPropagation();return i.execute(s+'_',r),e;},dispatch:function(e,t){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(e);if(n.type='dispatch',this.emit(n,t),n.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,t){return this.on('before'+e.toLowerCase(),t);},after:function(e,t){return this.on('after'+e.toLowerCase(),t);},find:function(e){var t=this.inner('main');if(t){var n=t.find(e);if(n.length)return n;}},appendTo:function(e){var t=this.inner('main');if(t)t.appendTo(e);},prependTo:function(e){var t=this.inner('main');if(t)t.prependTo(e);},execute:function(e,t){var n=this,i=e;if('string'===$.type(e))i=n.option(e);if($.isFunction(i)){var r=n.option('context')||n;if($.isArray(t))return i.apply(r,t);else return i.call(r,t);}},renderWith:function(e,t,n){var i=this;if(!t)if(t=i.option('renderTemplate'),!t)t=i.option('mainTemplate');if(!n)n=i.option('mainElement');var r=i.option('renderSelector');if(r)n=n.find(r);var o;if($.isPlainObject(e)||$.isArray(e))o=i.execute('render',[e,t]);else if('string'===$.type(e))o=e;n.html(o);},namespace:function(){return'.'+this.guid;},option:function(e,t){var n=this;if(1===arguments.length&&'string'===$.type(e))return n.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.option(e,t);});n.options[e]=t;}},inner:function(e,t){var n=this,i=n.inners||{};if(1===arguments.length&&'string'===$.type(e))return i[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){n.inner(e,t);});i[e]=t;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,t){return u(t,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},v={sync:function(){var e=this,t=function(t,n,i){$.each(t,function(r,o){return e.execute(n[r],[o.newValue,o.oldValue,i?t:o]);});};if($.each(['property','state'],function(n,i){var r=e.inner(i+'Changes');if(r){e.inner(i+'Changes',null);var o=e.constructor[i+'Updater'];if(o)t(r,o,!0);var s=e.option('watch');if(s)t(r,s);e.emit(i+'change',r);}}),arguments[0]!==p)e.execute(e.inner(p));e.inner(p,!1);},_sync:function(){if(!this.inner(p))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,t){o(e,v),$.each(e,function(i,o){var s=i.indexOf('_');if($.isFunction(o)&&0!==s&&s!==i.length-1)if(!($.isArray(t)&&$.inArray(i,t)>=0)){var u=function(e){return n(this,i,arguments,'before',e);},a=function(e){var t=this,r=arguments,s=function(){return n(t,i,r,'after',e);};if(o.length+1===r.length){var u=r[r.length-1];if(u&&$.isFunction(u.then))return void u.then(s);}s();};r(e,i,u,a);}}),o(e,d),f.extend(e);},exports.init=function(e,t){if(!t)t={};return o(t,e.constructor.defaultOptions),t.onafterinit_=function(){e.state('inited',!0);},t.onafterdispose_=function(){e.state('disposed',!0),e.off();var t=e.inner('main');if(e.option('removeOnDispose')&&t)t.remove();s(function(){delete l[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},l[e.guid=i()]=e,e.properties={},e.options=t,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var t=e.inner('main')||e.option('mainElement');if(t)t.off(e.namespace());};}),define('cc/form/Validator',['require','exports','module','../function/isHidden','../function/nextTick','../function/debounce','../function/toNumber','../function/waitPromises','../util/life','../util/validator'],function(require){'use strict';function e(e){s.init(this,e);}var t=require('../function/isHidden'),n=require('../function/nextTick'),i=require('../function/debounce'),r=require('../function/toNumber'),o=require('../function/waitPromises'),s=require('../util/life'),u=require('../util/validator'),a=e.prototype;return a.type='Validator',a.init=function(){var e=this,t=e.option('mainElement'),n=e.namespace();t.on('focusin'+n,function(n){var i=$(n.target),r=i.prop('name'),o=e.option('errorAttribute');if(r&&o)e.execute('hideErrorAnimation',{errorElement:t.find('['+o+'="'+r+'"]'),fieldElement:i});}),t.on('focusout'+n,i(function(t){var n=t.target.name;if(n&&e.guid){var i=e.option('fields')[n];if(i){var r=i.validateOnBlur,o=e.option('validateOnBlur');if(r===!0||null==r&&o)e.validate(n);}}},180)),e.inner({main:t});},a.validate=function(e,i){var s=this,a=s.option('mainElement'),c=s.option('formSelector'),f=s.option('groupSelector'),l=s.option('showFirstError');if('string'===$.type(e))e=[e];else if(!$.isArray(e)){if('boolean'===$.type(e))i=e;e=[],$.each(s.option('fields'),function(t){e.push(t);});}var p=function(n){var i={};return $.each(e,function(e,r){var o=n.find('[name="'+r+'"]');if(1===o.length&&!o.prop('disabled')){var s=o.val();if('password'!==o.prop('type'))s=$.trim(s);var u={name:r,value:s,fieldElement:o};if(f){var a=o.closest(f);if(t(a))return;if(1===a.length)u.groupElement=a;}i[r]=u;}}),u.validate(i,s.option('fields'),s.option('sequence'));},h=[],d=function(e){if(!$.isArray(e)||0!==e.length)h.push(e);};if(c)a.find(c).each(function(){d(p($(this)));});else d(p(a));var v=[],g=function(){var e=s.option('errorAttribute'),t=s.option('errorTemplate'),o=[];$.each(h,function(e,t){$.each(t,function(e,t){o.push(t);});});var u=!1;if($.each(o,function(n,i){var r,o={fieldElement:i.fieldElement};if(e)r=a.find('['+e+'='+i.name+']'),o.errorElement=r;var c=i.error;if(c){if(v.push(i),!l||!u){if(u=!0,r){var f=s.execute('render',[{error:c},t]);r.html(f);}o.rule=i.rule,o.error=c,s.execute('showErrorAnimation',o);}}else s.execute('hideErrorAnimation',o);}),i&&v.length>0){var c=v[0].fieldElement;if(c.is('input[type="hidden"]'))c=c.parent();var f=c.offset().top+r(s.option('scrollOffset'),0);window.scrollTo(window.scrollX,f);}n(function(){if(s.guid)s.emit('validatecomplete',{fields:o,errors:v});});};return o(h,function(){return g(),0===v.length;});},a.dispose=function(){s.dispose(this);},s.extend(a),e;}),define('pc/common/custom/form/Validator_83eac9a0ff',['require','exports','module','cc/form/Validator','cc/util/etpl'],function(require){'use strict';function e(e){var t;if(e.is('.input')||e.is('.dropdown'))t=e;else{var n=e.closest('.input');if(1===n.length)t=n;else if(n=e.closest('.dropdown'),1===n.length)t=n;}return t;}var t=require('cc/form/Validator'),n=require('cc/util/etpl'),i={};return t.defaultOptions={validateOnBlur:!1,scrollOffset:-100,groupSelector:'.group',errorAttribute:'data-error-for',errorTemplate:'${error}',showErrorAnimation:function(t){var n=t.errorElement;n.css({position:'fixed',display:'inline-block',width:'auto'});var i=n.outerWidth(),r=n.outerHeight(),o=t.fieldElement;if(o.is(':hidden'))o=o.closest(':visible');var s=e(o);if(s)s.addClass('error');var u=o.outerWidth(),a=o.outerHeight(),c=u+8;if(!$.contains(o[0],n[0]))c+=o.position().left;n.css({position:'absolute',left:c,top:a>r?5:(a-r)/2,width:i+1});},hideErrorAnimation:function(t){var n=t.errorElement;n.hide();var i=e(t.fieldElement);if(i)i.removeClass('error');},render:function(e,t){var r=i[t];if(!r)r=i[t]=n.compile(t);return r(e);}},t;});