const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")
const funPlaces = document.querySelector(".fun-places")
const explore = document.querySelector(".eplore")

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("mobile-menu")
})

funPlaces.addEventListener("click", function(){
    navLinks.classList.toggle("mobile-menu")
})

explore.addEventListener("click", function(){
    navLinks.classList.toggle("mobile-menu")
})
