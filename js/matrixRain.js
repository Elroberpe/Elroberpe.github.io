// ===========================
// Matrix Rain Effect
// ===========================

function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Configurar tamaño del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Caracteres para la lluvia de código
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&*{}[]()<>!?;:+-=/\\|~^%abcdefghijklmnopqrstuvwxyz';
  const sqlKeywords = 'SELECT FROM WHERE INSERT UPDATE DELETE JOIN HAVING ORDER BY DROP CREATE ALTER TABLE DATABASE';
  const programmingKeywords = 'class function if else for while do switch case break return void const var let int String';
  
  const allChars = chars + sqlKeywords + programmingKeywords;
  
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  
  // Array de gotas
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -canvas.height);
  }
  
  // Función de dibujado
  function draw() {
    // Fondo semitransparente para efecto de desvanecimiento
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      // Seleccionar caracter aleatorio
      const text = allChars.charAt(Math.floor(Math.random() * allChars.length));
      
      // Variar el color para algunos caracteres
      if (Math.random() > 0.98) {
        ctx.fillStyle = '#8F8'; // Verde más brillante
      } else if (Math.random() > 0.95) {
        ctx.fillStyle = '#0C0'; // Verde más oscuro
      } else {
        ctx.fillStyle = '#0F0'; // Verde estándar
      }
      
      // Dibujar el caracter
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Reiniciar la gota cuando llega al fondo
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Mover la gota hacia abajo
      drops[i]++;
    }
  }
  
  // Ejecutar la animación
  const interval = setInterval(draw, 33); // ~30 FPS
  
  // Manejar resize de ventana
  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const newColumns = Math.floor(canvas.width / fontSize);
    
    // Ajustar el array de gotas si cambia el número de columnas
    if (newColumns > drops.length) {
      for (let i = drops.length; i < newColumns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height);
      }
    } else if (newColumns < drops.length) {
      drops.length = newColumns;
    }
  }
  
  window.addEventListener('resize', handleResize);
  
  // Limpiar al salir (opcional, para single page apps)
  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', handleResize);
  };
}
