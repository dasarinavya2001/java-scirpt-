let toggle_btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");
let close_btn = document.querySelector(".close-btn");

toggle_btn.addEventListener("click",function(){
    nav.classList.add("nav-show")
})

close_btn.addEventListener("click",function(){
    nav.classList.remove("nav-show")
})

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