// =========================================
// Mobile Navigation Toggle
// =========================================
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".site-nav__list");
const navLinks = document.querySelectorAll(".site-nav__list a");

if (navToggle && navList) {
  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navList.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navList.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
}

// =========================================
// Auto Update Current Year
// =========================================
const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}
