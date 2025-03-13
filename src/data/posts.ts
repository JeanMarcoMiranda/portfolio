export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  tags?: string[];
}

export const posts: Post[] = [
  {
    id: "building-modern-portfolio",
    title: "Cómo construí mi portafolio con React y TypeScript",
    excerpt:
      "Un recorrido por las decisiones técnicas, herramientas y lecciones aprendidas durante la creación de mi sitio web personal utilizando tecnologías modernas de frontend.",
    date: "10 marzo, 2025",
    coverImage: "/images/blog/portfolio.jpg",
    tags: ["React", "TypeScript", "Desarrollo Web"],
  },
  {
    id: "tailwind-shadcn-guide",
    title: "Guía completa de Tailwind 4 y shadcn/ui",
    excerpt:
      "Descubre cómo combinar la flexibilidad de Tailwind CSS con los componentes accesibles de shadcn/ui para crear interfaces modernas y mantenibles.",
    date: "2 marzo, 2025",
    coverImage: "/images/blog/tailwind-shadcn.jpg",
    tags: ["Tailwind", "UI", "Componentes"],
  },
  {
    id: "typescript-best-practices",
    title: "Mejores prácticas de TypeScript para proyectos escalables",
    excerpt:
      "Estrategias avanzadas para aprovechar al máximo TypeScript en proyectos grandes, incluyendo patrones de diseño, organización de código y técnicas para evitar errores comunes.",
    date: "20 febrero, 2025",
    coverImage: "/images/blog/typescript.jpg",
    tags: ["TypeScript", "Arquitectura", "Buenas Prácticas"],
  },
];
