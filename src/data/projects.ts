export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  technologies: string[];
  image: string;
  thumbnail: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce',
    description: 'Una plataforma completa de comercio electrónico con pagos integrados, gestión de pedidos y un panel de administración.',
    summary: 'Plataforma completa de comercio electrónico con React, Node.js y MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    image: '/assets/images/projects/ecommerce-full.jpg',
    thumbnail: '/assets/images/projects/ecommerce-thumb.jpg',
    link: 'https://mitienda.com',
    github: 'https://github.com/usuario/ecommerce',
    featured: true
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard de Análisis',
    description: 'Dashboard interactivo para visualización de datos con gráficos personalizables y reportes en tiempo real.',
    summary: 'Dashboard interactivo de análisis con React, D3.js y Firebase.',
    technologies: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
    image: '/assets/images/projects/dashboard-full.jpg',
    thumbnail: '/assets/images/projects/dashboard-thumb.jpg',
    link: 'https://midashboard.com',
    github: 'https://github.com/usuario/dashboard',
    featured: true
  },
  {
    id: 'social-network',
    title: 'Red Social para Profesionales',
    description: 'Plataforma de networking para profesionales con mensajería en tiempo real y sistema de perfiles avanzados.',
    summary: 'Red social profesional con React, GraphQL y PostgreSQL.',
    technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: '/assets/images/projects/social-full.jpg',
    thumbnail: '/assets/images/projects/social-thumb.jpg',
    link: 'https://miredsocial.com',
    github: 'https://github.com/usuario/social-network',
    featured: true
  }
];