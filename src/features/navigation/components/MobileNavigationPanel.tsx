"use client";

import { AnimatePresence, motion } from "motion/react";
import { NavigationLinks } from "./NavigationLinks";

interface MobileNavigationPanelProps {
  isOpen: boolean;
  activeSectionId: string | null;
  onClose: () => void;
}

export function MobileNavigationPanel({
  isOpen,
  activeSectionId,
  onClose,
}: MobileNavigationPanelProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.nav
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden border-t border-border-subtle md:hidden"
        >
          <div className="px-4 py-4">
            <NavigationLinks
              orientation="vertical"
              activeSectionId={activeSectionId}
              onNavigate={onClose}
            />
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
