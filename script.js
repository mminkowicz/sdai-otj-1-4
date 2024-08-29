document.addEventListener('DOMContentLoaded', () => {
    // Helper function to create fade-in effect with optional scale and translate
    function fadeInEffect(element, delay, scale = 1, translateX = 0, translateY = 0) {
      element.style.opacity = '0';
      element.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      element.style.transition = `opacity 1s ease-in-out, transform 1s ease-in-out`;
      element.style.willChange = 'opacity, transform';
  
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1) translate(0, 0)';
      }, delay);
    }
  
    // Apply effects to each targeted element with unique styles
    const logo = document.querySelector('.logo');
    if (logo) {
      fadeInEffect(logo, 300, 1.2, 0, -20); // Slightly larger and moves down
    }
  
    const menuItems = document.querySelector('.menu-items');
    if (menuItems) {
      fadeInEffect(menuItems, 600, 1, -30, 0); // Moves in from the left
    }
  
    const devFavorites = document.querySelector('.dev-favorites');
    if (devFavorites) {
      fadeInEffect(devFavorites, 900, 0.9, 0, 20); // Starts smaller and moves up slightly
    }
  
    const hoursSection = document.querySelector('.hours-section');
    if (hoursSection) {
      fadeInEffect(hoursSection, 1200, 1, 30, 0); // Moves in from the right
    }
  });
  