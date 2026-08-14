import { AppHeader } from "@/components/app-header";
import { CbdLogo } from "@/components/cbd-logo";

export default function LoginPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col bg-cbd-bg">
      <AppHeader mode="login" />

      <section className="relative flex flex-1 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal"
        />
        <div
          aria-hidden
          className="absolute -left-1/4 top-0 h-full w-3/5 skew-x-[-12deg] bg-gradient-to-b from-[#0d7c8f] via-cbd-teal to-[#0a5f6e] opacity-90"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cbd-lime/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cbd-lime">
              CBD Online Banking
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Banking made simple, secure, and personal
            </h1>
            <p className="mt-4 max-w-md text-base text-white/80 md:text-lg">
              Sign in to manage your accounts, transfers, cards, and statements
              with Commercial Bank of Dubai.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-white/75">
              <li>· 24/7 access to your USD and AED accounts</li>
              <li>· Instant transfers and bill payments</li>
              <li>· Protected with multi-factor authentication</li>
            </ul>
          </div>

          <form
            action="/dashboard"
            className="w-full max-w-md rounded-2xl border border-white/20 bg-white p-6 shadow-2xl shadow-black/25 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between border-b border-[#eef2f7] pb-5">
              <div>
                <h2 className="text-xl font-bold text-cbd-ink">Login</h2>
                <p className="text-sm text-cbd-muted">
                  Enter your online banking details
                </p>
              </div>
              <CbdLogo variant="compact" />
            </div>

            <label className="mb-4 block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Username / Customer ID
              </span>
              <input
                name="username"
                defaultValue="CBD78429103"
                autoComplete="username"
                className="w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-cbd-ink outline-none ring-cbd-blue focus:ring-2"
              />
            </label>

            <label className="mb-2 block">
              <span className="mb-1.5 block text-sm font-medium text-cbd-ink">
                Password
              </span>
              <input
                name="password"
                type="password"
                defaultValue="Hamad#4821"
                autoComplete="current-password"
                className="w-full rounded-xl border border-[#d8e0ec] bg-[#f4f7fb] px-4 py-3 text-cbd-ink outline-none ring-cbd-blue focus:ring-2"
              />
            </label>

            <div className="mb-6 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-cbd-muted">
                <input type="checkbox" className="rounded border-[#d8e0ec]" />
                Remember me
              </label>
              <span className="font-semibold text-cbd-blue">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cbd-lime px-4 py-3.5 text-base font-bold text-cbd-ink transition hover:brightness-95"
            >
              Login
            </button>

            <div className="mt-5 rounded-xl bg-[#f4f7fb] px-4 py-3 text-xs leading-relaxed text-cbd-muted">
              For your security, never share your password or OTP. Always access
              Online Banking via the official CBD website.
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#d8e0ec] bg-white px-6 py-4 text-center text-xs text-cbd-muted">
        © {new Date().getFullYear()} Commercial Bank of Dubai PSC · Licensed by
        the Central Bank of the UAE
      </footer>
    </main>
  );
}
