var Client=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";function r(e){return!!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)}function o(e){e.preventDefault();const n=document.getElementById("url").value;console.log(n),r(n)?fetch("http://localhost:8081/sentimentAPI",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})}).then(e=>e.json()).then((function(e){console.log(e),document.getElementById("agreement").innerHTML=e.agreement,document.getElementById("subjectivity").innerHTML=e.subjectivity,document.getElementById("confidence").innerHTML=e.confidence,document.getElementById("irony").innerHTML=e.irony})).catch(e=>{console.log(" an error",e)}):alert("The URL is not valid. Please isert another one.")}t.r(n),t.d(n,"handleSubmit",(function(){return o})),t.d(n,"validUrl",(function(){return r}));t(0),t(1),t(2),t(3),t(4)}]);