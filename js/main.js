// ===========================
// Main JavaScript
// ===========================

// Loading Screen
function hideLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000); // Breve delay para mostrar el loading
  }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar loading screen
  hideLoadingScreen();
  
  // Inicializar módulos
  initNavigation();
  initAnimations();
  initTypewriter();
  initMatrixRain();
  initContactForm();
  
  console.log('🚀 Portfolio cargado exitosamente!');
});
