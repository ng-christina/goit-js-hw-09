

const body = document.body;
const stop = document.querySelector('[data-stop]');
const start = document.querySelector('[data-start]');
let timerId = null

stop.disabled = true;

start.addEventListener("click", changeColor) 

stop.addEventListener('click', stopChangeColor);

function changeColor(event) {
    timerId = setInterval(() => {
    body.style.backgroundColor= getRandomHexColor()
        }, 1000
     )
     start.disabled = true;
     stop.disabled = false;

}

function stopChangeColor(event) {
        clearInterval(timerId);   
        start.disabled = false;
        // stop.disabled = false;

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
