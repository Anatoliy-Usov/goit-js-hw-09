!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=0;function r(t,e){e.setAttribute("disabled","true"),t.removeAttribute("disabled")}t.addEventListener("click",(function(){r(e,t),o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500)})),e.addEventListener("click",(function(){clearInterval(o),r(t,e)}))}();
//# sourceMappingURL=01-color-switcher.c884cefd.js.map
