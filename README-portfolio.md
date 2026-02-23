# Portfolio de Programador - HTML/CSS/JS Puro

Portfolio personal de Carlos Moreno, desarrollador especializado en Java, C# y Spring Boot.

## 🚀 Características

- ✅ **100% Vanilla** - Sin frameworks, solo HTML, CSS y JavaScript puro
- 🎨 **Diseño Moderno** - Tema oscuro con acentos verdes y animaciones suaves
- 📱 **Totalmente Responsive** - Funciona perfectamente en móviles, tablets y desktops
- ⚡ **Alto Rendimiento** - Carga rápida sin dependencias externas pesadas
- 🎭 **Animaciones Elegantes** - Efectos visuales con CSS y Intersection Observer
- 🎯 **Accesible** - Semántica HTML5 y buenas prácticas de accesibilidad

## 📁 Estructura del Proyecto

```
portfolio-dev/
├── portfolio.html           # Página principal (punto de entrada)
├── css/
│   ├── variables.css        # Variables CSS (colores, fuentes, espaciados)
│   ├── base.css             # Estilos base y reset
│   ├── animations.css       # Keyframes y animaciones
│   ├── components.css       # Componentes reutilizables
│   └── styles.css           # Estilos principales (importa todos)
├── js/
│   ├── main.js              # Script principal (inicialización)
│   ├── navigation.js        # Scroll spy y menú móvil
│   ├── animations.js        # Intersection Observer
│   ├── typewriter.js        # Efecto máquina de escribir
│   ├── matrixRain.js        # Efecto Matrix Rain (Canvas)
│   └── contactForm.js       # Validación del formulario
└── assets/
    └── images/              # Imágenes locales (si las necesitas)
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript (ES6+)** - Funcionalidades interactivas
- **Canvas API** - Efecto Matrix Rain
- **Intersection Observer API** - Animaciones al scroll

## 🎯 Secciones del Portfolio

1. **Hero** - Presentación con efecto typewriter y Matrix Rain de fondo
2. **About** - Información personal y profesional
3. **Skills** - Habilidades técnicas con tarjetas interactivas
4. **Projects** - Proyectos destacados con imágenes y tecnologías
5. **Contact** - Formulario de contacto con validación

## 🚀 Cómo Usar

1. **Abrir directamente en el navegador**
   - Simplemente abre `portfolio.html` con tu navegador favorito
   - No requiere servidor local, funciona con el protocolo `file://`

2. **Usar con un servidor local (recomendado para desarrollo)**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server -p 8000
   
   # Con PHP
   php -S localhost:8000
   ```
   Luego abre `http://localhost:8000/portfolio.html` en tu navegador

## ⚙️ Personalización

### Cambiar colores
Edita las variables en `css/variables.css`:
```css
:root {
  --color-primary: #10b981;  /* Color principal */
  --bg-primary: #111827;     /* Fondo principal */
  /* ... más variables */
}
```

### Modificar contenido
Todo el contenido está en `portfolio.html`. Busca las secciones:
- Nombre y profesiones: Busca "Carlos Moreno" y el array en `typewriter.js`
- Proyectos: Dentro de `<section id="projects">`
- Información de contacto: Dentro de `<section id="contact">`

### Agregar/quitar habilidades
En `portfolio.html`, dentro de `<section id="skills">`, agrega o elimina bloques:
```html
<div class="skill-card animate-on-scroll animate-scaleIn">
  <div class="skill-icon">🚀</div>
  <div class="skill-name">Tu Tecnología</div>
</div>
```

## 📝 Funcionalidades Implementadas

### Navegación
- ✅ Scroll spy automático
- ✅ Smooth scroll a secciones
- ✅ Menú móvil responsivo
- ✅ Header sticky con backdrop blur

### Animaciones
- ✅ Fade in/out al entrar en viewport
- ✅ Efecto typewriter en el Hero
- ✅ Matrix Rain con Canvas (fondo del Hero)
- ✅ Hover effects en tarjetas y botones
- ✅ Loading screen inicial

### Formulario
- ✅ Validación de campos requeridos
- ✅ Validación de formato de email
- ✅ Mensajes de error personalizados
- ✅ Mensaje de confirmación de envío
- ✅ Reset automático after envío

## 🎨 Paleta de Colores

- **Primary Green**: `#10b981`
- **Background Dark**: `#111827`
- **Background Secondary**: `#1f2937`
- **Text Primary**: `#f9fafb`
- **Text Secondary**: `#d1d5db`

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 👤 Autor

**Carlos Moreno**
- Estudiante de Programación
- Especializado en Java, C# y Spring Boot
- [GitHub](https://github.com/tuusuario)
- [LinkedIn](https://linkedin.com/in/tuusuario)

---

⭐ Si te gusta este portfolio, no olvides darle una estrella en GitHub!
