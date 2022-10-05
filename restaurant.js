let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("fa-times");
}) 