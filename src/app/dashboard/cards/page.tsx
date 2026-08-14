import { cards, formatMoney } from "@/lib/account";

export default function CardsPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article
          key={card.last4}
          className="overflow-hidden rounded-2xl border border-[#d8e0ec] bg-white"
        >
          <div className="bg-gradient-to-br from-cbd-blue-dark via-cbd-blue to-cbd-teal p-6 text-white">
            <p className="text-xs uppercase tracking-wide text-white/70">
              {card.type} card
            </p>
            <p className="mt-6 font-mono text-lg tracking-[0.2em]">
              •••• •••• •••• {card.last4}
            </p>
            <div className="mt-6 flex items-end justify-between text-sm">
              <div>
                <p className="text-white/60">Cardholder</p>
                <p className="font-medium">{card.holder}</p>
              </div>
              <div className="text-right">
                <p className="text-white/60">Valid thru</p>
                <p className="font-medium">{card.expiry}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5 text-sm">
            <h2 className="font-bold text-cbd-ink">{card.name}</h2>
            <div className="flex items-center justify-between">
              <span className="text-cbd-muted">Status</span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {card.status}
              </span>
            </div>
            {card.limit ? (
              <div className="flex items-center justify-between">
                <span className="text-cbd-muted">Credit limit</span>
                <span className="tabular-nums text-cbd-ink">
                  {formatMoney(card.limit)}
                </span>
              </div>
            ) : null}
            <div className="flex items-center justify-between">
              <span className="text-cbd-muted">Available</span>
              <span className="font-semibold tabular-nums text-cbd-ink">
                {formatMoney(card.available)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                className="rounded-xl border border-[#d8e0ec] px-3 py-2 font-medium text-cbd-ink"
              >
                Freeze
              </button>
              <button
                type="button"
                className="rounded-xl border border-[#d8e0ec] px-3 py-2 font-medium text-cbd-ink"
              >
                Change PIN
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
