"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardTabs = [
  { href: "/dashboard", label: "Accounts" },
  { href: "/dashboard/transfers", label: "Transfers" },
  { href: "/dashboard/payments", label: "Payments" },
  { href: "/dashboard/cards", label: "Cards" },
  { href: "/dashboard/statements", label: "Statements" },
  { href: "/dashboard/settings", label: "Settings" },
] as const;

export function DashboardNav() {
  const pathname = usePathname();

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
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
