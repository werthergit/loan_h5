define("lodash/isObjectLike",function(){function e(e){return!!e&&"object"==typeof e}return e}),define("lodash/isBoolean",["./isObjectLike"],function(e){function t(t){return t===!0||t===!1||e(t)&&i.call(t)==n}var n="[object Boolean]",o=Object.prototype,i=o.toString;return t});