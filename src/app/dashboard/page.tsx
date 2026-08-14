import { AppHeader } from "@/components/app-header";
import {
  account,
  formatDate,
  formatDateTime,
  formatMoney,
  transactions,
} from "@/lib/account";

const nav = [
  "Accounts",
  "Transfers",
  "Payments",
  "Cards",
  "Statements",
  "Settings",
];

export default function DashboardPage() {
  return (
    <main className="min-h-full flex-1 bg-cbd-bg">
      <AppHeader mode="dashboard" holderName={account.holder} />

      <header className="border-b border-[#d8e0ec] bg-white">
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-3">
          {nav.map((item, i) => (
            <span
              key={item}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium ${
                i === 0
                  ? "bg-cbd-blue text-white"
                  : "text-cbd-muted hover:bg-[#eef2f7]"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-cbd-muted">
              Account details
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-cbd-muted">Account name</dt>
                <dd className="font-semibold text-cbd-ink">{account.holder}</dd>
              </div>
              <div>
                <dt className="text-cbd-muted">Product</dt>
                <dd className="font-medium text-cbd-ink">{account.product}</dd>
              </div>
              <div>
                <dt className="text-cbd-muted">Account number</dt>
                <dd className="font-mono text-cbd-ink">{account.accountNumber}</dd>
              </div>
              <div>
                <dt className="text-cbd-muted">IBAN</dt>
                <dd className="font-mono text-xs leading-relaxed text-cbd-ink">
                  {account.iban}
                </dd>
              </div>
              <div>
                <dt className="text-cbd-muted">SWIFT / BIC</dt>
                <dd className="font-mono text-cbd-ink">{account.swift}</dd>
              </div>
              <div>
                <dt className="text-cbd-muted">Branch</dt>
                <dd className="text-cbd-ink">{account.branch}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-[#eef2f7] pt-3">
                <dt className="text-cbd-muted">Status</dt>
                <dd className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  {account.status}
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-cbd-muted">
              Quick actions
            </h2>
            <div className="grid gap-2">
              {["Transfer", "Pay bill", "Download statement", "Manage cards"].map(
                (action) => (
                  <button
                    key={action}
                    type="button"
                    className="rounded-xl border border-[#d8e0ec] px-3 py-2.5 text-left text-sm font-medium text-cbd-ink transition hover:border-cbd-blue hover:bg-[#f4f7fb]"
                  >
                    {action}
                  </button>
                ),
              )}
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal p-6 text-white shadow-lg shadow-cbd-blue/20 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white/80">
                  Available balance
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                  {formatMoney(account.availableBalance, account.currency)}
                </p>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3 text-sm backdrop-blur">
                <p className="text-white/70">Ledger balance</p>
                <p className="font-semibold tabular-nums">
                  {formatMoney(account.ledgerBalance, account.currency)}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <p>
                <span className="block text-white/60">Account</span>
                {account.accountMasked}
              </p>
              <p>
                <span className="block text-white/60">Currency</span>
                {account.currency}
              </p>
              <p>
                <span className="block text-white/60">Opened</span>
                {formatDate(account.openedOn)}
              </p>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Last login {formatDateTime(account.lastLogin)} GST
            </p>
          </section>

          <section className="overflow-hidden rounded-2xl border border-[#d8e0ec] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d8e0ec] px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-cbd-ink">
                  Account activity
                </h2>
                <p className="text-sm text-cbd-muted">
                  Posted transactions · {transactions.length} records
                </p>
              </div>
              <span className="rounded-full bg-[#eef2f7] px-3 py-1 text-xs font-semibold text-cbd-muted">
                USD statement view
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-[#f8fafc] text-xs uppercase tracking-wide text-cbd-muted">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Date</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                    <th className="px-4 py-3 font-semibold">Reference</th>
                    <th className="px-4 py-3 font-semibold">Channel</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-right font-semibold">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eef2f7]">
                  {transactions.map((tx) => {
                    const credit = tx.type === "credit";
                    return (
                      <tr key={tx.id} className="hover:bg-[#f8fafc]">
                        <td className="whitespace-nowrap px-6 py-4 text-cbd-muted">
                          {formatDate(tx.date)}
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
                          {tx.channel}
                        </td>
                        <td
                          className={`whitespace-nowrap px-4 py-4 text-right font-semibold tabular-nums ${
                            credit ? "text-emerald-600" : "text-cbd-ink"
                          }`}
                        >
                          {credit ? "+" : "−"}
                          {formatMoney(tx.amount, account.currency)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right font-medium tabular-nums text-cbd-ink">
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
    </main>
  );
}
