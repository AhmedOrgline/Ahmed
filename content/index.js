let nav = document.querySelector(".nav");
let btnMenu = document.querySelector(".btn");

btnMenu.addEventListener('click',function () {
    nav.classList.toggle('open')
    console.log(nav.getAttribute("class"))
    if(nav.getAttribute("class") === "nav open"){
    nav.style.cssText = "transform: scaleY(1) !important;opacity:1"
    }
    else{
        nav.style.cssText = "transform: scaleY(0) !important;opacity:0"
    }
})

