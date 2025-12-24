// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Logo hover animation
const logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", () => {
  logo.style.transform = "scale(1.08)";
});
logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
});

// Welcome animation
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(20px)";
  setTimeout(() => {
    hero.style.transition = "all 0.6s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 100);
});
