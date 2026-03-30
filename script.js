const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

const top = window.scrollY;
const offset = sec.offsetTop - 300;

if(top > offset){
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";
}

});

});

const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {

document.body.classList.toggle("light");

};