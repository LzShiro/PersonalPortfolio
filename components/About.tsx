"use client"

import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/context/LanguageContext";
export default function About() {
  const { t } = useLang();

  return (
    <AnimatedSection delay={0.3}>
      <section className="max-w-3xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{t.about.title}</h2>
        <p className="text-lg leading-7 text-muted-foreground">
          {t.about.ex}<strong>React</strong>, <strong>Next.js</strong> y{" "}
          <strong>TypeScript</strong>, {t.about.ex2}
        </p>

        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          {t.about.ex3} <strong>Twitch Partner</strong>, {t.about.ex4}.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-4">
          {t.about.tech}
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
          <li>React</li>
          <li>React Native</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>SQL / Sequelize</li>
          <li>Azure Blob Storage</li>
          <li>JWT / Auth</li>
        </ul>
      </section>
    </AnimatedSection>
  );
}
