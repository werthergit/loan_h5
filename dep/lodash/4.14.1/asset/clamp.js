define("lodash/_baseClamp",function(){function t(t,n,r){if(t===t){if(r!==e)t=r>=t?t:r;if(n!==e)t=t>=n?t:n}return t}var e;return t}),define("lodash/isObject",function(){function t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}return t}),define("lodash/isObjectLike",function(){function t(t){return!!t&&"object"==typeof t}return t}),define("lodash/isFunction",["./isObject"],function(t){function e(e){var i=t(e)?o.call(e):"";return i==n||i==r}var n="[object Function]",r="[object GeneratorFunction]",i=Object.prototype,o=i.toString;return e}),define("lodash/isSymbol",["./isObjectLike"],function(t){function e(e){return"symbol"==typeof e||t(e)&&i.call(e)==n}var n="[object Symbol]",r=Object.prototype,i=r.toString;return e}),define("lodash/toNumber",["./isFunction","./isObject","./isSymbol"],function(t,e,n){function r(r){if("number"==typeof r)return r;if(n(r))return i;if(e(r)){var s=t(r.valueOf)?r.valueOf():r;r=e(s)?s+"":s}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(o,"");var b=f.test(r);return b||c.test(r)?a(r.slice(2),b?2:8):u.test(r)?i:+r}var i=0/0,o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt;return r}),define("lodash/clamp",["./_baseClamp","./toNumber"],function(t,e){function n(n,i,o){if(o===r)o=i,i=r;if(o!==r)o=e(o),o=o===o?o:0;if(i!==r)i=e(i),i=i===i?i:0;return t(e(n),i,o)}var r;return n});