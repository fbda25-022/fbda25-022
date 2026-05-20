//Intersection Observer for fade-in effects
 
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
 
  const observerOptions = {
    root: null,         // viewport
    rootMargin: "0px",
    threshold: 0.15     // trigger when 15% of element is visible
  };
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);
 
  fadeElements.forEach(el => observer.observe(el));
});
 