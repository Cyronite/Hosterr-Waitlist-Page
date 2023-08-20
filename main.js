const desktopnav = document.querySelector(".nav-desktop");
const mobilenav = document.querySelector(".nav-mobile");

function navhanddler(){
    if (window.innerWidth > 1000){
        mobilenav.classList.add("hidden");
        desktopnav.classList.remove("hidden");
    }else{
        mobilenav.classList.remove("hidden");
        desktopnav.classList.add("hidden");
    }
}

window.addEventListener("resize", navhanddler);