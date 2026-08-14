import { ActionForm } from "@/components/action-form";
import { account, beneficiaries, formatMoney } from "@/lib/account";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

export default function TransfersPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1fr_280px]">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          Transfer funds
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">
          Move money between your CBD accounts or to a saved beneficiary.
        </p>

        <div className="mt-6">
          <ActionForm
            submitLabel="Submit transfer"
            success="Transfer submitted for processing. It will appear in activity once posted."
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                From
              </span>
              <select className={field} defaultValue="usd" name="from">
                <option value="usd">
                  USD Current ••••8901 — {formatMoney(account.availableBalance)}
                </option>
                <option value="aed">AED Current ••••4412</option>
                <option value="savings">USD Savings ••••7730</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                To
              </span>
              <select className={field} defaultValue={beneficiaries[0].iban} name="to">
                {beneficiaries.map((item) => (
                  <option key={item.iban} value={item.iban}>
                    {item.name} — {item.bank}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Amount (USD)
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
                Payment details
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
            Saved beneficiaries
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
