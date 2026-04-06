import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // --- Campos opcionales para posts de tipo Serie ---
    // Si un post define `series`, se trata como una página dentro de una serie paginada.
    series: z.string().optional(),       // ID único de la serie (ej: "nestjs-curso")
    seriesTitle: z.string().optional(),  // Título legible de la serie (ej: "NestJS: Primeros Pasos")
    phase: z.number().optional(),        // Número de fase (ej: 1)
    phaseTitle: z.string().optional(),   // Título de la fase (ej: "Fundamentos")
    step: z.number().optional(),         // Número de paso dentro de la fase (ej: 1)
    stepTitle: z.string().optional(),    // Título del paso (ej: "Instalación y Setup")
    order: z.number().optional(),        // Orden global en la serie para prev/next
  }),
});

export const collections = {
  blog,
};
