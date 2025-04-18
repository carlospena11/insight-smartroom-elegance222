
// Inicializar elementos animados en carga
function initializeAnimations() {
    console.log("Inicializando animaciones...");
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
        // Configurar estado inicial
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });
    
    // Activar animaciones para elementos visibles al cargar
    setTimeout(() => {
        handleScrollAnimations();
    }, 100);
}

// Función para animaciones al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está visible en la ventana
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

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
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar mensaje de agradecimiento
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            
            // Resetear formulario
            this.reset();
        });
    }

    // Event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Inicializar animaciones
    initializeAnimations();
});

// Agregar efectos hover a elementos
document.querySelectorAll('.hover-scale').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});
