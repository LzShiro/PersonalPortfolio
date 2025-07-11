import GithubIcon from "@/public/icons/github.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import TwitchIcon from "@/public/icons/twitch.svg";

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
      <div className="flex gap-4 justify-center mt-4">
        <a
          href="https://github.com/lzShiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-6 h-6 hover:text-primary transition fill-current" />
        </a>
        <a
          href="https://www.linkedin.com/in/andre-ricoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-6 h-6 hover:text-primary transition fill-current" />
        </a>
        <a
          href="https://twitch.tv/qshiroo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitchIcon className="w-6 h-6 hover:text-primary transition fill-current" />
        </a>
      </div>
    </div>
  );
}
