const intro = document.querySelector(".container-intro");
const nav = document.querySelector("#main");
const topOfNav = intro.offsetHeight;
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("slide-in-nav");
  } else {
    document.body.classList.remove("slide-in-nav");
  }
}

window.addEventListener("scroll", fixNav);