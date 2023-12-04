const menuBtn = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".navigation-menu");

menuBtn.addEventListener("click", () => {
  if (navMenu.getAttribute("data-hidden") === "true") {
    navMenu.setAttribute("data-hidden", false);
    menuBtn.setAttribute("aria-expanded", false);
  } else {
    navMenu.setAttribute("data-hidden", true);
    menuBtn.setAttribute("aria-expanded", true);
  }
});
