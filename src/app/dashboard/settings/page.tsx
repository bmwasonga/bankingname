import { ActionForm } from "@/components/action-form";
import { account } from "@/lib/account";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          Profile & settings
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">
          Contact details used for OTP and statements.
        </p>

        <div className="mt-6">
          <ActionForm
            submitLabel="Save changes"
            success="Settings updated. Changes will apply on your next login."
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Account holder
              </span>
              <input className={field} defaultValue={account.holder} name="name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Customer ID
              </span>
              <input
                className={`${field} bg-[#eef2f7]`}
                defaultValue={account.customerId}
                name="customerId"
                readOnly
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Mobile
              </span>
              <input
                className={field}
                defaultValue="+971 50 784 2910"
                name="mobile"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Email
              </span>
              <input
                className={field}
                defaultValue="prince.hamad@private.cbd.ae"
                name="email"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Language
              </span>
              <select className={field} defaultValue="en" name="language">
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-cbd-ink">
              <input defaultChecked type="checkbox" />
              SMS and email alerts for transfers over USD 10,000
            </label>
          </ActionForm>
        </div>
      </section>
    </div>
  );
}
