// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Бургер меню
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu--active");
  burger.classList.toggle("burger--active");
  removeBurgerMenu()

  if (document.querySelector('.overlay')) {
    document.querySelector('.overlay').addEventListener("click", () => {
      burgerMenu.classList.toggle("burger-menu--active");
      burger.classList.toggle("burger--active");
      removeBurgerMenu()
    })
  }
});

function removeBurgerMenu() {
  // Убирает прокрутку при расскрытом меню бургера 
  if (burger.classList.contains("burger--active")) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "scroll";
  }
  // Добавляет оверлей при открытии меню
  if (burgerMenu.classList.contains('burger-menu--active')) {
    document.querySelector("body").insertAdjacentHTML('afterbegin', '<div class="overlay"></div>');
  }
  else {
    document.querySelector(".overlay").remove()
  }
}