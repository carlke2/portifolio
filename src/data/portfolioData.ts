export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

export interface StackDomain {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export const personalInfo = {
  name: "Salat Kipkemoi",
  role: "Software Engineer — ERP, AI Agents & Full-Stack Systems",
  bio: "Software Engineer based in Nairobi, Kenya, working across Dynamics 365 Business Central (ERP), AI agents, and full-stack applications. Currently at Millenium Solutions East Africa Limited, transitioning from developer toward project management.",
  location: "Nairobi, Kenya",
  email: "salatkipkemoi38@gmail.com",
  status: "Open to new work",
  ctaHeadline: "Let's build something that runs in production.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/carlKe2",
    handle: "github.com/carlKe2 ↗",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/salat-caleb-kipkemoi-3b3875341",
    handle: "in/salat-caleb ↗",
  },
  {
    label: "Email",
    url: "mailto:salatkipkemoi38@gmail.com",
    handle: "salatkipkemoi38@gmail.com ↗",
  },
];

export const projects: Project[] = [
  {
    id: "machakos-eoc",
    index: "01",
    title: "Machakos EOC — Field Responder App",
    description: "Offline-first Flutter app for ambulance crews, built for Machakos County's Emergency Operations Center — dispatch, live inventory tracking, and shift-readiness checklists syncing against a Fastify/Prisma backend.",
    tags: ["Flutter", "Fastify", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/carlke2/Machakos-Mobileapp",
  },
  {
    id: "erpguide-ai",
    index: "02",
    title: "ERPGuide AI",
    description: "A WhatsApp-based assistant that turns Business Central into a conversation — live OData lookups, support ticketing, and agent handoff across 100+ ERP procedures.",
    tags: ["Python", "FastAPI", "Twilio", "Gemini", "BC OData"],
    repoUrl: "https://github.com/carlKe2",
  },
  {
    id: "opshub",
    index: "03",
    title: "OpsHub",
    description: "Full-stack facility management system — auth, roles, booking, support ticketing, and an HR module, with a NestJS backend and a React frontend.",
    tags: ["NestJS", "React", "TypeScript"],
    repoUrl: "https://github.com/carlKe2",
  },
  {
    id: "local-ai-agent",
    index: "04",
    title: "Local AI Agent",
    description: "A fully local, offline-capable email agent — classifies incoming mail, drafts replies, and runs on a schedule, built on a free/local model stack with no cloud dependency.",
    tags: ["Ollama", "FastAPI", "SQLite", "Gmail API"],
    repoUrl: "https://github.com/carlKe2",
  },
  {
    id: "sme-universal-bot",
    index: "05",
    title: "SME Universal Bot",
    description: "A modular WhatsApp bot for small businesses — one core system, swappable capabilities, built to sit alongside whatever tools a business already runs.",
    tags: ["Python", "WhatsApp API"],
    repoUrl: "https://github.com/carlKe2",
  },
];

export const stackDomains: StackDomain[] = [
  {
    title: "ERP",
    skills: ["Dynamics 365 Business Central", "BC OData APIs", "NAV"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "NestJS", "Fastify", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI & Agents",
    skills: ["Google Gemini", "Ollama", "Twilio"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Flutter", "TailwindCSS"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "Current",
    role: "Software Engineer & ERP Consultant",
    company: "Millenium Solutions East Africa Limited",
    description: "Functional consulting and development on Dynamics 365 Business Central, building AI agents and full-stack tools for client operations, while transitioning toward project management.",
  },
];
