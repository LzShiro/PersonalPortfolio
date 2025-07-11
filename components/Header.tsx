"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
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
        <button
          onClick={() => {
            const el = document.getElementById("home");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-semibold"
        >
          Andre.dev
        </button>

        <ul className="hidden gap-6 md:flex">
          {["about", "projects", "experience", "contact"].map((id) => (
            <li key={id}>
              <button
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
