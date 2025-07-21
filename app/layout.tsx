import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NavigationProvider } from "@/context/NavigationContext";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import StarBackground from "@/components/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Ricoy | Software Engineer",
  description:
    "Portafolio profesional de André Ricoy, desarrollador full-stack especializado en React, Next.js y soluciones cloud. Conoce mis proyectos, experiencia y habilidades técnicas.",
  keywords: [
    "André Ricoy",
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portafolio",
    "developer portfolio",
    "cloud solutions",
  ],
  authors: [{ name: "André Ricoy", url: "" }],
  creator: "André Ricoy",
  openGraph: {
    title: "André Ricoy | Software Engineer",
    description:
      "Explora el portafolio de André Ricoy, desarrollador especializado en React, Next.js y aplicaciones escalables.",
    url: "",
    siteName: "André Ricoy Portfolio",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationProvider>
              <StarBackground />
              <Header />
              {children}
            </NavigationProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
