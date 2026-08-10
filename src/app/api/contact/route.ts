import {
  createContactMessageSchema,
  SERVER_VALIDATION_MESSAGES,
} from "@/features/contact/domain/contactMessage";
import type { ContactErrorCode } from "@/features/contact/domain/contactResult";
import { createEmailNotifier } from "@/features/contact/services/emailNotifier";
import { isRateLimited } from "@/features/contact/services/submissionRateLimiter";

const UNKNOWN_CLIENT_ID = "unknown-client";

const ERROR_STATUS: Record<ContactErrorCode, number> = {
  invalid_input: 400,
  rate_limited: 429,
  delivery_failed: 502,
};

const contactMessageSchema = createContactMessageSchema(SERVER_VALIDATION_MESSAGES);

function errorResponse(code: ContactErrorCode): Response {
  return Response.json({ status: "error", code }, { status: ERROR_STATUS[code] });
}

function successResponse(): Response {
  return Response.json({ status: "sent" });
}

/** Identifies the caller by proxy headers; falls back to a shared bucket. */
function resolveClientId(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp?.trim() || UNKNOWN_CLIENT_ID;
}

async function readJsonBody(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function POST(request: Request): Promise<Response> {
  if (isRateLimited(resolveClientId(request))) {
    return errorResponse("rate_limited");
  }

  const parsedBody = contactMessageSchema.safeParse(await readJsonBody(request));

  if (!parsedBody.success) {
    return errorResponse("invalid_input");
  }

  // Bots that fill the honeypot get a success response so they do not retry.
  if (parsedBody.data.website) {
    return successResponse();
  }

  try {
    const notifier = createEmailNotifier();
    await notifier.deliver(parsedBody.data);
  } catch (error) {
    // Message contents are never logged: they are personal data from a visitor.
    console.error(
      "[contact] delivery failed:",
      error instanceof Error ? error.message : "unknown error",
    );

    return errorResponse("delivery_failed");
  }

  return successResponse();
}
