
  // Fade-in Animation
window.addEventListener('load', function() {
    let fadeInElement = document.querySelector('.fade-in');
    fadeInElement.style.opacity = 1;
  });
  
  // Scroll Animation
  window.addEventListener('scroll', function() {
    let scrollElements = document.querySelectorAll('.scroll-animation');
    for (let element of scrollElements) {
      let position = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    }
  });
  