"use client";

import { useRouter } from "next/navigation";
import { clearSession } from "@/lib/session";
import { useI18n } from "@/lib/i18n";

export function LogoutButton() {
  const router = useRouter();
  const { t } = useI18n();

  return (
    <button
      type="button"
      onClick={() => {
        clearSession();
        router.replace("/");
      }}
      className="rounded-lg bg-cbd-blue px-3 py-2 text-sm font-semibold text-white hover:bg-cbd-blue-dark"
    >
      {t("header.logout")}
    </button>
  );
}
