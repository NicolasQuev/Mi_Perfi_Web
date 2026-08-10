"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { SectionShell } from "@/shared/components/SectionShell";
import { mergeClassNames } from "@/shared/lib/class-names";
import { ProficiencyBar } from "./ProficiencyBar";
import { SkillCategoryIcon } from "./SkillCategoryIcon";

const STAGGER_STEP_SECONDS = 0.08;

const [firstCategory] = profile.skillCategories;

export function SkillsSection() {
  const translate = useTranslate();
  const [selectedCategoryId, setSelectedCategoryId] = useState(firstCategory.id);

  const selectedCategory =
    profile.skillCategories.find((category) => category.id === selectedCategoryId) ??
    firstCategory;

  return (
    <SectionShell
      id="skills"
      eyebrow={translate(uiCopy.skills.eyebrow)}
      title={translate(uiCopy.skills.title)}
      description={translate(uiCopy.skills.description)}
    >
      <div
        role="tablist"
        aria-label={translate(uiCopy.skills.title)}
        className="flex flex-wrap gap-2"
      >
        {profile.skillCategories.map((category) => {
          const isSelected = category.id === selectedCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`skill-tab-${category.id}`}
              aria-selected={isSelected}
              aria-controls={`skill-panel-${category.id}`}
              onClick={() => setSelectedCategoryId(category.id)}
              className={mergeClassNames(
                "relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                isSelected
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {isSelected ? (
                <motion.span
                  layoutId="skill-tab-highlight"
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full border border-accent-violet/50 bg-accent-violet/12"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : (
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full border border-border-subtle"
                />
              )}
              <SkillCategoryIcon icon={category.icon} className="size-4" />
              {translate(category.name)}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.id}
          data-reveal
          id={`skill-panel-${selectedCategory.id}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedCategory.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="mt-8 rounded-2xl glass-panel p-6 sm:p-8"
        >
          <ul className="grid gap-6 sm:grid-cols-2 sm:gap-x-10">
            {selectedCategory.skills.map((skill, index) => (
              <ProficiencyBar
                key={skill.name}
                label={skill.name}
                proficiency={skill.proficiency}
                delayInSeconds={index * STAGGER_STEP_SECONDS}
              />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}
