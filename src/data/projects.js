// src/data/projects.js

export const projects = [
  // --- Proyectos Web ---
  {
    id: "web-1",
    type: "web",
    title: "Portfolio de Fotografía",
    description: "Un sitio web estático y rápido construido con Next.js y Tailwind CSS para un fotógrafo profesional.",
    // Usaremos placeholders anchos para web
    imageUrl: "https://via.placeholder.com/500x300.png?text=Proyecto+Web", 
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "web-2",
    type: "web",
    title: "E-commerce de Ropa",
    description: "Plataforma completa de e-commerce con carrito de compras, pagos y panel de administración.",
    imageUrl: "https://via.placeholder.com/500x300.png?text=Proyecto+Web",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  
  // --- Proyectos Móviles ---
  {
    id: "mobile-1",
    type: "mobile",
    title: "App de Fitness",
    description: "Una app móvil para seguimiento de rutinas de ejercicio y dieta, desarrollada en Kotlin.",
    // Usaremos placeholders altos para móvil
    imageUrl: "https://via.placeholder.com/300x500.png?text=Proyecto+M%F3vil", 
    tags: ["Kotlin", "Android Studio", "Firebase"],
  },
  {
    id: "mobile-2",
    type: "mobile",
    title: "App de Red Social",
    description: "Clon de una red social popular, enfocado en la subida de fotos y videos.",
    imageUrl: "https://via.placeholder.com/300x500.png?text=Proyecto+M%F3vil",
    tags: ["React Native", "Firebase", "Expo"],
  },
  // ... añade más proyectos aquí
];