define("cc/function/eventOffset",["require","exports","module"],function(){"use strict";return function(e){var t=e.offsetX,n=e.offsetY;if("number"!==$.type(t)){var f=e.target.getBoundingClientRect();t=e.clientX-f.left,n=e.clientY-f.top}return{x:t,y:n}}});