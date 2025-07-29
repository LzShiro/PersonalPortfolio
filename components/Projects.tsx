"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/context/LanguageContext";
import { Project } from "@/types";


const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "Herramienta de captura y revisión de medios internos",
      en: "Internal Media Capture & Review Tool",
    },
    description: {
      es:"Aplicación interna para la captura y gestión de archivos multimedia (fotos y videos), con cargas seguras, control de acceso por roles de usuario y actualizaciones de estado dinámicas.",
      en: "Internal application for capturing and managing media files (photos and videos), including secure uploads, user role access, and dynamic status updates.",
    },
    tech: ["Next.js", "TypeScript", "Azure Blob", "Sequelize", "Framer Motion"],
    github: null,
    demo: "https://youtu.be/iHq-tpGrwbU",
    image: "/projects/Autos.jpg",
  },
  {
    id: 2,
    title: {
      es: "Sistema de reservas",
      en: "Reservation System",
    },
    description: {
      es: "Plataforma para gestionar horarios y reservas de espacios físicos en almacenes.",
      en: "Platform for managing schedules and reservations of physical spaces in warehouses.",
    },
    tech: ["Next.js", "TypeScript", "Sequelize", "Tailwind CSS"],
    github: null,
    demo: "https://youtu.be/TObfj36uE9Y",
    image: "/projects/Reservaciones.jpg",
  },
  {
    id: 3,
    title: {
      es: "Portafolio Personal",
      en: "Personal Portfolio",
    },
    description: {
      es: "Este sitio web. SPA moderna desarrollada con shadcn/ui, diseño responsive, navegación suave y estructura profesional.",
      en: "This website. A modern SPA developed with shadcn/ui, responsive design, smooth navigation, and a professional structure.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/andrericoy/portafolio",
    demo: "",
    image: "",
  },
  {
    id: 4,
    title: {
      es: "Proyecto final Desarrollador front-end de Meta",
      en: "Final Project Meta Front-End Developer",
    },
    description: {
      es: "Una aplicación web front-end desarrollada como el proyecto final para la certificación de desarrolladores de Meta Front-end. Esta aplicación permite a los usuarios reservar una mesa, navegar el menú completo, hacer pedidos en línea y administrar su experiencia en el restaurante ficticio Mediterráneo Little Lemon.",
      en: "A front-end web application developed as the final project for the Meta Front-End Developer Certification. This app allows users to book a table, browse the full menu, place online orders, and manage their experience at the fictional Mediterranean restaurant Little Lemon.",
    },
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/LzShiro/finalProyectCoursera",
    demo: "",
    image: "/projects/little-lemon.png",
  },
];

export default function Projects() {
  const {t, lang} = useLang();
  return (
    <section className="max-w-5xl mx-auto py-20 px-4" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">{t.projects.title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.2}>
            <Card className="flex flex-col">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title[lang]}
                  width={800}
                  height={450}
                  className="rounded-t-md object-cover h-40 w-full"
                />
              )}
              <CardHeader>
                <CardTitle>{project.title[lang]}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 text-sm">
                <p className="text-muted-foreground">{project.description[lang]}</p>
                <p>
                  <strong>{t.projects.technologies}:</strong> {project.tech.join(", ")}
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
                      {t.projects.private}
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary text-xs"
                    >
                      {t.projects.demo}
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
