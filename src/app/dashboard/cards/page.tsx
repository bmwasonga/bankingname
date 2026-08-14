"use client";

import { useI18n } from "@/lib/i18n";
import { cards, formatMoney } from "@/lib/account";

export default function CardsPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article
          key={card.last4}
          className="overflow-hidden rounded-2xl border border-[#d8e0ec] bg-white"
        >
          <div className="bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal p-6 text-white">
            <p className="text-xs uppercase tracking-wide text-white/70">
              {card.type === "Credit" ? t("cards.credit") : t("cards.debit")}
            </p>
            <p className="mt-6 font-mono text-lg tracking-[0.2em]">
              •••• •••• •••• {card.last4}
            </p>
            <div className="mt-6 flex items-end justify-between text-sm">
              <div>
                <p className="text-white/60">{t("cards.holder")}</p>
                <p className="font-medium">{t("holder.name")}</p>
              </div>
              <div className="text-end">
                <p className="text-white/60">{t("cards.valid")}</p>
                <p className="font-medium">{card.expiry}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5 text-sm">
            <h2 className="font-bold text-cbd-ink">
              {card.type === "Credit" ? t("cards.infinite") : t("cards.mastercard")}
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-cbd-muted">{t("cards.status")}</span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {t("accounts.statusActive")}
              </span>
            </div>
            {card.limit ? (
              <div className="flex items-center justify-between">
                <span className="text-cbd-muted">{t("cards.limit")}</span>
                <span className="tabular-nums text-cbd-ink">
                  {formatMoney(card.limit)}
                </span>
              </div>
            ) : null}
            <div className="flex items-center justify-between">
              <span className="text-cbd-muted">{t("cards.available")}</span>
              <span className="font-semibold tabular-nums text-cbd-ink">
                {formatMoney(card.available)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                className="rounded-xl border border-[#d8e0ec] px-3 py-2 font-medium text-cbd-ink"
              >
                {t("cards.freeze")}
              </button>
              <button
                type="button"
                className="rounded-xl border border-[#d8e0ec] px-3 py-2 font-medium text-cbd-ink"
              >
                {t("cards.pin")}
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
