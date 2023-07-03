var header = document.querySelector("header");

function activateHeader(){
    header.classList.toggle("header_2", window.scrollY > 0);
}

window.addEventListener("scroll", activateHeader);