import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiVuedotjs,
  SiSpringboot,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiGooglecloud,
  SiSqlite,
  SiJunit5,
  SiJsonwebtokens,
  SiAmazonwebservices,
  SiGithubactions,
  SiSnyk,
} from "react-icons/si";
import { FaJava, FaMobile } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: FaMobile },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    category: "Testing & Security",
    skills: [
      { name: "JUnit 5", icon: SiJunit5 },
      { name: "Postman", icon: SiPostman },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Snyk", icon: SiSnyk },
    ],
  },
];
