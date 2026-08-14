"use client";

import Link from "next/link";
import { BalanceFigure } from "@/components/balance-figure";
import { useI18n } from "@/lib/i18n";
import {
  account,
  formatDate,
  formatDateTime,
  formatMoney,
  relatedAccounts,
  transactions,
} from "@/lib/account";
import type { MessageKey } from "@/lib/messages";

const productKeys: Record<string, MessageKey> = {
  usd: "product.usdCurrent",
  aed: "product.aedCurrent",
  savings: "product.usdSavings",
};

const channelKeys: Record<string, MessageKey> = {
  SWIFT: "channel.SWIFT",
  "CBD App": "channel.CBD App",
  Branch: "channel.Branch",
  Card: "channel.Card",
  "Standing Order": "channel.Standing Order",
  ATM: "channel.ATM",
};

export default function AccountsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="space-y-4">
        <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-cbd-muted">
            {t("accounts.details")}
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-cbd-muted">{t("accounts.name")}</dt>
              <dd className="font-semibold text-cbd-ink">{t("holder.name")}</dd>
            </div>
            <div>
              <dt className="text-cbd-muted">{t("accounts.product")}</dt>
              <dd className="font-medium text-cbd-ink">
                {t("product.usdCurrent")}
              </dd>
            </div>
            <div>
              <dt className="text-cbd-muted">{t("accounts.number")}</dt>
              <dd className="break-all font-mono text-cbd-ink">
                {account.accountNumber}
              </dd>
            </div>
            <div>
              <dt className="text-cbd-muted">{t("accounts.iban")}</dt>
              <dd className="break-all font-mono text-xs leading-relaxed text-cbd-ink">
                {account.iban}
              </dd>
            </div>
            <div>
              <dt className="text-cbd-muted">{t("accounts.swift")}</dt>
              <dd className="font-mono text-cbd-ink">{account.swift}</dd>
            </div>
            <div>
              <dt className="text-cbd-muted">{t("accounts.branch")}</dt>
              <dd className="text-cbd-ink">{t("product.branch")}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-[#eef2f7] pt-3">
              <dt className="text-cbd-muted">{t("accounts.status")}</dt>
              <dd className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {t("accounts.statusActive")}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-cbd-muted">
            {t("accounts.quick")}
          </h2>
          <div className="grid gap-2">
            {[
              { href: "/dashboard/transfers", label: t("accounts.transfer") },
              { href: "/dashboard/payments", label: t("accounts.payBill") },
              { href: "/dashboard/statements", label: t("accounts.download") },
              { href: "/dashboard/cards", label: t("accounts.manageCards") },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="rounded-xl border border-[#d8e0ec] px-3 py-2.5 text-start text-sm font-medium text-cbd-ink transition hover:border-cbd-blue hover:bg-[#f4f7fb]"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </section>
      </aside>

      <div className="min-w-0 space-y-6">
        <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal p-5 text-white shadow-lg shadow-cbd-blue/20 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-white/80">
                {t("accounts.available")}
              </p>
              <div className="mt-2">
                <BalanceFigure
                  amount={account.availableBalance}
                  currency={account.currency}
                />
              </div>
            </div>
            <div className="rounded-xl bg-white/10 px-4 py-3 text-sm backdrop-blur">
              <p className="text-white/70">{t("accounts.ledger")}</p>
              <p className="font-semibold tabular-nums">
                {formatMoney(account.ledgerBalance, account.currency)}
              </p>
              <p className="mt-1 text-xs text-white/60">
                {t("accounts.hold", {
                  amount: formatMoney(account.holdAmount, account.currency),
                })}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
            <p>
              <span className="block text-white/60">{t("accounts.account")}</span>
              {account.accountMasked}
            </p>
            <p>
              <span className="block text-white/60">{t("accounts.currency")}</span>
              {account.currency}
            </p>
            <p>
              <span className="block text-white/60">{t("accounts.opened")}</span>
              {formatDate(account.openedOn, locale)}
            </p>
          </div>
          <p className="mt-4 text-xs text-white/60">
            {t("accounts.lastLogin", {
              time: formatDateTime(account.lastLogin, locale),
            })}
          </p>
        </section>

        <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
          <h2 className="text-lg font-bold text-cbd-ink">{t("accounts.yours")}</h2>
          <ul className="mt-4 divide-y divide-[#eef2f7]">
            {relatedAccounts.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-cbd-ink">
                    {t(productKeys[item.id])}
                  </p>
                  <p className="text-xs text-cbd-muted">
                    {item.masked}
                    {item.primary ? ` · ${t("accounts.primary")}` : ""}
                  </p>
                </div>
                <p className="font-semibold tabular-nums text-cbd-ink">
                  {formatMoney(item.available, item.currency)}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#d8e0ec] bg-white">
          <div className="flex flex-col gap-2 border-b border-[#d8e0ec] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-lg font-bold text-cbd-ink">
                {t("accounts.activity")}
              </h2>
              <p className="text-sm text-cbd-muted">
                {t("accounts.posted", { count: transactions.length })}
              </p>
            </div>
            <span className="w-fit rounded-full bg-[#eef2f7] px-3 py-1 text-xs font-semibold text-cbd-muted">
              {t("accounts.usdView")}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-start text-sm">
              <thead className="bg-[#f8fafc] text-xs uppercase tracking-wide text-cbd-muted">
                <tr>
                  <th className="px-6 py-3 font-semibold">{t("accounts.date")}</th>
                  <th className="px-4 py-3 font-semibold">
                    {t("accounts.description")}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {t("accounts.reference")}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {t("accounts.channel")}
                  </th>
                  <th className="px-4 py-3 text-end font-semibold">
                    {t("accounts.amount")}
                  </th>
                  <th className="px-6 py-3 text-end font-semibold">
                    {t("accounts.balance")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eef2f7]">
                {transactions.map((tx) => {
                  const credit = tx.type === "credit";
                  return (
                    <tr key={tx.id} className="hover:bg-[#f8fafc]">
                      <td className="whitespace-nowrap px-6 py-4 text-cbd-muted">
                        {formatDate(tx.date, locale)}
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-cbd-ink">
                          {tx.description}
                        </p>
                        <p className="text-xs text-cbd-muted">
                          {tx.counterparty}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-mono text-xs text-cbd-muted">
                        {tx.reference}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-cbd-muted">
                        {t(channelKeys[tx.channel])}
                      </td>
                      <td
                        className={`whitespace-nowrap px-4 py-4 text-end font-semibold tabular-nums ${
                          credit ? "text-emerald-600" : "text-cbd-ink"
                        }`}
                      >
                        {credit ? "+" : "−"}
                        {formatMoney(tx.amount, account.currency)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end font-medium tabular-nums text-cbd-ink">
                        {formatMoney(tx.balanceAfter, account.currency)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
