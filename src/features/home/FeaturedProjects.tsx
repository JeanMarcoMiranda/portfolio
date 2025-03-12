import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Una muestra de mis trabajos más recientes y relevantes
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-16">
          {featuredProjects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.2}
              className="mb-20 last:mb-8"
            >
              <div
                className={`grid gap-8 md:grid-cols-2 md:gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>

                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button variant="link" asChild>
                      <Link to={`/projects/${project.id}`}>
                        Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    {project.github && (
                      <Button variant="ghost" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-4 w-4" /> Código
                        </a>
                      </Button>
                    )}

                    {project.link && (
                      <Button variant="ghost" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">
              Ver todos los proyectos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
