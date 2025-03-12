import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";

const SkillsOverview = () => {
  // Agrupar skills por categoría
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Obtener categorías para mostrar
  const categories = Object.keys(skillsByCategory);

  // Mapeo de nombres de categorías
  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Diseño",
    tools: "Herramientas",
    language: "Lenguajes",
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bolda text-foreground">
            Mis Habilidades
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tecnologías y herramientas que utilizo en mi día a día
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-10">
          {categories.map((category, categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h3>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {skillsByCategory[category].map((skill) => (
                    <Card
                      key={skill.name}
                      className="flex flex-col items-center p-4"
                    >
                      <CardHeader className="flex flex-col items-center">
                        <img
                          src={`/assets/images/skills/${skill.icon}.svg`}
                          alt={skill.name}
                          className="h-12 w-12 object-contain"
                        />
                        <CardTitle className="text-center text-sm font-medium text-foreground mt-2">
                          {skill.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="w-full">
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;
