import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const roles = [
  "Desarrollador Frontend",
  "Desarrollador Android",
  "Creador de Experiencias Web y Moviles",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="container mx-auto flex flex-col item-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Hola, soy </span>
            <span className="block mt-1 text-primary">Jean Marco Miranda</span>
          </h1>

          <div className="mt-4 h-16 text-xl sm:text-2xl md:text-3xl text-muted-foreground">
            <TypeAnimation
              sequence={roles.flatMap((role) => [role, 1000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl md:leading-relaxed text-muted-foreground">
            Desarrollo experiencias digitales modernas y atractivas, combinando
            diseño y código para crear soluciones web impactantes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/projects">
                Ver Proyectos <ArrowRight />
              </Link>
            </Button>

            <Button variant={"outline"} asChild>
              <a
                href="https://github.com/JeanMarcoMiranda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> Gitghub
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
