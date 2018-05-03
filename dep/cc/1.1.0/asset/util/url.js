define("cc/function/split",["require","exports","module"],function(){"use strict";return function(e,t){var n=[];if("number"===$.type(e))e=""+e;if(e&&"string"===$.type(e))$.each(e.split(t),function(e,t){if(t=$.trim(t))n.push(t)});return n}}),define("cc/util/url",["require","exports","module","../function/split"],function(require,exports){"use strict";var e=require("../function/split");exports.parseQuery=function(t){var n={};if("string"===$.type(t)&&t.indexOf("=")>=0){var r=t.charAt(0),i="?"===r||"#"===r?1:0;if(i>0)t=t.substr(i);$.each(e(t,"&"),function(t,r){var i=e(r,"=");if(2===i.length){var a=i[0];if(a)n[a]=decodeURIComponent(i[1])}})}return n},exports.parse=function(e){if(null==e)e=document.URL;var t=document.createElement("a");t.href=e,e=t.href;var n="";if(t.protocol&&t.host)n=t.protocol+"//"+t.host;else if(/^(http[s]?:\/\/[^\/]+)(?=\/)/.test(e))n=RegExp.$1;var r=n.split(":");if(0===n.indexOf("http:")&&3===r.length&&80==r[2])r.length=2,n=r.join(":");var i=t.pathname;if(i&&"/"!==i.charAt(0))i="/"+i;return{origin:n,pathname:i,search:t.search,hash:t.hash}},exports.mixin=function(e,t,n){if("boolean"===$.type(t)&&2===arguments.length)n=t,t=null;if(null==t)t=document.URL;var r=exports.parse(t),i=exports.parseQuery(n?r.hash:r.search);if($.extend(i,e),i=$.param(i),t=r.origin+r.pathname,n)t+=r.search;else if(i)t+="?"+i;if(!n)t+=r.hash;else if(i)t+="#"+i;return t}});