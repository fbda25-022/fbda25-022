// ===================================================
// INTERSECTION OBSERVER FOR SCROLL-TRIGGERED ANIMATIONS
// ===================================================
// This module handles fade-in animations for elements as they enter the viewport.
// Uses the Intersection Observer API for better performance compared to scroll events.

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the "fade-in" class to observe
  const fadeElements = document.querySelectorAll(".fade-in");

  // Configuration for the Intersection Observer
  const observerOptions = {
    root: null,         // Observe relative to the viewport
    rootMargin: "0px",  // No margin adjustment
    threshold: 0.15     // Trigger animation when 15% of element is visible
  };

  // Create and configure the observer callback
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element enters viewport, add "visible" class to trigger CSS animation
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Stop observing this element after animation triggers (runs once per page load)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Start observing all fade-in elements
  fadeElements.forEach(el => observer.observe(el));
});
 