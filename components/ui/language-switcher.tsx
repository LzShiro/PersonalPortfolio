"use client"


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useLang } from "@/context/LanguageContext"

const availableLanguages = {
  en: "English",
  es: "Español"
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  const handleLanguageChange = (code: "en" | "es") => {
    setLang(code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="text-sm font-medium">{lang.toUpperCase()}</span>
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(availableLanguages).map(([code, label]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as "en" | "es")}
            className={lang === code ? "font-semibold" : ""}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}