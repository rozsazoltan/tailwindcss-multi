!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e||self).tailwindcssMulti=n()}(this,function(){function e(e){var n={exports:{}};return e(n,n.exports),n.exports}var n=e(function(e,n){function t(e,n){return{handler:e,config:n}}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}}),t.withOptions=function(e,n=(()=>({}))){const t=function(t){return{__options:t,handler:e(t),config:n(t)}};return t.__isOptionsFunction=!0,t.__pluginFunction=e,t.__configFunction=n,t};const i=t}),t=e(function(e,t){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});const u=/*#__PURE__*/i(n).default});return(0,(t.__esModule?t:{default:t}).default)(function(e){(0,e.matchUtilities)({multi:function(e){var n;if(![e[0],e.slice(-1)[0]].every(function(e){return e&&["'",'"'].includes(e)}))throw new Error("Invalid multi value. `"+e+"` must be quoted with single or double quotes (e.g. `multi-['...']'`).");var t=e.slice(1,-1).split(/;(?![^[]*\])/).filter(function(e){return e.trim().length}).map(function(e){return e.replace(/_/g,"\\_").replace(/ /g,"_")}).join(" ");return t.trim()?((n={})["@apply "+t]={},n):{}}})})});
//# sourceMappingURL=index.umd.js.map
