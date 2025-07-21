import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Auditoría de Automóviles",
    description:
      "Sistema web para revisión vehicular con carga de fotos y videos, validación de documentos y comentarios de revisores.",
    tech: ["Next.js", "TypeScript", "Azure Blob", "Sequelize", "Framer Motion"],
    github: null,
    demo: "https://youtube.com",
    image: "/projects/Autos.jpg",
  },
  {
    title: "Sistema de Reservas",
    description:
      "Plataforma para gestionar horarios y reservas de espacios físicos en almacenes.",
    tech: ["Next.js", "TypeScript", "Sequelize", "Tailwind CSS"],
    github: null,
    demo: "https://youtu.be/TObfj36uE9Y",
    image: "/projects/Reservaciones.jpg",
  },
  {
    title: "Portafolio Personal",
    description:
      "Este sitio web. SPA moderna desarrollada con shadcn/ui, diseño responsive, navegación suave y estructura profesional.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/andrericoy/portafolio",
    demo: "",
    image: "",
  },
  {
    title: "Proyecto final Desarrollador front-end de Meta",
    description:
      "Este sitio web. SPA moderna desarrollada con shadcn/ui, diseño responsive, navegación suave y estructura profesional.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/LzShiro/finalProyectCoursera",
    demo: "",
    image: "/projects/little-lemon.png",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.2}>
            <Card className="flex flex-col">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="rounded-t-md object-cover h-40 w-full"
                />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 text-sm">
                <p className="text-muted-foreground">{project.description}</p>
                <p>
                  <strong>Tecnologías:</strong> {project.tech.join(", ")}
                </p>
                <div className="flex gap-3 mt-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary text-xs"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground italic">
                      Proyecto privado
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary text-xs"
                    >
                      Ver demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
