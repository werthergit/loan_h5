define('cc/function/extend',['require','exports','module'],function(){'use strict';return function(e,t){if($.isPlainObject(t))$.each(t,function(t,i){if(!(t in e))e[t]=i;});};}),define('cc/util/mimeType',['require','exports','module'],function(){'use strict';return{html:'text/html',htm:'text/html',shtml:'text/html',xml:'text/xml',css:'text/css',js:'application/x-javascript',json:'application/json',atom:'application/atom+xml',rss:'application/rss+xml',mml:'text/mathml',txt:'text/plain',jad:'text/vnd.sun.j2me.app-descriptor',wml:'text/vnd.wap.wml',htc:'text/x-component',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',tif:'image/tiff',tiff:'image/tiff',wbmp:'image/vnd.wap.wbmp',ico:'image/x-icon',jng:'image/x-jng',bmp:'image/x-ms-bmp',svg:'image/svg+xml',svgz:'image/svg+xml',webp:'image/webp',mp3:'audio/mpeg',wma:'audio/x-ms-wma',wav:'audio/x-wav',mid:'audio/midi',midd:'audio/midi',kar:'audio/midi',ogg:'audio/ogg',m4a:'audio/x-m4a',ra:'audio/x-realaudio',ram:'audio/x-pn-realaudio',mod:'audio/mod','3gp':'video/3gpp','3gpp':'video/3gpp',mp4:'video/mp4',mpeg:'video/mpeg',mpg:'video/mpeg',mov:'video/quicktime',webm:'video/webm',flv:'video/x-flv',m4v:'video/x-m4v',mng:'video/x-mng',asx:'video/x-ms-asf',asf:'video/x-ms-asf',wmv:'video/x-ms-wmv',avi:'video/x-msvideo',rm:'video/vnd.rn-realvideo',rmvb:'video/vnd.rn-realvideo',ts:'video/MP2T',dv:'video/x-dv',mkv:'video/x-matroska',jar:'application/java-archive',war:'application/java-archive',ear:'application/java-archive',hqx:'application/mac-binhex40',pdf:'application/pdf',ps:'application/postscript',eps:'application/postscript',ai:'application/postscript',rtf:'application/rtf',wmlc:'application/vnd.wap.wmlc',kml:'application/vnd.google-earth.kml+xml',kmz:'application/vnd.google-earth.kmz','7z':'application/x-7z-compressed',cco:'application/x-cocoa',jardiff:'application/x-java-archive-diff',jnlp:'application/x-java-jnlp-file',run:'application/x-makeself',pl:'application/x-perl',pm:'application/x-perl',prc:'application/x-pilot',pdb:'application/x-pilot',rar:'application/x-rar-compressed',rpm:'application/x-redhat-package-manager',sea:'application/x-sea',swf:'application/x-shockwave-flash',sit:'application/x-stuffit',tcl:'application/x-tcl',tk:'application/x-tcl',der:'application/x-x509-ca-cert',pem:'application/x-x509-ca-cert',crt:'application/x-x509-ca-cert',xpi:'application/x-xpinstall',xhtml:'application/xhtml+xml',zip:'application/zip',bin:'application/octet-stream',exe:'application/octet-stream',dll:'application/octet-stream',deb:'application/octet-stream',dmg:'application/octet-stream',eot:'application/octet-stream',iso:'application/octet-stream',img:'application/octet-stream',msi:'application/octet-stream',msp:'application/octet-stream',msm:'application/octet-stream',doc:'application/msword',xls:'application/vnd.ms-excel',ppt:'application/vnd.ms-powerpoint',docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation'};}),define('cc/function/ratio',['require','exports','module'],function(){'use strict';return function(e,t){if(e>=0&&t>0)return e/t;else return 0;};}),define('cc/function/restrain',['require','exports','module'],function(){'use strict';return function(e,t,i){if(t>e)e=t;else if(e>i)e=i;return e;};}),define('cc/function/nextTick',['require','exports','module'],function(){'use strict';return function(e){var t=setTimeout(e,0);return function(){clearTimeout(t);};};}),define('cc/function/offsetParent',['require','exports','module'],function(){'use strict';function e(e){return e.is('body')||'static'!==e.css('position');}return function(t){if(t.is('body'))return t;for(var i=t.parent();!e(i);)i=i.parent();return i;};}),define('cc/function/guid',['require','exports','module'],function(){var e=0;return function(){return'cc_'+e++;};}),define('cc/function/around',['require','exports','module'],function(){'use strict';return function(e,t,i,n){var o='string'===$.type(t),a=o?e[t]:e;if(!o)n=i,i=t;var r=function(){var e,t=$.makeArray(arguments);if($.isFunction(i))e=i.apply(this,t);if(e!==!1){if($.isFunction(a))e=a.apply(this,t);if($.isFunction(n)){t.push(e);var o=n.apply(this,t);if('undefined'!==$.type(o))e=o;}return e;}};return o?e[t]=r:r;};}),define('cc/function/replaceWith',['require'],function(){'use strict';return function(e,t){e=e[0],t=t[0],e.parentNode.replaceChild(t,e);};}),define('cc/function/ucFirst',['require','exports','module'],function(){'use strict';return function(e){return e.charAt(0).toUpperCase()+e.slice(1);};}),define('cc/function/toBoolean',['require','exports','module'],function(){'use strict';return function(e,t){if('boolean'!==$.type(e)){if(1===arguments.length)t=!!e;e=t;}return e;};}),define('cc/function/createEvent',['require','exports','module'],function(){'use strict';return function(e){if(e&&!e[$.expando])e='string'===$.type(e)||e.type?$.Event(e):$.Event(null,e);return e||$.Event();};}),define('cc/util/event',['require','exports','module','../function/extend','../function/createEvent'],function(require,exports){'use strict';var e=require('../function/extend'),t=require('../function/createEvent'),i={get$:function(){var e=this;if(!e.$)e.$=$({});return e.$;},on:function(e,t,i){return this.get$().on(e,t,i),this;},once:function(e,t,i){return this.get$().one(e,t,i),this;},off:function(e,t){return this.get$().off(e,t),this;},emit:function(e,i){return e=t(e),this.get$().trigger(e,i),e;}};exports.extend=function(t){e(t,i);};}),define('cc/util/life',['require','exports','module','../function/guid','../function/around','../function/extend','../function/ucFirst','../function/nextTick','../function/toBoolean','../function/createEvent','../function/replaceWith','../function/offsetParent','./event'],function(require,exports){'use strict';function e(e,t,i,n,o){return function(c,p,u){var s=this;if($.isPlainObject(c))return u=p,void $.each(c,function(e,t){s[i](e,t,u);});u=u||{};var f=s[n](c),d=s.constructor[e+'Validator'];if(d)if($.isFunction(d[c]))p=d[c].call(s,p,u);if($.isFunction(o))p=o(s,p,u);if(f!==p||u.force)if(s[t][c]=p,!u.silent){var m={};a(m,u),m.newValue=p,m.oldValue=f;var h={};h[c]=m;var v=function(e){if(e&&e[c])s.execute(e[c],[p,f,m]);};if(v(s.inner('watchSync')),v(s.option('watchSync')),u.sync)return v(s.constructor[e+'Updater']),v(s.option('watch')),void s.emit(e+'change',h);var x=s.inner(e+'Changes');if(!x)x={},s.inner(e+'Changes',x);if($.extend(x,h),!s.inner(l))s.inner(l,r(function(){s.sync(l);}));}};}function t(){this.error('initStruct() can just call one time.');}function i(e,t,i,n,o){var a,r='before'===n?'_'+t:t+'_',c=e[r];if($.isFunction(c))if(a=c.apply(e,i),a!==!1&&!$.isPlainObject(a))a=null;if(a===!1)return!1;var p=!1;if(a&&a.dispatch)p=!0,delete a.dispatch;if(o=$.Event(o),o.type=n+t,e.emit(o,a),p)e.dispatch(o,a);if(o.isDefaultPrevented())return!1;else return void 0;}var n=require('../function/guid'),o=require('../function/around'),a=require('../function/extend'),r=(require('../function/ucFirst'),require('../function/nextTick')),c=require('../function/toBoolean'),p=require('../function/createEvent'),u=require('../function/replaceWith'),s=(require('../function/offsetParent'),require('./event')),f={},l='__update_async__',d={},m={initStruct:function(){var e=this,i=e.option('mainElement'),n=e.option('mainTemplate');if('string'===$.type(n)){var o=e.option('share'),a=e.type+n;if(o)i=d[a];var r;if(!i){if(r=$(n),o)d[a]=r;}else if(e.option('replace'))u(i,r=$(n));else i.html(n);if(r)i=r,e.option('mainElement',i);}var c=e.option('parentSelector');if(c&&!i.parent().is(c))i.appendTo(c);e.initStruct=t;},warn:function(e){if('undefined'!=typeof console)console.warn(['[CC warn]',this.type,e].join(' '));},error:function(e){throw new Error(['[CC error]',this.type,e].join(' '));},live:function(e,t,i){var n=this,o=n.inner('main');if(o)o.on(e+n.namespace(),t,i);return n;},emit:function(e,t){var i=this,n=i.option('context')||i;e=p(e),e.cc=n;var o=[e];if($.isPlainObject(t))o.push(t);e.type=e.type.toLowerCase();var a=n.get$();a.trigger.apply(a,o);var r='on'+e.type;if(!e.isPropagationStopped()&&n.execute(r,o)===!1)e.preventDefault(),e.stopPropagation();return n.execute(r+'_',o),e;},dispatch:function(e,t){if(!e.isPropagationStopped()){if(!e.originalEvent)e.originalEvent={preventDefault:$.noop,stopPropagation:$.noop};var i=$.Event(e);if(i.type='dispatch',this.emit(i,t),i.isPropagationStopped())e.preventDefault(),e.stopPropagation();}},before:function(e,t){return this.on('before'+e.toLowerCase(),t);},after:function(e,t){return this.on('after'+e.toLowerCase(),t);},find:function(e){var t=this.inner('main');if(t){var i=t.find(e);if(i.length)return i;}},appendTo:function(e){var t=this.inner('main');if(t)t.appendTo(e);},prependTo:function(e){var t=this.inner('main');if(t)t.prependTo(e);},execute:function(e,t){var i=this,n=e;if('string'===$.type(e))n=i.option(e);if($.isFunction(n)){var o=i.option('context')||i;if($.isArray(t))return n.apply(o,t);else return n.call(o,t);}},renderWith:function(e,t,i){var n=this;if(!t)if(t=n.option('renderTemplate'),!t)t=n.option('mainTemplate');if(!i)i=n.option('mainElement');var o=n.option('renderSelector');if(o)i=i.find(o);var a;if($.isPlainObject(e)||$.isArray(e))a=n.execute('render',[e,t]);else if('string'===$.type(e))a=e;i.html(a);},namespace:function(){return'.'+this.guid;},option:function(e,t){var i=this;if(1===arguments.length&&'string'===$.type(e))return i.options[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){i.option(e,t);});i.options[e]=t;}},inner:function(e,t){var i=this,n=i.inners||{};if(1===arguments.length&&'string'===$.type(e))return n[e];else{if($.isPlainObject(e))return void $.each(e,function(e,t){i.inner(e,t);});n[e]=t;}},is:function(e){return this.states[e];},state:e('state','states','state','is',function(e,t){return c(t,!1);}),get:function(e){return this.properties[e];},set:e('property','properties','set','get')},h={sync:function(){var e=this,t=function(t,i,n){$.each(t,function(o,a){return e.execute(i[o],[a.newValue,a.oldValue,n?t:a]);});};if($.each(['property','state'],function(i,n){var o=e.inner(n+'Changes');if(o){e.inner(n+'Changes',null);var a=e.constructor[n+'Updater'];if(a)t(o,a,!0);var r=e.option('watch');if(r)t(o,r);e.emit(n+'change',o);}}),arguments[0]!==l)e.execute(e.inner(l));e.inner(l,!1);},_sync:function(){if(!this.inner(l))return!1;else return void 0;},_init:function(){var e='initCalled';if(this.is(e))return!1;else return void this.state(e,!0);},_dispose:function(){var e='disposeCalled';if(this.is(e))return!1;else return void this.state(e,!0);}};exports.extend=function(e,t){a(e,h),$.each(e,function(n,a){var r=n.indexOf('_');if($.isFunction(a)&&0!==r&&r!==n.length-1)if(!($.isArray(t)&&$.inArray(n,t)>=0)){var c=function(e){return i(this,n,arguments,'before',e);},p=function(e){var t=this,o=arguments,r=function(){return i(t,n,o,'after',e);};if(a.length+1===o.length){var c=o[o.length-1];if(c&&$.isFunction(c.then))return void c.then(r);}r();};o(e,n,c,p);}}),a(e,m),s.extend(e);},exports.init=function(e,t){if(!t)t={};return a(t,e.constructor.defaultOptions),t.onafterinit_=function(){e.state('inited',!0);},t.onafterdispose_=function(){e.state('disposed',!0),e.off();var t=e.inner('main');if(e.option('removeOnDispose')&&t)t.remove();r(function(){delete f[e.guid],e.properties=e.options=e.changes=e.states=e.inners=e.guid=null;});},f[e.guid=n()]=e,e.properties={},e.options=t,e.states={},e.inners={},e.init(),e;},exports.dispose=function(e){e.sync();var t=e.inner('main')||e.option('mainElement');if(t)t.off(e.namespace());};}),define('cc/helper/AjaxUploader',['require','exports','module','../function/ratio','../function/restrain','../function/nextTick','../util/life','../util/event','../util/mimeType'],function(require){'use strict';function e(e){p.init(this,e);}function t(e){var t=e.xhr;if(t)$.each(l,function(e,i){t['on'+i.type]=null;}),$.each(d,function(e,i){t.upload['on'+i.type]=null;}),delete e.xhr;var i=e.options;if(i)delete e.options;e.emit('uploadcomplete',{fileItem:e.toPlainObject()}),e.off();}function i(t){var i=this;if($.extend(i,t),null==i.file)i.file=o(i.nativeFile);if(null==i.status)i.status=e.STATUS_WAITING;}function n(e){var t=[];return $.each(e,function(e,i){t.push(s[i]||i);}),$.unique(t).join(',');}function o(e){var t=e.name,i=t.split('.'),n=i.length>1?i.pop().toLowerCase():'';return{name:t,type:n,size:e.size};}var a=require('../function/ratio'),r=require('../function/restrain'),c=require('../function/nextTick'),p=require('../util/life'),u=require('../util/event'),s=require('../util/mimeType'),f=e.prototype;f.type='AjaxUploader',f.init=function(){var e=this,t=e.option('mainElement');if(!t.is('input[type="file"]'))e.error('AjaxUploader mainElement must be <input type="file" />.');var o=$('<form></form>');t.replaceWith(o),o.append(t);var a={};if(e.option('accept'))a.accept=n(e.option('accept'));if(e.option('multiple'))a.multiple=!0;t.prop(a).on('change'+e.namespace(),function(){$.each(e.getFiles(),function(e,t){t.dispose();}),e.inner('files',$.map(t.prop('files'),function(e,t){return new i({nativeFile:e,index:t});})),e.emit('filechange');}),e.inner({main:o,file:t,files:[]}),e.set({action:e.option('action'),data:e.option('data')}),e.emit('ready');},f.getFiles=function(){return this.inner('files');},f.reset=function(){this.inner('main')[0].reset();},f.upload=function(e,t){var n=this;if(!t)t=n.getFiles()[e];else t=new i(t),n.getFiles()[e]=t;if(t)if(t.upload({action:n.get('action'),data:n.get('data'),fileName:n.option('fileName'),header:n.option('header'),useChunk:n.option('useChunk'),chunkSize:n.option('chunkSize')})){var o=function(e,t){n.emit(e,t);};t.on('uploadstart',o).on('uploadprogress',o).on('uploadsuccess',o).on('uploaderror',o).on('uploadcomplete',o).on('chunkuploadsuccess',o);}},f.stop=function(e){var t=this.getFiles()[e];if(t)t.cancel();},f.enable=function(){this.inner('file').prop('disabled',!1);},f.disable=function(){this.inner('file').prop('disabled',!0);},f.dispose=function(){var e=this;p.dispose(e),e.stop(),e.inner('file').off(e.namespace());},p.extend(f,['getFiles','setAction','setData']),e.supportChunk='undefined'!=typeof FileReader,e.STATUS_WAITING=0,e.STATUS_UPLOADING=1,e.STATUS_UPLOAD_SUCCESS=2,e.STATUS_UPLOAD_ERROR=3,e.ERROR_CANCEL=0,e.ERROR_CHUNK_SIZE=-1;var l={uploadStart:{type:'loadstart',handler:function(t){t.status=e.STATUS_UPLOADING,t.emit('uploadstart',{fileItem:t.toPlainObject()});}},uploadSuccess:{type:'load',handler:function(i){var n={responseText:i.xhr.responseText},o=i.chunk;if(o){var a=i.file.size;if(o.uploaded<a){n.fileItem=i.toPlainObject();var r=i.emit('chunkuploadsuccess',n);if(!r.isDefaultPrevented())if(o.index++,o.uploaded+=o.uploading,o.uploaded<a)return void i.upload();}}i.status=e.STATUS_UPLOAD_SUCCESS,n.fileItem=i.toPlainObject(),i.emit('uploadsuccess',n),t(i);}},uploadError:{type:'error',handler:function(i,n,o){i.status=e.STATUS_UPLOAD_ERROR,i.emit('uploaderror',{fileItem:i.toPlainObject(),errorCode:o}),t(i);}},uploadStop:{type:'abort',handler:function(t,i){l.uploadError.handler(t,i,e.ERROR_CANCEL);}}},d={uploadProgress:{type:'progress',handler:function(e,t){var i=e.file.size,n=t.loaded,o=e.chunk;if(o)n+=o.uploaded;e.emit('uploadprogress',{fileItem:e.toPlainObject(),uploaded:n,total:i,percent:(100*r(a(n,i),0,1)).toFixed(2)+'%'});}}},m=i.prototype;return m.upload=function(t){var i=this;if(!t)t=i.options;else i.options=t;var n=t.useChunk?e.STATUS_UPLOADING:e.STATUS_WAITING;if(!(i.status>n)){var o=new XMLHttpRequest();return i.xhr=o,$.each(l,function(e,t){o['on'+t.type]=function(e){t.handler(i,e);};}),$.each(d,function(e,t){o.upload['on'+t.type]=function(e){t.handler(i,e);};}),o.open('post',t.action,!0),c(function(){if(t.useChunk)i.uploadFileChunk(t);else i.uploadFile(t);}),!0;}},m.uploadFile=function(e){var t=this;if(console.log('options',e),1){console.log('herehereherehereherehere');var i={};if(e.data)$.each(e.data,function(e,t){i[e]=t;});var n=t.xhr;if(e.header)$.each(e.header,function(e,t){n.setRequestHeader(e,t);});n.send(JSON.stringify(i));}else{var i=new FormData();if(e.data)$.each(e.data,function(e,t){i.append(e,t);});i.append(e.fileName,t.nativeFile);var n=t.xhr;if(e.header)$.each(e.header,function(e,t){n.setRequestHeader(e,t);});n.send(i);}},m.uploadFileChunk=function(t){var i=this,n=i.nativeFile,o=i.file.size,a=i.chunk;if(!a)a=i.chunk={index:0,uploaded:0};var r=a.index,p=t.chunkSize,u=p*r,s=p*(r+1);if(s>o)s=o;if(a.uploading=s-u,a.uploading<=0)return void c(function(){l.uploadError.handler(i,{},e.ERROR_CHUNK_SIZE);});var f=i.xhr,d={'Content-Type':'',X_FILENAME:encodeURIComponent(n.name),'Content-Range':'bytes '+(u+1)+'-'+s+'/'+o};if(t.header)$.extend(d,t.header);$.each(d,function(e,t){f.setRequestHeader(e,t);}),console.log('ooooooooooo'),f.send(n.slice(u,s));},m.cancel=function(){var t=this;if(t.status===e.STATUS_UPLOADING)t.xhr.abort();},m.toPlainObject=function(){var e=this,t={index:e.index,file:e.file,nativeFile:e.nativeFile,status:e.status};if(e.chunk)t.chunk=e.chunk;return t;},m.dispose=function(){var e=this;e.cancel(),e.off();},u.extend(m),e;}),define('mobile/common/custom/helper/AjaxUploader_9e721f762f',['require','exports','module','cc/helper/AjaxUploader'],function(require){'use strict';var e=require('cc/helper/AjaxUploader');return e.defaultOptions={header:{'Content-Type':'application/json'},data:{},multiple:!1,fileName:'Filedata',ignoreError:!1},e;});