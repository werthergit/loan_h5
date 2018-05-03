define('cc/util/etpl',function(){function t(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n];return t;}function e(){this.raw=[],this.length=0;}function n(){return'___'+A++;}function i(t,e){var n=new Function();n.prototype=e.prototype,t.prototype=new n(),t.prototype.constructor=t;}function r(t){return O[t];}function o(t){return'"'+t.replace(/\x5C/g,'\\\\').replace(/"/g,'\\"').replace(/\x0A/g,'\\n').replace(/\x09/g,'\\t').replace(/\x0D/g,'\\r')+'"';}function s(t){return t.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(t){return'\\'+t;});}function a(t){var e=arguments;return t.replace(/\{([0-9]+)\}/g,function(t,n){return e[n-0+1];});}function p(t){return t=t.replace(/^\s*\*/,''),a('gv({0},["{1}"])',o(t),t.replace(/\[['"]?([^'"]+)['"]?\]/g,function(t,e){return'.'+e;}).split('.').join('","'));}function c(t,e,n,i,r,o){for(var s=n.length,a=t.split(e),p=0,c=[],l=0,u=a.length;u>l;l++){var f=a[l];if(l){var h=1;for(p++;;){var d=f.indexOf(n);if(0>d){c.push(p>1&&h?e:'',f);break;}if(p=i?p-1:0,c.push(p>0&&h?e:'',f.slice(0,d),p>0?n:''),f=f.slice(d+s),h=0,0===p)break;}if(0===p)r(c.join('')),o(f),c=[];}else f&&o(f);}if(p>0&&c.length>0)o(e),o(c.join(''));}function l(t,e,n){var i,r=[],s=e.options,a='',u='',f='',h='';if(n)a='ts(',u=')',f=_,h=I,i=s.defaultFilter;return c(t,s.variableOpen,s.variableClose,1,function(t){if(n&&t.indexOf('|')<0&&i)t+='|'+i;var o=t.indexOf('|'),s=(o>0?t.slice(0,o):t).replace(/^\s+/,'').replace(/\s+$/,''),c=o>0?t.slice(o+1):'',d=0===s.indexOf('*'),g=[d?'':a,p(s),d?'':u];if(c){c=l(c,e);for(var v=c.split('|'),y=0,m=v.length;m>y;y++){var x=v[y];if(/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test(x)){if(g.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3)g.push(',',RegExp.$3);g.push(')');}}}r.push(f,g.join(''),h);},function(t){r.push(f,n?o(t):t,h);}),r.join('');}function u(t,e){this.value=t,this.engine=e;}function f(t,e){this.value=t,this.engine=e,this.children=[],this.cloneProps=[];}function h(t,e){var n=t.stack,i=e?n.find(function(t){return t instanceof e;}):n.bottom();if(i){for(var r;(r=n.top())!==i;){if(!r.autoClose)throw new Error(r.type+' must be closed manually: '+r.value);r.autoClose(t);}i.close(t);}return i;}function d(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.master=RegExp.$3,this.name=RegExp.$1,f.call(this,t,e),this.blocks={};}function g(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,f.call(this,t,e),this.cloneProps=['name'];}function v(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,f.call(this,t,e),this.cloneProps=['name','state','blocks'],this.blocks={};}function y(t,e){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.expr=RegExp.$2,f.call(this,t,e),this.cloneProps=['name','expr'];}function m(t,e){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.args=RegExp.$3,f.call(this,t,e),this.cloneProps=['name','args'];}function x(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.name=RegExp.$1,this.args=RegExp.$3,f.call(this,t,e),this.cloneProps=['name','args'];}function R(t,e){var n=new RegExp(a('^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$',s(e.options.variableOpen),s(e.options.variableClose)),'i');if(!n.test(t))throw new Error('Invalid '+this.type+' syntax: '+t);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,f.call(this,t,e),this.cloneProps=['list','item','index'];}function w(t,e){f.call(this,t,e);}function b(t,e){w.call(this,t,e);}function E(t,e){f.call(this,t,e);}function $(t,e){e.target=t;var n=e.engine,i=t.name;if(n.targets[i])switch(n.options.namingConflict){case'override':n.targets[i]=t,e.targets.push(i);case'ignore':break;default:throw new Error('Target exists: '+i);}else n.targets[i]=t,e.targets.push(i);}function k(t,e){T[t]=e,e.prototype.type=t;}function C(e){this.options={commandOpen:'<!--',commandClose:'-->',commandSyntax:/^\s*(\/)?([a-z]+)\s*(?::([\s\S]*))?$/,variableOpen:'${',variableClose:'}',defaultFilter:'html'},this.config(e),this.targets={},this.filters=t({},P);}function B(t,n){function i(){var t;if(d.length>0&&(t=d.join(''))){var e=new u(t,n);if(e.beforeAdd(l),p.top().addChild(e),d=[],n.options.strip&&l.current instanceof f)e.value=t.replace(/^[\x20\t\r]*\n/,'');l.current=e;}}var r,o=n.options.commandOpen,s=n.options.commandClose,a=n.options.commandSyntax,p=new e(),l={engine:n,targets:[],stack:p,target:null},d=[];return c(t,o,s,0,function(t){var e=a.exec(t);if(e&&(r=T[e[2].toLowerCase()])&&'function'==typeof r){i();var p=l.current;if(n.options.strip&&p instanceof u)p.value=p.value.replace(/\r?\n[\x20\t]*$/,'\n');if(e[1])p=h(l,r);else{if(p=new r(e[3],n),'function'==typeof p.beforeOpen)p.beforeOpen(l);p.open(l);}l.current=p;}else if(!/^\s*\/\//.test(t))d.push(o,t,s);r=null;},function(t){d.push(t);}),i(),h(l),l.targets;}e.prototype={push:function(t){this.raw[this.length++]=t;},pop:function(){if(this.length>0){var t=this.raw[--this.length];return this.raw.length=this.length,t;}},top:function(){return this.raw[this.length-1];},bottom:function(){return this.raw[0];},find:function(t){for(var e=this.length;e--;){var n=this.raw[e];if(t(n))return n;}}};var A=178245,O={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},P={html:function(t){return t.replace(/[&<>"']/g,r);},url:encodeURIComponent,raw:function(t){return t;}},D='var r="";',_='r+=',I=';',z='return r;';if('undefined'!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8)D='var r=[],ri=0;',_='r[ri++]=',z='return r.join("");';u.prototype={getRendererBody:function(){var t=this.value,e=this.engine.options;if(!t||e.strip&&/^\s*$/.test(t))return'';else return l(t,this.engine,1);},clone:function(){return this;}},f.prototype={addChild:function(t){this.children.push(t);},open:function(t){var e=t.stack.top();e&&e.addChild(this),t.stack.push(this);},close:function(t){if(t.stack.top()===this)t.stack.pop();},getRendererBody:function(){for(var t=[],e=this.children,n=0;n<e.length;n++)t.push(e[n].getRendererBody());return t.join('');},clone:function(){for(var t=this.constructor,e=new t(this.value,this.engine),n=0,i=this.children.length;i>n;n++)e.addChild(this.children[n].clone());for(var n=0,i=this.cloneProps.length;i>n;n++){var r=this.cloneProps[n];e[r]=this[r];}return e;}};var j='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(d,f),i(g,f),i(v,f),i(y,f),i(m,f),i(x,f),i(R,f),i(w,f),i(b,w),i(E,w);var S={READING:1,READED:2,APPLIED:3,READY:4};v.prototype.applyMaster=d.prototype.applyMaster=function(t){function e(t){var i=t.children;if(i instanceof Array)for(var r=0,o=i.length;o>r;r++){var s=i[r];if(s instanceof g&&n[s.name])s=i[r]=n[s.name];e(s);}}if(this.state>=S.APPLIED)return 1;var n=this.blocks,i=this.engine.targets[t];if(i&&i.applyMaster(i.master))return this.children=i.clone().children,e(this),this.state=S.APPLIED,1;else return void 0;},d.prototype.isReady=function(){function t(i){for(var r=0,o=i.children.length;o>r;r++){var s=i.children[r];if(s instanceof v){var a=e.targets[s.name];n=n&&a&&a.isReady(e);}else if(s instanceof f)t(s);}}if(this.state>=S.READY)return 1;var e=this.engine,n=1;if(this.applyMaster(this.master))return t(this),n&&(this.state=S.READY),n;else return void 0;},d.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var t=new Function('data','engine',[j,D,this.getRendererBody(),z].join('\n')),e=this.engine;return this.renderer=function(n){return t(n,e);},this.renderer;}return null;},d.prototype.open=function(t){h(t),f.prototype.open.call(this,t),this.state=S.READING,$(this,t);},y.prototype.open=x.prototype.open=function(t){t.stack.top().addChild(this);},g.prototype.open=function(t){f.prototype.open.call(this,t),t.stack.find(function(t){return t.blocks;}).blocks[this.name]=this;},b.prototype.open=function(t){var e=new E();e.open(t);var n=h(t,w);n.addChild(this),t.stack.push(this);},E.prototype.open=function(t){var e=h(t,w);e.addChild(this),t.stack.push(this);},v.prototype.open=function(t){this.parent=t.stack.top(),this.target=t.target,f.prototype.open.call(this,t),this.state=S.READING;},x.prototype.close=y.prototype.close=function(){},v.prototype.close=function(t){f.prototype.close.call(this,t),this.state=S.READED;},d.prototype.close=function(t){f.prototype.close.call(this,t),this.state=this.master?S.READED:S.APPLIED,t.target=null;},v.prototype.autoClose=function(t){var e=this.parent.children;e.push.apply(e,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(t);},x.prototype.beforeOpen=v.prototype.beforeOpen=y.prototype.beforeOpen=R.prototype.beforeOpen=m.prototype.beforeOpen=g.prototype.beforeOpen=w.prototype.beforeOpen=u.prototype.beforeAdd=function(t){if(!t.stack.bottom()){var e=new d(n(),t.engine);e.open(t);}},v.prototype.getRendererBody=function(){return this.applyMaster(this.name),f.prototype.getRendererBody.call(this);},x.prototype.getRendererBody=function(){return a('{0}engine.render({2},{{3}}){1}',_,I,o(this.name),l(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(t,e,n){return(e||'')+o(n)+':';}));},y.prototype.getRendererBody=function(){if(this.expr)return a('v[{0}]={1};',o(this.name),l(this.expr,this.engine));else return'';},w.prototype.getRendererBody=function(){return a('if({0}){{1}}',l(this.value,this.engine),f.prototype.getRendererBody.call(this));},E.prototype.getRendererBody=function(){return a('}else{{0}',f.prototype.getRendererBody.call(this));},R.prototype.getRendererBody=function(){return a('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',n(),l(this.list,this.engine),o(this.index||n()),o(this.item),n(),n(),f.prototype.getRendererBody.call(this));},m.prototype.getRendererBody=function(){var t=this.args;return a('{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}',D,z,_,I,f.prototype.getRendererBody.call(this),o(this.name),t?','+l(t,this.engine):'');};var T={};k('target',d),k('block',g),k('import',v),k('use',x),k('var',y),k('for',R),k('if',w),k('elif',b),k('else',E),k('filter',m),C.prototype.config=function(e){t(this.options,e);},C.prototype.compile=C.prototype.parse=function(t){if(t){var e=B(t,this);if(e.length)return this.targets[e[0]].getRenderer();}return new Function('return ""');},C.prototype.getRenderer=function(t){var e=this.targets[t];if(e)return e.getRenderer();else return void 0;},C.prototype.render=function(t,e){var n=this.getRenderer(t);if(n)return n(e);else return'';},C.prototype.addFilter=function(t,e){if('function'==typeof e)this.filters[t]=e;};var F=new C();return F.Engine=C,F;}),define('cc/util/Timer',['require','exports','module'],function(){'use strict';function t(t){$.extend(this,t);}var e=t.prototype;return e.start=function(){var t=this;t.stop();var e=t.timeout,n=t.interval,i=function(){if(t.count++,t.task()!==!1)t.timer=setTimeout(i,n);else t.stop();};if(null==e)e=n;t.timer=setTimeout(i,e);},e.stop=function(){var t=this;if(t.timer)clearTimeout(t.timer),t.timer=null,t.count=0;},e.dispose=function(){var t=this;t.stop(),t.task=t.timeout=t.interval=null;},t;}),define('pc/common/component/CodeButton_html',function(){return'<button class="button info{{#if options.className}} {{options.className}}{{/if}}" on-click="click"{{#if options.disabled}} disabled{{/if}}>{{options.text}}</button>';}),define('pc/common/component/CodeButton_67a61a0bc8',['require','exports','module','cc/util/etpl','cc/util/Timer','./CodeButton_html'],function(require){'use strict';var t=require('cc/util/etpl'),e=require('cc/util/Timer');return Ractive.extend({template:require('./CodeButton_html'),data:function(){return{options:{text:'',className:'code-button',disabled:!1,countdown:!1,countdownText:'${second}秒后可再次发送',countdownSecond:60}};},oninit:function(){var n,i=this,r=i.get('options.text'),o=i.get('options.countdownText'),s=t.compile(o),a=i.timer=new e({task:function(){if(1===n)return void i.set('options.countdown',!1);else return void i.set('options.text',s({second:--n}));},interval:1000});i.observe('options.countdown',function(t){if(t)n=i.get('options.countdownSecond'),i.set({'options.disabled':!0,'options.text':s({second:n})}),a.start();else i.set({'options.disabled':!1,'options.text':r}),a.stop();});},onteardown:function(){this.timer.dispose();}});});