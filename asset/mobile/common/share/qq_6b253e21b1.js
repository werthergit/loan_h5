define('mobile/common/share/qq_6b253e21b1',['require','exports'],function(require,exports){exports.setShareInfo=function(e){require(['qqSdk'],function(t){if(t.data&&t.data.setShareInfo)t.data.setShareInfo({title:e.title,share_url:e.url,image_url:e.img,desc:e.content});});};});