define("cc/function/allPromises",["require","exports","module"],function(){"use strict";return function(e){var n=$.Deferred();return $.when.apply($,e).then(function(){n.resolve($.makeArray(arguments))},function(){n.reject($.makeArray(arguments))}),n}}),define("cc/function/waitPromises",["require","exports","module","./allPromises"],function(require){"use strict";var e=require("./allPromises");return function(n,r){var t=[],u=[];if($.each(n,function(e,n){if($.isFunction(n.then))t.push(n),u.push(e)}),t.length>0)return e(t).then(function(e){$.each(e,function(e,r){n[u[e]]=r}),r()});else return r()}});