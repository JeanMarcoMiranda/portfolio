// src/data/projects.js

export const projects = [
  // --- Proyectos Web ---
  {
    id: "web-1",
    type: "web",
    title: "Toyota Virtual Monolith",
    
    // Storytelling
    challenge: "Mitsui necesitaba una herramienta interactiva que permitiera a los usuarios comparar el consumo de combustible de sus vehículos actuales con modelos híbridos de forma visual y dinámica.",
    solution: "Desarrollé una aplicación web interactiva con React y Tailwind CSS, implementando cálculos dinámicos en tiempo real y una interfaz optimizada para múltiples dispositivos con Supabase como backend.",
    impact: "Herramienta de comparación que facilita la decisión de compra para clientes de Mitsui.",
    role: ["Fullstack Developer", "UI/UX Design", "Database Integration"],
    
    // Técnico
    stack: ["React", "Tailwind CSS", "Shadcn/ui", "Supabase"],
    architecture: "SPA + Real-time Database",
    
    // Visual
    imageUrl: "https://via.placeholder.com/500x300.png?text=Toyota+Virtual+Monolith",
    tags: ["React", "Tailwind CSS", "Shadcn/ui", "Supabase"],
    
    // Links & Status
    link: "", // Añadir si está disponible
    github: "",
    isPrivate: true, // Cliente corporativo
    featured: true,
    year: "2024"
  },
  {
    id: "web-2",
    type: "web",
    title: "Tanta Ordering Platform",
    
    challenge: "Tanta necesitaba modernizar su sistema de pedidos con roles dinámicos, gestión de carrito de compras y procesamiento de pagos seguros para manejar alto volumen de transacciones.",
    solution: "Implementé una plataforma web completa con React, TailwindCSS y Redux para manejo de estado, integrando Culqi como pasarela de pagos y sistema de roles granular.",
    impact: "Procesamiento de más de 1,000 transacciones mensuales con sistema de roles dinámico.",
    role: ["Fullstack Developer", "Payment Integration", "State Management"],
    
    stack: ["React", "TailwindCSS", "Redux", "Culqi"],
    architecture: "SPA + Payment Gateway Integration",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=Tanta+Ordering",
    tags: ["React", "Redux", "TailwindCSS", "Culqi", "E-commerce"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2024"
  },
  {
    id: "web-3",
    type: "web",
    title: "Taxi Fleet Monitoring Dashboard",
    
    challenge: "Una empresa de taxis requería un sistema web en tiempo real para monitorear su flota, gestionar servicios y analizar métricas operativas desde un panel administrativo centralizado.",
    solution: "Desarrollé una plataforma web con React y WebSockets para visualización de mapas en tiempo real, gestión de servicios, análisis de datos y dashboard administrativo con Zustand para estado global.",
    impact: "Sistema de monitoreo en tiempo real con comunicación bidireccional WebSocket.",
    role: ["Frontend Developer", "Real-time Integration", "Dashboard Design"],
    
    stack: ["React", "Tailwind CSS", "Shadcn/ui", "Zustand", "WebSockets"],
    architecture: "Real-time Web App + WebSocket Integration",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=Taxi+Monitoring",
    tags: ["React", "WebSockets", "Zustand", "Real-time", "Maps"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2024"
  },
  {
    id: "web-4",
    type: "web",
    title: "Chinalco Academic Management System",
    
    challenge: "Chinalco necesitaba modernizar sus procesos académicos con tres módulos web integrados para mejorar la eficiencia operativa de su sistema educativo.",
    solution: "Desarrollé tres módulos web para gestión de procesos académicos utilizando ReactJS y .NET Core, con SQL Server como base de datos, logrando interfaces responsivas y flujos optimizados.",
    impact: "Mejora del 25% en eficiencia operativa de procesos académicos.",
    role: ["Fullstack Developer", "Database Design", "Enterprise Integration"],
    
    stack: ["React", "TailwindCSS", ".NET Core", "SQL Server"],
    architecture: "Multi-module Web Platform + REST API",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=Chinalco+Academic",
    tags: ["React", ".NET Core", "SQL Server", "Enterprise"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: false,
    year: "2023"
  },
  {
    id: "web-5",
    type: "web",
    title: "VR/AR Interactive 3D Landing",
    
    challenge: "TECSUP necesitaba una landing page innovadora que mostrara sus servicios de VR/AR de forma inmersiva y diferenciada en el mercado educativo.",
    solution: "Diseñé e implementé una landing page interactiva en 3D usando Verge3D y WebGL, con navegación tridimensional de productos y experiencias inmersivas que aumentaron significativamente el engagement.",
    impact: "Aumento considerable en el engagement de usuarios mediante experiencia 3D inmersiva.",
    role: ["Frontend Developer", "3D Web Development", "UX Design"],
    
    stack: ["Verge3D", "WebGL", "JavaScript"],
    architecture: "3D Web Experience",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=VR+AR+Landing",
    tags: ["Verge3D", "WebGL", "3D", "Interactive"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2022"
  },
  {
    id: "web-6",
    type: "web",
    title: "Ferreyros Competency Management",
    
    challenge: "Ferreyros necesitaba automatizar el seguimiento y visualización de evaluaciones basadas en VR/AR para su personal, eliminando procesos manuales ineficientes.",
    solution: "Implementé una aplicación web con React y NestJS que automatiza el tracking de competencias evaluadas mediante VR/AR, con dashboards de visualización y reportes automatizados.",
    impact: "Automatización completa del sistema de evaluación y seguimiento de competencias.",
    role: ["Fullstack Developer", "API Development", "Data Visualization"],
    
    stack: ["React", "NestJS", "Node.js"],
    architecture: "Full Stack Web App + REST API",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=Ferreyros+Competency",
    tags: ["React", "NestJS", "Node.js", "Enterprise"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: false,
    year: "2023"
  },
  {
    id: "web-7",
    type: "web",
    title: "Real Estate Component Platform",
    
    challenge: "Accounttech requería una plataforma de componentes unificada para múltiples productos digitales inmobiliarios, asegurando consistencia y reutilización eficiente.",
    solution: "Construí una biblioteca de componentes reutilizables con React y TypeScript, estableciendo un sistema de diseño coherente e implementando un pipeline CI/CD que optimizó los despliegues.",
    impact: "Reducción del 40% en tiempos de deployment y aumento en frecuencia de releases.",
    role: ["Frontend Developer", "Component Library", "CI/CD Implementation"],
    
    stack: ["React", "TypeScript", "CI/CD"],
    architecture: "Component Library + Design System",
    
    imageUrl: "https://via.placeholder.com/500x300.png?text=Real+Estate+Platform",
    tags: ["React", "TypeScript", "Component Library", "CI/CD"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: false,
    year: "2022"
  },
  
  // --- Proyectos Móviles ---
  {
    id: "mobile-1",
    type: "mobile",
    title: "Tiacher - AI English Learning",
    
    challenge: "Los estudiantes de inglés necesitaban una forma más interactiva y personalizada de practicar, usando contenido visual de su entorno cotidiano y con retroalimentación inmediata.",
    solution: "Desarrollé una app móvil con Flutter que integra IA generativa para crear preguntas desde fotos, reconocimiento de voz, sistema de puntuación personal y global, modos de desafío y Google Play Billing para pagos.",
    impact: "App educativa completa con IA, gamificación y monetización integrada.",
    role: ["Mobile Developer", "AI Integration", "Payment Systems"],
    
    stack: ["Flutter", "Dart", "Django", "OpenAI API", "Supabase", "Dio"],
    architecture: "Clean Architecture + AI Integration",
    
    imageUrl: "https://via.placeholder.com/300x500.png?text=Tiacher+App",
    tags: ["Flutter", "AI", "OpenAI", "Django", "Supabase"],
    
    link: "", // Añadir link de Google Play si está disponible
    github: "",
    isPrivate: false,
    featured: true,
    year: "2024"
  },
  {
    id: "mobile-2",
    type: "mobile",
    title: "Educational App for Elderly",
    
    challenge: "Usuarios adultos mayores necesitaban acceso a contenido educativo multimedia pero con interfaces que consideraran sus necesidades específicas de accesibilidad.",
    solution: "Creé una aplicación Android nativa con Kotlin y Jetpack Compose, enfocándome en accesibilidad, contenido multimedia interactivo y arquitectura limpia para mantenibilidad a largo plazo.",
    impact: "Plataforma educativa accesible con arquitectura escalable y mantenible.",
    role: ["Android Developer", "Accessibility Design", "Clean Architecture"],
    
    stack: ["Kotlin", "Jetpack Compose", "Supabase"],
    architecture: "Clean Architecture + MVVM",
    
    imageUrl: "https://via.placeholder.com/300x500.png?text=Educational+App",
    tags: ["Kotlin", "Jetpack Compose", "Supabase", "Accessibility"],
    
    link: "",
    github: "",
    isPrivate: false,
    featured: true,
    year: "2024"
  },
  {
    id: "mobile-3",
    type: "mobile",
    title: "Taxi Fleet Tracking System",
    
    challenge: "Una empresa de taxis necesitaba rastrear su flota en tiempo real con geolocalización precisa y comunicación instantánea entre conductores y central.",
    solution: "Implementé un sistema de tracking Android con geolocalización en tiempo real, monitoreo continuo y comunicación bidireccional mediante WebSockets, usando Kotlin y Koin para inyección de dependencias.",
    impact: "Sistema de tracking en tiempo real con comunicación WebSocket bidireccional.",
    role: ["Android Developer", "Real-time Systems", "WebSocket Integration"],
    
    stack: ["Kotlin", "Android", "Koin", "WebSockets", "Django"],
    architecture: "Real-time Geolocation + WebSocket",
    
    imageUrl: "https://via.placeholder.com/300x500.png?text=Taxi+Tracking",
    tags: ["Kotlin", "Android", "WebSockets", "Real-time", "Geolocation"],
    
    link: "",
    github: "",
    isPrivate: true,
    featured: false,
    year: "2024"
  },
];

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Función helper para obtener proyectos por tipo
export const getProjectsByType = (type) => projects.filter(p => p.type === type);

// Función helper para obtener proyectos por año
export const getProjectsByYear = (year) => projects.filter(p => p.year === year);