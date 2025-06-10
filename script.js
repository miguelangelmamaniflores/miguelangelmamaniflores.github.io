/**
 * Función para controlar el comportamiento de los acordeones
 * @param {string} id - El ID del elemento acordeón a mostrar/ocultar
 */
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('i');
    
    if (content.style.display === 'block') {
        // Añadir efecto de brillo al hacer clic
        header.classList.add('pulse-effect');
        setTimeout(() => {
            header.classList.remove('pulse-effect');
        }, 300);
        
        // Ocultar el contenido con animación
        content.style.maxHeight = content.scrollHeight + 'px';
        setTimeout(() => {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.display = 'none';
                content.style.maxHeight = '';
                content.style.opacity = '';
            }, 300);
        }, 10);
        
        // Cambiar el ícono con rotación
        icon.style.transform = 'rotate(0deg)';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
    } else {
        // Añadir efecto de brillo al hacer clic
        header.classList.add('pulse-effect');
        setTimeout(() => {
            header.classList.remove('pulse-effect');
        }, 300);
        
        // Mostrar el contenido con animación
        content.style.display = 'block';
        content.style.opacity = '0';
        content.style.maxHeight = '0px';
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            setTimeout(() => {
                content.style.maxHeight = '';
            }, 300);
        }, 10);
        
        // Cambiar el ícono con rotación
        icon.style.transform = 'rotate(90deg)';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    }
}

/**
 * Función para controlar el comportamiento de las unidades expandibles
 * @param {number} id - El ID de la unidad a mostrar/ocultar
 */
function toggleUnidad(id) {
    const icon = document.getElementById('icon-' + id);
    const contenido = document.getElementById('unidad-contenido-' + id);
    const button = icon.closest('.expandir-btn');
    
    if (icon.classList.contains('fa-chevron-right')) {
        // Efecto de pulsación en el botón
        button.classList.add('pulse-effect');
        setTimeout(() => {
            button.classList.remove('pulse-effect');
        }, 300);
        
        // Expandir la unidad con animación
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
        icon.style.transform = 'rotate(180deg)';
        
        contenido.style.display = 'block';
        contenido.style.opacity = '0';
        contenido.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            contenido.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            contenido.style.opacity = '1';
            contenido.style.transform = 'translateY(0)';
        }, 10);
    } else {
        // Efecto de pulsación en el botón
        button.classList.add('pulse-effect');
        setTimeout(() => {
            button.classList.remove('pulse-effect');
        }, 300);
        
        // Contraer la unidad con animación
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
        icon.style.transform = 'rotate(0deg)';
        
        contenido.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        contenido.style.opacity = '0';
        contenido.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            contenido.style.display = 'none';
            contenido.style.transition = '';
        }, 400);
    }
}

/**
 * Inicialización cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase para animación inicial
    document.body.classList.add('fade-in');
    
    // Añadir estilos dinámicos para efectos
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes pulseEffect {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        .pulse-effect {
            animation: pulseEffect 0.3s ease-in-out;
        }
        
        .expandir-btn:active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(styleElement);
    
    // Añadir efecto de hover a las filas de las tablas
    const tableRows = document.querySelectorAll('.semanas-contenido table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            this.style.transform = 'translateX(5px)';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    });
    
    // Añadir efecto de pulsación a los botones
    const buttons = document.querySelectorAll('.expandir-btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Añadir efecto de brillo a los enlaces
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 5px rgba(240, 165, 0, 0.5)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
});