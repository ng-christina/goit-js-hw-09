!function(){var t=document.body,e=document.querySelector("[data-stop]"),a=document.querySelector("[data-start]"),n=null;e.disabled=!1,a.addEventListener("click",(function(e){n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),a.disabled=!0})),e.addEventListener("click",(function(t){clearInterval(n),a.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b4fb3d36.js.map