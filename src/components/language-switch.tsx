"use client";

import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/messages";

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-2 text-sm text-cbd-muted">
      {(["en", "ar"] as const).map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 ? <span className="text-[#d8e0ec]">|</span> : null}
          <button
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={
              locale === code
                ? "font-semibold text-cbd-ink"
                : "hover:text-cbd-ink"
            }
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
