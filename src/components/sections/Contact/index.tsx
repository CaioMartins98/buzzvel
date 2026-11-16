"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

function MailIcon() {
  return (
    <Image
      src="/images/emailIcon.svg"
      alt=""
      width={22}
      height={22}
      unoptimized
      className="h-[22px] w-[22px]"
    />
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 5.5V10l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("full-name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const question = String(formData.get("question") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!fullName) nextErrors["full-name"] = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!question) nextErrors.question = "Please tell us how we can help.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white">
      <Container className="grid gap-12 py-[60px] lg:grid-cols-[480px_540px] lg:justify-between lg:py-[100px]">
        <div>
          <Eyebrow>CONTACT</Eyebrow>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[36px] tracking-tight text-ink lg:text-[48px] lg:leading-[56px]">
            Get in touch
          </h2>
          <p className="mt-4 text-base leading-[26px] text-muted-2 lg:text-lg lg:leading-[28px]">
            Have a question? We&rsquo;re here to help. Whether you&rsquo;re
            looking for the right course, learning with your team or interested
            in teaching with Luma, we&rsquo;d love to hear from you.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="flex items-center gap-4 rounded-xl bg-cream p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky text-brand">
                <MailIcon />
              </span>
              <div>
                <p className="text-sm font-semibold leading-6 text-ink">Email</p>
                <a
                  href="mailto:contact@luma.com"
                  className="text-sm leading-6 transition-colors text-brand"
                >
                  contact@luma.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-cream p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky text-brand">
                <ClockIcon />
              </span>
              <div>
                <p className="text-sm font-semibold leading-6 text-ink">
                  Response Time
                </p>
                <p className="text-sm leading-6 text-muted-2">
                  Up to 24 hours on business days
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 sm:p-10">
          <h3 className="font-heading text-xl font-bold leading-8 text-ink">
            Contact us
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-2">
            Fill out the fields and we will get in touch.
          </p>

          {submitted ? (
            <p
              role="status"
              className="mt-8 rounded-xl bg-sky px-5 py-4 text-sm font-medium text-ink"
            >
              Thanks! Your message has been sent — we&rsquo;ll be in touch
              shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm leading-6 text-ink"
                >
                  Full name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors["full-name"])}
                  aria-describedby={errors["full-name"] ? "full-name-error" : undefined}
                  className={`mt-2 w-full rounded-lg border bg-cream px-4 py-3 text-sm leading-6 text-ink placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${errors["full-name"] ? "border-coral" : "border-line"}`}
                />
                {errors["full-name"] && (
                  <p id="full-name-error" className="mt-1 text-xs text-coral">
                    {errors["full-name"]}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-2 w-full rounded-lg border bg-cream px-4 py-3 text-sm leading-6 text-ink placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${errors.email ? "border-coral" : "border-line"}`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-coral">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm leading-6 text-ink"
                >
                  Your question
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  required
                  aria-invalid={Boolean(errors.question)}
                  aria-describedby={errors.question ? "question-error" : undefined}
                  className={`mt-2 w-full resize-none rounded-lg border bg-cream px-4 py-3 text-sm leading-6 text-ink placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${errors.question ? "border-coral" : "border-line"}`}
                />
                {errors.question && (
                  <p id="question-error" className="mt-1 text-xs text-coral">
                    {errors.question}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-7 py-3.5 text-sm leading-6 text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand w-auto"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
