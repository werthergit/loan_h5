define("cc/function/split",["require","exports","module"],function(){"use strict";return function(e,t){var n=[];if("number"===$.type(e))e=""+e;if(e&&"string"===$.type(e))$.each(e.split(t),function(e,t){if(t=$.trim(t))n.push(t)});return n}}),define("cc/function/offsetSecond",["require","exports","module"],function(){"use strict";return function(e,t){if("date"===$.type(e))e=e.getTime();return new Date(e+1e3*t)}}),define("cc/function/offsetMinute",["require","exports","module","./offsetSecond"],function(require){"use strict";var e=require("./offsetSecond");return function(t,n){return e(t,60*n)}}),define("cc/function/offsetHour",["require","exports","module","./offsetMinute"],function(require){"use strict";var e=require("./offsetMinute");return function(t,n){return e(t,60*n)}}),define("cc/function/offsetDate",["require","exports","module","./offsetHour"],function(require){"use strict";var e=require("./offsetHour");return function(t,n){return e(t,24*n)}}),define("cc/util/cookie",["require","exports","module","../function/split","../function/offsetDate"],function(require,exports){"use strict";function e(e){if(0===e.indexOf('"'))e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");var t={};try{e=decodeURIComponent(e.replace(/\+/g," ")),$.each(n(e,";"),function(e,i){var o=n(i,"="),u=o[0],r=o[1];if(u)t[u]=r})}catch(i){}return t}function t(e,t,n){var o=n.expires;if($.isNumeric(o))o=i(new Date,o);document.cookie=[encodeURIComponent(e),"=",encodeURIComponent(t),o?";expires="+o.toUTCString():"",n.path?";path="+n.path:"",n.domain?";domain="+n.domain:"",n.secure?";secure":""].join("")}var n=require("../function/split"),i=require("../function/offsetDate");exports.get=function(t){var n=e(document.cookie);return"string"===$.type(t)?n[t]:n},exports.set=function(e,n,i){if($.isPlainObject(e))i=n,n=null;if(i=$.extend({},exports.defaultOptions,i),null===n)$.each(e,function(e,n){t(e,n,i)});else t(e,n,i)},exports.remove=function(e,n){n=n||{},n.expires=-1,t(e,"",$.extend({},exports.defaultOptions,n))},exports.defaultOptions={}});