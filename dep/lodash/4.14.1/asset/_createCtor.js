define("lodash/isObject",function(){function e(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}return e}),define("lodash/_createCtor",["./_baseCreate","./isObject"],function(e,n){function r(r){return function(){var t=arguments;switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3]);case 5:return new r(t[0],t[1],t[2],t[3],t[4]);case 6:return new r(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new r(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var u=e(r.prototype),c=r.apply(u,t);return n(c)?c:u}}return r});