const menuToggle= document.querySelector(".menuBars");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});