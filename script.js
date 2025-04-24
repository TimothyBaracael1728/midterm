// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Fade-in Animation on Scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const checkFade = () => {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', checkFade);
  window.addEventListener('load', checkFade);