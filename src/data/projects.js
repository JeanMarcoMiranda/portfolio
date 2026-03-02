// src/data/projects.js

/**
 * @typedef {Object} Project
 * @property {string} id - Unique identifier
 * @property {'web'|'mobile'} type - Project type
 * @property {string} title - Project title
 * @property {string} challenge - Problem description
 * @property {string} solution - Solution description
 * @property {string} impact - Impact/Results
 * @property {string[]} role - Roles performed
 * @property {string[]} stack - Technologies used
 * @property {string} architecture - Architecture pattern
 * @property {string} imageUrl - Project image path
 * @property {string[]} tags - Display tags
 * @property {string} [link] - Live demo URL
 * @property {string} [github] - Repository URL
 * @property {boolean} isPrivate - If code is private
 * @property {boolean} featured - If project should be featured
 * @property {string} year - Year of development
 */

/**
 * Collection of portfolio projects
 * @type {Project[]}
 */

export const projects = [
  // --- Proyectos Web ---
  {
    id: "web-1",
    type: "web",
    title: "Toyota Virtual Monolith",

    // Storytelling
    challenge:
      "Mitsui necesitaba una herramienta interactiva que permitiera a los usuarios comparar el consumo de combustible de sus vehículos actuales con modelos híbridos de forma visual y dinámica.",
    solution:
      "Desarrollé una aplicación web interactiva con React y Tailwind CSS, implementando cálculos dinámicos en tiempo real y una interfaz optimizada para múltiples dispositivos con Supabase como backend.",
    impact:
      "Herramienta de comparación que facilita la decisión de compra para clientes de Mitsui.",
    role: ["Fullstack Developer", "UI/UX Design", "Database Integration"],

    // Técnico
    stack: ["React", "Tailwind CSS", "Shadcn/ui", "Supabase"],
    architecture: "SPA + Real-time Database",

    // Visual
    imageUrl: "/images/web-mitsui.png",
    tags: ["React", "Tailwind CSS", "Shadcn/ui", "Supabase"],

    // Links & Status
    link: "https://mitsui-tau.vercel.app/", // Añadir si está disponible
    github: "",
    isPrivate: false, // Cliente corporativo
    featured: true,
    year: "2025",
  },
  {
    id: "web-2",
    type: "web",
    title: "Taxi Fleet Monitoring Dashboard",

    challenge:
      "Una empresa de taxis requería un sistema web en tiempo real para monitorear su flota, gestionar servicios y analizar métricas operativas desde un panel administrativo centralizado.",
    solution:
      "Desarrollé una plataforma web con React y WebSockets para visualización de mapas en tiempo real, gestión de servicios, análisis de datos y dashboard administrativo con Zustand para estado global.",
    impact:
      "Sistema de monitoreo en tiempo real con comunicación bidireccional WebSocket.",
    role: ["Frontend Developer", "Real-time Integration", "Dashboard Design"],

    stack: ["React", "Tailwind CSS", "Shadcn/ui", "Zustand", "WebSockets"],
    architecture: "Real-time Web App + WebSocket Integration",

    imageUrl: "https://via.placeholder.com/500x300.png?text=Taxi+Monitoring",
    tags: ["React", "WebSockets", "Zustand", "Real-time", "Maps"],

    link: "",
    github: "https://github.com/JeanMarcoMiranda/taxi_web",
    isPrivate: true,
    featured: true,
    year: "2015",
  },
  {
    id: "web-3",
    type: "web",
    title: "SGA - Tanta Ordering Platform",

    challenge:
      "Tanta necesitaba modernizar su sistema de pedidos con roles dinámicos, gestión de carrito de compras y procesamiento de pagos seguros para manejar alto volumen de transacciones.",
    solution:
      "Implementé una plataforma web completa con React, TailwindCSS y Redux para manejo de estado, integrando Culqi como pasarela de pagos y sistema de roles granular.",
    impact:
      "Procesamiento de más de 1,000 transacciones mensuales con sistema de roles dinámico.",
    role: ["Fullstack Developer", "Payment Integration", "State Management"],

    stack: ["React", "TailwindCSS", "Redux", "Culqi"],
    architecture: "SPA + Payment Gateway Integration",

    imageUrl: "https://via.placeholder.com/500x300.png?text=Tanta+Ordering",
    tags: ["React", "Redux", "TailwindCSS", "Culqi", "E-commerce"],

    link: "",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2024",
  },
  {
    id: "web-4",
    type: "web",
    title: "Chinalco Academic Management System",

    challenge:
      "Chinalco necesitaba modernizar sus procesos académicos con tres módulos web integrados para mejorar la eficiencia operativa de su sistema educativo.",
    solution:
      "Desarrollé tres módulos web para gestión de procesos académicos utilizando ReactJS y .NET Core, con SQL Server como base de datos, logrando interfaces responsivas y flujos optimizados.",
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
    year: "2023",
  },

  // --- Proyectos Móviles ---
  {
    id: "mobile-1",
    type: "mobile",
    title: "Tiacher - AI English Learning",

    challenge:
      "Los estudiantes de inglés necesitaban una forma más interactiva y personalizada de practicar, usando contenido visual de su entorno cotidiano y con retroalimentación inmediata.",
    solution:
      "Desarrollé una app móvil con Flutter que integra IA generativa para crear preguntas desde fotos, reconocimiento de voz, sistema de puntuación personal y global, modos de desafío y Google Play Billing para pagos.",
    impact:
      "App educativa completa con IA, gamificación y monetización integrada.",
    role: ["Mobile Developer", "AI Integration", "Payment Systems"],

    stack: ["Flutter", "Dart", "Django", "OpenAI API", "Supabase", "Dio"],
    architecture: "Clean Architecture + AI Integration",

    imageUrl: "images/tiacher.webp",
    tags: ["Flutter", "AI", "OpenAI", "Django", "Supabase"],

    link: "https://play.google.com/store/apps/details?id=com.brittany.tiacher&hl=en", // Añadir link de Google Play si está disponible
    github: "",
    isPrivate: false,
    featured: true,
    year: "2024",
  },
  {
    id: "mobile-2",
    type: "mobile",
    title: "Taxi Fleet Tracking System",

    challenge:
      "Una empresa de taxis necesitaba rastrear su flota en tiempo real con geolocalización precisa y comunicación instantánea entre conductores y central.",
    solution:
      "Implementé un sistema de tracking Android con geolocalización en tiempo real, monitoreo continuo y comunicación bidireccional mediante WebSockets, usando Kotlin y Koin para inyección de dependencias.",
    impact:
      "Sistema de tracking en tiempo real con comunicación WebSocket bidireccional.",
    role: ["Android Developer", "Real-time Systems", "WebSocket Integration"],

    stack: ["Kotlin", "Android", "Koin", "WebSockets", "Node.js"],
    architecture: "Real-time Geolocation + WebSocket",

    imageUrl: "images/TD.jpeg",
    tags: [
      "Jetpack Compose",
      "Kotlin",
      "Android",
      "WebSockets",
      "Real-time",
      "Geolocation",
    ],

    link: "",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2025",
  },
  {
    id: "mobile-3",
    type: "mobile",
    title: "Contigo Pecuario - Livestock Management",

    challenge:
      "Productores ganaderos necesitaban digitalizar el control de su ganado con trazabilidad genética, análisis de producción y proyecciones basadas en datos reales para mejorar la toma de decisiones.",
    solution:
      "Desarrollé una plataforma móvil integral con React Native que permite registrar y gestionar información detallada del ganado (cabezas, razas, sexo, padres), procesando datos para generar análisis de producción por animal, control de ciclos productivos y trazabilidad genética completa.",
    impact:
      "Más de 500+ descargas. Sistema completo de gestión ganadera con visualización de datos y control productivo online.",
    role: ["Mobile Developer", "Data Visualization", "Analytics Integration"],

    stack: ["React Native", "TypeScript", "API Integration", "Data Analytics"],
    architecture: "Mobile App + Cloud Data Processing",

    imageUrl: "images/contigo.webp",
    tags: ["React Native", "Axios", "Redux", "React Router"],

    link: "https://play.google.com/store/apps/details?id=com.contigopecuario.app",
    github: "",
    isPrivate: true,
    featured: true,
    year: "2024",
  },
];

// Helper functions for filtering projects

/**
 * Returns only featured projects
 * @returns {Project[]}
 */
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

/**
 * Returns projects filtered by type
 * @param {'web'|'mobile'} type
 * @returns {Project[]}
 */
export const getProjectsByType = (type) =>
  projects.filter((p) => p.type === type);

/**
 * Returns projects filtered by year
 * @param {string} year
 * @returns {Project[]}
 */
export const getProjectsByYear = (year) =>
  projects.filter((p) => p.year === year);
