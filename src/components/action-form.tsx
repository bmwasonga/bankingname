"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type ActionFormProps = {
  children: ReactNode;
  success: string;
  submitLabel: string;
};

export function ActionForm({ children, success, submitLabel }: ActionFormProps) {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
        {success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
      <button
        type="submit"
        className="w-full rounded-xl bg-cbd-lime px-4 py-3 text-sm font-bold text-cbd-ink hover:brightness-95 sm:w-auto sm:px-8"
      >
        {submitLabel}
      </button>
    </form>
  );
}
