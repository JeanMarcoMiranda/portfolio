"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-muted dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
          {/* Imagen con efecto de fade-in */}
          <FadeIn direction="right">
            <div className="relative h-full overflow-hidden rounded-xl">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="Jean Marco Miranda"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Contenido con efecto de fade-in */}
          <FadeIn direction="left" delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Sobre Mí</h2>
              <p className="mt-4 text-muted-foreground">
                Soy un desarrollador web apasionado con experiencia en la
                creación de aplicaciones web modernas. Mi enfoque combina diseño
                atractivo con código limpio y eficiente.
              </p>

              <p className="mt-4 text-muted-foreground">
                Con más de 5 años de experiencia, he trabajado en diversos
                proyectos desde e-commerce hasta aplicaciones empresariales,
                siempre buscando crear experiencias excepcionales para los
                usuarios.
              </p>

              <div className="mt-6">
                <Button variant="link" asChild>
                  <Link to="/about">
                    Más sobre mí <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
