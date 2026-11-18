const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const btnText = menuToggle ? menuToggle.querySelector(".btn-text") : null;
const drawerContainer = document.getElementById("drawer-container");
const backdrop = document.getElementById("drawer-backdrop");
const navLinks = document.querySelectorAll(".sm-menu-item a");
const menuItems = document.querySelectorAll(".sm-menu-item");

function updateHeader() {
    if (document.body.classList.contains("menu-active")) return;

    if (window.innerWidth <= 768) {
        header.style.background = "#03061f";
    } else {
        header.style.background = window.scrollY > 20
            ? "#010417"
            : "#000968";
    }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("resize", updateHeader);
updateHeader();



function openDrawer() {
    drawerContainer.classList.add("open");
    document.body.classList.add("menu-active");
    document.body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
    
    if (btnText) {
        btnText.textContent = "CLOSE";
    }
}

function closeDrawer() {
    drawerContainer.classList.remove("open");
    document.body.classList.remove("menu-active");
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
    
    if (btnText) {
        btnText.textContent = "MENU";
    }
    updateHeader();
}

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (drawerContainer.classList.contains("open")) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });
}

if (backdrop) {
    backdrop.addEventListener("click", closeDrawer);
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuItems.forEach(item => item.classList.remove("active"));
        link.closest(".sm-menu-item").classList.add("active");
        closeDrawer();
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerContainer.classList.contains("open")) {
        closeDrawer();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && drawerContainer.classList.contains("open")) {
        closeDrawer();
    }
});