!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).reactFiveStarRating={},e.react)}(this,function(e,t){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/r(t);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}var l=function(e){var t=e.starClassName,r=e.starStrokeColor,l=e.starStrokeWidth,s=e.starFillColor,n=e.starStyle,i=e.offSetValue;/*#__PURE__*/return a.default.createElement("svg",{className:void 0===t?"":t,style:o({},void 0===n?{}:n,{margin:"1px"}),viewBox:"0 0 25 25"},/*#__PURE__*/a.default.createElement("defs",null,/*#__PURE__*/a.default.createElement("linearGradient",{id:"gradient"+i},/*#__PURE__*/a.default.createElement("stop",{offset:"0%",stopColor:""+s}),/*#__PURE__*/a.default.createElement("stop",{offset:i+"%",stopColor:""+s}),/*#__PURE__*/a.default.createElement("stop",{offset:i+"%",stopColor:"transparent"}),/*#__PURE__*/a.default.createElement("stop",{offset:"100%",stopColor:"transparent"}))),/*#__PURE__*/a.default.createElement("path",{d:"m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z",fill:"url(#gradient"+i+")",stroke:""+r,strokeWidth:l}))};e.StarRatings=function(e){for(var t=e.rating,r=e.containerClassName,o=void 0===r?"":r,s=e.containerStyle,n=void 0===s?{height:24,width:24}:s,i=e.starClassName,f=void 0===i?"":i,d=e.starStyle,c=void 0===d?{}:d,u=e.starFillColor,p=void 0===u?"gold":u,m=e.starStrokeColor,v=void 0===m?"black":m,h=e.starStrokeWidth,y=void 0===h?.5:h,g=e.concise,C=[],S=void 0!==g&&g?t:5,E=0;E<S;E++)t>0?t<1?(C.push(Math.floor(100*t)),t-=t):(C.push(100),t-=1):C.push(0);/*#__PURE__*/return a.default.createElement("div",{style:{display:"flex",flexDirection:"row"}},C.map(function(e,t){/*#__PURE__*/return a.default.createElement("div",{className:o,style:n,key:""+e+t},/*#__PURE__*/a.default.createElement(l,{starStrokeColor:v,starFillColor:p,starClassName:f,starStyle:c,offSetValue:e,starStrokeWidth:y}))}))}});
//# sourceMappingURL=index.umd.js.map
