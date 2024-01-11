const tabs = document.querySelectorAll(".tabs_wrap ul li");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        tab.classList.add('active');
    })
})