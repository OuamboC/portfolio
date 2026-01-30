export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "WengHR",
    description:
      "Multi-tenant HR Management System with employee management, customisable leave policies, and shift scheduling. Features 4-tier RBAC, JWT authentication, and i18n support. Beta tested with 100+ users across multiple organisations.",
    image: "/projects/wenghr.png",
    tags: [
      "Java",
      "Spring Boot",
      "React Native",
      "i18n",
      "MySQL",
      "Docker",
      "Snyk",
    ],
    liveUrl: "https://weng-hr.vercel.app/",
    githubUrl: "https://github.com/OuamboC/WengHR",
  },
  {
    id: 2,
    title: "Chirrup",
    description:
      "Full-stack social media platform with user profiles, posts, and likes. Optimised backend queries reducing feed loading time by 40%, supporting 200+ active users.",
    image: "/projects/chirrup.png",
    tags: ["Node.js", "Express.js", "Vue.js", "SQLite", "Tailwind CSS"],
    liveUrl: "https://chirrup-social-media.vercel.app/",
    githubUrl: "https://github.com/OuamboC/Chirrup",
  },
  {
    id: 3,
    title: "LM Global Solutions",
    description:
      "Professional business website for an import/export client. Responsive design with bilingual support (French/English), contact forms, and service showcase. Delivered same-day.",
    image: "/projects/lm-global.png",
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    liveUrl: "https://www.lmglobals.com/",
    githubUrl: "https://github.com/OuamboC/LM-Global-Solutions",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website with internationalization support (EN/FR/ES). Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "i18n"],
    liveUrl: "https://canisouambo.vercel.app/",
    githubUrl: "https://github.com/OuamboC/portfolio",
  },
];
