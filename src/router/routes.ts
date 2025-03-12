import { Layout } from "@/components/layout/Layout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import ProjectsDetailPage from "@/pages/ProjectsPage/ProjectsDetailPage";
import ProjectsListPage from "@/pages/ProjectsPage/ProjectsListPage";
import { createRootRoute, createRoute } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

export const projectsListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsListPage,
});

export const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$projectId",
  component: ProjectsDetailPage,
});

export const routes = [
  homeRoute,
  aboutRoute,
  projectsListRoute,
  projectDetailRoute,
];
