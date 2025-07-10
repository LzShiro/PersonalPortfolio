export default function Hero() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Hola, soy <span className="text-primary">Andre Ricoy</span>
      </h1>
      <p className="max-w-xl text-xl text-muted-foreground">
        Software Engineer especializado en React, Next.js y soluciones cloud.
        Construyo plataformas escalables y experiencias web modernas.
      </p>
      <a
        href="#projects"
        className="rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-accent"
      >
        Ver proyectos
      </a>
    </div>
  );
}
