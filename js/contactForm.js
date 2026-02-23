// ===========================
// Contact Form Validation
// ===========================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.querySelector('.form-success');
  
  // Validar email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Mostrar error en un campo
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.add('error');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  }
  
  // Limpiar error de un campo
  function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.remove('error');
    if (errorElement) {
      errorElement.classList.remove('show');
    }
  }
  
  // Validar campo individual
  function validateField(input) {
    clearError(input);
    
    if (input.value.trim() === '') {
      showError(input, 'Este campo es requerido');
      return false;
    }
    
    if (input.type === 'email' && !isValidEmail(input.value)) {
      showError(input, 'Por favor ingresa un email válido');
      return false;
    }
    
    if (input.id === 'message' && input.value.trim().length < 10) {
      showError(input, 'El mensaje debe tener al menos 10 caracteres');
      return false;
    }
    
    return true;
  }
  
  // Validar todo el formulario
  function validateForm() {
    let isValid = true;
    
    if (!validateField(nameInput)) isValid = false;
    if (!validateField(emailInput)) isValid = false;
    if (!validateField(messageInput)) isValid = false;
    
    return isValid;
  }
  
  // Event listeners para validación en tiempo real
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        clearError(input);
      }
    });
  });
  
  // Submit del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Ocultar mensajes de error previos
      [nameInput, emailInput, messageInput].forEach(clearError);
      
      // Mostrar mensaje de éxito
      if (successMessage) {
        successMessage.classList.add('show');
      }
      
      // Simular envío (aquí irían la lógica de backend)
      console.log('Formulario enviado:', {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      });
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        form.reset();
        if (successMessage) {
          successMessage.classList.remove('show');
        }
      }, 3000);
    }
  });
}
