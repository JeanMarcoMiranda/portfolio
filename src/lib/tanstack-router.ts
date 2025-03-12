import { Layout } from "@/components/layout/Layout";
import IndexPage from "@/routes";
import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

// Definimos la ruta raíz que contendrá el Layout
export const rootRoute = createRootRoute({
  component: Layout,
});

// Rutas principales
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

// Rutas anidadas para proyectos
// Rutas anidadas para blog
// Registro de rutas
const routeTree = rootRoute.addChildren([indexRoute]);

// Creación del router
export const router = createRouter({ routeTree });

// Tipos para TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
