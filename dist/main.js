!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelectorAll(".popup-close"),t=document.querySelectorAll(".discount-btn"),n=document.querySelector(".popup-discount"),o=document.querySelector(".check-btn"),r=document.querySelector(".popup-check");function l(){return navigator.userAgent.match(/Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i)}document.querySelectorAll(".popup").forEach(t=>{t.addEventListener("click",n=>{let o=n.target;o===e?t.style.display="none":(o=o.closest(".popup-content"))||(t.style.display="none")})}),t.forEach(e=>{e.addEventListener("click",()=>{l()?n.style.display="block":(n.style.top="0",n.style.display="block")})}),o.addEventListener("click",()=>{l()?r.style.display="block":(r.style.top="0",r.style.display="block")})};var r=()=>{const e=document.querySelector(".main-form"),t=document.querySelector(".capture-form"),n=document.createElement("div");let o;n.style.cssText="font-size: 2rem",document.body.addEventListener("submit",l=>{l.target===e?o=e:l.target===t&&(o=t),l.preventDefault(),o.appendChild(n),n.textContent="Загрузка...";const c=new FormData(o);let u={};for(let e of c.entries())u[e[0]]=e[1];r(u).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Спасибо! Мы с вами свяжемся"}).catch(e=>{n.textContent="Что-то пошло не так",console.error(e)})});const r=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(()=>{document.querySelectorAll("[name=user_phone]").forEach(e=>{e.addEventListener("input",e=>{const t=e.target;t.value=t.value.replace(/[^0-9+]/i,""),t.value=t.value.replace(/(.)\+/i,"$1")})})})(),o(),r()}]);