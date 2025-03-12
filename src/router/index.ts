import { createRouter } from "@tanstack/react-router";
import { rootRoute, routes } from "./routes";

// Creamos el árbol de rutas a partir de la raíz y las rutas definidas
const routeTree = rootRoute.addChildren(routes);

// Creamos y configuramos el router
export const router = createRouter({
  routeTree,
  // Opciones adicionales
  defaultPreload: "intent", // Precarga las rutas al hacer hover
  defaultPreloadDelay: 100,
});

// Tipos para TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}