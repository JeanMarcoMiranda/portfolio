import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../shared/ThemeToggle";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre Mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contacto" },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="border-b bg-background py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          JM
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

        {/* Botón de cambio de tema*/}
        <ThemeToggle/>
        

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

            {/* Botón de cambio de tema en móvil */}
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                className="w-full py-2 flex items-center justify-center space-x-2"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? "Modo Claro" : "Modo Oscuro"}</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
