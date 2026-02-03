// src/data/projects.js

export const projects = [
  // --- Proyectos Web ---
  {
    id: "web-1",
    type: "web",
    title: "Portfolio de Fotografía",
    
    // Storytelling
    challenge: "Un fotógrafo profesional necesitaba una plataforma que mostrara su trabajo de forma elegante y rápida, sin sacrificar la calidad visual.",
    solution: "Desarrollé un sitio web estático optimizado con Next.js y Tailwind CSS, implementando lazy loading y optimización de imágenes para mantener tiempos de carga mínimos.",
    role: ["Frontend Developer", "UI/UX Design", "Performance Optimization"],
    
    // Técnico
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    architecture: "Static Site Generation (SSG)",
    
    // Impacto
    metrics: {
      users: "5,000+",
      rating: "4.9",
      performance: "Lighthouse Score: 98/100"
    },
    
    // Visual
    imageUrl: "https://via.placeholder.com/500x300.png?text=Portfolio+Fotografía", 
    tags: ["Next.js", "Tailwind CSS", "Vercel", "SSG"],
    
    // Links
    link: "",
    featured: true,
    year: "2024"
  },
  {
    id: "web-2",
    type: "web",
    title: "E-commerce de Ropa",
    
    challenge: "Una tienda de ropa necesitaba expandir su presencia online con una plataforma completa de e-commerce que manejara inventario en tiempo real.",
    solution: "Construí una plataforma fullstack con React, Node.js y MongoDB, integrando Stripe para pagos seguros y un panel de administración intuitivo.",
    role: ["Full Stack Developer", "API Design", "Payment Integration"],
    
    stack: ["React", "Node.js", "Stripe", "MongoDB"],
    architecture: "MERN Stack + REST API",
    
    metrics: {
      users: "2,500+",
      rating: "4.7",
      performance: "Conversión mejorada en 35%"
    },
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=E-commerce",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "",
    featured: false,
    year: "2023"
  },
  
  // --- Proyectos Móviles ---
  {
    id: "mobile-1",
    type: "mobile",
    title: "App de Fitness",
    
    challenge: "Los usuarios necesitaban una forma simple de seguir sus rutinas de ejercicio y dieta sin interfaces complicadas.",
    solution: "Desarrollé una app nativa en Kotlin con Firebase, enfocándome en una UX minimalista y sincronización en tiempo real de progreso.",
    role: ["Android Developer", "Firebase Integration", "UI/UX Design"],
    
    stack: ["Kotlin", "Android Studio", "Firebase"],
    architecture: "MVVM + Clean Architecture",
    
    metrics: {
      users: "15,000+",
      rating: "4.6",
      performance: "Retención del 70% a 30 días"
    },
    
    imageUrl: "https://via.placeholder.com/300x500.png?text=Fitness+App", 
    tags: ["Kotlin", "Android Studio", "Firebase", "MVVM"],
    link: "",
    featured: true,
    year: "2024"
  },
  {
    id: "mobile-2",
    type: "mobile",
    title: "App de Red Social",
    
    challenge: "Crear una experiencia social fluida para compartir fotos y videos con enfoque en la privacidad del usuario.",
    solution: "Implementé una app con React Native y Firebase, optimizando la carga de media y agregando features de privacidad granular.",
    role: ["Mobile Developer", "Media Optimization", "Security Implementation"],
    
    stack: ["React Native", "Firebase", "Expo"],
    architecture: "React Native + Firebase Realtime DB",
    
    metrics: {
      users: "8,000+",
      rating: "4.5",
      performance: "Reducción del 50% en uso de datos"
    },
    
    imageUrl: "https://via.placeholder.com/300x500.png?text=Social+App",
    tags: ["React Native", "Firebase", "Expo"],
    link: "",
    featured: false,
    year: "2023"
  },
];