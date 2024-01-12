const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mood")  == "dark") {
    darkMode();
}
else{
    lightMode();
}

themeBtn.addEventListener('click', (e) => {
    if (localStorage.getItem("mood")  == "light") {
        darkMode();
    }
    else{
        lightMode();
    }
})

function darkMode () {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mood", "dark");
}

function lightMode () {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mood", "light");
}