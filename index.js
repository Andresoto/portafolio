const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".navbar-right");

navToggle.addEventListener("click", () => {
    menu.classList.toggle("navbar-right_visible")
});