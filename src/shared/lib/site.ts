const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Public origin of the deployment, used for canonical URLs and metadata.
 * Set NEXT_PUBLIC_SITE_URL in the hosting provider once the domain is live.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;
