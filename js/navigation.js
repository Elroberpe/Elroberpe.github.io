// ===========================
// Navigation & Scroll Spy
// ===========================

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const logo = document.querySelector('.logo');
  
  // Scroll Spy: detectar qué sección está visible
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
        // Remover active de todos los links
        navLinks.forEach(link => link.classList.remove('active'));
        mobileLinks.forEach(link => link.classList.remove('active'));
        
        // Agregar active al link correspondiente
        const activeNavLink = document.querySelector(`.nav-menu .nav-link[href="#${sectionId}"]`);
        const activeMobileLink = document.querySelector(`.mobile-menu .nav-link[href="#${sectionId}"]`);
        
        if (activeNavLink) activeNavLink.classList.add('active');
        if (activeMobileLink) activeMobileLink.classList.add('active');
      }
    });
  }
  
  // Smooth scroll para los anchor links
  function smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Cerrar menú móvil si está abierto
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
      }
    }
  }
  
  // Toggle menú móvil
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      
      // Cambiar icono
      const isOpen = mobileMenu.classList.contains('active');
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
  }
  
  // Click en el logo para volver al inicio
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Event listeners
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  mobileLinks.forEach(link => link.addEventListener('click', smoothScroll));
  
  // Scroll spy
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Ejecutar al cargar
}
