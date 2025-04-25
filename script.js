function setupSmoothScroll() {
  const anchors = document.querySelectorAll('.navbar a');

  anchors.forEach(anchor => {
    // Remove existing listeners to prevent duplicates (optional, if dynamic reloading is a concern)
    anchor.removeEventListener('click', handleSmoothScroll);
    anchor.addEventListener('click', handleSmoothScroll);
  });
}

function handleSmoothScroll(e) {
  e.preventDefault();
  const sectionId = this.getAttribute('href');
  const section = document.querySelector(sectionId);
  
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Section with ID ${sectionId} not found.`);
  }
}

// Fade-in Animation on Scroll (using IntersectionObserver)
function setupFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.2 } // Trigger when 20% of element is visible
    );

    fadeElements.forEach(element => {
      observer.observe(element);
    });

    // Return cleanup function
    return () => {
      fadeElements.forEach(element => observer.unobserve(element));
    };
  } else {
    // Fallback to scroll-based approach with throttling
    const throttle = (func, limit) => {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const checkFade = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    const throttledCheckFade = throttle(checkFade, 100);
    window.addEventListener('scroll', throttledCheckFade);

    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', throttledCheckFade);
    };
  }
}

// Initialize Smooth Scroll and Fade-in
setupSmoothScroll();
const cleanupFadeIn = setupFadeIn();

// Optional: Cleanup event listeners when page unloads (for SPAs)
window.addEventListener('unload', () => {
  cleanupFadeIn();
});