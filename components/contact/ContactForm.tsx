"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const requestTypes = [
  "Club sportif",
  "Sponsoring",
  "Partenariat",
  "Média",
  "Compétition",
  "Autre",
] as const;

type FormState = {
  name: string;
  organization: string;
  email: string;
  requestType: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  requestType: "",
  message: "",
  consent: false,
};

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Le nom est requis.";
  if (!values.organization.trim()) {
    errors.organization = "L’organisation est requise.";
  }
  if (!values.email.trim()) {
    errors.email = "L’adresse e-mail est requise.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Adresse e-mail invalide.";
  }
  if (!values.requestType) {
    errors.requestType = "Sélectionnez un type de demande.";
  }
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  }
  if (!values.consent) {
    errors.consent = "Le consentement est requis.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError(null);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    if (!formspreeEndpoint) {
      setSubmitted(true);
      return;
    }

    setSending(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          organization: values.organization,
          email: values.email,
          requestType: values.requestType,
          message: values.message,
          _subject: `[Portfolio] ${values.requestType} — ${values.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l’envoi");
      }

      setSubmitted(true);
      setValues(initialState);
    } catch {
      setSubmitError(
        "L’envoi a échoué. Réessaie dans un instant ou écris-moi directement par e-mail.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={inputClass(errors.name)}
          />
        </Field>

        <Field
          label="Organisation"
          error={errors.organization}
          htmlFor="organization"
        >
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) =>
              setValues({ ...values, organization: e.target.value })
            }
            className={inputClass(errors.organization)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Adresse e-mail" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field
          label="Type de demande"
          error={errors.requestType}
          htmlFor="requestType"
        >
          <select
            id="requestType"
            name="requestType"
            value={values.requestType}
            onChange={(e) =>
              setValues({ ...values, requestType: e.target.value })
            }
            className={inputClass(errors.requestType)}
          >
            <option value="">Sélectionner</option>
            {requestTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={cn(inputClass(errors.message), "resize-y")}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) =>
              setValues({ ...values, consent: e.target.checked })
            }
            className="mt-1 size-4 accent-yellow"
          />
          <span>
            J’accepte que mes informations soient utilisées pour répondre à
            ma demande de contact.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-sm text-mg-red">{errors.consent}</p>
        )}
      </div>

      <Button type="submit" showIcon={false} disabled={sending}>
        {sending ? "Envoi en cours…" : "Envoyer la demande"}
      </Button>

      {submitError && (
        <div
          className="border border-mg-red/50 bg-mg-red/10 p-4 text-sm text-white-main"
          role="alert"
        >
          {submitError}
        </div>
      )}

      {submitted && (
        <div
          className="border border-yellow/40 bg-yellow/10 p-4 text-sm text-white-main"
          role="status"
        >
          {formspreeEndpoint
            ? "Merci. Ta demande a bien été envoyée."
            : "Le formulaire n’est pas encore connecté à un service d’envoi. Ajoute NEXT_PUBLIC_FORMSPREE_ENDPOINT sur Vercel pour activer l’envoi."}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[12px] uppercase tracking-[0.16em] text-muted"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-mg-red">{error}</p>}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-sm border bg-black-secondary px-4 py-3 text-sm text-white-main outline-none transition-colors placeholder:text-muted/60 focus:border-yellow",
    error ? "border-mg-red" : "border-border",
  );
}
