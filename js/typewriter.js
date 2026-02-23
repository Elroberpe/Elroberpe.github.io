// ===========================
// Typewriter Effect
// ===========================

function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  if (!typewriterElement) return;
  
  const strings = [
    "Estudiante de Programación",
    "Desarrollador Java",
    "Apasionado por SQL Server",
    "Entusiasta de Spring Boot"
  ];
  
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;
  
  function type() {
    const currentString = strings[stringIndex];
    
    if (isDeleting) {
      // Borrar
      typewriterElement.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      // Escribir
      typewriterElement.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }
    
    // Determinar qué hacer después
    if (!isDeleting && charIndex === currentString.length) {
      // Terminar de escribir, pausar y luego borrar
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Terminar de borrar, pasar al siguiente string
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Iniciar el efecto
  type();
}
