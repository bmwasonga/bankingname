import { formatDate, statements } from "@/lib/account";

export default function StatementsPage() {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-[#d8e0ec] bg-white">
      <div className="border-b border-[#d8e0ec] px-5 py-5 sm:px-8">
        <h1 className="text-xl font-bold text-cbd-ink sm:text-2xl">
          Statements
        </h1>
        <p className="mt-1 text-sm text-cbd-muted">
          Monthly e-statements for USD Current ••••8901.
        </p>
      </div>
      <ul className="divide-y divide-[#eef2f7]">
        {statements.map((item) => (
          <li
            key={item.ref}
            className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
            <div>
              <p className="font-medium text-cbd-ink">{item.period}</p>
              <p className="text-xs text-cbd-muted">
                Issued {formatDate(item.issued)} · {item.ref}
              </p>
            </div>
            <button
              type="button"
              className="w-fit rounded-lg bg-cbd-blue px-3 py-2 text-sm font-semibold text-white hover:bg-cbd-blue-dark"
            >
              Download PDF
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
