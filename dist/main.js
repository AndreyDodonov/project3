!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount"),o=document.querySelector(".check-btn"),n=document.querySelector(".popup-check"),r=document.querySelectorAll(".popup"),l=document.querySelector(".consultation-btn"),c=document.querySelector(".popup-consultation"),a=document.querySelectorAll(".call-btn"),u=document.querySelector(".popup-call");function s(){return navigator.userAgent.match(/Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i)}r.forEach(e=>{e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})}),e.forEach(e=>{e.addEventListener("click",()=>{s()?t.style.display="block":(t.style.top="0",t.style.display="block")})}),o.addEventListener("click",()=>{s()?n.style.display="block":(n.style.top="0",n.style.display="block")}),l.addEventListener("click",()=>{s()?c.style.display="block":(c.style.top="0",c.style.display="block")}),a.forEach(e=>{e.addEventListener("click",()=>{s()?u.style.display="block":(u.style.top="0",u.style.display="block")})})};var r=()=>{const e=document.querySelector(".main-form"),t=document.querySelector(".capture-form"),o=document.querySelector("#popup-call-form"),n=document.querySelector("#popup-check"),r=document.querySelector("#popup-call-form"),l=document.querySelector("#consult-form"),c=document.querySelector(".director-form"),a=document.createElement("div");let u;a.style.cssText="font-size: 2rem",document.body.addEventListener("submit",d=>{d.target===c&&(u=c),d.target===e&&(u=e),d.target===r&&(u=r),d.target===n&&(u=n),d.target===o&&(u=o),d.target===t&&(u=t),d.target===l&&(u=l),d.preventDefault(),u.appendChild(a),a.textContent="Загрузка...";const i=new FormData(u);let p={};for(let e of i.entries())p[e[0]]=e[1];s(p).then(e=>{if(200!==e.status)throw new Error("status network not 200");a.textContent="Спасибо! Мы с вами свяжемся";const t=document.querySelectorAll("input"),o=document.querySelectorAll("textarea");t.forEach(e=>{e.value=""}),o.forEach(e=>{e.value=""})}).catch(e=>{a.textContent="Что-то пошло не так",console.error(e)})});const s=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var l=()=>{const e=document.getElementById("accordion-two"),t=document.querySelectorAll(".panel-heading"),o=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".panel-heading"))&&t.forEach((e,t)=>{e===n&&(e=>{for(let t=0;t<o.length;t++)o[t].style.display=e===t?"block":"none"})(t)})})};var c=()=>{let e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hidden");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),e.style.display="none"})};var a=()=>{const e=document.querySelector(".constructor"),t=e.querySelectorAll(".panel-heading"),o=e.querySelectorAll(".panel-collapse"),n=e.querySelectorAll(".construct-btn");for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{o.forEach(e=>{e.classList.remove("in")}),o[e].classList.add("in")}),n[e].addEventListener("click",()=>{o.forEach(e=>{e.classList.remove("in")}),o[e+1].classList.add("in")})};(()=>{document.querySelectorAll("[name=user_phone]").forEach(e=>{e.addEventListener("input",e=>{const t=e.target;t.value=t.value.replace(/[^0-9+]/i,""),t.value=t.value.replace(/(.)\+/i,"$1")})})})(),n(),r(),l(),c(),a()}]);