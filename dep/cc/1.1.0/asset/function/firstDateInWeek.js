define("cc/function/offsetSecond",["require","exports","module"],function(){"use strict";return function(e,t){if("date"===$.type(e))e=e.getTime();return new Date(e+1e3*t)}}),define("cc/function/offsetMinute",["require","exports","module","./offsetSecond"],function(require){"use strict";var e=require("./offsetSecond");return function(t,n){return e(t,60*n)}}),define("cc/function/offsetHour",["require","exports","module","./offsetMinute"],function(require){"use strict";var e=require("./offsetMinute");return function(t,n){return e(t,60*n)}}),define("cc/function/offsetDate",["require","exports","module","./offsetHour"],function(require){"use strict";var e=require("./offsetHour");return function(t,n){return e(t,24*n)}}),define("cc/function/firstDateInWeek",["require","exports","module","./offsetDate"],function(require){"use strict";var e=require("./offsetDate");return function(t,n){if("number"===$.type(t))t=new Date(t);var r=t.getDay();return r=r>=n?r:r+7,e(t,-1*(r-n))}});