!function(){"use strict";var t="/dynamicComponent/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"wjx-components","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.848abcd7.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.745b73ea.async.js",65],["docs__components__CustomRadio.md.763427d3.async.js",143],["docs__components__CustomCheckbox.md.34c38961.async.js",225],["docs__components__CustomNumberInput.md.9b129565.async.js",252],["docs__components__CustomTimeInput.md.1e967501.async.js",299],["docs__components__CustomInput.md.30715a69.async.js",453],["docs__components__CutomSelectInput.md.3e583a31.async.js",454],["docs__components__CustomInputPair.md.a6e44df2.async.js",475],["docs__components__CustomPriceInput.md.90e87ea3.async.js",484],["nm__dumi__theme-default__layouts__DocLayout__index.b90520b3.async.js",519],["776.e8c51481.chunk.css",776],["776.263a9625.async.js",776],["docs__components__CustomSelect.md.fcd72501.async.js",870],["dumi__tmp-production__dumi__theme__ContextWrapper.4bd2177b.async.js",923],["docs__index.md.2c76ac38.async.js",935],["docs__guide.md.360c2369.async.js",937],["docs__components__CustomTextArea.md.9dd1c6fc.async.js",986]],"r":{"/*":[2,3,12,13,14,16],"/":[17,12,13,14,16],"/guide":[18,12,13,14,16],"/~demos/:id":[0,1,16],"/components/custom-number-input":[6,12,13,14,16],"/components/custom-price-input":[11,12,13,14,16],"/components/cutom-select-input":[9,12,13,14,16],"/components/custom-input-pair":[10,12,13,14,16],"/components/custom-time-input":[7,12,13,14,16],"/components/custom-checkbox":[5,12,13,14,16],"/components/custom-text-area":[19,12,13,14,16],"/components/custom-select":[15,12,13,14,16],"/components/custom-input":[8,12,13,14,16],"/components/custom-radio":[4,12,13,14,16]}},{publicPath:"/dynamicComponent/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();