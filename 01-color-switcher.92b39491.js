!function(){var t=document.body,e=document.querySelector("[data-stop]"),a=document.querySelector("[data-start]"),n=null;a.addEventListener("click",(function(d){n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),a.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(t){clearInterval(n),a.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.92b39491.js.map
