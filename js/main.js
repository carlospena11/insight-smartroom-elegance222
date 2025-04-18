
// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mostrar mensaje de agradecimiento
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    // Resetear formulario
    this.reset();
});

// Función para animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está visible en la ventana
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar elementos con opacidad 0 para animación
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Activar animaciones para elementos visibles al cargar
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});
