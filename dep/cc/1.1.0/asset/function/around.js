define("cc/function/around",["require","exports","module"],function(){"use strict";return function(i,n,t,r){var u="string"===$.type(n),e=u?i[n]:i;if(!u)r=t,t=n;var f=function(){var i,n=$.makeArray(arguments);if($.isFunction(t))i=t.apply(this,n);if(i!==!1){if($.isFunction(e))i=e.apply(this,n);if($.isFunction(r)){n.push(i);var u=r.apply(this,n);if("undefined"!==$.type(u))i=u}return i}};return u?i[n]=f:f}});