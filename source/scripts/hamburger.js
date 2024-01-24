const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".toggle");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("toggle--nojs");

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle("toggle--open");
  navToggle.classList.toggle("toggle--close");
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});

// navToggle.addEventListener('click', () => {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//     navToggle.classList.remove("toggle--open");
//     navToggle.classList.add("toggle--close");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//     navToggle.classList.add("toggle--open");
//     navToggle.classList.remove("toggle--close");
//   }
// });
