"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { scrollToId } from "@/lib/scrollTo";
import { useNavigation } from "@/context/NavigationContext";
import { ModeToggle } from "./ui/modetoggle";
import { LanguageSwitcher } from "./ui/language-switcher";
import { useLang } from "@/context/LanguageContext";

export default function Header() {
  const { hasNavigated, setHasNavigated } = useNavigation();
  const { t } = useLang()
  
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    scrollToId(id, hasNavigated, setHasNavigated);
  };
  
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition
        ${scrolled ? "bg-background/80" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <button
          onClick={() => handleScrollTo("home")}
          className="font-semibold"
        >
          Andre.dev
        </button>
        

        <ul className="hidden gap-6 md:flex items-center">
          {["about", "projects", "experience", "contact"].map((id) => (
            <li key={id}>
              <button
                onClick={() => handleScrollTo(id)}
                className="text-m text-muted-foreground hover:text-foreground transition"
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            </li>
            
          ))}
          <li>
            <ModeToggle />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
