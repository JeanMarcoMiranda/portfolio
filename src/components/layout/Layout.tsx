import { HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";

export function Layout() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
