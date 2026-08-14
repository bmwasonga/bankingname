"use client";

import { ActionForm } from "@/components/action-form";
import { useI18n } from "@/lib/i18n";
import { account } from "@/lib/account";
import type { Locale } from "@/lib/messages";

const field =
  "w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-sm text-cbd-ink outline-none ring-cbd-blue focus:ring-2";

export default function SettingsPage() {
  const { t, locale, setLocale } = useI18n();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="rounded-2xl border border-[#d8e0ec] bg-white p-5 sm:p-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          {t("settings.title")}
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">{t("settings.sub")}</p>

        <div className="mt-6">
          <ActionForm
            submitLabel={t("settings.save")}
            success={t("settings.success")}
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("settings.holder")}
              </span>
              <input
                className={field}
                defaultValue={account.holder}
                name="name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("settings.customerId")}
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
                {t("settings.mobile")}
              </span>
              <input
                className={field}
                defaultValue="+971 50 784 2910"
                name="mobile"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("settings.email")}
              </span>
              <input
                className={field}
                defaultValue="prince.hamad@private.cbd.ae"
                name="email"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                {t("settings.language")}
              </span>
              <select
                className={field}
                name="language"
                value={locale}
                onChange={(event) => setLocale(event.target.value as Locale)}
              >
                <option value="en">{t("settings.english")}</option>
                <option value="ar">{t("settings.arabic")}</option>
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-cbd-ink">
              <input defaultChecked type="checkbox" />
              {t("settings.alerts")}
            </label>
          </ActionForm>
        </div>
      </section>
    </div>
  );
}
