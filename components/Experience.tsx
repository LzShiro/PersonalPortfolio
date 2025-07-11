export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4" id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center">Experiencia</h2>

      <div className="space-y-10">
        {/* Sanfer */}
        <div>
          <h3 className="text-xl font-semibold">Laboratorios Sanfer</h3>
          <p className="text-sm text-muted-foreground">
            Desarrollador Full-stack | Octubre 2023 – Presente
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Desarrollo de aplicaciones internas como el sistema de auditoría
              de automóviles y la app de reservas.
            </li>
            <li>
              Implementación de autenticación con Azure AD, roles de usuario y
              subida de evidencia a Azure Blob Storage.
            </li>
            <li>
              Diseño y modularización de interfaces con React, Next.js, Tailwind
              y framer-motion.
            </li>
          </ul>
          <p className="mt-1 text-xs text-muted-foreground">
            Stack: Next.js, TypeScript, Tailwind, Azure, Sequelize
          </p>
        </div>

        {/* Portafolio */}
        <div>
          <h3 className="text-xl font-semibold">Sitio web personal</h3>
          <p className="text-sm text-muted-foreground">
            Desarrollador Full-stack | Julio 2025
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Diseño y desarrollo de un portafolio profesional como SPA usando
              App Router y shadcn/ui.
            </li>
            <li>
              Implementación de dark/light mode, navegación suave, y estructura
              modular.
            </li>
          </ul>
          <p className="mt-1 text-xs text-muted-foreground">
            Stack: Next.js, Tailwind CSS, TypeScript, Framer Motion
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Proyectos destacados</h3>
          <p className="text-sm text-muted-foreground">Grid | 2018 – 2023</p>
          <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Desarrollo de una aplicación móvil de comercio electrónico,{" "}
              <strong>MG Suplementos</strong>, usando React Native.
              Implementación del módulo de ofertas mediante listas horizontales
              y verticales (FlatLists) para categorías y productos. La sección
              de ofertas generó más de 5,000 usuarios activos mensuales y
              contribuyó al crecimiento de ventas.
            </li>
            <li>
              Diseño e implementación de un marcador digital de béisbol,
              utilizado en estadios de <strong>Charros de Jalisco</strong> y{" "}
              <strong>El Águila de Veracruz</strong>.
            </li>
            <li>
              Desarrollo y mantenimiento de soluciones web interactivas para{" "}
              <a
                href="https://www.gridcompany.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                www.gridcompany.com.mx
              </a>
              , utilizadas como parte del portafolio corporativo de la empresa.
            </li>
          </ul>
          <p className="mt-1 text-xs text-muted-foreground">
            Stack: React Native, REST API, TypeScript, Figma, HTML/CSS
          </p>
        </div>
      </div>
    </section>
  );
}
