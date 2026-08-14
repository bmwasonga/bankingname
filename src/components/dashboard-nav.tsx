"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import type { MessageKey } from "@/lib/messages";

export const dashboardTabs: { href: string; labelKey: MessageKey }[] = [
  { href: "/dashboard", labelKey: "nav.accounts" },
  { href: "/dashboard/transfers", labelKey: "nav.transfers" },
  { href: "/dashboard/payments", labelKey: "nav.payments" },
  { href: "/dashboard/cards", labelKey: "nav.cards" },
  { href: "/dashboard/statements", labelKey: "nav.statements" },
  { href: "/dashboard/settings", labelKey: "nav.settings" },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <header className="border-b border-[#d8e0ec] bg-white">
      <nav className="mx-auto flex max-w-6xl justify-start gap-1 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6 lg:justify-start">
        {dashboardTabs.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-cbd-blue text-white"
                  : "text-cbd-muted hover:bg-[#eef2f7]"
              }`}
            >
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
