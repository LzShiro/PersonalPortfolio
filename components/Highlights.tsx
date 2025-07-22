"use client";
import { Highlight } from "@/types";
import { useLang } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const highlights: Highlight[] = [
  {
    id: 1,
    title: {
      en: "Meta Front-End Developer Certification",
      es: "Certificación de Desarrollador Front-End de Meta",
    },
    description: {
      en: "Completed the Meta professional certification covering React, accessibility, testing, and modern web development.",
      es: "Certificación profesional de Meta que cubre React, accesibilidad, pruebas y desarrollo web moderno.",
    },
    image: "/highlights/Certificado.png",
    type: {
      en: "certification",
      es: "certificación",
    },
    link: "https://www.coursera.org/account/accomplishments/specialization/RGK2ZEZ9LXHO"
  },
  {
    id: 2,
    title: {
      en: "Winner of Cisco Hackathon 2018",
      es: "Ganador del Hackatón de Cisco 2018",
    },
    description: {
      en: "Led a project that won first place for innovation using Cisco Meraki.",
      es: "Lideré un proyecto que ganó el primer lugar por innovación utilizando Cisco Meraki .",
    },
    image: "/highlights/hackaton.jpeg",
    type: {
      en: "award",
      es: "premio",
    },
  },
  {
    id: 3,
    title: {
      en: "Twitch Partner – Gaming",
      es: "Twitch Partner – Juegos",
    },
    description: {
      en: "Built a community and reached Partner status through consistent streaming, content creation and dedication.",
      es: "Construí una comunidad y alcancé el estatus de Partner mediante streaming constante, creación de contenido y dedicación.",
    },
    image: "/highlights/twitch.png",
    type: {
      en: "Achievement",
      es: "logro",
    },
    link: "https://www.twitch.tv/qshiroo"
  },
];

export default function Highlights() {
  const { t, lang } = useLang();
  return (
    <section className="max-w-5xl mx-auto py-20 px-4" id="highlights">
      <h2 className="text-3xl font-bold mb-10 text-center">
        {t.highlights.title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {highlights.map((highlight, i) => (
          <AnimatedSection key={highlight.id} delay={i * 0.2}>
            <Card className="flex flex-col">
              {highlight.image && (
                <Image
                  src={highlight.image}
                  alt={highlight.title[lang]}
                  width={800}
                  height={450}
                  className="rounded-t-md object-cover h-40 w-full"
                />
              )}
              <CardHeader className="flex flex-col items-start gap-1">
                <CardTitle>{highlight.title[lang]}</CardTitle>
                <div className="flex gap-3 mt-2">
                  {highlight.type && (
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {highlight.type[lang]}
                    </span>
                  )}
                  {highlight.link && (
                    <a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary text-xs"
                    >
                      {t.highlights.link}
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground">
                  {highlight.description[lang]}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
