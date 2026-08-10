import type { Project } from "@/content/types";

export const ALL_TECHNOLOGIES_FILTER = "all";

/** Unique technologies across every project, alphabetically ordered. */
export function collectTechnologies(projects: Project[]): string[] {
  const technologies = new Set(projects.flatMap((project) => project.technologies));

  return [...technologies].sort((first, second) => first.localeCompare(second));
}

export function filterByTechnology(projects: Project[], technology: string): Project[] {
  if (technology === ALL_TECHNOLOGIES_FILTER) {
    return projects;
  }

  return projects.filter((project) => project.technologies.includes(technology));
}
