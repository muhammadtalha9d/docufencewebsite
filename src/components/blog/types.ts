export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered?: boolean; items: { title?: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogSection = {
  id: string;
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  initials: string;
  readTime: string;
  date: string;
  tags: string[];
  summary: string;
  image: string;
  dek: string;
  sections: BlogSection[];
};
