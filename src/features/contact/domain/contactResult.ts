/** Error codes the contact API can return. The UI maps them to localized text. */
export const CONTACT_ERROR_CODES = ["invalid_input", "rate_limited", "delivery_failed"] as const;

export type ContactErrorCode = (typeof CONTACT_ERROR_CODES)[number];

export interface ContactSuccessResponse {
  status: "sent";
}

export interface ContactErrorResponse {
  status: "error";
  code: ContactErrorCode;
}

export type ContactResponse = ContactSuccessResponse | ContactErrorResponse;

export function isContactErrorCode(value: unknown): value is ContactErrorCode {
  return CONTACT_ERROR_CODES.includes(value as ContactErrorCode);
}
