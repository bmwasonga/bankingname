import { ActionForm } from "@/components/action-form";
import { bills, formatDate, formatMoney } from "@/lib/account";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">Payments</h1>
        <p className="mt-1 text-sm text-cbd-muted">
          Pay registered billers from your USD current account.
        </p>

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
                    {bill.category} · Due {formatDate(bill.due)}
                  </p>
                </div>
                <p className="font-semibold tabular-nums text-cbd-ink">
                  AED {bill.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h2 className="text-lg font-bold text-cbd-ink">Pay a bill</h2>
        <div className="mt-5">
          <ActionForm
            submitLabel="Pay now"
            success="Payment accepted. The biller will be credited within 1 business day."
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Biller
              </span>
              <select className={field} name="biller">
                {bills.map((bill) => (
                  <option key={bill.payee}>{bill.payee}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Amount (AED)
              </span>
              <input
                className={field}
                defaultValue={bills[0].amount.toFixed(2)}
                name="amount"
              />
            </label>
            <p className="text-xs text-cbd-muted">
              Debited from USD current after FX at CBD treasury rate. Approx.{" "}
              {formatMoney(bills[0].amount / 3.6725)}.
            </p>
          </ActionForm>
        </div>
      </section>
    </div>
  );
}
