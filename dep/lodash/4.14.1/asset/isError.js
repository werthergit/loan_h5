define("lodash/isObjectLike",function(){function e(e){return!!e&&"object"==typeof e}return e}),define("lodash/isError",["./isObjectLike"],function(e){function t(t){if(!e(t))return!1;else return o.call(t)==r||"string"==typeof t.message&&"string"==typeof t.name}var r="[object Error]",n=Object.prototype,o=n.toString;return t});