let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let themeBtn = document.getElementById("theme-icon");

// Theme dark/light
let localData = localStorage.getItem("theme");

if (localData == null) {
  localStorage.setItem("theme", "dark");
}

if (localData == "dark") {
  themeBtn.classList = "bx bxs-sun";
  document.body.classList.remove("light-theme");
} else if (localData == "light") {
  themeBtn.classList = "bx bxs-moon";
  document.body.classList.add("light-theme");
}

themeBtn.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    themeBtn.classList = "bx bxs-moon";
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.classList = "bx bxs-sun";
    localStorage.setItem("theme", "dark");
  }
};

// show/hide navbar
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  console.log("scrolling");
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

//Scroll effect
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  reset: false,
});

sr.reveal(".home-text", {
  delay: 200,
  origin: "top",
});
sr.reveal(".home-img", {
  delay: 400,
  origin: "top",
});

sr.reveal(".about, .services, .cta, .resume, .contact, .copyright", {
  delay: 200,
  origin: "top",
});
