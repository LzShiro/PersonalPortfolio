"use client";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/context/LanguageContext";
export default function Experience() {
  const { t } = useLang();
  return (
    <AnimatedSection delay={0.2}>
      <section className="max-w-3xl mx-auto py-20 px-4" id="experience">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t.experience.tilte}
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">
              {t.experience.sanfer.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.experience.sanfer.fullstack} | {t.experience.sanfer.date}
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
              <li>{t.experience.sanfer.ex1}.</li>
              <li>{t.experience.sanfer.ex2}.</li>
              <li>{t.experience.sanfer.ex3}.</li>
            </ul>
            <p className="mt-1 text-xs text-muted-foreground">
              Stack: Next.js, TypeScript, Tailwind, Azure, Sequelize
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              {t.experience.website.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.experience.website.fullstack} | {t.experience.website.date}
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
              <li>{t.experience.website.ex1}</li>
              <li>{t.experience.website.ex2}</li>
            </ul>
            <p className="mt-1 text-xs text-muted-foreground">
              Stack: Next.js, Tailwind CSS, TypeScript, Framer Motion
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              {t.experience.Highlight.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {" "}
              {t.experience.Highlight.fullstack} | 2018 – 2023
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
              <li>
                {t.experience.Highlight.ex1}, <strong>MG Suplementos</strong>,{" "}
                {t.experience.Highlight.ex2}
              </li>
              <li>
                {t.experience.Highlight.ex3} <strong>Charros de Jalisco</strong> {t.experience.Highlight.ex4}{" "}
                <strong>El Águila de Veracruz</strong>.
              </li>
              <li>
                {t.experience.Highlight.ex5}{" "}
                <a
                  href="https://www.gridcompany.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  www.gridcompany.com.mx
                </a>
                , {t.experience.Highlight.ex6}.
              </li>
            </ul>
            <p className="mt-1 text-xs text-muted-foreground">
              Stack: React Native, REST API, TypeScript, Figma, HTML/CSS
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
