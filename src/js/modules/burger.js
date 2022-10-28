document.addEventListener("DOMContentLoaded", () => {
  // Vars
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".nav");
  const link = document.querySelectorAll(".nav__link");
  const bottomElement = document.querySelector('.header__bottom-container');

  // Burger event
  burger.addEventListener("click", toggleMenu);

  // Links event
  link.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  // Functions
  
  function toggleMenu() {
    menu.classList.toggle("header__nav--active");
    bottomElement.classList.toggle("header__bottom--active");
  }

  function closeMenu() {
    menu.classList.remove("header__nav--active");
    bottomElement.classList.remove("header__bottom--active");
  }
});
