"use client";

import { CbdLogo } from "@/components/cbd-logo";
import { LanguageSwitch } from "@/components/language-switch";
import { LogoutButton } from "@/components/logout-button";
import { useI18n } from "@/lib/i18n";

type AppHeaderProps = {
  mode: "login" | "dashboard";
  holderName?: string;
};

export function AppHeader({ mode }: AppHeaderProps) {
  const { t } = useI18n();

  return (
    <>
      <div className="bg-cbd-blue-dark text-xs text-white/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center sm:justify-between sm:px-6 sm:text-start">
          {mode === "login" ? (
            <>
              <p>Commercial Bank of Dubai · {t("brand.online")}</p>
              <p className="font-medium text-white">
                {t("header.secureConnection")}
              </p>
            </>
          ) : (
            <>
              <p>{t("header.secureSession")}</p>
              <p className="font-medium text-white">{t("holder.name")}</p>
            </>
          )}
        </div>
      </div>

      <header className="border-b border-[#d8e0ec] bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <CbdLogo variant="compact" priority />
            <div className="hidden border-s border-[#d8e0ec] ps-4 sm:block">
              <p className="text-xs font-medium text-cbd-muted">
                {t("brand.personal")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <LanguageSwitch />
            {mode === "dashboard" ? (
              <LogoutButton />
            ) : (
              <span className="rounded-lg bg-cbd-lime px-3 py-2 text-sm font-bold text-cbd-ink">
                {t("header.login")}
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
