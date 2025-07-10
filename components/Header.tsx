"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  // Cambia fondo al hacer scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition
        ${scrolled ? "bg-background/80" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-semibold">
          Andre.dev
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {["about", "projects", "experience", "contact"].map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger (opcional, por simplicidad solo icono) */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
