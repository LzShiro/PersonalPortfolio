"use client";

import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ui/modetoggle"
import { LanguageSwitcher } from "./ui/language-switcher"

export default function MobileMenu() {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <ModeToggle />
      <LanguageSwitcher />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button aria-label="Open menu">
            <Menu size={24} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a href="#about">About</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#projects">Projects</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#experience">Experience</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#highlights">Highlights</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#contact">Contact</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
