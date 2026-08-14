"use client";

import { ActionForm } from "@/components/action-form";
import { useI18n } from "@/lib/i18n";
import { account, beneficiaries, formatMoney } from "@/lib/account";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

export default function TransfersPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1fr_280px]">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          {t("transfers.title")}
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">{t("transfers.sub")}</p>

        <div className="mt-6">
          <ActionForm
            submitLabel={t("transfers.submit")}
            success={t("transfers.success")}
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("transfers.from")}
              </span>
              <select className={field} defaultValue="usd" name="from">
                <option value="usd">
                  {t("transfers.fromUsd", {
                    amount: formatMoney(account.availableBalance),
                  })}
                </option>
                <option value="aed">{t("transfers.fromAed")}</option>
                <option value="savings">{t("transfers.fromSavings")}</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("transfers.to")}
              </span>
              <select
                className={field}
                defaultValue={beneficiaries[0].iban}
                name="to"
              >
                {beneficiaries.map((item) => (
                  <option key={item.iban} value={item.iban}>
                    {item.name} — {item.bank}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("transfers.amount")}
              </span>
              <input
                className={field}
                defaultValue="25000.00"
                inputMode="decimal"
                name="amount"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("transfers.details")}
              </span>
              <input
                className={field}
                defaultValue="Private client settlement"
                name="details"
              />
            </label>
          </ActionForm>
        </div>
      </section>

      <aside className="space-y-4">
        <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-cbd-muted">
            {t("transfers.beneficiaries")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {beneficiaries.map((item) => (
              <li key={item.iban}>
                <p className="font-medium text-cbd-ink">{item.name}</p>
                <p className="text-cbd-muted">{item.bank}</p>
                <p className="break-all font-mono text-xs text-cbd-muted">
                  {item.iban}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
