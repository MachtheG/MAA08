"use client";

import { useState } from "react";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function VolunteerForm() {
  const { t } = useLanguage();
  const { constituencies } = useContent();
  const [submitted, setSubmitted] = useState(false);
  const f = t.ui.volunteerForm;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: No backend wired. This only demonstrates the UX.
    // Connect to a real endpoint / CRM (and add spam protection) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-page bg-page-alt p-6 sm:p-10">
        <div className="grid size-12 place-items-center rounded-control bg-flag-green text-sand-50">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path
              d="M4 11l5 5 9-10"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-heading text-ink-900">
          {f.thanksHeading}
        </h3>
        <p className="mt-3 max-w-measure text-ink-700">{f.thanksBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 min-h-11 font-bold text-flag-green-dark underline decoration-2 underline-offset-4"
        >
          {f.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-page bg-page-alt p-5 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.fullName} htmlFor="v-name" required>
          <input id="v-name" name="name" type="text" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label={f.phone} htmlFor="v-phone" required>
          <input
            id="v-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="0712 345 678"
            className={inputCls}
          />
        </Field>
        <Field label={f.email} htmlFor="v-email">
          <input id="v-email" name="email" type="email" autoComplete="email" className={inputCls} />
        </Field>
        <Field label={f.constituency} htmlFor="v-ward">
          <select id="v-ward" name="ward" className={inputCls} defaultValue="">
            <option value="" disabled>
              {f.selectPlaceholder}
            </option>
            {constituencies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="font-bold text-ink-900">{f.howHelp}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {f.interests.map((it) => (
            <label
              key={it}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-control bg-page px-3.5 py-2.5 text-ink-800 transition-colors hover:bg-page-deep has-[:checked]:bg-page-deep"
            >
              <input
                type="checkbox"
                name="interests"
                value={it}
                className="size-5 shrink-0 accent-flag-green"
              />
              <span className="min-w-0">{it}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-8 min-h-14 w-full rounded-control bg-ink-900 px-6 text-[1.0625rem] font-bold text-sand-50 transition-[background-color,transform] duration-(--duration-quick) hover:bg-flag-green-dark active:scale-[0.98] sm:w-auto sm:px-10"
      >
        {f.submit}
      </button>
      <p className="mt-3 text-small text-ink-700">{f.demoNote}</p>
    </form>
  );
}

const inputCls =
  "min-h-12 w-full rounded-control border-[1.5px] border-ink-900 bg-page px-3.5 text-ink-900 user-invalid:border-flag-red";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-bold text-ink-900">
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-flag-red">*</span>}
      </label>
      {children}
    </div>
  );
}
