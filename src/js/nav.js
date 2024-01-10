const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcone = document.getElementById('nav-close');

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    })
)


closeIcone.addEventListener("click", () => {
    navMenu.classList.add('hidden');
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
})