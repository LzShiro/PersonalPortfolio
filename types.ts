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
