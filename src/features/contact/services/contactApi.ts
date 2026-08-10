import type { ContactMessage } from "../domain/contactMessage";
import { isContactErrorCode, type ContactResponse } from "../domain/contactResult";

const CONTACT_ENDPOINT = "/api/contact";

/** Posts the message and normalizes every failure into a known error code. */
export async function submitContactMessage(message: ContactMessage): Promise<ContactResponse> {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    const payload: unknown = await response.json();

    if (response.ok) {
      return { status: "sent" };
    }

    const code = (payload as { code?: unknown }).code;

    return { status: "error", code: isContactErrorCode(code) ? code : "delivery_failed" };
  } catch {
    return { status: "error", code: "delivery_failed" };
  }
}
