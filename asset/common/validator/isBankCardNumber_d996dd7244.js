define('common/validator/isBankCardNumber_d996dd7244',function(){'use strict';var r=12,t=20,e=8;return function(n){if(n=(''+n).replace(/\s/g,''),!/^\d+$/.test(n))return!1;var a=n.length;if(r>a||a>t)return!1;for(var u=a-e-1;u>=0;u--){for(var i=n.substr(u,e),l=null,f=null,s=!0,c=i.length-1;c>0;c--)if(f=i.charAt(c)-i.charAt(c-1),null==l)l=f;else if(l!==f){s=!1;break;}if(s&&Math.abs(l)<=1)return!1;}return!0;};});