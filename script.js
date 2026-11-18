const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const btnText = menuToggle ? menuToggle.querySelector(".btn-text") : null;
const drawerContainer = document.getElementById("drawer-container");
const backdrop = document.getElementById("drawer-backdrop");
const navLinks = document.querySelectorAll(".sm-menu-item a");
const menuItems = document.querySelectorAll(".sm-menu-item");

// Dynamic header background on scroll
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


// OPEN & CLOSE FUNCTIONS

function openDrawer() {
    drawerContainer.classList.add("open");
    document.body.classList.add("menu-active");
    document.body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
    
    // Switch single button to CLOSE
    if (btnText) {
        btnText.textContent = "CLOSE";
    }
}

function closeDrawer() {
    drawerContainer.classList.remove("open");
    document.body.classList.remove("menu-active");
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
    
    // Switch single button back to MENU
    if (btnText) {
        btnText.textContent = "MENU";
    }
    updateHeader();
}

// Single header button click toggles state
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (drawerContainer.classList.contains("open")) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });
}

// Backdrop click closes drawer
if (backdrop) {
    backdrop.addEventListener("click", closeDrawer);
}

// Link click updates active item and closes drawer smoothly
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuItems.forEach(item => item.classList.remove("active"));
        link.closest(".sm-menu-item").classList.add("active");
        closeDrawer();
    });
});

// ESC key closes drawer
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerContainer.classList.contains("open")) {
        closeDrawer();
    }
});

// Close drawer if window is resized above 768px
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && drawerContainer.classList.contains("open")) {
        closeDrawer();
    }
});