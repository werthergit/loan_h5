define("cc/function/allPromises",["require","exports","module"],function(){"use strict";return function(e){var n=$.Deferred();return $.when.apply($,e).then(function(){n.resolve($.makeArray(arguments))},function(){n.reject($.makeArray(arguments))}),n}}),define("cc/function/keys",["require","exports","module"],function(){"use strict";return function(e){if(Object.keys)return Object.keys(e);var n=[];return $.each(e,function(e){n.push(e)}),n}}),define("cc/util/validator",["require","exports","module","../function/allPromises","../function/keys"],function(require,exports){"use strict";function e(e){var n={};return $.each(e,function(e,r){if(r.name)n[r.name]=r}),n}var n=require("../function/allPromises"),r=require("../function/keys"),i={required:function(e,n){if(0===e.value||e.value)return!0;var r=n.required;if(r===!0)return!1;else return void 0},pattern:function(e,n){var r=n.pattern;if("string"===$.type(r))r=exports.buildInPatterns[r];if(r instanceof RegExp)return r.test(e.value);else return void 0},minlength:function(e,n){var r=n.minlength;if($.isNumeric(r))return e.value.length>=+r;else return void 0},maxlength:function(e,n){var r=n.maxlength;if($.isNumeric(r))return e.value.length<=+r;else return void 0},min:function(e,n){var r=n.min;if($.isNumeric(r))return e.value>=+r;else return void 0},max:function(e,n){var r=n.max;if($.isNumeric(r))return e.value<=+r;else return void 0},step:function(e,n){var r=n.min,i=n.step;if($.isNumeric(r)&&$.isNumeric(i))return(e.value-r)%i===0;else return void 0},equals:function(e,n,r){var i=n.equals;if("string"===$.type(i))return e.value===r[i].value;else return void 0}};exports.buildInPatterns={},exports.validate=function(t,u,s){var f=[],a=[];if(!$.isArray(s))s=r(t);if($.each(s,function(s,o){var c=t[o],l=u[o];if(l){var v=$.extend({name:o},c);if($.isFunction(l.before)&&l.before(t,e(f))===!1)return void f.push(v);var m,d=l.rules,h=[],p=[],g=d.required;if($.isFunction(g))g=g(c,d,t);if(""!==c.value||g===!0){var y=function(e,n){if(n===!1)m=e;else if(n&&$.isFunction(n.then))n.then(y),h.push(e),p.push(n);else if("boolean"!==$.type(n))n=!1;return n},q=function(e,n){if(!$.isFunction(n))n=i[e];if($.isFunction(n))return y(e,n(c,d,t));else return void 0},x=$.isArray(l.sequence)?l.sequence:r(d);$.each(x,function(e,n){return q(n,d[n])})}var s,b=function(){if(m){v.rule=m;var n=l.errors[m];if($.isFunction(n))n=n(c,d,t);v.error=n}if($.isFunction(l.after))l.after(v,e(f))};if(p.length){var k=n(p).then(function(e){$.each(e,function(e,n){if(n===!1)return m=h[e],!1;else return void 0}),b(),f[s-1]=v});s=f.push(k),a.push(k)}else b(),f.push(v)}}),a.length)return n(a).then(function(){return f});else return f}});