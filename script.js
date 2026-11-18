
const header = document.querySelector("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("header ul a");


// HEADER SCROLL EFFECT

function updateHeader() {
    if (window.innerWidth <= 768) {
        header.style.background = "#080808";
    } else {
        header.style.background = window.scrollY > 20
            ? "black"
            : "#000968";
    }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("resize", updateHeader);


// MOBILE MENU

menuToggle.addEventListener("click", () => {

    const isOpen = header.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING A LINK

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// CLOSE MENU WITH ESCAPE

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// RESET MENU WHEN RETURNING TO DESKTOP

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");

    }

});
