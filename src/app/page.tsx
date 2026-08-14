"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { AppHeader } from "@/components/app-header";
import { CbdLogo } from "@/components/cbd-logo";
import { useI18n } from "@/lib/i18n";
import {
  createSession,
  credentialsMatch,
  peekSession,
} from "@/lib/session";

export default function LoginPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [error, setError] = useState<"invalid" | "expired" | null>(null);

  useEffect(() => {
    if (peekSession() === "ok") {
      router.replace("/dashboard");
      return;
    }
    const reason = new URLSearchParams(window.location.search).get("reason");
    if (reason === "expired") {
      setError("expired");
    }
  }, [router]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = String(data.get("username") ?? "");
    const password = String(data.get("password") ?? "");
    const remember = data.get("remember") === "on";

    if (!credentialsMatch(username, password)) {
      setError("invalid");
      return;
    }

    createSession(username, remember);
    router.replace("/dashboard");
  }

  return (
    <main className="flex min-h-full flex-1 flex-col bg-cbd-bg">
      <AppHeader mode="login" />

      <section className="relative flex flex-1 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal"
        />
        <div
          aria-hidden
          className="absolute start-[-25%] top-0 h-full w-3/5 -skew-x-12 bg-gradient-to-b from-[#0d7c8f] via-cbd-teal to-[#0a5f6e] opacity-90 rtl:skew-x-12"
        />
        <div
          aria-hidden
          className="absolute end-0 bottom-0 h-64 w-64 rounded-full bg-cbd-lime/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-10 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:text-start">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cbd-lime">
              {t("login.kicker")}
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              {t("login.headline")}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-white/80 md:text-lg lg:mx-0">
              {t("login.sub")}
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-2 text-sm text-white/75 lg:mx-0">
              <li>· {t("login.bullet1")}</li>
              <li>· {t("login.bullet2")}</li>
              <li>· {t("login.bullet3")}</li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full max-w-md rounded-2xl border border-white/20 bg-white p-6 text-start shadow-2xl shadow-black/25 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between border-b border-[#eef2f7] pb-5">
              <div>
                <h2 className="text-xl font-bold text-cbd-ink">
                  {t("login.title")}
                </h2>
                <p className="text-sm text-cbd-muted">{t("login.enterDetails")}</p>
              </div>
              <CbdLogo variant="compact" />
            </div>

            {error ? (
              <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error === "expired" ? t("login.expired") : t("login.error")}
              </p>
            ) : null}

            <label className="mb-4 block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("login.username")}
              </span>
              <input
                name="username"
                defaultValue="CBD78429103"
                autoComplete="username"
                className="w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-cbd-ink outline-none ring-cbd-blue focus:ring-2"
              />
            </label>

            <label className="mb-2 block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("login.password")}
              </span>
              <input
                name="password"
                type="password"
                defaultValue="Hamad#4821"
                autoComplete="current-password"
                className="w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-cbd-ink outline-none ring-cbd-blue focus:ring-2"
              />
            </label>

            <div className="mb-6 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-cbd-muted">
                <input
                  name="remember"
                  type="checkbox"
                  className="rounded border-[#d8e0ec]"
                />
                {t("login.remember")}
              </label>
              <span className="font-semibold text-cbd-blue">
                {t("login.forgot")}
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cbd-lime px-4 py-3.5 text-base font-bold text-cbd-ink transition hover:brightness-95"
            >
              {t("login.submit")}
            </button>

            <div className="mt-5 rounded-xl bg-[#f4f7fb] px-4 py-3 text-xs leading-relaxed text-cbd-muted">
              {t("login.security")}
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#d8e0ec] bg-white px-6 py-4 text-center text-xs text-cbd-muted">
        {t("login.footer", { year: new Date().getFullYear() })}
      </footer>
    </main>
  );
}
