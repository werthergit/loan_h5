define("cc/function/guid",["require","exports","module"],function(){var e=0;return function(){return"cc_"+e++}}),define("cc/util/wheel",["require","exports","module","../function/guid"],function(require,exports){"use strict";var e=require("../function/guid"),i="cc-util-wheel",t="cc-wheel",n="onmousewheel"in document.body?"mousewheel":"DOMMouseScroll";exports.WHEEL=t,exports.init=function(o){var u="."+e();o.data(i,u).on(n+u,function(e){var i,n=e.originalEvent,u=n.wheelDelta;if(u%120===0)i=-u/120;else if(u%3===0)i=-u/3;else if(n.detail%3===0)i=-n.detail/3;else i=n.delta||0;e.type=t,o.trigger(e,{delta:i})})},exports.dispose=function(e){var t=e.data(i);if(t)e.removeData(i).off(t)}});