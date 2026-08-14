"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { peekSession } from "@/lib/session";

export function SessionGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    function check() {
      const status = peekSession();
      if (status !== "ok") {
        setAllowed(false);
        router.replace(status === "expired" ? "/?reason=expired" : "/");
        return;
      }
      setAllowed(true);
    }

    check();
    const timer = window.setInterval(check, 15_000);
    return () => window.clearInterval(timer);
  }, [router]);

  if (!allowed) {
    return (
      <div className="flex min-h-full flex-1 items-center justify-center bg-cbd-bg text-sm text-cbd-muted">
        …
      </div>
    );
  }

  return <>{children}</>;
}
