define("cc/function/decimalLength",["require","exports","module"],function(){"use strict";return function(e){var n=(""+e).split(".");return 2===n.length?n[1].length:0}}),define("cc/function/float2Int",["require","exports","module"],function(){"use strict";return function(e,n){var t,r=(""+e).split(".");if(n>=0);else n=0;if(1===r.length)t=e+new Array(n+1).join("0");else n=Math.max(0,n-r[1].length),t=r.join("")+new Array(n+1).join("0");return+t}}),define("cc/function/divide",["require","exports","module","./decimalLength","./float2Int"],function(require){"use strict";var e=require("./decimalLength"),n=require("./float2Int");return function(t,r){var i=Math.max(e(t),e(r));return t=n(t,i),r=n(r,i),t/r}});