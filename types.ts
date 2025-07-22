type TranslatableText = {
  en: string;
  es: string;
};

export type Project = {
  id: number;
  title: TranslatableText;
  description: TranslatableText;
  tech: string[];
  github?: string | null;
  demo?: string;
  image?: string;
};

export type Highlight = {
  id: number;
  title: { en: string; es: string };
  description: { en: string; es: string };
  image?: string;
  type?: { en: string; es: string };
  link?: string;
};