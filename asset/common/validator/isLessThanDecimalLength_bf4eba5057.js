define('cc/function/decimalLength',['require','exports','module'],function(){'use strict';return function(e){var n=(''+e).split('.');return 2===n.length?n[1].length:0;};}),define('common/validator/isLessThanDecimalLength_bf4eba5057',['require','exports','module','cc/function/decimalLength'],function(require){'use strict';var e=require('cc/function/decimalLength');return function(n,t){return e(n)<t;};});