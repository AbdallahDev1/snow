let bars = document.querySelector(".bars");
let nav = document.querySelector("header nav");
let sectionLinks = document.querySelectorAll("header nav ul a");
bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  nav.classList.toggle("show");
});
sectionLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    bars.classList.toggle("active");
    nav.classList.toggle("show");
  });
});

//
let sections = document.querySelectorAll("section");
window.addEventListener("load", animateSec);
window.addEventListener("scroll", animateSec);
function animateSec() {
  sections.forEach((sec) => {
    let top = window.scrollY + window.innerHeight / 2;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("animate");

      document.querySelectorAll("nav ul a").forEach((ele) => {
        ele.classList.remove("active");

        if (sec.id == ele.getAttribute("data-id")) {
          ele.classList.add("active");
        }
      });
    } else {
      sec.classList.remove("animate");
    }
  });
}
// auto type
let typed = new Typed(".auto-type", {
  strings: ["Programmer", "Designer", "YouTuber"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// footer time
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// go to top

let topBtn = document.querySelector(".go-top");
let landingPage = document.querySelector(".landing");
window.addEventListener("scroll", () => {
  if (window.scrollY > landingPage.offsetHeight) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
//
