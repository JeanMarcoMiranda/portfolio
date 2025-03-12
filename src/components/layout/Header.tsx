import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre Mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contacto" },
];

export default function Header() {

  return (
    <header className="border-b bg-background py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          Jean Marco Miranda
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-muted-foreground transition-colors [&.active]:text-primary [&.active]:font-bold hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Menú móvil */}
        <Sheet>
          {/* Button to trigger sheet open */}
          <SheetTrigger asChild>
            <Button className="md:hidden" aria-label="Toggle menu">
              <Menu size={24} />
            </Button>
          </SheetTrigger>

          {/* Sheet content */}
          <SheetContent side="left" className="w-64 p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Menú</span>
              <SheetTrigger asChild>
                <Button aria-label="Close menu" variant={"ghost"}>
                  <X size={24} />
                </Button>
              </SheetTrigger>
            </div>

            <nav className="mt-6 flex flex-col space-y-4">
              {navItems.map(({ to, label }) => (
                <SheetTrigger asChild key={to}>
                  <Link
                    key={to}
                    to={to}
                    className="text-sm font-medium text-muted-foreground transition-colors [&.active]:text-primary [&.active]:font-bold hover:text-primary"
                  >
                    {label}
                  </Link>
                </SheetTrigger>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>

    // <header className="py-4 border-b">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link to="/" className="text-xl font-bold">
    //       Jean Marco Miranda
    //     </Link>

    //     {/* Navegación desktop */}
    //     <nav className="hidden md:flex space-x-8">
    //       <Link to="/" className={headerLinkStyle}>
    //         Inicio
    //       </Link>
    //       <Link to="/about" className={headerLinkStyle}>
    //         Sobre Mí
    //       </Link>
    //     </nav>

    //     {/* Toggle menú móvil */}
    //     <Button className="">

    //     </Button>
    //   </div>
    // </header>
  );
}
