import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Información del desarrollador */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-foreground">Jean Marco Miranda</h3>
          <p className="text-sm text-muted-foreground">
            Desarrollador Web • Desarrollador Android • Creador
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-3">
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:tu@email.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Separador */}
      <Separator className="my-6" />

      {/* Copyright */}
      <div className="text-center text-sm text-muted-foreground">
        © {currentYear} Jean Marco Miranda. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;