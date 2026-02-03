// src/scripts/i18n.ts - Sistema de traducciones dinámico completo

// Traducciones completas
const translations = {
  en: {
    // Navigation
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Hero
    'hero-greeting': "Hi, I'm",
    'hero-tagline': 'I transform complex ideas into mobile and web experiences that users love to use. Specialized in native Android and modern frontend development.',
    'hero-cta-projects': 'View Projects',
    'hero-cta-contact': 'Get in Touch',
    
    // Metrics
    'metric-years': 'Years',
    'metric-projects': 'Projects',
    'metric-technologies': 'Technologies',
    'metric-remote': 'Remote',
    
    // Projects
    'projects-title': 'Featured Projects',
    'projects-subtitle': 'A selection of my most recent work in web and mobile development',
    'projects-tab-web': 'Web',
    'projects-tab-mobile': 'Mobile',
    'projects-challenge': 'Challenge:',
    'projects-featured': 'Featured',
    
    // Contact
    'contact-title': "Let's Work Together",
    'contact-subtitle': "Have a project in mind? Let's talk",
    'contact-name': 'Name',
    'contact-name-placeholder': 'Your name',
    'contact-email': 'Email',
    'contact-email-placeholder': 'example@email.com',
    'contact-subject': 'Subject',
    'contact-subject-placeholder': 'Select an option',
    'contact-subject-project': 'New Project',
    'contact-subject-job': 'Job Offer',
    'contact-subject-other': 'Other Inquiry',
    'contact-message': 'Message',
    'contact-message-placeholder': 'Tell me the details...',
    'contact-submit': 'Send Message',
    'contact-sending': 'Sending...',
    'contact-success': 'Message sent successfully!',
    'contact-error': 'Error sending message. Please try again.',
  },
  es: {
    // Navigation
    'nav-about': 'Sobre mí',
    'nav-projects': 'Proyectos',
    'nav-contact': 'Contacto',
    
    // Hero
    'hero-greeting': 'Hola, soy',
    'hero-tagline': 'Transformo ideas complejas en experiencias móviles y web que los usuarios aman usar. Especializado en Android nativo y desarrollo frontend moderno.',
    'hero-cta-projects': 'Ver Proyectos',
    'hero-cta-contact': 'Contactar',
    
    // Metrics
    'metric-years': 'Años',
    'metric-projects': 'Proyectos',
    'metric-technologies': 'Tecnologías',
    'metric-remote': 'Remoto',
    
    // Projects
    'projects-title': 'Proyectos Destacados',
    'projects-subtitle': 'Una selección de mis trabajos más recientes en desarrollo web y móvil',
    'projects-tab-web': 'Web',
    'projects-tab-mobile': 'Mobile',
    'projects-challenge': 'Desafío:',
    'projects-featured': 'Destacado',
    
    // Contact
    'contact-title': 'Trabajemos Juntos',
    'contact-subtitle': '¿Tienes un proyecto en mente? Hablemos',
    'contact-name': 'Nombre',
    'contact-name-placeholder': 'Tu nombre',
    'contact-email': 'Email',
    'contact-email-placeholder': 'ejemplo@correo.com',
    'contact-subject': 'Asunto',
    'contact-subject-placeholder': 'Selecciona una opción',
    'contact-subject-project': 'Proyecto nuevo',
    'contact-subject-job': 'Oferta laboral',
    'contact-subject-other': 'Otra consulta',
    'contact-message': 'Mensaje',
    'contact-message-placeholder': 'Cuéntame los detalles...',
    'contact-submit': 'Enviar mensaje',
    'contact-sending': 'Enviando...',
    'contact-success': '¡Mensaje enviado exitosamente!',
    'contact-error': 'Error al enviar el mensaje. Por favor intenta de nuevo.',
  }
};

type Language = 'en' | 'es';

// Roles rotativos del Hero
const heroRoles = {
  en: ["Mobile Developer", "Frontend Specialist", "Full Stack Developer", "UI/UX Enthusiast"],
  es: ["Desarrollador Mobile", "Frontend Specialist", "Full Stack Developer", "UI/UX Enthusiast"]
};

function updateTranslations(lang: Language) {
  console.log(`Updating translations to: ${lang}`);
  
  // Obtener todas las traducciones para el idioma seleccionado
  const langTranslations = translations[lang];
  
  // Actualizar cada elemento con su traducción
  Object.entries(langTranslations).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      // Para inputs y textareas, actualizar el placeholder
      if (id.includes('placeholder')) {
        const inputId = id.replace('-placeholder', '');
        const inputElement = document.getElementById(inputId) as HTMLInputElement | HTMLTextAreaElement;
        if (inputElement) {
          inputElement.placeholder = text;
          console.log(`Updated placeholder for #${inputId} to: ${text}`);
        }
      } else {
        element.textContent = text;
        console.log(`Updated #${id} to: ${text}`);
      }
    }
  });
  
  // Actualizar roles del Hero si existe el elemento
  const rotatingText = document.getElementById('rotating-text');
  if (rotatingText) {
    const roles = heroRoles[lang];
    rotatingText.setAttribute('data-roles', JSON.stringify(roles));
    // Reiniciar la animación de rotación
    const event = new CustomEvent('resetRotation', { detail: { roles } });
    window.dispatchEvent(event);
    console.log('Updated hero roles:', roles);
  }
}

// Escuchar cambios de idioma
window.addEventListener('languagechange', (event: Event) => {
  const customEvent = event as CustomEvent<{ language: Language }>;
  console.log('Language change event received:', customEvent.detail.language);
  updateTranslations(customEvent.detail.language);
});

// Aplicar traducciones iniciales cuando el DOM esté listo
function initTranslations() {
  const currentLang = (document.documentElement.getAttribute('lang') || 'es') as Language;
  console.log('Initializing translations with language:', currentLang);
  updateTranslations(currentLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslations);
} else {
  initTranslations();
}
