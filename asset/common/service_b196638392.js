define('cc/util/json',['require','exports','module'],function(require,exports,module){if('object'!=typeof JSON)JSON={};return function(){'use strict';function f(e){return 10>e?'0'+e:e;}function this_value(){return this.valueOf();}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return'string'==typeof t?t:'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+e+'"';}function str(e,t){var r,n,o,u,i,f=gap,a=t[e];if(a&&'object'==typeof a&&'function'==typeof a.toJSON)a=a.toJSON(e);if('function'==typeof rep)a=rep.call(t,e,a);switch(typeof a){case'string':return quote(a);case'number':return isFinite(a)?String(a):'null';case'boolean':case'null':return String(a);case'object':if(!a)return'null';if(gap+=indent,i=[],'[object Array]'===Object.prototype.toString.apply(a)){for(u=a.length,r=0;u>r;r+=1)i[r]=str(r,a)||'null';return o=0===i.length?'[]':gap?'[\n'+gap+i.join(',\n'+gap)+'\n'+f+']':'['+i.join(',')+']',gap=f,o;}if(rep&&'object'==typeof rep){for(u=rep.length,r=0;u>r;r+=1)if('string'==typeof rep[r])if(n=rep[r],o=str(n,a))i.push(quote(n)+(gap?': ':':')+o);}else for(n in a)if(Object.prototype.hasOwnProperty.call(a,n))if(o=str(n,a))i.push(quote(n)+(gap?': ':':')+o);return o=0===i.length?'{}':gap?'{\n'+gap+i.join(',\n'+gap)+'\n'+f+'}':'{'+i.join(',')+'}',gap=f,o;}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if('function'!=typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value;var gap,indent,meta,rep;if('function'!=typeof JSON.stringify)meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},JSON.stringify=function(e,t,r){var n;if(gap='',indent='','number'==typeof r)for(n=0;r>n;n+=1)indent+=' ';else if('string'==typeof r)indent=r;if(rep=t,t&&'function'!=typeof t&&('object'!=typeof t||'number'!=typeof t.length))throw new Error('JSON.stringify');return str('',{'':e});};if('function'!=typeof JSON.parse)JSON.parse=function(text,reviver){function walk(e,t){var r,n,o=e[t];if(o&&'object'==typeof o)for(r in o)if(Object.prototype.hasOwnProperty.call(o,r))if(n=walk(o,r),void 0!==n)o[r]=n;else delete o[r];return reviver.call(e,t,o);}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text))text=text.replace(rx_dangerous,function(e){return'\\u'+('0000'+e.charCodeAt(0).toString(16)).slice(-4);});if(rx_one.test(text.replace(rx_two,'@').replace(rx_three,']').replace(rx_four,'')))return j=eval('('+text+')'),'function'==typeof reviver?walk({'':j},''):j;throw new SyntaxError('JSON.parse');};}(),JSON;}),define('common/service_b196638392',['require','exports','module','cc/util/json'],function(require,exports){'use strict';function e(e,t,u){t=t||{};var i=$.Deferred();return u=$.extend({},o,u),$.ajax({url:r+e,data:u.stringify?n.stringify(t):t,method:'post',dataType:'json',timeout:u.timeout,async:!u.sync,beforeSend:function(e){var t=n.parse(sessionStorage.getItem('userInfo'))||{};if(e.setRequestHeader('X-ZXFQ-INNER-TOKEN',t.token),e.setRequestHeader('X-ZXFQ-INNER-OPENID',t.openid),u.stringify)e.setRequestHeader('Content-Type','application/json;charset=UTF-8');}}).then(function(e){var t=e.code,r=0;if(null==t)t=e.status,r=200;if(t===r)i.resolve(e);else{var n=e.msg;if(n&&!u.preventError)alert({title:'提示',content:n});i.reject(e);}}),i;}function t(e,t){return $.ajax({url:r+e,data:t,dataType:'jsonp'});}var r='http://www.zhixinfenqi.com/loanOne',n=require('cc/util/json'),o={timeout:60000,sync:!1,stringify:!1,preventError:!1};exports.post=e,exports.jsonp=t,exports.baseUrl=r;});