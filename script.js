<<<<<<< HEAD
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
=======
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
>>>>>>> d0ce23825b5f2d7945321af673b6a1e729130fe0
  window.addEventListener('load', checkFade);