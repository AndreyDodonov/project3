!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount"),o=document.querySelector(".check-btn"),r=document.querySelector(".popup-check"),n=document.querySelectorAll(".popup"),l=document.querySelector(".consultation-btn"),c=document.querySelector(".popup-consultation"),u=document.querySelectorAll(".call-btn"),a=document.querySelector(".popup-call");function i(){return navigator.userAgent.match(/Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i)}n.forEach(e=>{e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})}),e.forEach(e=>{e.addEventListener("click",()=>{i()?t.style.display="block":(t.style.top="0",t.style.display="block")})}),o.addEventListener("click",()=>{i()?r.style.display="block":(r.style.top="0",r.style.display="block")}),l.addEventListener("click",()=>{i()?c.style.display="block":(c.style.top="0",c.style.display="block")}),u.forEach(e=>{e.addEventListener("click",()=>{i()?a.style.display="block":(a.style.top="0",a.style.display="block")})})};var n=()=>{const e=document.querySelector(".main-form"),t=document.querySelector(".capture-form"),o=document.querySelector("#popup-call-form"),r=document.querySelector("#popup-check"),n=document.querySelector("#popup-call-form"),l=document.querySelector("#consult-form"),c=document.querySelector(".director-form"),u=document.createElement("div");let a;u.style.cssText="font-size: 2rem",document.body.addEventListener("submit",s=>{s.target===c&&(a=c),s.target===e&&(a=e),s.target===n&&(a=n),s.target===r&&(a=r),s.target===o&&(a=o),s.target===t&&(a=t),s.target===l&&(a=l),s.preventDefault(),a.appendChild(u),u.textContent="Загрузка...";const d=new FormData(a);let p={};for(let e of d.entries())p[e[0]]=e[1];i(p).then(e=>{if(200!==e.status)throw new Error("status network not 200");u.textContent="Спасибо! Мы с вами свяжемся";const t=document.querySelectorAll("input"),o=document.querySelectorAll("textarea");t.forEach(e=>{e.value=""}),o.forEach(e=>{e.value=""})}).catch(e=>{u.textContent="Что-то пошло не так",console.error(e)})});const i=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var l=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".hidden"),o=document.querySelector(".visible-sm-block");e.addEventListener("click",()=>{t.style.display="flex",o.style.display="flex",e.style.display="none"})};(()=>{document.querySelectorAll("[name=user_phone]").forEach(e=>{e.addEventListener("input",e=>{const t=e.target;t.value=t.value.replace(/[^0-9+]/i,""),t.value=t.value.replace(/(.)\+/i,"$1")})})})(),r(),n(),l()}]);