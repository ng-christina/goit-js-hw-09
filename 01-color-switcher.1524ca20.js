const t=document.body,e=document.querySelector("[data-stop]"),d=document.querySelector("[data-start]");let a=null;e.disabled=!1,d.addEventListener("click",(function(e){a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),d.disabled=!0})),e.addEventListener("click",(function(t){clearInterval(a),d.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.1524ca20.js.map