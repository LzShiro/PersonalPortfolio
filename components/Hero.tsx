"use client";
import { useLang } from "@/context/LanguageContext";
import { useNavigation } from "@/context/NavigationContext";
import { scrollToId } from "@/lib/scrollTo";
import GithubIcon from "@/public/icons/github.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLang();
  const { hasNavigated, setHasNavigated } = useNavigation();
  const handleScrollTo = () => {
    scrollToId("projects", hasNavigated, setHasNavigated);
  };
  return (
    <motion.div
      className="flex min-h-[95vh] flex-col items-center justify-center gap-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-6xl font-bold tracking-tight">
        {t.hero.title} <span className="text-primary">Andre Ricoy</span>
      </h1>
      <p className="max-w-xl text-xl text-muted-foreground">
        {t.hero.subtitle}
      </p>
      <button
        onClick={() => {
          handleScrollTo();
        }}
        className="rounded-lg border px-6 py-3 text-lg font-medium transition hover:bg-accent"
      >
        {t.hero.button}
      </button>
      <div className="flex gap-4 justify-center mt-4">
        <a
          href="https://github.com/lzShiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-10 h-10 hover:text-primary transition fill-current" />
        </a>
        <a
          href="https://www.linkedin.com/in/andre-ricoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-10 h-10 hover:text-primary transition fill-current" />
        </a>
      </div>
    </motion.div>
  );
}
