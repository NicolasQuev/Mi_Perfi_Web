"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, Check, LoaderCircle, Send } from "lucide-react";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { ActionButton } from "@/shared/components/ActionButton";
import { mergeClassNames } from "@/shared/lib/class-names";
import {
  contactMessageLimits,
  createContactMessageSchema,
  type ContactMessage,
} from "../domain/contactMessage";
import type { ContactErrorCode } from "../domain/contactResult";
import { submitContactMessage } from "../services/contactApi";

const ERROR_COPY: Record<ContactErrorCode, keyof typeof uiCopy.contactErrors> = {
  invalid_input: "invalidInput",
  rate_limited: "rateLimited",
  delivery_failed: "deliveryFailed",
};

const FIELD_STYLES =
  "w-full rounded-xl border bg-surface-overlay/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition focus:outline-none focus:ring-2 focus:ring-accent-cyan/50";

export function ContactForm() {
  const translate = useTranslate();
  const [errorCode, setErrorCode] = useState<ContactErrorCode | null>(null);
  const [wasSent, setWasSent] = useState(false);

  const schema = useMemo(
    () =>
      createContactMessageSchema({
        nameTooShort: translate(uiCopy.validation.nameTooShort),
        nameTooLong: translate(uiCopy.validation.nameTooLong),
        emailInvalid: translate(uiCopy.validation.emailInvalid),
        messageTooShort: translate(uiCopy.validation.messageTooShort),
        messageTooLong: translate(uiCopy.validation.messageTooLong),
      }),
    [translate],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactMessage>({ resolver: zodResolver(schema) });

  async function sendMessage(message: ContactMessage) {
    setErrorCode(null);
    const result = await submitContactMessage(message);

    if (result.status === "error") {
      setErrorCode(result.code);
      return;
    }

    setWasSent(true);
    reset();
  }

  if (wasSent) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent-cyan/30 bg-accent-cyan/8 p-10 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-accent-cyan/15 text-accent-cyan">
          <Check className="size-7" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-text-primary">
          {translate(uiCopy.contact.successTitle)}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">{translate(uiCopy.contact.successBody)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(sendMessage)} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-text-primary">
          {translate(uiCopy.contact.nameLabel)}
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          maxLength={contactMessageLimits.nameMaxLength}
          placeholder={translate(uiCopy.contact.namePlaceholder)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={mergeClassNames(
            FIELD_STYLES,
            errors.name ? "border-accent-fuchsia" : "border-border-subtle",
          )}
          {...register("name")}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-xs text-accent-fuchsia">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-text-primary">
          {translate(uiCopy.contact.emailLabel)}
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder={translate(uiCopy.contact.emailPlaceholder)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={mergeClassNames(
            FIELD_STYLES,
            errors.email ? "border-accent-fuchsia" : "border-border-subtle",
          )}
          {...register("email")}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-xs text-accent-fuchsia">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          {translate(uiCopy.contact.messageLabel)}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={contactMessageLimits.messageMaxLength}
          placeholder={translate(uiCopy.contact.messagePlaceholder)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={mergeClassNames(
            FIELD_STYLES,
            "resize-y",
            errors.message ? "border-accent-fuchsia" : "border-border-subtle",
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-xs text-accent-fuchsia">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from humans and from assistive technology. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {errorCode ? (
        <p
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-accent-fuchsia/40 bg-accent-fuchsia/10 px-4 py-3 text-sm text-accent-fuchsia"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            <strong className="block font-medium">{translate(uiCopy.contact.errorTitle)}</strong>
            {translate(uiCopy.contactErrors[ERROR_COPY[errorCode]])}
          </span>
        </p>
      ) : null}

      <ActionButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
        ) : (
          <Send className="size-4" aria-hidden />
        )}
        {translate(isSubmitting ? uiCopy.contact.submitting : uiCopy.contact.submit)}
      </ActionButton>
    </form>
  );
}
