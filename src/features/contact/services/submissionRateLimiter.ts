const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 3;

/**
 * In-memory sliding window, scoped to a single server instance.
 * It stops casual form abuse; a distributed deployment behind several
 * instances would need a shared store (Redis, Upstash) to be exact.
 */
const submissionTimestampsByClient = new Map<string, number[]>();

function discardExpired(timestamps: number[], now: number): number[] {
  return timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);
}

export function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const recentSubmissions = discardExpired(submissionTimestampsByClient.get(clientId) ?? [], now);

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    submissionTimestampsByClient.set(clientId, recentSubmissions);
    return true;
  }

  submissionTimestampsByClient.set(clientId, [...recentSubmissions, now]);
  return false;
}
