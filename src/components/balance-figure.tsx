"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { formatMoney, formatMoneyParts } from "@/lib/account";

type BalanceFigureProps = {
  amount: number;
  currency?: string;
  size?: "hero" | "card";
};

export function BalanceFigure({
  amount,
  currency = "USD",
  size = "hero",
}: BalanceFigureProps) {
  const [hidden, setHidden] = useState(false);
  const { t } = useI18n();
  const parts = formatMoneyParts(amount, currency);
  const hero = size === "hero";

  return (
    <div className="flex flex-wrap items-end gap-3">
      {hidden ? (
        <p
          className={`font-bold tracking-widest text-white ${
            hero ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl"
          }`}
        >
          {currency} ••••••••
        </p>
      ) : (
        <p
          className={`flex flex-wrap items-baseline gap-x-1 font-bold tracking-tight text-white ${
            hero ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl"
          }`}
        >
          <span className={hero ? "text-lg font-semibold text-white/70 sm:text-xl" : "text-sm text-white/70"}>
            {currency}
          </span>
          <span className="tabular-nums">{parts.whole}</span>
          <span
            className={`tabular-nums font-semibold text-white/70 ${
              hero ? "text-xl sm:text-2xl" : "text-base"
            }`}
          >
            {parts.cents}
          </span>
        </p>
      )}
      <button
        type="button"
        onClick={() => setHidden((value) => !value)}
        className="mb-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 hover:bg-white/25"
      >
        {hidden ? t("balance.show") : t("balance.hide")}
      </button>
      <span className="sr-only">
        {hidden ? t("balance.hidden") : formatMoney(amount, currency)}
      </span>
    </div>
  );
}
