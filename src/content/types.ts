import type { LocalizedText } from "@/i18n/locale";

export type SocialPlatform = "github" | "linkedin" | "email" | "whatsapp";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Skill {
  name: string;
  /** Self-assessed mastery, from 0 to 100. Drives the animated proficiency bar. */
  proficiency: number;
}

export type SkillCategoryIcon = "frontend" | "backend" | "database" | "devops" | "tooling";

export interface SkillCategory {
  id: string;
  name: LocalizedText;
  icon: SkillCategoryIcon;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  outcomes: LocalizedText[];
  technologies: string[];
  year: number;
  isFeatured: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
}

export interface ExperienceEntry {
  id: string;
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
  achievements: LocalizedText[];
  technologies: string[];
}

export interface EducationEntry {
  id: string;
  title: LocalizedText;
  institution: string;
  period: LocalizedText;
  credentialUrl?: string;
}

export interface CareerMetric {
  value: string;
  label: LocalizedText;
}

export interface Profile {
  /** Complete legal name: hero, footer and page metadata. */
  fullName: string;
  /** Compact form for tight spots such as the header. */
  shortName: string;
  headline: LocalizedText;
  /** Rotated by the typewriter effect in the hero section. */
  rotatingRoles: LocalizedText[];
  summary: LocalizedText;
  location: LocalizedText;
  availability: LocalizedText;
  email: string;
  resumeUrl: string;
  aboutParagraphs: LocalizedText[];
  metrics: CareerMetric[];
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}
