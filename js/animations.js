// ===========================
// Animations with Intersection Observer
// ===========================

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Opcional: dejar de observar una vez animado (mejor performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar todos los elementos con clase .animate-on-scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(element => observer.observe(element));
}
