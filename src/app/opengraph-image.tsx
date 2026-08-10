import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { DEFAULT_LOCALE } from "@/i18n/locale";

/**
 * Social preview card. Generated once at build time and served as a static PNG,
 * so it costs nothing at request time.
 *
 * Rendered by Satori, which supports only a subset of CSS: flexbox (no grid),
 * an explicit `display: flex` on every element with more than one child, and
 * inline styles instead of Tailwind classes.
 */

export const alt = `${profile.fullName} · ${profile.rotatingRoles[0][DEFAULT_LOCALE]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Mirrors the @theme tokens in globals.css; Satori cannot read CSS variables. */
const COLORS = {
  surfaceBase: "#05050c",
  textPrimary: "#f2f2f7",
  textSecondary: "#a3a3b8",
  borderSubtle: "#1e1e2e",
  accentViolet: "#8b5cf6",
  accentCyan: "#22d3ee",
} as const;

function buildInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: COLORS.surfaceBase,
          backgroundImage: `radial-gradient(circle at 15% 12%, ${COLORS.accentViolet}40 0%, transparent 45%), radial-gradient(circle at 88% 88%, ${COLORS.accentCyan}33 0%, transparent 45%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 20,
              fontSize: 30,
              fontWeight: 700,
              color: COLORS.surfaceBase,
              backgroundImage: `linear-gradient(135deg, ${COLORS.accentViolet}, ${COLORS.accentCyan})`,
            }}
          >
            {buildInitials(profile.shortName)}
          </div>
          <div style={{ fontSize: 26, color: COLORS.textSecondary }}>
            {profile.location[DEFAULT_LOCALE]}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: COLORS.textPrimary,
            }}
          >
            {profile.fullName}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 5,
                borderRadius: 999,
                backgroundImage: `linear-gradient(90deg, ${COLORS.accentViolet}, ${COLORS.accentCyan})`,
              }}
            />
            <div style={{ fontSize: 40, color: COLORS.accentCyan }}>
              {profile.rotatingRoles[0][DEFAULT_LOCALE]}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: `1px solid ${COLORS.borderSubtle}`,
            fontSize: 24,
            color: COLORS.textSecondary,
          }}
        >
          <div style={{ display: "flex" }}>
            {profile.rotatingRoles[1][DEFAULT_LOCALE]}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: COLORS.accentCyan,
              }}
            />
            <div style={{ display: "flex", color: COLORS.textPrimary }}>
              {profile.availability[DEFAULT_LOCALE]}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
