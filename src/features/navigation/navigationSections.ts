import { uiCopy } from "@/content/ui-copy";
import type { LocalizedText } from "@/i18n/locale";

export interface NavigationSection {
  id: string;
  label: LocalizedText;
}

/**
 * Single source of truth for the page anchors: the header, the scrollspy and
 * the rendered sections all read this list, so they can never fall out of sync.
 */
export const navigationSections: NavigationSection[] = [
  { id: "about", label: uiCopy.navigation.about },
  { id: "skills", label: uiCopy.navigation.skills },
  { id: "projects", label: uiCopy.navigation.projects },
  { id: "experience", label: uiCopy.navigation.experience },
  { id: "education", label: uiCopy.navigation.education },
  { id: "contact", label: uiCopy.navigation.contact },
];
