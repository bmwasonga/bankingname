import Link from "next/link";
import { CbdLogo } from "@/components/cbd-logo";

type AppHeaderProps = {
  mode: "login" | "dashboard";
  holderName?: string;
};

export function AppHeader({ mode, holderName }: AppHeaderProps) {
  return (
    <>
      <div className="bg-cbd-blue-dark text-xs text-white/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2">
          {mode === "login" ? (
            <>
              <p>Commercial Bank of Dubai · Online Banking</p>
              <p className="font-medium text-white">Secure connection</p>
            </>
          ) : (
            <>
              <p>Secure session · Personal Online Banking</p>
              <p className="font-medium text-white">{holderName}</p>
            </>
          )}
        </div>
      </div>

      <header className="border-b border-[#d8e0ec] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <CbdLogo variant="compact" priority />
            <div className="hidden border-l border-[#d8e0ec] pl-4 sm:block">
              <p className="text-xs font-medium text-cbd-muted">
                Personal Online Banking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-sm text-cbd-muted">
              <span className="font-semibold text-cbd-ink">EN</span>
              <span className="text-[#d8e0ec]">|</span>
              <span>AR</span>
            </div>
            {mode === "dashboard" ? (
              <Link
                href="/"
                className="rounded-lg bg-cbd-blue px-3 py-2 text-sm font-semibold text-white hover:bg-cbd-blue-dark"
              >
                Logout
              </Link>
            ) : (
              <span className="rounded-lg bg-cbd-lime px-3 py-2 text-sm font-bold text-cbd-ink">
                Login
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
