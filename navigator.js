const btn = document.getElementById("btn-explorar");
const menu = document.getElementById("menu");

function goMenu(){
    window.location.hash = '#menu';
}

btn.addEventListener('click', goMenu);