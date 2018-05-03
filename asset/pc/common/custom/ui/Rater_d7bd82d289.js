define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(t,e){if($.isPlainObject(e))$.each(e,function(e,n){if(!(e in t))t[e]=n;});};}),define('cc/util/etpl',function(){function t(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n];return t;}function e(){this.raw=[],this.length=0;}function n(){return'___'+k++;}function i(t,e){var n=new Function();n.prototype=e.prototype,t.prototype=new n(),t.prototype.constructor=t;}function r(t){return _[t];}function o(t){return'"'+t.replace(/\x5C/g,'\\\\').replace(/"/g,'\\"').replace(/\x0A/g,'\\n').replace(/\x09/g,'\\t').replace(/\x0D/g,'\\r')+'"';}function s(t){return t.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(t){return'\\'+t;});}function a(t){var e=arguments;return t.replace(/\{([0-9]+)\}/g,function(t,n){return e[n-0+1];});}function u(t){return t=t.replace(/^\s*\*/,''),a('gv({0},["{1}"])',o(t),t.replace(/\[['"]?([^'"]+)['"]?\]/g,function(t,e){return'.'+e;}).split('.').join('","'));}function c(t,e,n,i,r,o){for(var s=n.length,a=t.split(e),u=0,c=[],f=0,p=a.length;p>f;f++){var l=a[f];if(f){var h=1;for(u++;;){var d=l.indexOf(n);if(0>d){c.push(u>1&&h?e:'',l);break;}if(u=i?u-1:0,c.push(u>0&&h?e:'',l.slice(0,d),u>0?n:''),l=l.slice(d+s),h=0,0===u)break;}if(0===u)r(c.join('')),o(l),c=[];}else l&&o(l);}if(u>0&&c.length>0)o(e),o(c.join(''));}function f(t,e,n){var i,r=[],s=e.options,a='',p='',l='',h='';if(n)a='ts(',p=')',l=S,h=F,i=s.defaultFilter;return c(t,s.variableOpen,s.variableClose,1,function(t){if(n&&t.indexOf('|')<0&&i)t+='|'+i;var o=t.indexOf('|'),s=(o>0?t.slice(0,o):t).replace(/^\s+/,'').replace(/\s+$/,''),c=o>0?t.slice(o+1):'',d=0===s.indexOf('*'),v=[d?'':a,u(s),d?'':p];if(c){c=f(c,e);for(var g=c.split('|'),m=0,y=g.length;y>m;m++){var $=g[m];if(/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test($)){if(v.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3)v.push(',',RegExp.$3);v.push(')');}}}r.push(l,v.join(''),h);},function(t){r.push(l,n?o(t):t,h);}),r.join('');}function p(t,e){this.value=t,this.engine=e;}function l(t,e){this.value=t,this.engine=e,this.children=[],this.cloneProps=[];}function h(t,e){var n=t.stack,i=e?n.find(function(t){return t instanceof e;}):n.bottom();if(i){for(var r;(r=n.top())!==i;){if(!r.autoClose)throw new Error(r.type+' must be closed manually: '+r.value);r.autoClose(t);}i.close(t);}return i;}function d(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.master=RegExp.$3,this.name=RegExp.$1,l.call(this,t,e),this.blocks={};}function v(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,l.call(this,t,e),this.cloneProps=['name'];}function g(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,l.call(this,t,e),this.cloneProps=['name','state','blocks'],this.blocks={};}function m(t,e){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.expr=RegExp.$2,l.call(this,t,e),this.cloneProps=['name','expr'];}function y(t,e){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.args=RegExp.$3,l.call(this,t,e),this.cloneProps=['name','args'];}function $(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.args=RegExp.$3,l.call(this,t,e),this.cloneProps=['name','args'];}function x(t,e){var n=new RegExp(a('^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$',s(e.options.variableOpen),s(e.options.variableClose)),'i');if(!n.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,l.call(this,t,e),this.cloneProps=['list','item','index'];}function E(t,e){l.call(this,t,e);}function b(t,e){E.call(this,t,e);}function w(t,e){l.call(this,t,e);}function R(t,e){e.target=t;var n=e.engine,i=t.name;if(n.targets[i])switch(n.options.namingConflict){case'override':n.targets[i]=t,e.targets.push(i);case'ignore':break;default:throw new Error('Target exists: '+i);}else n.targets[i]=t,e.targets.push(i);}function C(t,e){V[t]=e,e.prototype.type=t;}function O(e){this.options={commandOpen:'<!--',commandClose:'-->',commandSyntax:/^\s*(\/)?([a-z]+)\s*(?::([\s\S]*))?$/,variableOpen:'${',variableClose:'}',defaultFilter:'html'},this.config(e),this.targets={},this.filters=t({},A);}function P(t,n){function i(){var t;if(d.length>0&&(t=d.join(''))){var e=new p(t,n);if(e.beforeAdd(f),u.top().addChild(e),d=[],n.options.strip&&f.current instanceof l)e.value=t.replace(/^[\x20\t\r]*\n/,'');f.current=e;}}var r,o=n.options.commandOpen,s=n.options.commandClose,a=n.options.commandSyntax,u=new e(),f={engine:n,targets:[],stack:u,target:null},d=[];return c(t,o,s,0,function(t){var e=a.exec(t);if(e&&(r=V[e[2].toLowerCase()])&&'function'==typeof r){i();var u=f.current;if(n.options.strip&&u instanceof p)u.value=u.value.replace(/\r?\n[\x20\t]*$/,'\n');if(e[1])u=h(f,r);else{if(u=new r(e[3],n),'function'==typeof u.beforeOpen)u.beforeOpen(f);u.open(f);}f.current=u;}else if(!/^\s*\/\//.test(t))d.push(o,t,s);r=null;},function(t){d.push(t);}),i(),h(f),f.targets;}e.prototype={push:function(t){this.raw[this.length++]=t;},pop:function(){if(this.length>0){var t=this.raw[--this.length];return this.raw.length=this.length,t;}},top:function(){return this.raw[this.length-1];},bottom:function(){return this.raw[0];},find:function(t){for(var e=this.length;e--;){var n=this.raw[e];if(t(n))return n;}}};var k=178245,_={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},A={html:function(t){return t.replace(/[&<>"']/g,r);},url:encodeURIComponent,raw:function(t){return t;}},D='var r="";',S='r+=',F=';',j='return r;';if('undefined'!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8)D='var r=[],ri=0;',S='r[ri++]=',j='return r.join("");';p.prototype={getRendererBody:function(){var t=this.value,e=this.engine.options;if(!t||e.strip&&/^\s*$/.test(t))return'';else return f(t,this.engine,1);},clone:function(){return this;}},l.prototype={addChild:function(t){this.children.push(t);},open:function(t){var e=t.stack.top();e&&e.addChild(this),t.stack.push(this);},close:function(t){if(t.stack.top()===this)t.stack.pop();},getRendererBody:function(){for(var t=[],e=this.children,n=0;n<e.length;n++)t.push(e[n].getRendererBody());return t.join('');},clone:function(){for(var t=this.constructor,e=new t(this.value,this.engine),n=0,i=this.children.length;i>n;n++)e.addChild(this.children[n].clone());for(var n=0,i=this.cloneProps.length;i>n;n++){var r=this.cloneProps[n];e[r]=this[r];}return e;}};var B='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(d,l),i(v,l),i(g,l),i(m,l),i(y,l),i($,l),i(x,l),i(E,l),i(b,E),i(w,E);var q={READING:1,READED:2,APPLIED:3,READY:4};g.prototype.applyMaster=d.prototype.applyMaster=function(t){function e(t){var i=t.children;if(i instanceof Array)for(var r=0,o=i.length;o>r;r++){var s=i[r];if(s instanceof v&&n[s.name])s=i[r]=n[s.name];e(s);}}if(this.state>=q.APPLIED)return 1;var n=this.blocks,i=this.engine.targets[t];if(i&&i.applyMaster(i.master))return this.children=i.clone().children,e(this),this.state=q.APPLIED,1;else return void 0;},d.prototype.isReady=function(){function t(i){for(var r=0,o=i.children.length;o>r;r++){var s=i.children[r];if(s instanceof g){var a=e.targets[s.name];n=n&&a&&a.isReady(e);}else if(s instanceof l)t(s);}}if(this.state>=q.READY)return 1;var e=this.engine,n=1;if(this.applyMaster(this.master))return t(this),n&&(this.state=q.READY),n;else return void 0;},d.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var t=new Function('data','engine',[B,D,this.getRendererBody(),j].join('\n')),e=this.engine;return this.renderer=function(n){return t(n,e);},this.renderer;}return null;},d.prototype.open=function(t){h(t),l.prototype.open.call(this,t),this.state=q.READING,R(this,t);},m.prototype.open=$.prototype.open=function(t){t.stack.top().addChild(this);},v.prototype.open=function(t){l.prototype.open.call(this,t),t.stack.find(function(t){return t.blocks;}).blocks[this.name]=this;},b.prototype.open=function(t){var e=new w();e.open(t);var n=h(t,E);n.addChild(this),t.stack.push(this);},w.prototype.open=function(t){var e=h(t,E);e.addChild(this),t.stack.push(this);},g.prototype.open=function(t){this.parent=t.stack.top(),this.target=t.target,l.prototype.open.call(this,t),this.state=q.READING;},$.prototype.close=m.prototype.close=function(){},g.prototype.close=function(t){l.prototype.close.call(this,t),this.state=q.READED;},d.prototype.close=function(t){l.prototype.close.call(this,t),this.state=this.master?q.READED:q.APPLIED,t.target=null;},g.prototype.autoClose=function(t){var e=this.parent.children;e.push.apply(e,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(t);},$.prototype.beforeOpen=g.prototype.beforeOpen=m.prototype.beforeOpen=x.prototype.beforeOpen=y.prototype.beforeOpen=v.prototype.beforeOpen=E.prototype.beforeOpen=p.prototype.beforeAdd=function(t){if(!t.stack.bottom()){var e=new d(n(),t.engine);e.open(t);}},g.prototype.getRendererBody=function(){return this.applyMaster(this.name),l.prototype.getRendererBody.call(this);},$.prototype.getRendererBody=function(){return a('{0}engine.render({2},{{3}}){1}',S,F,o(this.name),f(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(t,e,n){return(e||'')+o(n)+':';}));},m.prototype.getRendererBody=function(){if(this.expr)return a('v[{0}]={1};',o(this.name),f(this.expr,this.engine));else return'';},E.prototype.getRendererBody=function(){return a('if({0}){{1}}',f(this.value,this.engine),l.prototype.getRendererBody.call(this));},w.prototype.getRendererBody=function(){return a('}else{{0}',l.prototype.getRendererBody.call(this));},x.prototype.getRendererBody=function(){return a('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',n(),f(this.list,this.engine),o(this.index||n()),o(this.item),n(),n(),l.prototype.getRendererBody.call(this));},y.prototype.getRendererBody=function(){var t=this.args;return a('{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}',D,j,S,F,l.prototype.getRendererBody.call(this),o(this.name),t?','+f(t,this.engine):'');};var V={};C('target',d),C('block',v),C('import',g),C('use',$),C('var',m),C('for',x),C('if',E),C('elif',b),C('else',w),C('filter',y),O.prototype.config=function(e){t(this.options,e);},O.prototype.compile=O.prototype.parse=function(t){if(t){var e=P(t,this);if(e.length)return this.targets[e[0]].getRenderer();}return new Function('return ""');},O.prototype.getRenderer=function(t){var e=this.targets[t];if(e)return e.getRenderer();else return void 0;},O.prototype.render=function(t,e){var n=this.getRenderer(t);if(n)return n(e);else return'';},O.prototype.addFilter=function(t,e){if('function'==typeof e)this.filters[t]=e;};var T=new O();return T.Engine=O,T;}),define('cc/function/debounce',['require','exports','module'],function(){'use strict';return function(t,e,n){function i(n){o=setTimeout(function(){o=null,r=$.now(),t.apply(null,$.makeArray(n));},e);}e='number'===$.type(e)?e:50;var r,o;return function(){if(n&&r>0&&$.now()-r<e)clearTimeout(o),o=null;if(!o)i(arguments);};};}),define('cc/function/restrain',['require','exports','module'],function(){'use strict';return function(t,e,n){if(e>t)t=e;else if(t>n)t=n;return t;};}),define('cc/function/toNumber',['require','exports','module'],function(){'use strict';var t={'int':parseInt,'float':parseFloat};return function(e,n,i){if('number'!==$.type(e)){var r=t[i];if(r)e=r(e,10);else if($.isNumeric(e))e=+e;else e=0/0;}return isNaN(e)?n:e;};}),define('cc/function/eventOffset',['require','exports','module'],function(){'use strict';return function(t){var e=t.offsetX,n=t.offsetY;if('number'!==$.type(e)){var i=t.target.getBoundingClientRect();e=t.clientX-i.left,n=t.clientY-i.top;}return{x:e,y:n};};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function t(t){return t.is('body')||'static'!==t.css('position');}return function(e){if(e.is('body'))return e;for(var n=e.parent();!t(n);)n=n.parent();return n;};}),define('cc/function/guid',['require','exports','module'],function(){var t=0;return function(){return'cc_'+t++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(t,e,n,i){var r='string'===$.type(e),o=r?t[e]:t;if(!r)i=n,n=e;var s=function(){var t,e=$.makeArray(arguments);if($.isFunction(n))t=n.apply(this,e);if(t!==!1){if($.isFunction(o))t=o.apply(this,e);if($.isFunction(i)){e.push(t);var r=i.apply(this,e);if('undefined'!==$.type(r))t=r;}return t;}};return r?t[e]=s:s;};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(t,e){t=t[0],e=e[0],t.parentNode.replaceChild(e,t);};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(t){return t.charAt(0).toUpperCase()+t.slice(1);};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(t){var e=setTimeout(t,0);return function(){clearTimeout(e);};};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(t,e){if('boolean'!==$.type(t)){if(1===arguments.length)e=!!t;t=e;}return t;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(t){if(t&&!t[$.expando])t='string'===$.type(t)||t.type?$.Event(t):$.Event(null,t);return t||$.Event();};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var t=require('../function/extend'),e=require('../function/createEvent'),n={get$:function(){var t=this;if(!t.$)t.$=$({});return t.$;},on:function(t,e,n){return this.get$().on(t,e,n),this;},once:function(t,e,n){return this.get$().one(t,e,n),this;},off:function(t,e){return this.get$().off(t,e),this;},emit:function(t,n){return t=e(t),this.get$().trigger(t,n),t;}};exports.extend=function(e){t(e,n);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function t(t,e,n,i,r){return function(a,u,c){var f=this;if($.isPlainObject(a))return c=u,void $.each(a,function(t,e){f[n](t,e,c);});c=c||{};var p=f[i](a),h=f.constructor[t+'Validator'];if(h)if($.isFunction(h[a]))u=h[a].call(f,u,c);if($.isFunction(r))u=r(f,u,c);if(p!==u||c.force)if(f[e][a]=u,!c.silent){var d={};o(d,c),d.newValue=u,d.oldValue=p;var v={};v[a]=d;var g=function(t){if(t&&t[a])f.execute(t[a],[u,p,d]);};if(g(f.inner('watchSync')),g(f.option('watchSync')),c.sync)return g(f.constructor[t+'Updater']),g(f.option('watch')),void f.emit(t+'change',v);var m=f.inner(t+'Changes');if(!m)m={},f.inner(t+'Changes',m);if($.extend(m,v),!f.inner(l))f.inner(l,s(function(){f.sync(l);}));}};}function e(){this.error('initStruct() can just call one time.');}function n(t,e,n,i,r){var o,s='before'===i?'_'+e:e+'_',a=t[s];if($.isFunction(a))if(o=a.apply(t,n),o!==!1&&!$.isPlainObject(o))o=null;if(o===!1)return!1;var u=!1;if(o&&o.dispatch)u=!0,delete o.dispatch;if(r=$.Event(r),r.type=i+e,t.emit(r,o),u)t.dispatch(r,o);if(r.isDefaultPrevented())return!1;else return void 0;}var i=require('../function/guid'),r=require('../function/around'),o=require('../function/extend'),s=(require('../function/ucFirst'),require('../function/nextTick')),a=require('../function/toBoolean'),u=require('../function/createEvent'),c=require('../function/replaceWith'),f=(require('../function/offsetParent'),require('./event')),p={},l='__update_async__',h={},d={initStruct:function(){var t=this,n=t.option('mainElement'),i=t.option('mainTemplate');if('string'===$.type(i)){var r=t.option('share'),o=t.type+i;if(r)n=h[o];var s;if(!n){if(s=$(i),r)h[o]=s;}else if(t.option('replace'))c(n,s=$(i));else n.html(i);if(s)n=s,t.option('mainElement',n);}var a=t.option('parentSelector');if(a&&!n.parent().is(a))n.appendTo(a);t.initStruct=e;},warn:function(t){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,t].join(' '));},error:function(t){throw new Error(['[CC error]',this.type,t].join(' '));},live:function(t,e,n){var i=this,r=i.inner('main');if(r)r.on(t+i.namespace(),e,n);return i;},emit:function(t,e){var n=this,i=n.option('context')||n;t=u(t),t.cc=i;var r=[t];if($.isPlainObject(e))r.push(e);t.type=t.type.toLowerCase();var o=i.get$();o.trigger.apply(o,r);var s='on'+t.type;if(!t.isPropagationStopped()&&i.execute(s,r)===!1)t.preventDefault(),t.stopPropagation();return i.execute(s+'_',r),t;},dispatch:function(t,e){if(!t.isPropagationStopped()){if(!t.originalEvent)t.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var n=$.Event(t);if(n.type='dispatch',this.emit(n,e),n.isPropagationStopped())t.preventDefault(),t.stopPropagation();}},before:function(t,e){return this.on('before'+t.toLowerCase(),e);},after:function(t,e){return this.on('after'+t.toLowerCase(),e);},find:function(t){var e=this.inner('main');if(e){var n=e.find(t);if(n.length)return n;}},appendTo:function(t){var e=this.inner('main');if(e)e.appendTo(t);},prependTo:function(t){var e=this.inner('main');if(e)e.prependTo(t);},execute:function(t,e){var n=this,i=t;if('string'===$.type(t))i=n.option(t);if($.isFunction(i)){var r=n.option('context')||n;if($.isArray(e))return i.apply(r,e);else return i.call(r,e);}},renderWith:function(t,e,n){var i=this;if(!e)if(e=i.option('renderTemplate'),!e)e=i.option('mainTemplate');if(!n)n=i.option('mainElement');var r=i.option('renderSelector');if(r)n=n.find(r);var o;if($.isPlainObject(t)||$.isArray(t))o=i.execute('render',[t,e]);else if('string'===$.type(t))o=t;n.html(o);},namespace:function(){return'.'+this.guid;},option:function(t,e){var n=this;if(1===arguments.length&&'string'===$.type(t))return n.options[t];else{if($.isPlainObject(t))return void $.each(t,function(t,e){n.option(t,e);});n.options[t]=e;}},inner:function(t,e){var n=this,i=n.inners||{};if(1===arguments.length&&'string'===$.type(t))return i[t];else{if($.isPlainObject(t))return void $.each(t,function(t,e){n.inner(t,e);});i[t]=e;}},is:function(t){return this.states[t];},state:t('state','states','state','is',function(t,e){return a(e,!1);}),get:function(t){return this.properties[t];},set:t('property','properties','set','get')},v={sync:function(){var t=this,e=function(e,n,i){$.each(e,function(r,o){return t.execute(n[r],[o.newValue,o.oldValue,i?e:o]);});};if($.each(['property','state'],function(n,i){var r=t.inner(i+'Changes');if(r){t.inner(i+'Changes',null);var o=t.constructor[i+'Updater'];if(o)e(r,o,!0);var s=t.option('watch');if(s)e(r,s);t.emit(i+'change',r);}}),arguments[0]!==l)t.execute(t.inner(l));t.inner(l,!1);},_sync:function(){if(!this.inner(l))return!1;else return void 0;},_init:function(){var t='initCalled';if(this.is(t))return!1;else return void this.state(t,!0);},_dispose:function(){var t='disposeCalled';if(this.is(t))return!1;else return void this.state(t,!0);}};exports.extend=function(t,e){o(t,v),$.each(t,function(i,o){var s=i.indexOf('_');if($.isFunction(o)&&0!==s&&s!==i.length-1)if(!($.isArray(e)&&$.inArray(i,e)>=0)){var a=function(t){return n(this,i,arguments,'before',t);},u=function(t){var e=this,r=arguments,s=function(){return n(e,i,r,'after',t);};if(o.length+1===r.length){var a=r[r.length-1];if(a&&$.isFunction(a.then))return void a.then(s);}s();};r(t,i,a,u);}}),o(t,d),f.extend(t);},exports.init=function(t,e){if(!e)e={};return o(e,t.constructor.defaultOptions),e.onafterinit_=function(){t.state('inited',!0);},e.onafterdispose_=function(){t.state('disposed',!0),t.off();var e=t.inner('main');if(t.option('removeOnDispose')&&e)e.remove();s(function(){delete p[t.guid],t.properties=t.options=t.changes=t.states=t.inners=t.guid=null;});},p[t.guid=i()]=t,t.properties={},t.options=e,t.states={},t.inners={},t.init(),t;},exports.dispose=function(t){t.sync();var e=t.inner('main')||t.option('mainElement');if(e)e.off(t.namespace());};}),define('cc/ui/Rater',['require','exports','module','../function/debounce','../function/restrain','../function/toNumber','../function/eventOffset','../util/life'],function(require){'use strict';function t(t){a.init(this,t);}function e(t,e){var i=t.inner('main').find(t.option('itemSelector')),r=t.option('itemFullClass'),o=t.option('itemHalfClass'),s=t.option('itemEmptyClass');n(e,t.get('count'),function(t,e){var n=i.eq(t);if(r)n[1===e?'addClass':'removeClass'](r);if(o)n[0.5===e?'addClass':'removeClass'](o);if(s)n[0===e?'addClass':'removeClass'](s);});}function n(t,e,n){for(var i,r,o=0;e>o;o++){if(i=t-(o+1),i>=0)r=1;else if(-1>=i)r=0;else r=0.5;n(o,r);}}var i=require('../function/debounce'),r=require('../function/restrain'),o=require('../function/toNumber'),s=require('../function/eventOffset'),a=require('../util/life'),u=t.prototype;return u.type='Rater',u.init=function(){var t=this;t.initStruct();var e=t.option('mainElement');if(t.inner({main:e}),t.set({count:t.option('count'),value:t.option('value'),minValue:t.option('minValue'),maxValue:t.option('maxValue')}),!t.option('readOnly')){var n=t.option('itemSelector');if(!n)t.error('itemSelector is missing.');var o,a=t.option('half'),u=t.namespace(),c=function(e,n){var i=n.attr(t.option('valueAttribute'));if(a)if(s(e).x/n.width()<0.5)i-=0.5;return r(i,t.get('minValue'),t.get('maxValue'));},f=function(e){if(o)t.preview(c(e,o));};e.on('mouseenter'+u,n,function(e){if(o=$(this),a)o.on('mousemove'+u,i(f,50));t.preview(c(e,o));}).on('mouseleave'+u,n,function(){if(a)o.off(u);o=null,t.preview();}).on('click'+u,n,function(e){t.set('value',c(e,o||$(this)));});}},u.render=function(){var t=this,e=[],i=t.option('hint')||{},r={1:t.option('itemFullClass'),0.5:t.option('itemHalfClass'),0:t.option('itemEmptyClass')};n(t.get('value'),t.get('count'),function(t,n){var o=r[n];n=t+1,e.push({value:n,className:o||'',hint:i[n]||''});}),t.renderWith({list:e});},u.preview=function(t){var n=this;if(n.inner('value',t),t=o(t,-1),0>t)t=n.get('value');e(n,t);},u.dispose=function(){a.dispose(this);},a.extend(u),t.propertyUpdater={},t.propertyUpdater.value=t.propertyUpdater.count=function(t,n,i){var r=this;if(i.count)r.render();else{var o=i.value;if(o)e(r,o.newValue);}return!1;},t.propertyValidator={count:function(t){if(t=o(t,-1),0>t)this.error('count must be a number.');return t;},value:function(t){return r(o(t,0),this.get('minValue'),this.get('maxValue'));},minValue:function(t){return t=o(t,-1),0>t?0:t;},maxValue:function(t){var e=this.option('count');return t=o(t,e+1),t>e?e:t;}},t;}),define('pc/common/custom/ui/Rater_d7bd82d289',['require','exports','module','cc/ui/Rater','cc/util/etpl'],function(require){'use strict';var t=require('cc/ui/Rater'),e=require('cc/util/etpl'),n={};return t.defaultOptions={minValue:1,half:!1,readOnly:!1,itemSelector:'i',valueAttribute:'data-value',renderTemplate:'<!-- for: ${list} as ${item} --><i class="icon-star<!-- if: ${item.className} --> ${item.className}<!-- /if -->" data-value="${item.value}"<!-- if: ${item.hint} --> data-title="${item.hint}"<!-- /if -->></i><!-- /for -->',render:function(t,i){var r=n[i];if(!r)r=n[i]=e.compile(i);return r(t);}},t;});