export type Project = {
  title: string;
  description: string;
  image: string; // URL or `/public/...`
  href: string;
  tags?: string[];
};

export type SiteContent = {
  name: string; // Exact from source site
  title: string; // Exact from source site
  about: string; // Exact from source site
  skills: string[]; // Exact list from source site
  email: string; // Exact from source site
  socials: { label: string; href: string }[]; // Exact from source site
  projects: Project[]; // Exact list from source site
};

// Populate these fields with the exact content from cleverventures.net when available.
// The website is fully functional with these placeholders and designed to accept final content without code changes.
export const content: SiteContent = {
  name: "", // e.g., "Clever Ventures"
  title: "", // e.g., "Venture Studio / Digital Product Partner"
  about:
    "", // Paste the full About text verbatim from the source site
  skills: [
    // e.g., "Product Strategy", "Design Systems", "WebGL/Three.js", ...
  ],
  email: "", // e.g., "hello@cleverventures.net"
  socials: [
    // { label: "Twitter", href: "https://twitter.com/..." },
    // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
    // { label: "GitHub", href: "https://github.com/..." },
    // ...
  ],
  projects: [
    // {
    //   title: "Project Title",
    //   description: "Short description",
    //   image: "/projects/example.jpg" or "https://...",
    //   href: "https://...",
    //   tags: ["Design", "3D", "Next.js"],
    // },
  ],
};
