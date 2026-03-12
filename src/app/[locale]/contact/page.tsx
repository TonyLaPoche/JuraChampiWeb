"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Simuler l'envoi - à remplacer par une vraie API (Resend, SendGrid, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", Object.fromEntries(formData));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-emerald-700">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-emerald-900">
                {t("form.sectionTitle")}
              </h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                >
                  {status === "sending"
                    ? t("form.sending")
                    : status === "success"
                      ? t("form.success")
                      : status === "error"
                        ? t("form.error")
                        : t("form.submit")}
                </button>
              </form>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg sm:p-8">
              <h2 className="text-xl font-semibold text-emerald-900">
                {t("info.title")}
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-600">
                      {t("info.phone")}
                    </p>
                    <a
                      href="tel:+33384512345"
                      className="text-lg font-semibold text-emerald-900 hover:text-emerald-600"
                    >
                      +33 3 84 51 23 45
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-600">
                      {t("info.email")}
                    </p>
                    <a
                      href="mailto:contact@jurachampi.fr"
                      className="text-lg font-semibold text-emerald-900 hover:text-emerald-600"
                    >
                      contact@jurachampi.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-600">
                      {t("info.address")}
                    </p>
                    <p className="text-lg text-emerald-900">
                      {t("info.addressValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
