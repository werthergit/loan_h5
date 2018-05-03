define("cc/util/instance",["require","exports","module"],function(require,exports){exports.window=$(window),exports.document=$(document),exports.html=$(document.documentElement),exports.body=$(document.body)}),define("cc/function/decimalLength",["require","exports","module"],function(){"use strict";return function(e){var t=(""+e).split(".");return 2===t.length?t[1].length:0}}),define("cc/function/float2Int",["require","exports","module"],function(){"use strict";return function(e,t){var n,i=(""+e).split(".");if(t>=0);else t=0;if(1===i.length)n=e+new Array(t+1).join("0");else t=Math.max(0,t-i[1].length),n=i.join("")+new Array(t+1).join("0");return+n}}),define("cc/function/divide",["require","exports","module","./decimalLength","./float2Int"],function(require){"use strict";var e=require("./decimalLength"),t=require("./float2Int");return function(n,i){var r=Math.max(e(n),e(i));return n=t(n,r),i=t(i,r),n/i}}),define("cc/function/parsePercent",["require","exports","module","./divide"],function(require){"use strict";var e=require("./divide"),t=/(-?\d+(\.\d+)?)%/;return function(n){if(t.test(n))return e(RegExp.$1,100);else return void 0}}),define("cc/function/pin",["require","exports","module","../util/instance","./parsePercent"],function(require){"use strict";function e(e){var t=r[e.x];if(null==t)t=e.x;if("string"===$.type(t)){var n=i(t);if(null!=n)t=n*(e.width||e.element.outerWidth())}return t}function t(e){var t=r[e.y];if(null==t)t=e.y;if("string"===$.type(t)){var n=i(t);if(null!=n)t=n*(e.height||e.element.outerHeight())}return t}var n=require("../util/instance"),i=require("./parsePercent"),r={left:0,top:0,center:"50%",middle:"50%",right:"100%",bottom:"100%"};return function(i){var r=i.element,u=i.attachment||{};if(!u.element)u.element=n.body;var o=u.element.offset(),c=o.left+e(u),f=o.top+t(u),l=c-e(i),s=f-t(i),d=i.offset;if(d){if("number"===$.type(d.x))l+=d.x;if("number"===$.type(d.y))s+=d.y}var a={left:l,top:s},m=r.css("position");if("absolute"!==m&&"fixed"!==m)a.position="absolute";if(i.silent)return a;else r.css(a)}});