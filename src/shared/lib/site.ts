const FALLBACK_SITE_URL = "http://localhost:3000";

/** Callers append their own paths, so a trailing slash would produce "//sitemap.xml". */
function withoutTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

/**
 * Public origin of the deployment, used for canonical URLs and metadata.
 * Set NEXT_PUBLIC_SITE_URL in the hosting provider once the domain is live.
 */
export const siteUrl = withoutTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL,
);
