// src/i18n/translations.ts

export const translations = {
  en: {
    // Header
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Hero
    hero: {
      greeting: "Hi, I'm",
      roles: {
        mobile: "Mobile Developer",
        frontend: "Frontend Specialist",
        fullstack: "Full Stack Developer",
        uiux: "UI/UX Enthusiast"
      },
      tagline: "I transform complex ideas into mobile and web experiences that users love to use. Specialized in native Android and modern frontend development.",
      metrics: {
        years: "Years",
        projects: "Projects",
        technologies: "Technologies",
        remote: "Remote"
      },
      cta: {
        projects: "View Projects",
        contact: "Get in Touch"
      }
    },
    
    // Projects
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most recent work in web and mobile development",
      tabs: {
        web: "Web",
        mobile: "Mobile"
      },
      challenge: "Challenge:",
      featured: "Featured"
    },
    
    // Contact
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's talk",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "example@email.com",
        subject: "Subject",
        subjectPlaceholder: "Select an option",
        subjectOptions: {
          project: "New Project",
          job: "Job Offer",
          other: "Other Inquiry"
        },
        message: "Message",
        messagePlaceholder: "Tell me the details...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again."
      }
    },
    
    // About
    about: {
      title: "About Me",
      subtitle: "A bit about my journey and skills"
    }
  },
  
  es: {
    // Header
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto"
    },
    
    // Hero
    hero: {
      greeting: "Hola, soy",
      roles: {
        mobile: "Desarrollador Mobile",
        frontend: "Frontend Specialist",
        fullstack: "Full Stack Developer",
        uiux: "UI/UX Enthusiast"
      },
      tagline: "Transformo ideas complejas en experiencias móviles y web que los usuarios aman usar. Especializado en Android nativo y desarrollo frontend moderno.",
      metrics: {
        years: "Años",
        projects: "Proyectos",
        technologies: "Tecnologías",
        remote: "Remoto"
      },
      cta: {
        projects: "Ver Proyectos",
        contact: "Contactar"
      }
    },
    
    // Projects
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis trabajos más recientes en desarrollo web y móvil",
      tabs: {
        web: "Web",
        mobile: "Mobile"
      },
      challenge: "Desafío:",
      featured: "Destacado"
    },
    
    // Contact
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Tienes un proyecto en mente? Hablemos",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "ejemplo@correo.com",
        subject: "Asunto",
        subjectPlaceholder: "Selecciona una opción",
        subjectOptions: {
          project: "Proyecto nuevo",
          job: "Oferta laboral",
          other: "Otra consulta"
        },
        message: "Mensaje",
        messagePlaceholder: "Cuéntame los detalles...",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intenta de nuevo."
      }
    },
    
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Un poco sobre mi trayectoria y habilidades"
    }
  }
} as const;

export type Language = keyof typeof translations;

// Tipo más flexible que permite diferentes strings por idioma
export type TranslationKeys = {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    roles: {
      mobile: string;
      frontend: string;
      fullstack: string;
      uiux: string;
    };
    tagline: string;
    metrics: {
      years: string;
      projects: string;
      technologies: string;
      remote: string;
    };
    cta: {
      projects: string;
      contact: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    tabs: {
      web: string;
      mobile: string;
    };
    challenge: string;
    featured: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      subjectOptions: {
        project: string;
        job: string;
        other: string;
      };
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
  };
};

export function getTranslations(lang: Language = 'en'): TranslationKeys {
  return translations[lang] || translations.en;
}
