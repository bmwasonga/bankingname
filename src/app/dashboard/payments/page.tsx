"use client";

import { ActionForm } from "@/components/action-form";
import { useI18n } from "@/lib/i18n";
import { bills, formatDate, formatMoney } from "@/lib/account";
import type { MessageKey } from "@/lib/messages";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

const categoryKeys: Record<string, MessageKey> = {
  Utilities: "cat.Utilities",
  Telecom: "cat.Telecom",
  Transport: "cat.Transport",
  Government: "cat.Government",
};

export default function PaymentsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          {t("payments.title")}
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">{t("payments.sub")}</p>

        <div className="mt-6 overflow-hidden rounded-xl border border-[#eef2f7]">
          <ul className="divide-y divide-[#eef2f7]">
            {bills.map((bill) => (
              <li
                key={bill.payee}
                className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-cbd-ink">{bill.payee}</p>
                  <p className="text-xs text-cbd-muted">
                    {t("payments.due", {
                      category: t(categoryKeys[bill.category]),
                      date: formatDate(bill.due, locale),
                    })}
                  </p>
                </div>
                <p className="font-semibold tabular-nums text-cbd-ink">
                  AED{" "}
                  {bill.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h2 className="text-lg font-bold text-cbd-ink">{t("payments.payBill")}</h2>
        <div className="mt-5">
          <ActionForm
            submitLabel={t("payments.submit")}
            success={t("payments.success")}
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("payments.biller")}
              </span>
              <select className={field} name="biller">
                {bills.map((bill) => (
                  <option key={bill.payee}>{bill.payee}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("payments.amountAed")}
              </span>
              <input
                className={field}
                defaultValue={bills[0].amount.toFixed(2)}
                name="amount"
              />
            </label>
            <p className="text-xs text-cbd-muted">
              {t("payments.fx", {
                amount: formatMoney(bills[0].amount / 3.6725),
              })}
            </p>
          </ActionForm>
        </div>
      </section>
    </div>
  );
}
