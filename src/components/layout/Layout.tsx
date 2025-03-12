import { HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import { Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </HelmetProvider>
  );
}
