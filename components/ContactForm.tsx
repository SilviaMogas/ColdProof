"use client";

import { useState } from "react";

const orgTypes = [
  "Pharmaceutical company",
  "Logistics operator",
  "Healthcare distributor",
  "Hospital or clinic",
  "Humanitarian organisation",
  "Insurer",
  "Manufacturer",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Public demonstration only — no data is transmitted.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-mint/30 bg-mint/8 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/20">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M5 13l4 4 10-11"
              stroke="#075E70"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-4 font-sora text-xl font-semibold text-ink">
          Request received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Thank you. This is a proof-of-concept demonstration, so no information
          was transmitted. In a live deployment, our team would follow up to
          arrange a pilot conversation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          required
        />
        <Field
          label="Business email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="Role" name="role" autoComplete="organization-title" />
        <div className="sm:col-span-2">
          <Label htmlFor="org">Type of organisation</Label>
          <select
            id="org"
            name="org"
            defaultValue=""
            className="mt-1.5 w-full rounded-xl border border-navy-900/12 bg-softwhite px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          >
            <option value="" disabled>
              Select an option
            </option>
            {orgTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your cold-chain operation and what you'd like to verify."
            className="mt-1.5 w-full resize-none rounded-xl border border-navy-900/12 bg-softwhite px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Request a pilot
      </button>
      <p className="mt-3 text-xs text-ink/45">
        Proof-of-concept demonstration. Submissions are not transmitted or
        stored.
      </p>
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold uppercase tracking-wide text-ink/55"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-alert"> *</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-navy-900/12 bg-softwhite px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-cyan focus:ring-2 focus:ring-cyan/20"
      />
    </div>
  );
}
