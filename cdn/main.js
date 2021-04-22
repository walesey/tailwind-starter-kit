const blink = document.getElementById("blink");

window.setInterval(() => {
    blink.classList.toggle("bg-red-900");
}, 500);