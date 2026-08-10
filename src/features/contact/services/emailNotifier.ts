import { Resend } from "resend";
import type { ContactMessage } from "../domain/contactMessage";

/** Port: the route only knows it can deliver a message, not how. */
export interface EmailNotifier {
  deliver: (message: ContactMessage) => Promise<void>;
}

interface EmailConfiguration {
  apiKey: string;
  fromAddress: string;
  toAddress: string;
}

export class EmailNotifierNotConfiguredError extends Error {
  constructor(missingKeys: string[]) {
    super(`Missing contact email configuration: ${missingKeys.join(", ")}`);
    this.name = "EmailNotifierNotConfiguredError";
  }
}

function readConfiguration(): EmailConfiguration {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  const toAddress = process.env.CONTACT_TO_EMAIL;

  const missingKeys = [
    !apiKey && "RESEND_API_KEY",
    !fromAddress && "CONTACT_FROM_EMAIL",
    !toAddress && "CONTACT_TO_EMAIL",
  ].filter((key): key is string => typeof key === "string");

  if (!apiKey || !fromAddress || !toAddress) {
    throw new EmailNotifierNotConfiguredError(missingKeys);
  }

  return { apiKey, fromAddress, toAddress };
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Visitor input reaches an HTML email body, so it must be escaped first. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPES[character]);
}

function buildHtmlBody(message: ContactMessage): string {
  return [
    "<h2>Nuevo mensaje desde el portafolio</h2>",
    `<p><strong>Nombre:</strong> ${escapeHtml(message.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(message.email)}</p>`,
    `<p><strong>Mensaje:</strong></p>`,
    `<p>${escapeHtml(message.message).replace(/\n/g, "<br />")}</p>`,
  ].join("");
}

export function createEmailNotifier(): EmailNotifier {
  const { apiKey, fromAddress, toAddress } = readConfiguration();
  const resend = new Resend(apiKey);

  return {
    async deliver(message) {
      const { error } = await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: message.email,
        subject: `Portafolio · Mensaje de ${message.name}`,
        html: buildHtmlBody(message),
      });

      if (error) {
        throw new Error(`Email provider rejected the message: ${error.message}`);
      }
    },
  };
}
