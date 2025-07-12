import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection delay={0.3}>
      <section className="max-w-3xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Sobre mí</h2>
        <p className="text-lg leading-7 text-muted-foreground">
          Soy un desarrollador de software con experiencia construyendo
          soluciones web modernas, escalables y orientadas al usuario. Me
          especializo en <strong>React</strong>, <strong>Next.js</strong> y{" "}
          <strong>TypeScript</strong>, y he trabajado tanto en proyectos
          internos como en productos listos para producción.
        </p>

        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          He desarrollado aplicaciones reales como un sistema de auditoría
          vehicular con carga de evidencia a Azure, una app de gestión de
          suplementos, y una plataforma de reservas. También he construido una
          comunidad como <strong>Twitch Partner</strong>, demostrando
          constancia, habilidades técnicas y enfoque creativo.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-4">
          Tecnologías principales
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
