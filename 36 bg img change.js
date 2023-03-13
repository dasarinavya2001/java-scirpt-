// code for page scoll and change color of header navigation

function change(){
    let header_scoll= document.querySelector(".header")
let scrolled = window.scrollY;

if (scrolled > 0){
    header_scoll.classList.add("header-fixed");
}else{
    header_scoll.classList.remove("header-fixed");
}
}
window.addEventListener("scroll",change)