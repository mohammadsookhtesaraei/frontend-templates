const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");

const showProductMenu = document.querySelector("#show-product-menu");
const showMoreMenu = document.querySelector("#show-more-menu");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

showProductMenu.addEventListener("mouseenter", (e) => {
  const div = e.target.childNodes[5];
  div.style.animation = "showUp 0.35s 1";
  div.style.display = "flex";
});

showProductMenu.addEventListener("mouseleave", (e) => {
  const div = e.target.childNodes[5];
  div.style.display = "none";
});

showMoreMenu.addEventListener("mouseenter", (e) => {
  const div = e.target.childNodes[5];
  div.style.animation = "showUp 0.35s 1";
  div.style.display = "block";
});

showMoreMenu.addEventListener("mouseleave", (e) => {
  const div = e.target.childNodes[5];
  div.style.display = "none";
});
