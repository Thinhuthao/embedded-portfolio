<<<<<<< HEAD

// Scroll reveal animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

});


sections.forEach(section => {

section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "all 1s";

observer.observe(section);

});


// Theme toggle

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {

document.body.classList.toggle("light");

};
=======

// Scroll reveal animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

});


sections.forEach(section => {

section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "all 1s";

observer.observe(section);

});


// Theme toggle

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {

document.body.classList.toggle("light");

};
>>>>>>> e627ffd55caffaf4d2e01388cd42e87f7b8dfa7e
