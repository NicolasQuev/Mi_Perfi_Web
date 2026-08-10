import { z } from "zod";

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 1500;

export interface ContactValidationMessages {
  nameTooShort: string;
  nameTooLong: string;
  emailInvalid: string;
  messageTooShort: string;
  messageTooLong: string;
}

/**
 * The schema is built from injected messages so the very same rules can report
 * errors in the visitor's language on the client and in a neutral language on
 * the server. Validation logic lives here once — never duplicated.
 */
export function createContactMessageSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(NAME_MIN_LENGTH, messages.nameTooShort)
      .max(NAME_MAX_LENGTH, messages.nameTooLong),
    email: z.email(messages.emailInvalid).trim().max(NAME_MAX_LENGTH * 2),
    message: z
      .string()
      .trim()
      .min(MESSAGE_MIN_LENGTH, messages.messageTooShort)
      .max(MESSAGE_MAX_LENGTH, messages.messageTooLong),
    /**
     * Honeypot: invisible to humans, commonly filled by bots.
     * It is accepted with any value on purpose — rejecting it here would turn
     * a detected bot into a validation error and never reach the silent-success
     * handling the route applies. Detection belongs to the route, not to the
     * shape of the message.
     */
    website: z.string().optional(),
  });
}

export type ContactMessage = z.infer<ReturnType<typeof createContactMessageSchema>>;

/** Server-side messages: the API is not localized, the UI translates the codes. */
export const SERVER_VALIDATION_MESSAGES: ContactValidationMessages = {
  nameTooShort: `Name must be at least ${NAME_MIN_LENGTH} characters.`,
  nameTooLong: `Name must be at most ${NAME_MAX_LENGTH} characters.`,
  emailInvalid: "A valid email address is required.",
  messageTooShort: `Message must be at least ${MESSAGE_MIN_LENGTH} characters.`,
  messageTooLong: `Message must be at most ${MESSAGE_MAX_LENGTH} characters.`,
};

export const contactMessageLimits = {
  nameMaxLength: NAME_MAX_LENGTH,
  messageMaxLength: MESSAGE_MAX_LENGTH,
} as const;
