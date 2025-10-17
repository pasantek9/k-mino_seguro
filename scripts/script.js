document.addEventListener('DOMContentLoaded', () => {
    // La única función ahora es configurar el botón de Añadir Reseña (Mailto)
    setupReviewForm();
});

// Función para el formulario (redirección a mailto)
function setupReviewForm() {
    const submitBtn = document.getElementById('submit-review-btn');
    
    // **IMPORTANTE:** REEMPLAZA ESTA LÍNEA CON TU CORREO ELECTRÓNICO REAL
    const targetEmail = 'k-minoseguro@k-9corporation.com'; 
    
    const subject = encodeURIComponent('Nueva Reseña para la Web de Seguridad Vial K-9');
    const body = encodeURIComponent('Hola,\n\nMe gustaría enviar mi reseña para la página web.\n\nMi Nombre:\nMi Reseña:\nMi Puntuación (1-5):');

    // Crea el enlace mailto
    const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    submitBtn.addEventListener('click', (e) => {
        // Al hacer clic, abre el cliente de correo con el cuerpo y asunto predefinidos
        window.location.href = mailtoLink;
    });
}