import { AppHeader } from "@/components/app-header";
import { DashboardNav } from "@/components/dashboard-nav";
import { SessionGate } from "@/components/session-gate";
import { account } from "@/lib/account";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <SessionGate>
      <main className="flex min-h-full flex-1 flex-col bg-cbd-bg">
        <AppHeader mode="dashboard" holderName={account.holder} />
        <DashboardNav />
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
          {children}
        </div>
      </main>
    </SessionGate>
  );
}
