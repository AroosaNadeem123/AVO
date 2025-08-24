// Auto-numbering for steps
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.step').forEach((el, idx) => {
    const numEl = el.querySelector('.step-number');
    if (numEl){
      numEl.textContent = String(idx + 1).padStart(2, '0');
    }
  });
});

// CTA button action
document.querySelector('.cta-button').addEventListener('click', () => {
  alert("You clicked Get Started!");
});

// Highlight active nav on scroll
const sections = document.querySelectorAll("section, .hero-section, footer");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach(li => {
    li.classList.remove("active");
    if (li.getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
